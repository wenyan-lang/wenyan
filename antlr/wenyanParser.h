
// Generated from wenyan.g4 by ANTLR 4.7.2

#pragma once


#include "antlr4-runtime.h"




class  wenyanParser : public antlr4::Parser {
public:
  enum {
    T__0 = 1, T__1 = 2, T__2 = 3, T__3 = 4, T__4 = 5, T__5 = 6, T__6 = 7, 
    T__7 = 8, T__8 = 9, T__9 = 10, T__10 = 11, T__11 = 12, T__12 = 13, T__13 = 14, 
    T__14 = 15, T__15 = 16, T__16 = 17, T__17 = 18, T__18 = 19, T__19 = 20, 
    T__20 = 21, T__21 = 22, T__22 = 23, T__23 = 24, T__24 = 25, T__25 = 26, 
    T__26 = 27, T__27 = 28, T__28 = 29, T__29 = 30, T__30 = 31, T__31 = 32, 
    T__32 = 33, T__33 = 34, T__34 = 35, T__35 = 36, T__36 = 37, T__37 = 38, 
    T__38 = 39, T__39 = 40, T__40 = 41, T__41 = 42, T__42 = 43, T__43 = 44, 
    T__44 = 45, STRING_LITERAL = 46, IDENTIFIER = 47, ARITH_BINARY_OP = 48, 
    LOGIC_BINARY_OP = 49, POST_MOD_MATH_OP = 50, UNARY_OP = 51, PREPOSITION_YU = 52, 
    PREPOSITION_YI = 53, IF = 54, ELSE = 55, IF_LOGIC_OP = 56, FOR_START_ARR = 57, 
    FOR_START_ENUM = 58, FOR_START_WHILE = 59, FOR_MID_ARR = 60, FOR_MID_ENUM = 61, 
    FOR_IF_END = 62, FLOAT_NUM = 63, FLOAT_NUM_KEYWORDS = 64, INT_NUM = 65, 
    INT_NUM_KEYWORDS = 66, TYPE = 67, BOOL_VALUE = 68, WS = 69, BREAK = 70
  };

  enum {
    RuleProgram = 0, RuleStatement = 1, RulePick_up_statement = 2, RuleArray_statement = 3, 
    RuleArray_cat_statement = 4, RuleArray_push_statement = 5, RuleFunction_statement = 6, 
    RuleFunction_call_statement = 7, RuleFunction_plain_call = 8, RuleFunction_nested_call = 9, 
    RuleFunction_define_statement = 10, RuleIf_statement = 11, RuleIf_expression = 12, 
    RuleUnary_if_expression = 13, RuleBinary_if_expression = 14, RuleDeclare_statement = 15, 
    RuleDefine_statement = 16, RuleReference_multi_statement = 17, RuleReference_single_statement = 18, 
    RuleInit_define_statement = 19, RuleFor_statement = 20, RuleFor_arr_statement = 21, 
    RuleFor_enum_statement = 22, RuleFor_while_statement = 23, RuleMath_statement = 24, 
    RuleArith_math_statement = 25, RuleArith_binary_math = 26, RuleArith_unary_math = 27, 
    RuleMod_math_statement = 28, RuleLogic_math_statement = 29, RuleAssign_statement = 30, 
    RuleReturn_statement = 31, RuleImport_statement = 32, RuleObject_statement = 33, 
    RuleObject_define_statement = 34, RuleData = 35, RulePreposition = 36, 
    RulePrint_statement = 37, RuleComment = 38, RuleClean_statement = 39
  };

  wenyanParser(antlr4::TokenStream *input);
  ~wenyanParser();

  virtual std::string getGrammarFileName() const override;
  virtual const antlr4::atn::ATN& getATN() const override { return _atn; };
  virtual const std::vector<std::string>& getTokenNames() const override { return _tokenNames; }; // deprecated: use vocabulary instead.
  virtual const std::vector<std::string>& getRuleNames() const override;
  virtual antlr4::dfa::Vocabulary& getVocabulary() const override;


  class ProgramContext;
  class StatementContext;
  class Pick_up_statementContext;
  class Array_statementContext;
  class Array_cat_statementContext;
  class Array_push_statementContext;
  class Function_statementContext;
  class Function_call_statementContext;
  class Function_plain_callContext;
  class Function_nested_callContext;
  class Function_define_statementContext;
  class If_statementContext;
  class If_expressionContext;
  class Unary_if_expressionContext;
  class Binary_if_expressionContext;
  class Declare_statementContext;
  class Define_statementContext;
  class Reference_multi_statementContext;
  class Reference_single_statementContext;
  class Init_define_statementContext;
  class For_statementContext;
  class For_arr_statementContext;
  class For_enum_statementContext;
  class For_while_statementContext;
  class Math_statementContext;
  class Arith_math_statementContext;
  class Arith_binary_mathContext;
  class Arith_unary_mathContext;
  class Mod_math_statementContext;
  class Logic_math_statementContext;
  class Assign_statementContext;
  class Return_statementContext;
  class Import_statementContext;
  class Object_statementContext;
  class Object_define_statementContext;
  class DataContext;
  class PrepositionContext;
  class Print_statementContext;
  class CommentContext;
  class Clean_statementContext; 

  class  ProgramContext : public antlr4::ParserRuleContext {
  public:
    ProgramContext(antlr4::ParserRuleContext *parent, size_t invokingState);
    virtual size_t getRuleIndex() const override;
    std::vector<StatementContext *> statement();
    StatementContext* statement(size_t i);

    virtual void enterRule(antlr4::tree::ParseTreeListener *listener) override;
    virtual void exitRule(antlr4::tree::ParseTreeListener *listener) override;
   
  };

  ProgramContext* program();

  class  StatementContext : public antlr4::ParserRuleContext {
  public:
    StatementContext(antlr4::ParserRuleContext *parent, size_t invokingState);
    virtual size_t getRuleIndex() const override;
    Declare_statementContext *declare_statement();
    Define_statementContext *define_statement();
    Print_statementContext *print_statement();
    For_statementContext *for_statement();
    Function_statementContext *function_statement();
    If_statementContext *if_statement();
    Return_statementContext *return_statement();
    Math_statementContext *math_statement();
    Assign_statementContext *assign_statement();
    Import_statementContext *import_statement();
    Object_statementContext *object_statement();
    Pick_up_statementContext *pick_up_statement();
    Array_statementContext *array_statement();
    Clean_statementContext *clean_statement();
    antlr4::tree::TerminalNode *BREAK();
    CommentContext *comment();

    virtual void enterRule(antlr4::tree::ParseTreeListener *listener) override;
    virtual void exitRule(antlr4::tree::ParseTreeListener *listener) override;
   
  };

  StatementContext* statement();

  class  Pick_up_statementContext : public antlr4::ParserRuleContext {
  public:
    Pick_up_statementContext(antlr4::ParserRuleContext *parent, size_t invokingState);
    virtual size_t getRuleIndex() const override;
    DataContext *data();
    Reference_single_statementContext *reference_single_statement();
    antlr4::tree::TerminalNode *STRING_LITERAL();
    antlr4::tree::TerminalNode *INT_NUM();
    antlr4::tree::TerminalNode *IDENTIFIER();

    virtual void enterRule(antlr4::tree::ParseTreeListener *listener) override;
    virtual void exitRule(antlr4::tree::ParseTreeListener *listener) override;
   
  };

  Pick_up_statementContext* pick_up_statement();

  class  Array_statementContext : public antlr4::ParserRuleContext {
  public:
    Array_statementContext(antlr4::ParserRuleContext *parent, size_t invokingState);
    virtual size_t getRuleIndex() const override;
    Array_cat_statementContext *array_cat_statement();
    Array_push_statementContext *array_push_statement();

    virtual void enterRule(antlr4::tree::ParseTreeListener *listener) override;
    virtual void exitRule(antlr4::tree::ParseTreeListener *listener) override;
   
  };

  Array_statementContext* array_statement();

  class  Array_cat_statementContext : public antlr4::ParserRuleContext {
  public:
    Array_cat_statementContext(antlr4::ParserRuleContext *parent, size_t invokingState);
    virtual size_t getRuleIndex() const override;
    std::vector<antlr4::tree::TerminalNode *> IDENTIFIER();
    antlr4::tree::TerminalNode* IDENTIFIER(size_t i);
    std::vector<antlr4::tree::TerminalNode *> PREPOSITION_YI();
    antlr4::tree::TerminalNode* PREPOSITION_YI(size_t i);
    Reference_single_statementContext *reference_single_statement();

    virtual void enterRule(antlr4::tree::ParseTreeListener *listener) override;
    virtual void exitRule(antlr4::tree::ParseTreeListener *listener) override;
   
  };

  Array_cat_statementContext* array_cat_statement();

  class  Array_push_statementContext : public antlr4::ParserRuleContext {
  public:
    Array_push_statementContext(antlr4::ParserRuleContext *parent, size_t invokingState);
    virtual size_t getRuleIndex() const override;
    antlr4::tree::TerminalNode *IDENTIFIER();
    std::vector<antlr4::tree::TerminalNode *> PREPOSITION_YI();
    antlr4::tree::TerminalNode* PREPOSITION_YI(size_t i);
    std::vector<DataContext *> data();
    DataContext* data(size_t i);
    Reference_single_statementContext *reference_single_statement();

    virtual void enterRule(antlr4::tree::ParseTreeListener *listener) override;
    virtual void exitRule(antlr4::tree::ParseTreeListener *listener) override;
   
  };

  Array_push_statementContext* array_push_statement();

  class  Function_statementContext : public antlr4::ParserRuleContext {
  public:
    Function_statementContext(antlr4::ParserRuleContext *parent, size_t invokingState);
    virtual size_t getRuleIndex() const override;
    Function_define_statementContext *function_define_statement();
    Function_call_statementContext *function_call_statement();
    Reference_single_statementContext *reference_single_statement();

    virtual void enterRule(antlr4::tree::ParseTreeListener *listener) override;
    virtual void exitRule(antlr4::tree::ParseTreeListener *listener) override;
   
  };

  Function_statementContext* function_statement();

  class  Function_call_statementContext : public antlr4::ParserRuleContext {
  public:
    Function_call_statementContext(antlr4::ParserRuleContext *parent, size_t invokingState);
    virtual size_t getRuleIndex() const override;
    Function_plain_callContext *function_plain_call();
    Function_nested_callContext *function_nested_call();

    virtual void enterRule(antlr4::tree::ParseTreeListener *listener) override;
    virtual void exitRule(antlr4::tree::ParseTreeListener *listener) override;
   
  };

  Function_call_statementContext* function_call_statement();

  class  Function_plain_callContext : public antlr4::ParserRuleContext {
  public:
    Function_plain_callContext(antlr4::ParserRuleContext *parent, size_t invokingState);
    virtual size_t getRuleIndex() const override;
    antlr4::tree::TerminalNode *IDENTIFIER();
    std::vector<PrepositionContext *> preposition();
    PrepositionContext* preposition(size_t i);
    std::vector<DataContext *> data();
    DataContext* data(size_t i);

    virtual void enterRule(antlr4::tree::ParseTreeListener *listener) override;
    virtual void exitRule(antlr4::tree::ParseTreeListener *listener) override;
   
  };

  Function_plain_callContext* function_plain_call();

  class  Function_nested_callContext : public antlr4::ParserRuleContext {
  public:
    Function_nested_callContext(antlr4::ParserRuleContext *parent, size_t invokingState);
    virtual size_t getRuleIndex() const override;
    std::vector<antlr4::tree::TerminalNode *> INT_NUM();
    antlr4::tree::TerminalNode* INT_NUM(size_t i);
    std::vector<antlr4::tree::TerminalNode *> IDENTIFIER();
    antlr4::tree::TerminalNode* IDENTIFIER(size_t i);

    virtual void enterRule(antlr4::tree::ParseTreeListener *listener) override;
    virtual void exitRule(antlr4::tree::ParseTreeListener *listener) override;
   
  };

  Function_nested_callContext* function_nested_call();

  class  Function_define_statementContext : public antlr4::ParserRuleContext {
  public:
    Function_define_statementContext(antlr4::ParserRuleContext *parent, size_t invokingState);
    virtual size_t getRuleIndex() const override;
    std::vector<antlr4::tree::TerminalNode *> INT_NUM();
    antlr4::tree::TerminalNode* INT_NUM(size_t i);
    Reference_single_statementContext *reference_single_statement();
    std::vector<antlr4::tree::TerminalNode *> IDENTIFIER();
    antlr4::tree::TerminalNode* IDENTIFIER(size_t i);
    std::vector<StatementContext *> statement();
    StatementContext* statement(size_t i);
    std::vector<antlr4::tree::TerminalNode *> TYPE();
    antlr4::tree::TerminalNode* TYPE(size_t i);

    virtual void enterRule(antlr4::tree::ParseTreeListener *listener) override;
    virtual void exitRule(antlr4::tree::ParseTreeListener *listener) override;
   
  };

  Function_define_statementContext* function_define_statement();

  class  If_statementContext : public antlr4::ParserRuleContext {
  public:
    If_statementContext(antlr4::ParserRuleContext *parent, size_t invokingState);
    virtual size_t getRuleIndex() const override;
    antlr4::tree::TerminalNode *IF();
    If_expressionContext *if_expression();
    antlr4::tree::TerminalNode *FOR_IF_END();
    std::vector<StatementContext *> statement();
    StatementContext* statement(size_t i);
    antlr4::tree::TerminalNode *ELSE();

    virtual void enterRule(antlr4::tree::ParseTreeListener *listener) override;
    virtual void exitRule(antlr4::tree::ParseTreeListener *listener) override;
   
  };

  If_statementContext* if_statement();

  class  If_expressionContext : public antlr4::ParserRuleContext {
  public:
    If_expressionContext(antlr4::ParserRuleContext *parent, size_t invokingState);
    virtual size_t getRuleIndex() const override;
    Unary_if_expressionContext *unary_if_expression();
    Binary_if_expressionContext *binary_if_expression();

    virtual void enterRule(antlr4::tree::ParseTreeListener *listener) override;
    virtual void exitRule(antlr4::tree::ParseTreeListener *listener) override;
   
  };

  If_expressionContext* if_expression();

  class  Unary_if_expressionContext : public antlr4::ParserRuleContext {
  public:
    Unary_if_expressionContext(antlr4::ParserRuleContext *parent, size_t invokingState);
    virtual size_t getRuleIndex() const override;
    DataContext *data();
    std::vector<antlr4::tree::TerminalNode *> IDENTIFIER();
    antlr4::tree::TerminalNode* IDENTIFIER(size_t i);
    antlr4::tree::TerminalNode *STRING_LITERAL();

    virtual void enterRule(antlr4::tree::ParseTreeListener *listener) override;
    virtual void exitRule(antlr4::tree::ParseTreeListener *listener) override;
   
  };

  Unary_if_expressionContext* unary_if_expression();

  class  Binary_if_expressionContext : public antlr4::ParserRuleContext {
  public:
    Binary_if_expressionContext(antlr4::ParserRuleContext *parent, size_t invokingState);
    virtual size_t getRuleIndex() const override;
    std::vector<Unary_if_expressionContext *> unary_if_expression();
    Unary_if_expressionContext* unary_if_expression(size_t i);
    antlr4::tree::TerminalNode *IF_LOGIC_OP();

    virtual void enterRule(antlr4::tree::ParseTreeListener *listener) override;
    virtual void exitRule(antlr4::tree::ParseTreeListener *listener) override;
   
  };

  Binary_if_expressionContext* binary_if_expression();

  class  Declare_statementContext : public antlr4::ParserRuleContext {
  public:
    Declare_statementContext(antlr4::ParserRuleContext *parent, size_t invokingState);
    virtual size_t getRuleIndex() const override;
    antlr4::tree::TerminalNode *INT_NUM();
    antlr4::tree::TerminalNode *TYPE();
    std::vector<DataContext *> data();
    DataContext* data(size_t i);

    virtual void enterRule(antlr4::tree::ParseTreeListener *listener) override;
    virtual void exitRule(antlr4::tree::ParseTreeListener *listener) override;
   
  };

  Declare_statementContext* declare_statement();

  class  Define_statementContext : public antlr4::ParserRuleContext {
  public:
    Define_statementContext(antlr4::ParserRuleContext *parent, size_t invokingState);
    virtual size_t getRuleIndex() const override;
    Declare_statementContext *declare_statement();
    Reference_multi_statementContext *reference_multi_statement();
    Init_define_statementContext *init_define_statement();

    virtual void enterRule(antlr4::tree::ParseTreeListener *listener) override;
    virtual void exitRule(antlr4::tree::ParseTreeListener *listener) override;
   
  };

  Define_statementContext* define_statement();

  class  Reference_multi_statementContext : public antlr4::ParserRuleContext {
  public:
    Reference_multi_statementContext(antlr4::ParserRuleContext *parent, size_t invokingState);
    virtual size_t getRuleIndex() const override;
    std::vector<antlr4::tree::TerminalNode *> IDENTIFIER();
    antlr4::tree::TerminalNode* IDENTIFIER(size_t i);

    virtual void enterRule(antlr4::tree::ParseTreeListener *listener) override;
    virtual void exitRule(antlr4::tree::ParseTreeListener *listener) override;
   
  };

  Reference_multi_statementContext* reference_multi_statement();

  class  Reference_single_statementContext : public antlr4::ParserRuleContext {
  public:
    Reference_single_statementContext(antlr4::ParserRuleContext *parent, size_t invokingState);
    virtual size_t getRuleIndex() const override;
    antlr4::tree::TerminalNode *IDENTIFIER();

    virtual void enterRule(antlr4::tree::ParseTreeListener *listener) override;
    virtual void exitRule(antlr4::tree::ParseTreeListener *listener) override;
   
  };

  Reference_single_statementContext* reference_single_statement();

  class  Init_define_statementContext : public antlr4::ParserRuleContext {
  public:
    Init_define_statementContext(antlr4::ParserRuleContext *parent, size_t invokingState);
    virtual size_t getRuleIndex() const override;
    antlr4::tree::TerminalNode *TYPE();
    DataContext *data();
    Reference_single_statementContext *reference_single_statement();

    virtual void enterRule(antlr4::tree::ParseTreeListener *listener) override;
    virtual void exitRule(antlr4::tree::ParseTreeListener *listener) override;
   
  };

  Init_define_statementContext* init_define_statement();

  class  For_statementContext : public antlr4::ParserRuleContext {
  public:
    For_statementContext(antlr4::ParserRuleContext *parent, size_t invokingState);
    virtual size_t getRuleIndex() const override;
    For_arr_statementContext *for_arr_statement();
    For_enum_statementContext *for_enum_statement();
    For_while_statementContext *for_while_statement();

    virtual void enterRule(antlr4::tree::ParseTreeListener *listener) override;
    virtual void exitRule(antlr4::tree::ParseTreeListener *listener) override;
   
  };

  For_statementContext* for_statement();

  class  For_arr_statementContext : public antlr4::ParserRuleContext {
  public:
    For_arr_statementContext(antlr4::ParserRuleContext *parent, size_t invokingState);
    virtual size_t getRuleIndex() const override;
    antlr4::tree::TerminalNode *FOR_START_ARR();
    std::vector<antlr4::tree::TerminalNode *> IDENTIFIER();
    antlr4::tree::TerminalNode* IDENTIFIER(size_t i);
    antlr4::tree::TerminalNode *FOR_MID_ARR();
    antlr4::tree::TerminalNode *FOR_IF_END();
    std::vector<StatementContext *> statement();
    StatementContext* statement(size_t i);

    virtual void enterRule(antlr4::tree::ParseTreeListener *listener) override;
    virtual void exitRule(antlr4::tree::ParseTreeListener *listener) override;
   
  };

  For_arr_statementContext* for_arr_statement();

  class  For_enum_statementContext : public antlr4::ParserRuleContext {
  public:
    For_enum_statementContext(antlr4::ParserRuleContext *parent, size_t invokingState);
    virtual size_t getRuleIndex() const override;
    antlr4::tree::TerminalNode *FOR_START_ENUM();
    antlr4::tree::TerminalNode *FOR_MID_ENUM();
    antlr4::tree::TerminalNode *FOR_IF_END();
    antlr4::tree::TerminalNode *INT_NUM();
    antlr4::tree::TerminalNode *IDENTIFIER();
    std::vector<StatementContext *> statement();
    StatementContext* statement(size_t i);

    virtual void enterRule(antlr4::tree::ParseTreeListener *listener) override;
    virtual void exitRule(antlr4::tree::ParseTreeListener *listener) override;
   
  };

  For_enum_statementContext* for_enum_statement();

  class  For_while_statementContext : public antlr4::ParserRuleContext {
  public:
    For_while_statementContext(antlr4::ParserRuleContext *parent, size_t invokingState);
    virtual size_t getRuleIndex() const override;
    antlr4::tree::TerminalNode *FOR_START_WHILE();
    antlr4::tree::TerminalNode *FOR_IF_END();
    std::vector<StatementContext *> statement();
    StatementContext* statement(size_t i);

    virtual void enterRule(antlr4::tree::ParseTreeListener *listener) override;
    virtual void exitRule(antlr4::tree::ParseTreeListener *listener) override;
   
  };

  For_while_statementContext* for_while_statement();

  class  Math_statementContext : public antlr4::ParserRuleContext {
  public:
    Math_statementContext(antlr4::ParserRuleContext *parent, size_t invokingState);
    virtual size_t getRuleIndex() const override;
    Arith_math_statementContext *arith_math_statement();
    Logic_math_statementContext *logic_math_statement();
    Mod_math_statementContext *mod_math_statement();
    Reference_multi_statementContext *reference_multi_statement();

    virtual void enterRule(antlr4::tree::ParseTreeListener *listener) override;
    virtual void exitRule(antlr4::tree::ParseTreeListener *listener) override;
   
  };

  Math_statementContext* math_statement();

  class  Arith_math_statementContext : public antlr4::ParserRuleContext {
  public:
    Arith_math_statementContext(antlr4::ParserRuleContext *parent, size_t invokingState);
    virtual size_t getRuleIndex() const override;
    Arith_binary_mathContext *arith_binary_math();
    Arith_unary_mathContext *arith_unary_math();

    virtual void enterRule(antlr4::tree::ParseTreeListener *listener) override;
    virtual void exitRule(antlr4::tree::ParseTreeListener *listener) override;
   
  };

  Arith_math_statementContext* arith_math_statement();

  class  Arith_binary_mathContext : public antlr4::ParserRuleContext {
  public:
    Arith_binary_mathContext(antlr4::ParserRuleContext *parent, size_t invokingState);
    virtual size_t getRuleIndex() const override;
    antlr4::tree::TerminalNode *ARITH_BINARY_OP();
    PrepositionContext *preposition();
    std::vector<DataContext *> data();
    DataContext* data(size_t i);

    virtual void enterRule(antlr4::tree::ParseTreeListener *listener) override;
    virtual void exitRule(antlr4::tree::ParseTreeListener *listener) override;
   
  };

  Arith_binary_mathContext* arith_binary_math();

  class  Arith_unary_mathContext : public antlr4::ParserRuleContext {
  public:
    Arith_unary_mathContext(antlr4::ParserRuleContext *parent, size_t invokingState);
    virtual size_t getRuleIndex() const override;
    antlr4::tree::TerminalNode *UNARY_OP();
    antlr4::tree::TerminalNode *IDENTIFIER();

    virtual void enterRule(antlr4::tree::ParseTreeListener *listener) override;
    virtual void exitRule(antlr4::tree::ParseTreeListener *listener) override;
   
  };

  Arith_unary_mathContext* arith_unary_math();

  class  Mod_math_statementContext : public antlr4::ParserRuleContext {
  public:
    Mod_math_statementContext(antlr4::ParserRuleContext *parent, size_t invokingState);
    virtual size_t getRuleIndex() const override;
    PrepositionContext *preposition();
    std::vector<antlr4::tree::TerminalNode *> INT_NUM();
    antlr4::tree::TerminalNode* INT_NUM(size_t i);
    std::vector<antlr4::tree::TerminalNode *> FLOAT_NUM();
    antlr4::tree::TerminalNode* FLOAT_NUM(size_t i);
    std::vector<antlr4::tree::TerminalNode *> IDENTIFIER();
    antlr4::tree::TerminalNode* IDENTIFIER(size_t i);
    antlr4::tree::TerminalNode *POST_MOD_MATH_OP();

    virtual void enterRule(antlr4::tree::ParseTreeListener *listener) override;
    virtual void exitRule(antlr4::tree::ParseTreeListener *listener) override;
   
  };

  Mod_math_statementContext* mod_math_statement();

  class  Logic_math_statementContext : public antlr4::ParserRuleContext {
  public:
    Logic_math_statementContext(antlr4::ParserRuleContext *parent, size_t invokingState);
    virtual size_t getRuleIndex() const override;
    std::vector<antlr4::tree::TerminalNode *> IDENTIFIER();
    antlr4::tree::TerminalNode* IDENTIFIER(size_t i);
    antlr4::tree::TerminalNode *LOGIC_BINARY_OP();

    virtual void enterRule(antlr4::tree::ParseTreeListener *listener) override;
    virtual void exitRule(antlr4::tree::ParseTreeListener *listener) override;
   
  };

  Logic_math_statementContext* logic_math_statement();

  class  Assign_statementContext : public antlr4::ParserRuleContext {
  public:
    Assign_statementContext(antlr4::ParserRuleContext *parent, size_t invokingState);
    virtual size_t getRuleIndex() const override;
    std::vector<antlr4::tree::TerminalNode *> IDENTIFIER();
    antlr4::tree::TerminalNode* IDENTIFIER(size_t i);
    std::vector<antlr4::tree::TerminalNode *> INT_NUM();
    antlr4::tree::TerminalNode* INT_NUM(size_t i);
    antlr4::tree::TerminalNode *STRING_LITERAL();
    DataContext *data();

    virtual void enterRule(antlr4::tree::ParseTreeListener *listener) override;
    virtual void exitRule(antlr4::tree::ParseTreeListener *listener) override;
   
  };

  Assign_statementContext* assign_statement();

  class  Return_statementContext : public antlr4::ParserRuleContext {
  public:
    Return_statementContext(antlr4::ParserRuleContext *parent, size_t invokingState);
    virtual size_t getRuleIndex() const override;
    DataContext *data();

    virtual void enterRule(antlr4::tree::ParseTreeListener *listener) override;
    virtual void exitRule(antlr4::tree::ParseTreeListener *listener) override;
   
  };

  Return_statementContext* return_statement();

  class  Import_statementContext : public antlr4::ParserRuleContext {
  public:
    Import_statementContext(antlr4::ParserRuleContext *parent, size_t invokingState);
    virtual size_t getRuleIndex() const override;
    antlr4::tree::TerminalNode *STRING_LITERAL();
    std::vector<antlr4::tree::TerminalNode *> IDENTIFIER();
    antlr4::tree::TerminalNode* IDENTIFIER(size_t i);

    virtual void enterRule(antlr4::tree::ParseTreeListener *listener) override;
    virtual void exitRule(antlr4::tree::ParseTreeListener *listener) override;
   
  };

  Import_statementContext* import_statement();

  class  Object_statementContext : public antlr4::ParserRuleContext {
  public:
    Object_statementContext(antlr4::ParserRuleContext *parent, size_t invokingState);
    virtual size_t getRuleIndex() const override;
    antlr4::tree::TerminalNode *INT_NUM();
    Reference_multi_statementContext *reference_multi_statement();
    Object_define_statementContext *object_define_statement();

    virtual void enterRule(antlr4::tree::ParseTreeListener *listener) override;
    virtual void exitRule(antlr4::tree::ParseTreeListener *listener) override;
   
  };

  Object_statementContext* object_statement();

  class  Object_define_statementContext : public antlr4::ParserRuleContext {
  public:
    Object_define_statementContext(antlr4::ParserRuleContext *parent, size_t invokingState);
    virtual size_t getRuleIndex() const override;
    antlr4::tree::TerminalNode *IDENTIFIER();
    std::vector<antlr4::tree::TerminalNode *> STRING_LITERAL();
    antlr4::tree::TerminalNode* STRING_LITERAL(size_t i);
    std::vector<antlr4::tree::TerminalNode *> TYPE();
    antlr4::tree::TerminalNode* TYPE(size_t i);
    std::vector<DataContext *> data();
    DataContext* data(size_t i);

    virtual void enterRule(antlr4::tree::ParseTreeListener *listener) override;
    virtual void exitRule(antlr4::tree::ParseTreeListener *listener) override;
   
  };

  Object_define_statementContext* object_define_statement();

  class  DataContext : public antlr4::ParserRuleContext {
  public:
    DataContext(antlr4::ParserRuleContext *parent, size_t invokingState);
    virtual size_t getRuleIndex() const override;
    antlr4::tree::TerminalNode *STRING_LITERAL();
    antlr4::tree::TerminalNode *BOOL_VALUE();
    antlr4::tree::TerminalNode *IDENTIFIER();
    antlr4::tree::TerminalNode *INT_NUM();
    antlr4::tree::TerminalNode *FLOAT_NUM();

    virtual void enterRule(antlr4::tree::ParseTreeListener *listener) override;
    virtual void exitRule(antlr4::tree::ParseTreeListener *listener) override;
   
  };

  DataContext* data();

  class  PrepositionContext : public antlr4::ParserRuleContext {
  public:
    PrepositionContext(antlr4::ParserRuleContext *parent, size_t invokingState);
    virtual size_t getRuleIndex() const override;
    antlr4::tree::TerminalNode *PREPOSITION_YI();
    antlr4::tree::TerminalNode *PREPOSITION_YU();

    virtual void enterRule(antlr4::tree::ParseTreeListener *listener) override;
    virtual void exitRule(antlr4::tree::ParseTreeListener *listener) override;
   
  };

  PrepositionContext* preposition();

  class  Print_statementContext : public antlr4::ParserRuleContext {
  public:
    Print_statementContext(antlr4::ParserRuleContext *parent, size_t invokingState);
    virtual size_t getRuleIndex() const override;

    virtual void enterRule(antlr4::tree::ParseTreeListener *listener) override;
    virtual void exitRule(antlr4::tree::ParseTreeListener *listener) override;
   
  };

  Print_statementContext* print_statement();

  class  CommentContext : public antlr4::ParserRuleContext {
  public:
    CommentContext(antlr4::ParserRuleContext *parent, size_t invokingState);
    virtual size_t getRuleIndex() const override;
    antlr4::tree::TerminalNode *STRING_LITERAL();

    virtual void enterRule(antlr4::tree::ParseTreeListener *listener) override;
    virtual void exitRule(antlr4::tree::ParseTreeListener *listener) override;
   
  };

  CommentContext* comment();

  class  Clean_statementContext : public antlr4::ParserRuleContext {
  public:
    Clean_statementContext(antlr4::ParserRuleContext *parent, size_t invokingState);
    virtual size_t getRuleIndex() const override;

    virtual void enterRule(antlr4::tree::ParseTreeListener *listener) override;
    virtual void exitRule(antlr4::tree::ParseTreeListener *listener) override;
   
  };

  Clean_statementContext* clean_statement();


private:
  static std::vector<antlr4::dfa::DFA> _decisionToDFA;
  static antlr4::atn::PredictionContextCache _sharedContextCache;
  static std::vector<std::string> _ruleNames;
  static std::vector<std::string> _tokenNames;

  static std::vector<std::string> _literalNames;
  static std::vector<std::string> _symbolicNames;
  static antlr4::dfa::Vocabulary _vocabulary;
  static antlr4::atn::ATN _atn;
  static std::vector<uint16_t> _serializedATN;


  struct Initializer {
    Initializer();
  };
  static Initializer _init;
};

