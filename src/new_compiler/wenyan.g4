grammar wenyan;
program                     : statement* ;
statement                   : declare_statement
                            | define_statement
                            | print_statement 
                            | for_statement;

declare_statement           : ('吾有'|'今有') INT_NUM TYPE ('曰' data)*;
define_statement            : (declare_statement reference_multi_statement)|init_define_statement ;


reference_multi_statement   : '名之' ('曰' IDENTIFIER)+ ;
reference_single_statement  : '名之' ('曰' IDENTIFIER) ;
init_define_statement       : '有' TYPE data (reference_single_statement)? ;

for_statement               : for_arr_statement
                            | for_enum_statement
                            | for_while_statement ;

for_arr_statement           : FOR_START_ARR   IDENTIFIER            FOR_MID_ARR  IDENTIFIER statement* FOR_END ; 
for_enum_statement          : FOR_START_ENUM  (INT_NUM|IDENTIFIER)  FOR_MID_ENUM statement* FOR_END ;
for_while_statement         : FOR_START_WHILE statement*            FOR_END ;

data                        : STRING_LITERAL|BOOL_VALUE|IDENTIFIER|INT_NUM|FLOAT_NUM ;

STRING_LITERAL              : '「「' ( ~('」') )* '」」' ;
IDENTIFIER                  : '「' ( ~('」') )+ '」' ;

FOR_START_ARR               : '凡' ;
FOR_START_ENUM              : '為是' ;
FOR_START_WHILE             : '恆為是' ;
FOR_MID_ARR                 : '中之' ;
FOR_MID_ENUM                : '遍' ;
FOR_END                     : '云云'|'也' ;

FLOAT_NUM                   : INT_NUM '又' (INT_NUM FLOAT_NUM_KEYWORDS)+ ;
FLOAT_NUM_KEYWORDS          : '分'|'釐'|'毫'|'絲'|'忽'|'微'|'塵'|'埃'|'渺'|'漠' ;
INT_NUM                     : INT_NUM_KEYWORDS+ ;

INT_NUM_KEYWORDS            : '零'|'一'|'二'|'三'|'四'|'五'|'六'|'七'|'八'|'九'|'十'|'百'|'千'|'萬'|'億'|'兆'|'京'|'垓'|'秭'|'穣'|'溝'|'澗'|'正'|'載'|'極' ;
TYPE                        : '數'|'列'|'言'|'爻' ;
BOOL_VALUE                  : '陰'|'陽' ;
print_statement             : '書之' ;

WS                          : ([ \t\r\n]|'。')+ -> skip ;
COMMENT                     : ('注曰'|'疏曰'|'批曰') STRING_LITERAL -> skip ;