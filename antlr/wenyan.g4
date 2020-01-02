grammar wenyan;
program                     : statement* ;
statement                   : declare_statement
                            | define_statement
                            | print_statement 
                            | for_statement
                            | function_statement
                            | if_statement
                            | return_statement
                            | math_statement
                            | assign_statement
                            | import_statement
                            | object_statement
                            | pick_up_statement
                            | reference_statement
                            | array_statement
                            | clean_statement
                            | BREAK
                            | comment;

reference_statement         : '名之' ('曰' IDENTIFIER)+ ;

declare_statement           : DECLARE_KEYWORD INT_NUM TYPE ('曰' data)*;
define_statement            : DEFINE_KEYWORD TYPE data ;

pick_up_statement           : '夫' data ('之' data)? ;


array_statement             : array_cat_statement|array_push_statement ;
array_cat_statement         : '銜' (IDENTIFIER|LAST_IDENTIFIER) (PREPOSITION_YI IDENTIFIER)+ ;
array_push_statement        : '充' (IDENTIFIER|LAST_IDENTIFIER) (PREPOSITION_YI data)+ ;


function_statement          : function_define_statement|function_call_statement ;
function_call_statement     : function_plain_call|function_nested_call ;
function_plain_call         : '施' (IDENTIFIER|LAST_IDENTIFIER) (preposition data)* ;
function_nested_call        : ('取' INT_NUM '以施' IDENTIFIER)+ ;
function_define_statement   : DECLARE_KEYWORD INT_NUM '術' reference_statement ('欲行是術' '必先得' (INT_NUM TYPE ('曰' IDENTIFIER)+)+)? ('是術曰'|'乃行是術曰') statement* '是謂' IDENTIFIER '之術也' ;


if_statement                : IF if_expression '者' statement+ (ELSE statement+)? FOR_IF_END ;
if_expression               : unary_if_expression|binary_if_expression ;
unary_if_expression         : data|(IDENTIFIER '之' data)| ;
binary_if_expression        : unary_if_expression IF_LOGIC_OP unary_if_expression ;


for_statement               : for_arr_statement
                            | for_enum_statement
                            | for_while_statement ;
for_arr_statement           : FOR_START_ARR   IDENTIFIER            FOR_MID_ARR  IDENTIFIER statement* FOR_IF_END ; 
for_enum_statement          : FOR_START_ENUM  (INT_NUM|IDENTIFIER)  FOR_MID_ENUM statement* FOR_IF_END ;
for_while_statement         : FOR_START_WHILE statement*            FOR_IF_END ;


math_statement              : (arith_math_statement|logic_math_statement|mod_math_statement) (reference_multi_statement)? ;
arith_math_statement        : arith_binary_math|arith_unary_math ;
arith_binary_math           : ARITH_BINARY_OP data preposition data ;
arith_unary_math            : UNARY_OP (IDENTIFIER|LAST_IDENTIFIER) ;
mod_math_statement          : '除' (INT_NUM|FLOAT_NUM|IDENTIFIER|LAST_IDENTIFIER) preposition (INT_NUM|FLOAT_NUM|IDENTIFIER) POST_MOD_MATH_OP? ;
logic_math_statement        : '夫' IDENTIFIER IDENTIFIER LOGIC_BINARY_OP ;


assign_statement            : '昔之' IDENTIFIER ('之' (INT_NUM|STRING_LITERAL|IDENTIFIER))? '者' (('今' ((data ('之' INT_NUM)?)|'其') '是矣')|'今不復存矣') ;


return_statement            : '乃得' data|'乃歸空無'|'乃得矣' ;


import_statement            : '吾嘗觀' STRING_LITERAL '之書' ('方悟' IDENTIFIER+ '之義')? ;


object_statement            : '吾有' INT_NUM '物' reference_multi_statement (object_define_statement)? ;
object_define_statement     : '其物如是' ('物之' STRING_LITERAL '者' TYPE '曰' data)+ '是謂' IDENTIFIER '之物也' ;


data                        : STRING_LITERAL|BOOL_VALUE|IDENTIFIER|INT_NUM|FLOAT_NUM|LAST_IDENTIFIER ;

LAST_IDENTIFIER             : '其' ;

STRING_LITERAL              : '「「' ( ~('」') )* '」」' ;
IDENTIFIER                  : '「' ( ~('」') )+ '」' ;

OTHER                       : '其餘' ;

ARITH_BINARY_OP             : '加'|'減'|'乘' ;
LOGIC_BINARY_OP             : '中有陽乎'|'中無陰乎' ;
POST_MOD_MATH_OP            : '所餘幾何' ;
UNARY_OP                    : '變' ;

preposition                 : PREPOSITION_YI|PREPOSITION_YU ;
PREPOSITION_YU              : '於' ;
PREPOSITION_YI              : '以' ;

IF                          : '若' ;
ELSE                        : '若非' ;
IF_LOGIC_OP                 : '等於'|'不等於'|'不大於'|'不小於'|'大於'|'小於' ;

FOR_START_ARR               : '凡' ;
FOR_START_ENUM              : '為是' ;
FOR_START_WHILE             : '恆為是' ;
FOR_MID_ARR                 : '中之' ;
FOR_MID_ENUM                : '遍' ;
FOR_IF_END                  : '云云'|'也' ;

FLOAT_NUM                   : INT_NUM '又' (INT_NUM FLOAT_NUM_KEYWORDS)+ ;
FLOAT_NUM_KEYWORDS          : '分'|'釐'|'毫'|'絲'|'忽'|'微'|'塵'|'埃'|'渺'|'漠' ;
INT_NUM                     : INT_NUM_KEYWORDS+ ;

INT_NUM_KEYWORDS            : '零'|'一'|'二'|'三'|'四'|'五'|'六'|'七'|'八'|'九'|'十'|'百'|'千'|'萬'|'億'|'兆'|'京'|'垓'|'秭'|'穣'|'溝'|'澗'|'正'|'載'|'極' ;
TYPE                        : '數'|'列'|'言'|'爻'|IDENTIFIER ;
BOOL_VALUE                  : '陰'|'陽' ;
print_statement             : '書之' ;

WS                          : ([ \t\r\n]|'。'|'，')+ -> skip ;
comment                     : ('注曰'|'疏曰'|'批曰') STRING_LITERAL ;
clean_statement             : '噫' ;

DECLARE_KEYWORD             : '吾有'|'今有' ;
DEFINE_KEYWORD              : '有' ;

BREAK                       : '乃止' ;