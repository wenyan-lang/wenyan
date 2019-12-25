
// Generated from wenyan.g4 by ANTLR 4.7.2


#include "wenyanListener.h"

#include "wenyanParser.h"


using namespace antlrcpp;
using namespace antlr4;

wenyanParser::wenyanParser(TokenStream *input) : Parser(input) {
  _interpreter = new atn::ParserATNSimulator(this, _atn, _decisionToDFA, _sharedContextCache);
}

wenyanParser::~wenyanParser() {
  delete _interpreter;
}

std::string wenyanParser::getGrammarFileName() const {
  return "wenyan.g4";
}

const std::vector<std::string>& wenyanParser::getRuleNames() const {
  return _ruleNames;
}

dfa::Vocabulary& wenyanParser::getVocabulary() const {
  return _vocabulary;
}


//----------------- ProgramContext ------------------------------------------------------------------

wenyanParser::ProgramContext::ProgramContext(ParserRuleContext *parent, size_t invokingState)
  : ParserRuleContext(parent, invokingState) {
}

std::vector<wenyanParser::StatementContext *> wenyanParser::ProgramContext::statement() {
  return getRuleContexts<wenyanParser::StatementContext>();
}

wenyanParser::StatementContext* wenyanParser::ProgramContext::statement(size_t i) {
  return getRuleContext<wenyanParser::StatementContext>(i);
}


size_t wenyanParser::ProgramContext::getRuleIndex() const {
  return wenyanParser::RuleProgram;
}

void wenyanParser::ProgramContext::enterRule(tree::ParseTreeListener *listener) {
  auto parserListener = dynamic_cast<wenyanListener *>(listener);
  if (parserListener != nullptr)
    parserListener->enterProgram(this);
}

void wenyanParser::ProgramContext::exitRule(tree::ParseTreeListener *listener) {
  auto parserListener = dynamic_cast<wenyanListener *>(listener);
  if (parserListener != nullptr)
    parserListener->exitProgram(this);
}

wenyanParser::ProgramContext* wenyanParser::program() {
  ProgramContext *_localctx = _tracker.createInstance<ProgramContext>(_ctx, getState());
  enterRule(_localctx, 0, wenyanParser::RuleProgram);
  size_t _la = 0;

  auto onExit = finally([=] {
    exitRule();
  });
  try {
    enterOuterAlt(_localctx, 1);
    setState(83);
    _errHandler->sync(this);
    _la = _input->LA(1);
    while ((((_la & ~ 0x3fULL) == 0) &&
      ((1ULL << _la) & ((1ULL << wenyanParser::T__0)
      | (1ULL << wenyanParser::T__4)
      | (1ULL << wenyanParser::T__6)
      | (1ULL << wenyanParser::T__7)
      | (1ULL << wenyanParser::T__8)
      | (1ULL << wenyanParser::T__9)
      | (1ULL << wenyanParser::T__11)
      | (1ULL << wenyanParser::T__21)
      | (1ULL << wenyanParser::T__23)
      | (1ULL << wenyanParser::T__24)
      | (1ULL << wenyanParser::T__25)
      | (1ULL << wenyanParser::T__29)
      | (1ULL << wenyanParser::T__30)
      | (1ULL << wenyanParser::T__31)
      | (1ULL << wenyanParser::T__32)
      | (1ULL << wenyanParser::T__40)
      | (1ULL << wenyanParser::T__41)
      | (1ULL << wenyanParser::T__42)
      | (1ULL << wenyanParser::T__43)
      | (1ULL << wenyanParser::T__44)
      | (1ULL << wenyanParser::ARITH_BINARY_OP)
      | (1ULL << wenyanParser::UNARY_OP)
      | (1ULL << wenyanParser::IF)
      | (1ULL << wenyanParser::FOR_START_ARR)
      | (1ULL << wenyanParser::FOR_START_ENUM)
      | (1ULL << wenyanParser::FOR_START_WHILE))) != 0) || _la == wenyanParser::BREAK) {
      setState(80);
      statement();
      setState(85);
      _errHandler->sync(this);
      _la = _input->LA(1);
    }
   
  }
  catch (RecognitionException &e) {
    _errHandler->reportError(this, e);
    _localctx->exception = std::current_exception();
    _errHandler->recover(this, _localctx->exception);
  }

  return _localctx;
}

//----------------- StatementContext ------------------------------------------------------------------

wenyanParser::StatementContext::StatementContext(ParserRuleContext *parent, size_t invokingState)
  : ParserRuleContext(parent, invokingState) {
}

wenyanParser::Declare_statementContext* wenyanParser::StatementContext::declare_statement() {
  return getRuleContext<wenyanParser::Declare_statementContext>(0);
}

wenyanParser::Define_statementContext* wenyanParser::StatementContext::define_statement() {
  return getRuleContext<wenyanParser::Define_statementContext>(0);
}

wenyanParser::Print_statementContext* wenyanParser::StatementContext::print_statement() {
  return getRuleContext<wenyanParser::Print_statementContext>(0);
}

wenyanParser::For_statementContext* wenyanParser::StatementContext::for_statement() {
  return getRuleContext<wenyanParser::For_statementContext>(0);
}

wenyanParser::Function_statementContext* wenyanParser::StatementContext::function_statement() {
  return getRuleContext<wenyanParser::Function_statementContext>(0);
}

wenyanParser::If_statementContext* wenyanParser::StatementContext::if_statement() {
  return getRuleContext<wenyanParser::If_statementContext>(0);
}

wenyanParser::Return_statementContext* wenyanParser::StatementContext::return_statement() {
  return getRuleContext<wenyanParser::Return_statementContext>(0);
}

wenyanParser::Math_statementContext* wenyanParser::StatementContext::math_statement() {
  return getRuleContext<wenyanParser::Math_statementContext>(0);
}

wenyanParser::Assign_statementContext* wenyanParser::StatementContext::assign_statement() {
  return getRuleContext<wenyanParser::Assign_statementContext>(0);
}

wenyanParser::Import_statementContext* wenyanParser::StatementContext::import_statement() {
  return getRuleContext<wenyanParser::Import_statementContext>(0);
}

wenyanParser::Object_statementContext* wenyanParser::StatementContext::object_statement() {
  return getRuleContext<wenyanParser::Object_statementContext>(0);
}

wenyanParser::Pick_up_statementContext* wenyanParser::StatementContext::pick_up_statement() {
  return getRuleContext<wenyanParser::Pick_up_statementContext>(0);
}

wenyanParser::Array_statementContext* wenyanParser::StatementContext::array_statement() {
  return getRuleContext<wenyanParser::Array_statementContext>(0);
}

wenyanParser::Clean_statementContext* wenyanParser::StatementContext::clean_statement() {
  return getRuleContext<wenyanParser::Clean_statementContext>(0);
}

tree::TerminalNode* wenyanParser::StatementContext::BREAK() {
  return getToken(wenyanParser::BREAK, 0);
}

wenyanParser::CommentContext* wenyanParser::StatementContext::comment() {
  return getRuleContext<wenyanParser::CommentContext>(0);
}


size_t wenyanParser::StatementContext::getRuleIndex() const {
  return wenyanParser::RuleStatement;
}

void wenyanParser::StatementContext::enterRule(tree::ParseTreeListener *listener) {
  auto parserListener = dynamic_cast<wenyanListener *>(listener);
  if (parserListener != nullptr)
    parserListener->enterStatement(this);
}

void wenyanParser::StatementContext::exitRule(tree::ParseTreeListener *listener) {
  auto parserListener = dynamic_cast<wenyanListener *>(listener);
  if (parserListener != nullptr)
    parserListener->exitStatement(this);
}

wenyanParser::StatementContext* wenyanParser::statement() {
  StatementContext *_localctx = _tracker.createInstance<StatementContext>(_ctx, getState());
  enterRule(_localctx, 2, wenyanParser::RuleStatement);

  auto onExit = finally([=] {
    exitRule();
  });
  try {
    setState(102);
    _errHandler->sync(this);
    switch (getInterpreter<atn::ParserATNSimulator>()->adaptivePredict(_input, 1, _ctx)) {
    case 1: {
      enterOuterAlt(_localctx, 1);
      setState(86);
      declare_statement();
      break;
    }

    case 2: {
      enterOuterAlt(_localctx, 2);
      setState(87);
      define_statement();
      break;
    }

    case 3: {
      enterOuterAlt(_localctx, 3);
      setState(88);
      print_statement();
      break;
    }

    case 4: {
      enterOuterAlt(_localctx, 4);
      setState(89);
      for_statement();
      break;
    }

    case 5: {
      enterOuterAlt(_localctx, 5);
      setState(90);
      function_statement();
      break;
    }

    case 6: {
      enterOuterAlt(_localctx, 6);
      setState(91);
      if_statement();
      break;
    }

    case 7: {
      enterOuterAlt(_localctx, 7);
      setState(92);
      return_statement();
      break;
    }

    case 8: {
      enterOuterAlt(_localctx, 8);
      setState(93);
      math_statement();
      break;
    }

    case 9: {
      enterOuterAlt(_localctx, 9);
      setState(94);
      assign_statement();
      break;
    }

    case 10: {
      enterOuterAlt(_localctx, 10);
      setState(95);
      import_statement();
      break;
    }

    case 11: {
      enterOuterAlt(_localctx, 11);
      setState(96);
      object_statement();
      break;
    }

    case 12: {
      enterOuterAlt(_localctx, 12);
      setState(97);
      pick_up_statement();
      break;
    }

    case 13: {
      enterOuterAlt(_localctx, 13);
      setState(98);
      array_statement();
      break;
    }

    case 14: {
      enterOuterAlt(_localctx, 14);
      setState(99);
      clean_statement();
      break;
    }

    case 15: {
      enterOuterAlt(_localctx, 15);
      setState(100);
      match(wenyanParser::BREAK);
      break;
    }

    case 16: {
      enterOuterAlt(_localctx, 16);
      setState(101);
      comment();
      break;
    }

    }
   
  }
  catch (RecognitionException &e) {
    _errHandler->reportError(this, e);
    _localctx->exception = std::current_exception();
    _errHandler->recover(this, _localctx->exception);
  }

  return _localctx;
}

//----------------- Pick_up_statementContext ------------------------------------------------------------------

wenyanParser::Pick_up_statementContext::Pick_up_statementContext(ParserRuleContext *parent, size_t invokingState)
  : ParserRuleContext(parent, invokingState) {
}

wenyanParser::DataContext* wenyanParser::Pick_up_statementContext::data() {
  return getRuleContext<wenyanParser::DataContext>(0);
}

wenyanParser::Reference_single_statementContext* wenyanParser::Pick_up_statementContext::reference_single_statement() {
  return getRuleContext<wenyanParser::Reference_single_statementContext>(0);
}

tree::TerminalNode* wenyanParser::Pick_up_statementContext::STRING_LITERAL() {
  return getToken(wenyanParser::STRING_LITERAL, 0);
}

tree::TerminalNode* wenyanParser::Pick_up_statementContext::INT_NUM() {
  return getToken(wenyanParser::INT_NUM, 0);
}

tree::TerminalNode* wenyanParser::Pick_up_statementContext::IDENTIFIER() {
  return getToken(wenyanParser::IDENTIFIER, 0);
}


size_t wenyanParser::Pick_up_statementContext::getRuleIndex() const {
  return wenyanParser::RulePick_up_statement;
}

void wenyanParser::Pick_up_statementContext::enterRule(tree::ParseTreeListener *listener) {
  auto parserListener = dynamic_cast<wenyanListener *>(listener);
  if (parserListener != nullptr)
    parserListener->enterPick_up_statement(this);
}

void wenyanParser::Pick_up_statementContext::exitRule(tree::ParseTreeListener *listener) {
  auto parserListener = dynamic_cast<wenyanListener *>(listener);
  if (parserListener != nullptr)
    parserListener->exitPick_up_statement(this);
}

wenyanParser::Pick_up_statementContext* wenyanParser::pick_up_statement() {
  Pick_up_statementContext *_localctx = _tracker.createInstance<Pick_up_statementContext>(_ctx, getState());
  enterRule(_localctx, 4, wenyanParser::RulePick_up_statement);
  size_t _la = 0;

  auto onExit = finally([=] {
    exitRule();
  });
  try {
    enterOuterAlt(_localctx, 1);
    setState(104);
    match(wenyanParser::T__0);
    setState(105);
    data();
    setState(108);
    _errHandler->sync(this);

    _la = _input->LA(1);
    if (_la == wenyanParser::T__1) {
      setState(106);
      match(wenyanParser::T__1);
      setState(107);
      _la = _input->LA(1);
      if (!(((((_la - 3) & ~ 0x3fULL) == 0) &&
        ((1ULL << (_la - 3)) & ((1ULL << (wenyanParser::T__2 - 3))
        | (1ULL << (wenyanParser::T__3 - 3))
        | (1ULL << (wenyanParser::STRING_LITERAL - 3))
        | (1ULL << (wenyanParser::IDENTIFIER - 3))
        | (1ULL << (wenyanParser::INT_NUM - 3)))) != 0))) {
      _errHandler->recoverInline(this);
      }
      else {
        _errHandler->reportMatch(this);
        consume();
      }
    }
    setState(111);
    _errHandler->sync(this);

    _la = _input->LA(1);
    if (_la == wenyanParser::T__22) {
      setState(110);
      reference_single_statement();
    }
   
  }
  catch (RecognitionException &e) {
    _errHandler->reportError(this, e);
    _localctx->exception = std::current_exception();
    _errHandler->recover(this, _localctx->exception);
  }

  return _localctx;
}

//----------------- Array_statementContext ------------------------------------------------------------------

wenyanParser::Array_statementContext::Array_statementContext(ParserRuleContext *parent, size_t invokingState)
  : ParserRuleContext(parent, invokingState) {
}

wenyanParser::Array_cat_statementContext* wenyanParser::Array_statementContext::array_cat_statement() {
  return getRuleContext<wenyanParser::Array_cat_statementContext>(0);
}

wenyanParser::Array_push_statementContext* wenyanParser::Array_statementContext::array_push_statement() {
  return getRuleContext<wenyanParser::Array_push_statementContext>(0);
}


size_t wenyanParser::Array_statementContext::getRuleIndex() const {
  return wenyanParser::RuleArray_statement;
}

void wenyanParser::Array_statementContext::enterRule(tree::ParseTreeListener *listener) {
  auto parserListener = dynamic_cast<wenyanListener *>(listener);
  if (parserListener != nullptr)
    parserListener->enterArray_statement(this);
}

void wenyanParser::Array_statementContext::exitRule(tree::ParseTreeListener *listener) {
  auto parserListener = dynamic_cast<wenyanListener *>(listener);
  if (parserListener != nullptr)
    parserListener->exitArray_statement(this);
}

wenyanParser::Array_statementContext* wenyanParser::array_statement() {
  Array_statementContext *_localctx = _tracker.createInstance<Array_statementContext>(_ctx, getState());
  enterRule(_localctx, 6, wenyanParser::RuleArray_statement);

  auto onExit = finally([=] {
    exitRule();
  });
  try {
    setState(115);
    _errHandler->sync(this);
    switch (_input->LA(1)) {
      case wenyanParser::T__4: {
        enterOuterAlt(_localctx, 1);
        setState(113);
        array_cat_statement();
        break;
      }

      case wenyanParser::T__6: {
        enterOuterAlt(_localctx, 2);
        setState(114);
        array_push_statement();
        break;
      }

    default:
      throw NoViableAltException(this);
    }
   
  }
  catch (RecognitionException &e) {
    _errHandler->reportError(this, e);
    _localctx->exception = std::current_exception();
    _errHandler->recover(this, _localctx->exception);
  }

  return _localctx;
}

//----------------- Array_cat_statementContext ------------------------------------------------------------------

wenyanParser::Array_cat_statementContext::Array_cat_statementContext(ParserRuleContext *parent, size_t invokingState)
  : ParserRuleContext(parent, invokingState) {
}

std::vector<tree::TerminalNode *> wenyanParser::Array_cat_statementContext::IDENTIFIER() {
  return getTokens(wenyanParser::IDENTIFIER);
}

tree::TerminalNode* wenyanParser::Array_cat_statementContext::IDENTIFIER(size_t i) {
  return getToken(wenyanParser::IDENTIFIER, i);
}

std::vector<tree::TerminalNode *> wenyanParser::Array_cat_statementContext::PREPOSITION_YI() {
  return getTokens(wenyanParser::PREPOSITION_YI);
}

tree::TerminalNode* wenyanParser::Array_cat_statementContext::PREPOSITION_YI(size_t i) {
  return getToken(wenyanParser::PREPOSITION_YI, i);
}

wenyanParser::Reference_single_statementContext* wenyanParser::Array_cat_statementContext::reference_single_statement() {
  return getRuleContext<wenyanParser::Reference_single_statementContext>(0);
}


size_t wenyanParser::Array_cat_statementContext::getRuleIndex() const {
  return wenyanParser::RuleArray_cat_statement;
}

void wenyanParser::Array_cat_statementContext::enterRule(tree::ParseTreeListener *listener) {
  auto parserListener = dynamic_cast<wenyanListener *>(listener);
  if (parserListener != nullptr)
    parserListener->enterArray_cat_statement(this);
}

void wenyanParser::Array_cat_statementContext::exitRule(tree::ParseTreeListener *listener) {
  auto parserListener = dynamic_cast<wenyanListener *>(listener);
  if (parserListener != nullptr)
    parserListener->exitArray_cat_statement(this);
}

wenyanParser::Array_cat_statementContext* wenyanParser::array_cat_statement() {
  Array_cat_statementContext *_localctx = _tracker.createInstance<Array_cat_statementContext>(_ctx, getState());
  enterRule(_localctx, 8, wenyanParser::RuleArray_cat_statement);
  size_t _la = 0;

  auto onExit = finally([=] {
    exitRule();
  });
  try {
    enterOuterAlt(_localctx, 1);
    setState(117);
    match(wenyanParser::T__4);
    setState(118);
    _la = _input->LA(1);
    if (!(_la == wenyanParser::T__5

    || _la == wenyanParser::IDENTIFIER)) {
    _errHandler->recoverInline(this);
    }
    else {
      _errHandler->reportMatch(this);
      consume();
    }
    setState(121); 
    _errHandler->sync(this);
    _la = _input->LA(1);
    do {
      setState(119);
      match(wenyanParser::PREPOSITION_YI);
      setState(120);
      match(wenyanParser::IDENTIFIER);
      setState(123); 
      _errHandler->sync(this);
      _la = _input->LA(1);
    } while (_la == wenyanParser::PREPOSITION_YI);
    setState(126);
    _errHandler->sync(this);

    _la = _input->LA(1);
    if (_la == wenyanParser::T__22) {
      setState(125);
      reference_single_statement();
    }
   
  }
  catch (RecognitionException &e) {
    _errHandler->reportError(this, e);
    _localctx->exception = std::current_exception();
    _errHandler->recover(this, _localctx->exception);
  }

  return _localctx;
}

//----------------- Array_push_statementContext ------------------------------------------------------------------

wenyanParser::Array_push_statementContext::Array_push_statementContext(ParserRuleContext *parent, size_t invokingState)
  : ParserRuleContext(parent, invokingState) {
}

tree::TerminalNode* wenyanParser::Array_push_statementContext::IDENTIFIER() {
  return getToken(wenyanParser::IDENTIFIER, 0);
}

std::vector<tree::TerminalNode *> wenyanParser::Array_push_statementContext::PREPOSITION_YI() {
  return getTokens(wenyanParser::PREPOSITION_YI);
}

tree::TerminalNode* wenyanParser::Array_push_statementContext::PREPOSITION_YI(size_t i) {
  return getToken(wenyanParser::PREPOSITION_YI, i);
}

std::vector<wenyanParser::DataContext *> wenyanParser::Array_push_statementContext::data() {
  return getRuleContexts<wenyanParser::DataContext>();
}

wenyanParser::DataContext* wenyanParser::Array_push_statementContext::data(size_t i) {
  return getRuleContext<wenyanParser::DataContext>(i);
}

wenyanParser::Reference_single_statementContext* wenyanParser::Array_push_statementContext::reference_single_statement() {
  return getRuleContext<wenyanParser::Reference_single_statementContext>(0);
}


size_t wenyanParser::Array_push_statementContext::getRuleIndex() const {
  return wenyanParser::RuleArray_push_statement;
}

void wenyanParser::Array_push_statementContext::enterRule(tree::ParseTreeListener *listener) {
  auto parserListener = dynamic_cast<wenyanListener *>(listener);
  if (parserListener != nullptr)
    parserListener->enterArray_push_statement(this);
}

void wenyanParser::Array_push_statementContext::exitRule(tree::ParseTreeListener *listener) {
  auto parserListener = dynamic_cast<wenyanListener *>(listener);
  if (parserListener != nullptr)
    parserListener->exitArray_push_statement(this);
}

wenyanParser::Array_push_statementContext* wenyanParser::array_push_statement() {
  Array_push_statementContext *_localctx = _tracker.createInstance<Array_push_statementContext>(_ctx, getState());
  enterRule(_localctx, 10, wenyanParser::RuleArray_push_statement);
  size_t _la = 0;

  auto onExit = finally([=] {
    exitRule();
  });
  try {
    enterOuterAlt(_localctx, 1);
    setState(128);
    match(wenyanParser::T__6);
    setState(129);
    _la = _input->LA(1);
    if (!(_la == wenyanParser::T__5

    || _la == wenyanParser::IDENTIFIER)) {
    _errHandler->recoverInline(this);
    }
    else {
      _errHandler->reportMatch(this);
      consume();
    }
    setState(132); 
    _errHandler->sync(this);
    _la = _input->LA(1);
    do {
      setState(130);
      match(wenyanParser::PREPOSITION_YI);
      setState(131);
      data();
      setState(134); 
      _errHandler->sync(this);
      _la = _input->LA(1);
    } while (_la == wenyanParser::PREPOSITION_YI);
    setState(137);
    _errHandler->sync(this);

    _la = _input->LA(1);
    if (_la == wenyanParser::T__22) {
      setState(136);
      reference_single_statement();
    }
   
  }
  catch (RecognitionException &e) {
    _errHandler->reportError(this, e);
    _localctx->exception = std::current_exception();
    _errHandler->recover(this, _localctx->exception);
  }

  return _localctx;
}

//----------------- Function_statementContext ------------------------------------------------------------------

wenyanParser::Function_statementContext::Function_statementContext(ParserRuleContext *parent, size_t invokingState)
  : ParserRuleContext(parent, invokingState) {
}

wenyanParser::Function_define_statementContext* wenyanParser::Function_statementContext::function_define_statement() {
  return getRuleContext<wenyanParser::Function_define_statementContext>(0);
}

wenyanParser::Function_call_statementContext* wenyanParser::Function_statementContext::function_call_statement() {
  return getRuleContext<wenyanParser::Function_call_statementContext>(0);
}

wenyanParser::Reference_single_statementContext* wenyanParser::Function_statementContext::reference_single_statement() {
  return getRuleContext<wenyanParser::Reference_single_statementContext>(0);
}


size_t wenyanParser::Function_statementContext::getRuleIndex() const {
  return wenyanParser::RuleFunction_statement;
}

void wenyanParser::Function_statementContext::enterRule(tree::ParseTreeListener *listener) {
  auto parserListener = dynamic_cast<wenyanListener *>(listener);
  if (parserListener != nullptr)
    parserListener->enterFunction_statement(this);
}

void wenyanParser::Function_statementContext::exitRule(tree::ParseTreeListener *listener) {
  auto parserListener = dynamic_cast<wenyanListener *>(listener);
  if (parserListener != nullptr)
    parserListener->exitFunction_statement(this);
}

wenyanParser::Function_statementContext* wenyanParser::function_statement() {
  Function_statementContext *_localctx = _tracker.createInstance<Function_statementContext>(_ctx, getState());
  enterRule(_localctx, 12, wenyanParser::RuleFunction_statement);
  size_t _la = 0;

  auto onExit = finally([=] {
    exitRule();
  });
  try {
    setState(144);
    _errHandler->sync(this);
    switch (_input->LA(1)) {
      case wenyanParser::T__11: {
        enterOuterAlt(_localctx, 1);
        setState(139);
        function_define_statement();
        break;
      }

      case wenyanParser::T__7:
      case wenyanParser::T__8:
      case wenyanParser::T__9: {
        enterOuterAlt(_localctx, 2);
        setState(140);
        function_call_statement();
        setState(142);
        _errHandler->sync(this);

        _la = _input->LA(1);
        if (_la == wenyanParser::T__22) {
          setState(141);
          reference_single_statement();
        }
        break;
      }

    default:
      throw NoViableAltException(this);
    }
   
  }
  catch (RecognitionException &e) {
    _errHandler->reportError(this, e);
    _localctx->exception = std::current_exception();
    _errHandler->recover(this, _localctx->exception);
  }

  return _localctx;
}

//----------------- Function_call_statementContext ------------------------------------------------------------------

wenyanParser::Function_call_statementContext::Function_call_statementContext(ParserRuleContext *parent, size_t invokingState)
  : ParserRuleContext(parent, invokingState) {
}

wenyanParser::Function_plain_callContext* wenyanParser::Function_call_statementContext::function_plain_call() {
  return getRuleContext<wenyanParser::Function_plain_callContext>(0);
}

wenyanParser::Function_nested_callContext* wenyanParser::Function_call_statementContext::function_nested_call() {
  return getRuleContext<wenyanParser::Function_nested_callContext>(0);
}


size_t wenyanParser::Function_call_statementContext::getRuleIndex() const {
  return wenyanParser::RuleFunction_call_statement;
}

void wenyanParser::Function_call_statementContext::enterRule(tree::ParseTreeListener *listener) {
  auto parserListener = dynamic_cast<wenyanListener *>(listener);
  if (parserListener != nullptr)
    parserListener->enterFunction_call_statement(this);
}

void wenyanParser::Function_call_statementContext::exitRule(tree::ParseTreeListener *listener) {
  auto parserListener = dynamic_cast<wenyanListener *>(listener);
  if (parserListener != nullptr)
    parserListener->exitFunction_call_statement(this);
}

wenyanParser::Function_call_statementContext* wenyanParser::function_call_statement() {
  Function_call_statementContext *_localctx = _tracker.createInstance<Function_call_statementContext>(_ctx, getState());
  enterRule(_localctx, 14, wenyanParser::RuleFunction_call_statement);

  auto onExit = finally([=] {
    exitRule();
  });
  try {
    setState(148);
    _errHandler->sync(this);
    switch (_input->LA(1)) {
      case wenyanParser::T__7:
      case wenyanParser::T__8: {
        enterOuterAlt(_localctx, 1);
        setState(146);
        function_plain_call();
        break;
      }

      case wenyanParser::T__9: {
        enterOuterAlt(_localctx, 2);
        setState(147);
        function_nested_call();
        break;
      }

    default:
      throw NoViableAltException(this);
    }
   
  }
  catch (RecognitionException &e) {
    _errHandler->reportError(this, e);
    _localctx->exception = std::current_exception();
    _errHandler->recover(this, _localctx->exception);
  }

  return _localctx;
}

//----------------- Function_plain_callContext ------------------------------------------------------------------

wenyanParser::Function_plain_callContext::Function_plain_callContext(ParserRuleContext *parent, size_t invokingState)
  : ParserRuleContext(parent, invokingState) {
}

tree::TerminalNode* wenyanParser::Function_plain_callContext::IDENTIFIER() {
  return getToken(wenyanParser::IDENTIFIER, 0);
}

std::vector<wenyanParser::PrepositionContext *> wenyanParser::Function_plain_callContext::preposition() {
  return getRuleContexts<wenyanParser::PrepositionContext>();
}

wenyanParser::PrepositionContext* wenyanParser::Function_plain_callContext::preposition(size_t i) {
  return getRuleContext<wenyanParser::PrepositionContext>(i);
}

std::vector<wenyanParser::DataContext *> wenyanParser::Function_plain_callContext::data() {
  return getRuleContexts<wenyanParser::DataContext>();
}

wenyanParser::DataContext* wenyanParser::Function_plain_callContext::data(size_t i) {
  return getRuleContext<wenyanParser::DataContext>(i);
}


size_t wenyanParser::Function_plain_callContext::getRuleIndex() const {
  return wenyanParser::RuleFunction_plain_call;
}

void wenyanParser::Function_plain_callContext::enterRule(tree::ParseTreeListener *listener) {
  auto parserListener = dynamic_cast<wenyanListener *>(listener);
  if (parserListener != nullptr)
    parserListener->enterFunction_plain_call(this);
}

void wenyanParser::Function_plain_callContext::exitRule(tree::ParseTreeListener *listener) {
  auto parserListener = dynamic_cast<wenyanListener *>(listener);
  if (parserListener != nullptr)
    parserListener->exitFunction_plain_call(this);
}

wenyanParser::Function_plain_callContext* wenyanParser::function_plain_call() {
  Function_plain_callContext *_localctx = _tracker.createInstance<Function_plain_callContext>(_ctx, getState());
  enterRule(_localctx, 16, wenyanParser::RuleFunction_plain_call);
  size_t _la = 0;

  auto onExit = finally([=] {
    exitRule();
  });
  try {
    setState(169);
    _errHandler->sync(this);
    switch (_input->LA(1)) {
      case wenyanParser::T__7: {
        enterOuterAlt(_localctx, 1);
        setState(150);
        match(wenyanParser::T__7);
        setState(151);
        match(wenyanParser::IDENTIFIER);
        setState(157);
        _errHandler->sync(this);
        _la = _input->LA(1);
        while (_la == wenyanParser::PREPOSITION_YU

        || _la == wenyanParser::PREPOSITION_YI) {
          setState(152);
          preposition();
          setState(153);
          data();
          setState(159);
          _errHandler->sync(this);
          _la = _input->LA(1);
        }
        break;
      }

      case wenyanParser::T__8: {
        enterOuterAlt(_localctx, 2);
        setState(160);
        match(wenyanParser::T__8);
        setState(166);
        _errHandler->sync(this);
        _la = _input->LA(1);
        while (_la == wenyanParser::PREPOSITION_YU

        || _la == wenyanParser::PREPOSITION_YI) {
          setState(161);
          preposition();
          setState(162);
          data();
          setState(168);
          _errHandler->sync(this);
          _la = _input->LA(1);
        }
        break;
      }

    default:
      throw NoViableAltException(this);
    }
   
  }
  catch (RecognitionException &e) {
    _errHandler->reportError(this, e);
    _localctx->exception = std::current_exception();
    _errHandler->recover(this, _localctx->exception);
  }

  return _localctx;
}

//----------------- Function_nested_callContext ------------------------------------------------------------------

wenyanParser::Function_nested_callContext::Function_nested_callContext(ParserRuleContext *parent, size_t invokingState)
  : ParserRuleContext(parent, invokingState) {
}

std::vector<tree::TerminalNode *> wenyanParser::Function_nested_callContext::INT_NUM() {
  return getTokens(wenyanParser::INT_NUM);
}

tree::TerminalNode* wenyanParser::Function_nested_callContext::INT_NUM(size_t i) {
  return getToken(wenyanParser::INT_NUM, i);
}

std::vector<tree::TerminalNode *> wenyanParser::Function_nested_callContext::IDENTIFIER() {
  return getTokens(wenyanParser::IDENTIFIER);
}

tree::TerminalNode* wenyanParser::Function_nested_callContext::IDENTIFIER(size_t i) {
  return getToken(wenyanParser::IDENTIFIER, i);
}


size_t wenyanParser::Function_nested_callContext::getRuleIndex() const {
  return wenyanParser::RuleFunction_nested_call;
}

void wenyanParser::Function_nested_callContext::enterRule(tree::ParseTreeListener *listener) {
  auto parserListener = dynamic_cast<wenyanListener *>(listener);
  if (parserListener != nullptr)
    parserListener->enterFunction_nested_call(this);
}

void wenyanParser::Function_nested_callContext::exitRule(tree::ParseTreeListener *listener) {
  auto parserListener = dynamic_cast<wenyanListener *>(listener);
  if (parserListener != nullptr)
    parserListener->exitFunction_nested_call(this);
}

wenyanParser::Function_nested_callContext* wenyanParser::function_nested_call() {
  Function_nested_callContext *_localctx = _tracker.createInstance<Function_nested_callContext>(_ctx, getState());
  enterRule(_localctx, 18, wenyanParser::RuleFunction_nested_call);

  auto onExit = finally([=] {
    exitRule();
  });
  try {
    size_t alt;
    enterOuterAlt(_localctx, 1);
    setState(175); 
    _errHandler->sync(this);
    alt = 1;
    do {
      switch (alt) {
        case 1: {
              setState(171);
              match(wenyanParser::T__9);
              setState(172);
              match(wenyanParser::INT_NUM);
              setState(173);
              match(wenyanParser::T__10);
              setState(174);
              match(wenyanParser::IDENTIFIER);
              break;
            }

      default:
        throw NoViableAltException(this);
      }
      setState(177); 
      _errHandler->sync(this);
      alt = getInterpreter<atn::ParserATNSimulator>()->adaptivePredict(_input, 15, _ctx);
    } while (alt != 2 && alt != atn::ATN::INVALID_ALT_NUMBER);
   
  }
  catch (RecognitionException &e) {
    _errHandler->reportError(this, e);
    _localctx->exception = std::current_exception();
    _errHandler->recover(this, _localctx->exception);
  }

  return _localctx;
}

//----------------- Function_define_statementContext ------------------------------------------------------------------

wenyanParser::Function_define_statementContext::Function_define_statementContext(ParserRuleContext *parent, size_t invokingState)
  : ParserRuleContext(parent, invokingState) {
}

std::vector<tree::TerminalNode *> wenyanParser::Function_define_statementContext::INT_NUM() {
  return getTokens(wenyanParser::INT_NUM);
}

tree::TerminalNode* wenyanParser::Function_define_statementContext::INT_NUM(size_t i) {
  return getToken(wenyanParser::INT_NUM, i);
}

wenyanParser::Reference_single_statementContext* wenyanParser::Function_define_statementContext::reference_single_statement() {
  return getRuleContext<wenyanParser::Reference_single_statementContext>(0);
}

std::vector<tree::TerminalNode *> wenyanParser::Function_define_statementContext::IDENTIFIER() {
  return getTokens(wenyanParser::IDENTIFIER);
}

tree::TerminalNode* wenyanParser::Function_define_statementContext::IDENTIFIER(size_t i) {
  return getToken(wenyanParser::IDENTIFIER, i);
}

std::vector<wenyanParser::StatementContext *> wenyanParser::Function_define_statementContext::statement() {
  return getRuleContexts<wenyanParser::StatementContext>();
}

wenyanParser::StatementContext* wenyanParser::Function_define_statementContext::statement(size_t i) {
  return getRuleContext<wenyanParser::StatementContext>(i);
}

std::vector<tree::TerminalNode *> wenyanParser::Function_define_statementContext::TYPE() {
  return getTokens(wenyanParser::TYPE);
}

tree::TerminalNode* wenyanParser::Function_define_statementContext::TYPE(size_t i) {
  return getToken(wenyanParser::TYPE, i);
}


size_t wenyanParser::Function_define_statementContext::getRuleIndex() const {
  return wenyanParser::RuleFunction_define_statement;
}

void wenyanParser::Function_define_statementContext::enterRule(tree::ParseTreeListener *listener) {
  auto parserListener = dynamic_cast<wenyanListener *>(listener);
  if (parserListener != nullptr)
    parserListener->enterFunction_define_statement(this);
}

void wenyanParser::Function_define_statementContext::exitRule(tree::ParseTreeListener *listener) {
  auto parserListener = dynamic_cast<wenyanListener *>(listener);
  if (parserListener != nullptr)
    parserListener->exitFunction_define_statement(this);
}

wenyanParser::Function_define_statementContext* wenyanParser::function_define_statement() {
  Function_define_statementContext *_localctx = _tracker.createInstance<Function_define_statementContext>(_ctx, getState());
  enterRule(_localctx, 20, wenyanParser::RuleFunction_define_statement);
  size_t _la = 0;

  auto onExit = finally([=] {
    exitRule();
  });
  try {
    enterOuterAlt(_localctx, 1);
    setState(179);
    match(wenyanParser::T__11);
    setState(180);
    match(wenyanParser::INT_NUM);
    setState(181);
    match(wenyanParser::T__12);
    setState(182);
    reference_single_statement();
    setState(197);
    _errHandler->sync(this);

    _la = _input->LA(1);
    if (_la == wenyanParser::T__13) {
      setState(183);
      match(wenyanParser::T__13);
      setState(184);
      match(wenyanParser::T__14);
      setState(193); 
      _errHandler->sync(this);
      _la = _input->LA(1);
      do {
        setState(185);
        match(wenyanParser::INT_NUM);
        setState(186);
        match(wenyanParser::TYPE);
        setState(189); 
        _errHandler->sync(this);
        _la = _input->LA(1);
        do {
          setState(187);
          match(wenyanParser::T__15);
          setState(188);
          match(wenyanParser::IDENTIFIER);
          setState(191); 
          _errHandler->sync(this);
          _la = _input->LA(1);
        } while (_la == wenyanParser::T__15);
        setState(195); 
        _errHandler->sync(this);
        _la = _input->LA(1);
      } while (_la == wenyanParser::INT_NUM);
    }
    setState(199);
    _la = _input->LA(1);
    if (!(_la == wenyanParser::T__16

    || _la == wenyanParser::T__17)) {
    _errHandler->recoverInline(this);
    }
    else {
      _errHandler->reportMatch(this);
      consume();
    }
    setState(203);
    _errHandler->sync(this);
    _la = _input->LA(1);
    while ((((_la & ~ 0x3fULL) == 0) &&
      ((1ULL << _la) & ((1ULL << wenyanParser::T__0)
      | (1ULL << wenyanParser::T__4)
      | (1ULL << wenyanParser::T__6)
      | (1ULL << wenyanParser::T__7)
      | (1ULL << wenyanParser::T__8)
      | (1ULL << wenyanParser::T__9)
      | (1ULL << wenyanParser::T__11)
      | (1ULL << wenyanParser::T__21)
      | (1ULL << wenyanParser::T__23)
      | (1ULL << wenyanParser::T__24)
      | (1ULL << wenyanParser::T__25)
      | (1ULL << wenyanParser::T__29)
      | (1ULL << wenyanParser::T__30)
      | (1ULL << wenyanParser::T__31)
      | (1ULL << wenyanParser::T__32)
      | (1ULL << wenyanParser::T__40)
      | (1ULL << wenyanParser::T__41)
      | (1ULL << wenyanParser::T__42)
      | (1ULL << wenyanParser::T__43)
      | (1ULL << wenyanParser::T__44)
      | (1ULL << wenyanParser::ARITH_BINARY_OP)
      | (1ULL << wenyanParser::UNARY_OP)
      | (1ULL << wenyanParser::IF)
      | (1ULL << wenyanParser::FOR_START_ARR)
      | (1ULL << wenyanParser::FOR_START_ENUM)
      | (1ULL << wenyanParser::FOR_START_WHILE))) != 0) || _la == wenyanParser::BREAK) {
      setState(200);
      statement();
      setState(205);
      _errHandler->sync(this);
      _la = _input->LA(1);
    }
    setState(206);
    match(wenyanParser::T__18);
    setState(207);
    match(wenyanParser::IDENTIFIER);
    setState(208);
    match(wenyanParser::T__19);
   
  }
  catch (RecognitionException &e) {
    _errHandler->reportError(this, e);
    _localctx->exception = std::current_exception();
    _errHandler->recover(this, _localctx->exception);
  }

  return _localctx;
}

//----------------- If_statementContext ------------------------------------------------------------------

wenyanParser::If_statementContext::If_statementContext(ParserRuleContext *parent, size_t invokingState)
  : ParserRuleContext(parent, invokingState) {
}

tree::TerminalNode* wenyanParser::If_statementContext::IF() {
  return getToken(wenyanParser::IF, 0);
}

wenyanParser::If_expressionContext* wenyanParser::If_statementContext::if_expression() {
  return getRuleContext<wenyanParser::If_expressionContext>(0);
}

tree::TerminalNode* wenyanParser::If_statementContext::FOR_IF_END() {
  return getToken(wenyanParser::FOR_IF_END, 0);
}

std::vector<wenyanParser::StatementContext *> wenyanParser::If_statementContext::statement() {
  return getRuleContexts<wenyanParser::StatementContext>();
}

wenyanParser::StatementContext* wenyanParser::If_statementContext::statement(size_t i) {
  return getRuleContext<wenyanParser::StatementContext>(i);
}

tree::TerminalNode* wenyanParser::If_statementContext::ELSE() {
  return getToken(wenyanParser::ELSE, 0);
}


size_t wenyanParser::If_statementContext::getRuleIndex() const {
  return wenyanParser::RuleIf_statement;
}

void wenyanParser::If_statementContext::enterRule(tree::ParseTreeListener *listener) {
  auto parserListener = dynamic_cast<wenyanListener *>(listener);
  if (parserListener != nullptr)
    parserListener->enterIf_statement(this);
}

void wenyanParser::If_statementContext::exitRule(tree::ParseTreeListener *listener) {
  auto parserListener = dynamic_cast<wenyanListener *>(listener);
  if (parserListener != nullptr)
    parserListener->exitIf_statement(this);
}

wenyanParser::If_statementContext* wenyanParser::if_statement() {
  If_statementContext *_localctx = _tracker.createInstance<If_statementContext>(_ctx, getState());
  enterRule(_localctx, 22, wenyanParser::RuleIf_statement);
  size_t _la = 0;

  auto onExit = finally([=] {
    exitRule();
  });
  try {
    enterOuterAlt(_localctx, 1);
    setState(210);
    match(wenyanParser::IF);
    setState(211);
    if_expression();
    setState(212);
    match(wenyanParser::T__20);
    setState(214); 
    _errHandler->sync(this);
    _la = _input->LA(1);
    do {
      setState(213);
      statement();
      setState(216); 
      _errHandler->sync(this);
      _la = _input->LA(1);
    } while ((((_la & ~ 0x3fULL) == 0) &&
      ((1ULL << _la) & ((1ULL << wenyanParser::T__0)
      | (1ULL << wenyanParser::T__4)
      | (1ULL << wenyanParser::T__6)
      | (1ULL << wenyanParser::T__7)
      | (1ULL << wenyanParser::T__8)
      | (1ULL << wenyanParser::T__9)
      | (1ULL << wenyanParser::T__11)
      | (1ULL << wenyanParser::T__21)
      | (1ULL << wenyanParser::T__23)
      | (1ULL << wenyanParser::T__24)
      | (1ULL << wenyanParser::T__25)
      | (1ULL << wenyanParser::T__29)
      | (1ULL << wenyanParser::T__30)
      | (1ULL << wenyanParser::T__31)
      | (1ULL << wenyanParser::T__32)
      | (1ULL << wenyanParser::T__40)
      | (1ULL << wenyanParser::T__41)
      | (1ULL << wenyanParser::T__42)
      | (1ULL << wenyanParser::T__43)
      | (1ULL << wenyanParser::T__44)
      | (1ULL << wenyanParser::ARITH_BINARY_OP)
      | (1ULL << wenyanParser::UNARY_OP)
      | (1ULL << wenyanParser::IF)
      | (1ULL << wenyanParser::FOR_START_ARR)
      | (1ULL << wenyanParser::FOR_START_ENUM)
      | (1ULL << wenyanParser::FOR_START_WHILE))) != 0) || _la == wenyanParser::BREAK);
    setState(224);
    _errHandler->sync(this);

    _la = _input->LA(1);
    if (_la == wenyanParser::ELSE) {
      setState(218);
      match(wenyanParser::ELSE);
      setState(220); 
      _errHandler->sync(this);
      _la = _input->LA(1);
      do {
        setState(219);
        statement();
        setState(222); 
        _errHandler->sync(this);
        _la = _input->LA(1);
      } while ((((_la & ~ 0x3fULL) == 0) &&
        ((1ULL << _la) & ((1ULL << wenyanParser::T__0)
        | (1ULL << wenyanParser::T__4)
        | (1ULL << wenyanParser::T__6)
        | (1ULL << wenyanParser::T__7)
        | (1ULL << wenyanParser::T__8)
        | (1ULL << wenyanParser::T__9)
        | (1ULL << wenyanParser::T__11)
        | (1ULL << wenyanParser::T__21)
        | (1ULL << wenyanParser::T__23)
        | (1ULL << wenyanParser::T__24)
        | (1ULL << wenyanParser::T__25)
        | (1ULL << wenyanParser::T__29)
        | (1ULL << wenyanParser::T__30)
        | (1ULL << wenyanParser::T__31)
        | (1ULL << wenyanParser::T__32)
        | (1ULL << wenyanParser::T__40)
        | (1ULL << wenyanParser::T__41)
        | (1ULL << wenyanParser::T__42)
        | (1ULL << wenyanParser::T__43)
        | (1ULL << wenyanParser::T__44)
        | (1ULL << wenyanParser::ARITH_BINARY_OP)
        | (1ULL << wenyanParser::UNARY_OP)
        | (1ULL << wenyanParser::IF)
        | (1ULL << wenyanParser::FOR_START_ARR)
        | (1ULL << wenyanParser::FOR_START_ENUM)
        | (1ULL << wenyanParser::FOR_START_WHILE))) != 0) || _la == wenyanParser::BREAK);
    }
    setState(226);
    match(wenyanParser::FOR_IF_END);
   
  }
  catch (RecognitionException &e) {
    _errHandler->reportError(this, e);
    _localctx->exception = std::current_exception();
    _errHandler->recover(this, _localctx->exception);
  }

  return _localctx;
}

//----------------- If_expressionContext ------------------------------------------------------------------

wenyanParser::If_expressionContext::If_expressionContext(ParserRuleContext *parent, size_t invokingState)
  : ParserRuleContext(parent, invokingState) {
}

wenyanParser::Unary_if_expressionContext* wenyanParser::If_expressionContext::unary_if_expression() {
  return getRuleContext<wenyanParser::Unary_if_expressionContext>(0);
}

wenyanParser::Binary_if_expressionContext* wenyanParser::If_expressionContext::binary_if_expression() {
  return getRuleContext<wenyanParser::Binary_if_expressionContext>(0);
}


size_t wenyanParser::If_expressionContext::getRuleIndex() const {
  return wenyanParser::RuleIf_expression;
}

void wenyanParser::If_expressionContext::enterRule(tree::ParseTreeListener *listener) {
  auto parserListener = dynamic_cast<wenyanListener *>(listener);
  if (parserListener != nullptr)
    parserListener->enterIf_expression(this);
}

void wenyanParser::If_expressionContext::exitRule(tree::ParseTreeListener *listener) {
  auto parserListener = dynamic_cast<wenyanListener *>(listener);
  if (parserListener != nullptr)
    parserListener->exitIf_expression(this);
}

wenyanParser::If_expressionContext* wenyanParser::if_expression() {
  If_expressionContext *_localctx = _tracker.createInstance<If_expressionContext>(_ctx, getState());
  enterRule(_localctx, 24, wenyanParser::RuleIf_expression);

  auto onExit = finally([=] {
    exitRule();
  });
  try {
    setState(230);
    _errHandler->sync(this);
    switch (getInterpreter<atn::ParserATNSimulator>()->adaptivePredict(_input, 23, _ctx)) {
    case 1: {
      enterOuterAlt(_localctx, 1);
      setState(228);
      unary_if_expression();
      break;
    }

    case 2: {
      enterOuterAlt(_localctx, 2);
      setState(229);
      binary_if_expression();
      break;
    }

    }
   
  }
  catch (RecognitionException &e) {
    _errHandler->reportError(this, e);
    _localctx->exception = std::current_exception();
    _errHandler->recover(this, _localctx->exception);
  }

  return _localctx;
}

//----------------- Unary_if_expressionContext ------------------------------------------------------------------

wenyanParser::Unary_if_expressionContext::Unary_if_expressionContext(ParserRuleContext *parent, size_t invokingState)
  : ParserRuleContext(parent, invokingState) {
}

wenyanParser::DataContext* wenyanParser::Unary_if_expressionContext::data() {
  return getRuleContext<wenyanParser::DataContext>(0);
}

std::vector<tree::TerminalNode *> wenyanParser::Unary_if_expressionContext::IDENTIFIER() {
  return getTokens(wenyanParser::IDENTIFIER);
}

tree::TerminalNode* wenyanParser::Unary_if_expressionContext::IDENTIFIER(size_t i) {
  return getToken(wenyanParser::IDENTIFIER, i);
}

tree::TerminalNode* wenyanParser::Unary_if_expressionContext::STRING_LITERAL() {
  return getToken(wenyanParser::STRING_LITERAL, 0);
}


size_t wenyanParser::Unary_if_expressionContext::getRuleIndex() const {
  return wenyanParser::RuleUnary_if_expression;
}

void wenyanParser::Unary_if_expressionContext::enterRule(tree::ParseTreeListener *listener) {
  auto parserListener = dynamic_cast<wenyanListener *>(listener);
  if (parserListener != nullptr)
    parserListener->enterUnary_if_expression(this);
}

void wenyanParser::Unary_if_expressionContext::exitRule(tree::ParseTreeListener *listener) {
  auto parserListener = dynamic_cast<wenyanListener *>(listener);
  if (parserListener != nullptr)
    parserListener->exitUnary_if_expression(this);
}

wenyanParser::Unary_if_expressionContext* wenyanParser::unary_if_expression() {
  Unary_if_expressionContext *_localctx = _tracker.createInstance<Unary_if_expressionContext>(_ctx, getState());
  enterRule(_localctx, 26, wenyanParser::RuleUnary_if_expression);
  size_t _la = 0;

  auto onExit = finally([=] {
    exitRule();
  });
  try {
    setState(237);
    _errHandler->sync(this);
    switch (getInterpreter<atn::ParserATNSimulator>()->adaptivePredict(_input, 24, _ctx)) {
    case 1: {
      enterOuterAlt(_localctx, 1);
      setState(232);
      data();
      break;
    }

    case 2: {
      enterOuterAlt(_localctx, 2);
      setState(233);
      match(wenyanParser::IDENTIFIER);
      setState(234);
      match(wenyanParser::T__1);
      setState(235);
      _la = _input->LA(1);
      if (!((((_la & ~ 0x3fULL) == 0) &&
        ((1ULL << _la) & ((1ULL << wenyanParser::T__3)
        | (1ULL << wenyanParser::STRING_LITERAL)
        | (1ULL << wenyanParser::IDENTIFIER))) != 0))) {
      _errHandler->recoverInline(this);
      }
      else {
        _errHandler->reportMatch(this);
        consume();
      }
      break;
    }

    case 3: {
      enterOuterAlt(_localctx, 3);
      setState(236);
      match(wenyanParser::T__5);
      break;
    }

    }
   
  }
  catch (RecognitionException &e) {
    _errHandler->reportError(this, e);
    _localctx->exception = std::current_exception();
    _errHandler->recover(this, _localctx->exception);
  }

  return _localctx;
}

//----------------- Binary_if_expressionContext ------------------------------------------------------------------

wenyanParser::Binary_if_expressionContext::Binary_if_expressionContext(ParserRuleContext *parent, size_t invokingState)
  : ParserRuleContext(parent, invokingState) {
}

std::vector<wenyanParser::Unary_if_expressionContext *> wenyanParser::Binary_if_expressionContext::unary_if_expression() {
  return getRuleContexts<wenyanParser::Unary_if_expressionContext>();
}

wenyanParser::Unary_if_expressionContext* wenyanParser::Binary_if_expressionContext::unary_if_expression(size_t i) {
  return getRuleContext<wenyanParser::Unary_if_expressionContext>(i);
}

tree::TerminalNode* wenyanParser::Binary_if_expressionContext::IF_LOGIC_OP() {
  return getToken(wenyanParser::IF_LOGIC_OP, 0);
}


size_t wenyanParser::Binary_if_expressionContext::getRuleIndex() const {
  return wenyanParser::RuleBinary_if_expression;
}

void wenyanParser::Binary_if_expressionContext::enterRule(tree::ParseTreeListener *listener) {
  auto parserListener = dynamic_cast<wenyanListener *>(listener);
  if (parserListener != nullptr)
    parserListener->enterBinary_if_expression(this);
}

void wenyanParser::Binary_if_expressionContext::exitRule(tree::ParseTreeListener *listener) {
  auto parserListener = dynamic_cast<wenyanListener *>(listener);
  if (parserListener != nullptr)
    parserListener->exitBinary_if_expression(this);
}

wenyanParser::Binary_if_expressionContext* wenyanParser::binary_if_expression() {
  Binary_if_expressionContext *_localctx = _tracker.createInstance<Binary_if_expressionContext>(_ctx, getState());
  enterRule(_localctx, 28, wenyanParser::RuleBinary_if_expression);

  auto onExit = finally([=] {
    exitRule();
  });
  try {
    enterOuterAlt(_localctx, 1);
    setState(239);
    unary_if_expression();
    setState(240);
    match(wenyanParser::IF_LOGIC_OP);
    setState(241);
    unary_if_expression();
   
  }
  catch (RecognitionException &e) {
    _errHandler->reportError(this, e);
    _localctx->exception = std::current_exception();
    _errHandler->recover(this, _localctx->exception);
  }

  return _localctx;
}

//----------------- Declare_statementContext ------------------------------------------------------------------

wenyanParser::Declare_statementContext::Declare_statementContext(ParserRuleContext *parent, size_t invokingState)
  : ParserRuleContext(parent, invokingState) {
}

tree::TerminalNode* wenyanParser::Declare_statementContext::INT_NUM() {
  return getToken(wenyanParser::INT_NUM, 0);
}

tree::TerminalNode* wenyanParser::Declare_statementContext::TYPE() {
  return getToken(wenyanParser::TYPE, 0);
}

std::vector<wenyanParser::DataContext *> wenyanParser::Declare_statementContext::data() {
  return getRuleContexts<wenyanParser::DataContext>();
}

wenyanParser::DataContext* wenyanParser::Declare_statementContext::data(size_t i) {
  return getRuleContext<wenyanParser::DataContext>(i);
}


size_t wenyanParser::Declare_statementContext::getRuleIndex() const {
  return wenyanParser::RuleDeclare_statement;
}

void wenyanParser::Declare_statementContext::enterRule(tree::ParseTreeListener *listener) {
  auto parserListener = dynamic_cast<wenyanListener *>(listener);
  if (parserListener != nullptr)
    parserListener->enterDeclare_statement(this);
}

void wenyanParser::Declare_statementContext::exitRule(tree::ParseTreeListener *listener) {
  auto parserListener = dynamic_cast<wenyanListener *>(listener);
  if (parserListener != nullptr)
    parserListener->exitDeclare_statement(this);
}

wenyanParser::Declare_statementContext* wenyanParser::declare_statement() {
  Declare_statementContext *_localctx = _tracker.createInstance<Declare_statementContext>(_ctx, getState());
  enterRule(_localctx, 30, wenyanParser::RuleDeclare_statement);
  size_t _la = 0;

  auto onExit = finally([=] {
    exitRule();
  });
  try {
    enterOuterAlt(_localctx, 1);
    setState(243);
    _la = _input->LA(1);
    if (!(_la == wenyanParser::T__11

    || _la == wenyanParser::T__21)) {
    _errHandler->recoverInline(this);
    }
    else {
      _errHandler->reportMatch(this);
      consume();
    }
    setState(244);
    match(wenyanParser::INT_NUM);
    setState(245);
    match(wenyanParser::TYPE);
    setState(250);
    _errHandler->sync(this);
    _la = _input->LA(1);
    while (_la == wenyanParser::T__15) {
      setState(246);
      match(wenyanParser::T__15);
      setState(247);
      data();
      setState(252);
      _errHandler->sync(this);
      _la = _input->LA(1);
    }
   
  }
  catch (RecognitionException &e) {
    _errHandler->reportError(this, e);
    _localctx->exception = std::current_exception();
    _errHandler->recover(this, _localctx->exception);
  }

  return _localctx;
}

//----------------- Define_statementContext ------------------------------------------------------------------

wenyanParser::Define_statementContext::Define_statementContext(ParserRuleContext *parent, size_t invokingState)
  : ParserRuleContext(parent, invokingState) {
}

wenyanParser::Declare_statementContext* wenyanParser::Define_statementContext::declare_statement() {
  return getRuleContext<wenyanParser::Declare_statementContext>(0);
}

wenyanParser::Reference_multi_statementContext* wenyanParser::Define_statementContext::reference_multi_statement() {
  return getRuleContext<wenyanParser::Reference_multi_statementContext>(0);
}

wenyanParser::Init_define_statementContext* wenyanParser::Define_statementContext::init_define_statement() {
  return getRuleContext<wenyanParser::Init_define_statementContext>(0);
}


size_t wenyanParser::Define_statementContext::getRuleIndex() const {
  return wenyanParser::RuleDefine_statement;
}

void wenyanParser::Define_statementContext::enterRule(tree::ParseTreeListener *listener) {
  auto parserListener = dynamic_cast<wenyanListener *>(listener);
  if (parserListener != nullptr)
    parserListener->enterDefine_statement(this);
}

void wenyanParser::Define_statementContext::exitRule(tree::ParseTreeListener *listener) {
  auto parserListener = dynamic_cast<wenyanListener *>(listener);
  if (parserListener != nullptr)
    parserListener->exitDefine_statement(this);
}

wenyanParser::Define_statementContext* wenyanParser::define_statement() {
  Define_statementContext *_localctx = _tracker.createInstance<Define_statementContext>(_ctx, getState());
  enterRule(_localctx, 32, wenyanParser::RuleDefine_statement);

  auto onExit = finally([=] {
    exitRule();
  });
  try {
    setState(257);
    _errHandler->sync(this);
    switch (_input->LA(1)) {
      case wenyanParser::T__11:
      case wenyanParser::T__21: {
        enterOuterAlt(_localctx, 1);
        setState(253);
        declare_statement();
        setState(254);
        reference_multi_statement();
        break;
      }

      case wenyanParser::T__23: {
        enterOuterAlt(_localctx, 2);
        setState(256);
        init_define_statement();
        break;
      }

    default:
      throw NoViableAltException(this);
    }
   
  }
  catch (RecognitionException &e) {
    _errHandler->reportError(this, e);
    _localctx->exception = std::current_exception();
    _errHandler->recover(this, _localctx->exception);
  }

  return _localctx;
}

//----------------- Reference_multi_statementContext ------------------------------------------------------------------

wenyanParser::Reference_multi_statementContext::Reference_multi_statementContext(ParserRuleContext *parent, size_t invokingState)
  : ParserRuleContext(parent, invokingState) {
}

std::vector<tree::TerminalNode *> wenyanParser::Reference_multi_statementContext::IDENTIFIER() {
  return getTokens(wenyanParser::IDENTIFIER);
}

tree::TerminalNode* wenyanParser::Reference_multi_statementContext::IDENTIFIER(size_t i) {
  return getToken(wenyanParser::IDENTIFIER, i);
}


size_t wenyanParser::Reference_multi_statementContext::getRuleIndex() const {
  return wenyanParser::RuleReference_multi_statement;
}

void wenyanParser::Reference_multi_statementContext::enterRule(tree::ParseTreeListener *listener) {
  auto parserListener = dynamic_cast<wenyanListener *>(listener);
  if (parserListener != nullptr)
    parserListener->enterReference_multi_statement(this);
}

void wenyanParser::Reference_multi_statementContext::exitRule(tree::ParseTreeListener *listener) {
  auto parserListener = dynamic_cast<wenyanListener *>(listener);
  if (parserListener != nullptr)
    parserListener->exitReference_multi_statement(this);
}

wenyanParser::Reference_multi_statementContext* wenyanParser::reference_multi_statement() {
  Reference_multi_statementContext *_localctx = _tracker.createInstance<Reference_multi_statementContext>(_ctx, getState());
  enterRule(_localctx, 34, wenyanParser::RuleReference_multi_statement);
  size_t _la = 0;

  auto onExit = finally([=] {
    exitRule();
  });
  try {
    enterOuterAlt(_localctx, 1);
    setState(259);
    match(wenyanParser::T__22);
    setState(262); 
    _errHandler->sync(this);
    _la = _input->LA(1);
    do {
      setState(260);
      match(wenyanParser::T__15);
      setState(261);
      match(wenyanParser::IDENTIFIER);
      setState(264); 
      _errHandler->sync(this);
      _la = _input->LA(1);
    } while (_la == wenyanParser::T__15);
   
  }
  catch (RecognitionException &e) {
    _errHandler->reportError(this, e);
    _localctx->exception = std::current_exception();
    _errHandler->recover(this, _localctx->exception);
  }

  return _localctx;
}

//----------------- Reference_single_statementContext ------------------------------------------------------------------

wenyanParser::Reference_single_statementContext::Reference_single_statementContext(ParserRuleContext *parent, size_t invokingState)
  : ParserRuleContext(parent, invokingState) {
}

tree::TerminalNode* wenyanParser::Reference_single_statementContext::IDENTIFIER() {
  return getToken(wenyanParser::IDENTIFIER, 0);
}


size_t wenyanParser::Reference_single_statementContext::getRuleIndex() const {
  return wenyanParser::RuleReference_single_statement;
}

void wenyanParser::Reference_single_statementContext::enterRule(tree::ParseTreeListener *listener) {
  auto parserListener = dynamic_cast<wenyanListener *>(listener);
  if (parserListener != nullptr)
    parserListener->enterReference_single_statement(this);
}

void wenyanParser::Reference_single_statementContext::exitRule(tree::ParseTreeListener *listener) {
  auto parserListener = dynamic_cast<wenyanListener *>(listener);
  if (parserListener != nullptr)
    parserListener->exitReference_single_statement(this);
}

wenyanParser::Reference_single_statementContext* wenyanParser::reference_single_statement() {
  Reference_single_statementContext *_localctx = _tracker.createInstance<Reference_single_statementContext>(_ctx, getState());
  enterRule(_localctx, 36, wenyanParser::RuleReference_single_statement);

  auto onExit = finally([=] {
    exitRule();
  });
  try {
    enterOuterAlt(_localctx, 1);
    setState(266);
    match(wenyanParser::T__22);

    setState(267);
    match(wenyanParser::T__15);
    setState(268);
    match(wenyanParser::IDENTIFIER);
   
  }
  catch (RecognitionException &e) {
    _errHandler->reportError(this, e);
    _localctx->exception = std::current_exception();
    _errHandler->recover(this, _localctx->exception);
  }

  return _localctx;
}

//----------------- Init_define_statementContext ------------------------------------------------------------------

wenyanParser::Init_define_statementContext::Init_define_statementContext(ParserRuleContext *parent, size_t invokingState)
  : ParserRuleContext(parent, invokingState) {
}

tree::TerminalNode* wenyanParser::Init_define_statementContext::TYPE() {
  return getToken(wenyanParser::TYPE, 0);
}

wenyanParser::DataContext* wenyanParser::Init_define_statementContext::data() {
  return getRuleContext<wenyanParser::DataContext>(0);
}

wenyanParser::Reference_single_statementContext* wenyanParser::Init_define_statementContext::reference_single_statement() {
  return getRuleContext<wenyanParser::Reference_single_statementContext>(0);
}


size_t wenyanParser::Init_define_statementContext::getRuleIndex() const {
  return wenyanParser::RuleInit_define_statement;
}

void wenyanParser::Init_define_statementContext::enterRule(tree::ParseTreeListener *listener) {
  auto parserListener = dynamic_cast<wenyanListener *>(listener);
  if (parserListener != nullptr)
    parserListener->enterInit_define_statement(this);
}

void wenyanParser::Init_define_statementContext::exitRule(tree::ParseTreeListener *listener) {
  auto parserListener = dynamic_cast<wenyanListener *>(listener);
  if (parserListener != nullptr)
    parserListener->exitInit_define_statement(this);
}

wenyanParser::Init_define_statementContext* wenyanParser::init_define_statement() {
  Init_define_statementContext *_localctx = _tracker.createInstance<Init_define_statementContext>(_ctx, getState());
  enterRule(_localctx, 38, wenyanParser::RuleInit_define_statement);
  size_t _la = 0;

  auto onExit = finally([=] {
    exitRule();
  });
  try {
    enterOuterAlt(_localctx, 1);
    setState(270);
    match(wenyanParser::T__23);
    setState(271);
    match(wenyanParser::TYPE);
    setState(272);
    data();
    setState(274);
    _errHandler->sync(this);

    _la = _input->LA(1);
    if (_la == wenyanParser::T__22) {
      setState(273);
      reference_single_statement();
    }
   
  }
  catch (RecognitionException &e) {
    _errHandler->reportError(this, e);
    _localctx->exception = std::current_exception();
    _errHandler->recover(this, _localctx->exception);
  }

  return _localctx;
}

//----------------- For_statementContext ------------------------------------------------------------------

wenyanParser::For_statementContext::For_statementContext(ParserRuleContext *parent, size_t invokingState)
  : ParserRuleContext(parent, invokingState) {
}

wenyanParser::For_arr_statementContext* wenyanParser::For_statementContext::for_arr_statement() {
  return getRuleContext<wenyanParser::For_arr_statementContext>(0);
}

wenyanParser::For_enum_statementContext* wenyanParser::For_statementContext::for_enum_statement() {
  return getRuleContext<wenyanParser::For_enum_statementContext>(0);
}

wenyanParser::For_while_statementContext* wenyanParser::For_statementContext::for_while_statement() {
  return getRuleContext<wenyanParser::For_while_statementContext>(0);
}


size_t wenyanParser::For_statementContext::getRuleIndex() const {
  return wenyanParser::RuleFor_statement;
}

void wenyanParser::For_statementContext::enterRule(tree::ParseTreeListener *listener) {
  auto parserListener = dynamic_cast<wenyanListener *>(listener);
  if (parserListener != nullptr)
    parserListener->enterFor_statement(this);
}

void wenyanParser::For_statementContext::exitRule(tree::ParseTreeListener *listener) {
  auto parserListener = dynamic_cast<wenyanListener *>(listener);
  if (parserListener != nullptr)
    parserListener->exitFor_statement(this);
}

wenyanParser::For_statementContext* wenyanParser::for_statement() {
  For_statementContext *_localctx = _tracker.createInstance<For_statementContext>(_ctx, getState());
  enterRule(_localctx, 40, wenyanParser::RuleFor_statement);

  auto onExit = finally([=] {
    exitRule();
  });
  try {
    setState(279);
    _errHandler->sync(this);
    switch (_input->LA(1)) {
      case wenyanParser::FOR_START_ARR: {
        enterOuterAlt(_localctx, 1);
        setState(276);
        for_arr_statement();
        break;
      }

      case wenyanParser::FOR_START_ENUM: {
        enterOuterAlt(_localctx, 2);
        setState(277);
        for_enum_statement();
        break;
      }

      case wenyanParser::FOR_START_WHILE: {
        enterOuterAlt(_localctx, 3);
        setState(278);
        for_while_statement();
        break;
      }

    default:
      throw NoViableAltException(this);
    }
   
  }
  catch (RecognitionException &e) {
    _errHandler->reportError(this, e);
    _localctx->exception = std::current_exception();
    _errHandler->recover(this, _localctx->exception);
  }

  return _localctx;
}

//----------------- For_arr_statementContext ------------------------------------------------------------------

wenyanParser::For_arr_statementContext::For_arr_statementContext(ParserRuleContext *parent, size_t invokingState)
  : ParserRuleContext(parent, invokingState) {
}

tree::TerminalNode* wenyanParser::For_arr_statementContext::FOR_START_ARR() {
  return getToken(wenyanParser::FOR_START_ARR, 0);
}

std::vector<tree::TerminalNode *> wenyanParser::For_arr_statementContext::IDENTIFIER() {
  return getTokens(wenyanParser::IDENTIFIER);
}

tree::TerminalNode* wenyanParser::For_arr_statementContext::IDENTIFIER(size_t i) {
  return getToken(wenyanParser::IDENTIFIER, i);
}

tree::TerminalNode* wenyanParser::For_arr_statementContext::FOR_MID_ARR() {
  return getToken(wenyanParser::FOR_MID_ARR, 0);
}

tree::TerminalNode* wenyanParser::For_arr_statementContext::FOR_IF_END() {
  return getToken(wenyanParser::FOR_IF_END, 0);
}

std::vector<wenyanParser::StatementContext *> wenyanParser::For_arr_statementContext::statement() {
  return getRuleContexts<wenyanParser::StatementContext>();
}

wenyanParser::StatementContext* wenyanParser::For_arr_statementContext::statement(size_t i) {
  return getRuleContext<wenyanParser::StatementContext>(i);
}


size_t wenyanParser::For_arr_statementContext::getRuleIndex() const {
  return wenyanParser::RuleFor_arr_statement;
}

void wenyanParser::For_arr_statementContext::enterRule(tree::ParseTreeListener *listener) {
  auto parserListener = dynamic_cast<wenyanListener *>(listener);
  if (parserListener != nullptr)
    parserListener->enterFor_arr_statement(this);
}

void wenyanParser::For_arr_statementContext::exitRule(tree::ParseTreeListener *listener) {
  auto parserListener = dynamic_cast<wenyanListener *>(listener);
  if (parserListener != nullptr)
    parserListener->exitFor_arr_statement(this);
}

wenyanParser::For_arr_statementContext* wenyanParser::for_arr_statement() {
  For_arr_statementContext *_localctx = _tracker.createInstance<For_arr_statementContext>(_ctx, getState());
  enterRule(_localctx, 42, wenyanParser::RuleFor_arr_statement);
  size_t _la = 0;

  auto onExit = finally([=] {
    exitRule();
  });
  try {
    enterOuterAlt(_localctx, 1);
    setState(281);
    match(wenyanParser::FOR_START_ARR);
    setState(282);
    match(wenyanParser::IDENTIFIER);
    setState(283);
    match(wenyanParser::FOR_MID_ARR);
    setState(284);
    match(wenyanParser::IDENTIFIER);
    setState(288);
    _errHandler->sync(this);
    _la = _input->LA(1);
    while ((((_la & ~ 0x3fULL) == 0) &&
      ((1ULL << _la) & ((1ULL << wenyanParser::T__0)
      | (1ULL << wenyanParser::T__4)
      | (1ULL << wenyanParser::T__6)
      | (1ULL << wenyanParser::T__7)
      | (1ULL << wenyanParser::T__8)
      | (1ULL << wenyanParser::T__9)
      | (1ULL << wenyanParser::T__11)
      | (1ULL << wenyanParser::T__21)
      | (1ULL << wenyanParser::T__23)
      | (1ULL << wenyanParser::T__24)
      | (1ULL << wenyanParser::T__25)
      | (1ULL << wenyanParser::T__29)
      | (1ULL << wenyanParser::T__30)
      | (1ULL << wenyanParser::T__31)
      | (1ULL << wenyanParser::T__32)
      | (1ULL << wenyanParser::T__40)
      | (1ULL << wenyanParser::T__41)
      | (1ULL << wenyanParser::T__42)
      | (1ULL << wenyanParser::T__43)
      | (1ULL << wenyanParser::T__44)
      | (1ULL << wenyanParser::ARITH_BINARY_OP)
      | (1ULL << wenyanParser::UNARY_OP)
      | (1ULL << wenyanParser::IF)
      | (1ULL << wenyanParser::FOR_START_ARR)
      | (1ULL << wenyanParser::FOR_START_ENUM)
      | (1ULL << wenyanParser::FOR_START_WHILE))) != 0) || _la == wenyanParser::BREAK) {
      setState(285);
      statement();
      setState(290);
      _errHandler->sync(this);
      _la = _input->LA(1);
    }
    setState(291);
    match(wenyanParser::FOR_IF_END);
   
  }
  catch (RecognitionException &e) {
    _errHandler->reportError(this, e);
    _localctx->exception = std::current_exception();
    _errHandler->recover(this, _localctx->exception);
  }

  return _localctx;
}

//----------------- For_enum_statementContext ------------------------------------------------------------------

wenyanParser::For_enum_statementContext::For_enum_statementContext(ParserRuleContext *parent, size_t invokingState)
  : ParserRuleContext(parent, invokingState) {
}

tree::TerminalNode* wenyanParser::For_enum_statementContext::FOR_START_ENUM() {
  return getToken(wenyanParser::FOR_START_ENUM, 0);
}

tree::TerminalNode* wenyanParser::For_enum_statementContext::FOR_MID_ENUM() {
  return getToken(wenyanParser::FOR_MID_ENUM, 0);
}

tree::TerminalNode* wenyanParser::For_enum_statementContext::FOR_IF_END() {
  return getToken(wenyanParser::FOR_IF_END, 0);
}

tree::TerminalNode* wenyanParser::For_enum_statementContext::INT_NUM() {
  return getToken(wenyanParser::INT_NUM, 0);
}

tree::TerminalNode* wenyanParser::For_enum_statementContext::IDENTIFIER() {
  return getToken(wenyanParser::IDENTIFIER, 0);
}

std::vector<wenyanParser::StatementContext *> wenyanParser::For_enum_statementContext::statement() {
  return getRuleContexts<wenyanParser::StatementContext>();
}

wenyanParser::StatementContext* wenyanParser::For_enum_statementContext::statement(size_t i) {
  return getRuleContext<wenyanParser::StatementContext>(i);
}


size_t wenyanParser::For_enum_statementContext::getRuleIndex() const {
  return wenyanParser::RuleFor_enum_statement;
}

void wenyanParser::For_enum_statementContext::enterRule(tree::ParseTreeListener *listener) {
  auto parserListener = dynamic_cast<wenyanListener *>(listener);
  if (parserListener != nullptr)
    parserListener->enterFor_enum_statement(this);
}

void wenyanParser::For_enum_statementContext::exitRule(tree::ParseTreeListener *listener) {
  auto parserListener = dynamic_cast<wenyanListener *>(listener);
  if (parserListener != nullptr)
    parserListener->exitFor_enum_statement(this);
}

wenyanParser::For_enum_statementContext* wenyanParser::for_enum_statement() {
  For_enum_statementContext *_localctx = _tracker.createInstance<For_enum_statementContext>(_ctx, getState());
  enterRule(_localctx, 44, wenyanParser::RuleFor_enum_statement);
  size_t _la = 0;

  auto onExit = finally([=] {
    exitRule();
  });
  try {
    enterOuterAlt(_localctx, 1);
    setState(293);
    match(wenyanParser::FOR_START_ENUM);
    setState(294);
    _la = _input->LA(1);
    if (!(_la == wenyanParser::IDENTIFIER

    || _la == wenyanParser::INT_NUM)) {
    _errHandler->recoverInline(this);
    }
    else {
      _errHandler->reportMatch(this);
      consume();
    }
    setState(295);
    match(wenyanParser::FOR_MID_ENUM);
    setState(299);
    _errHandler->sync(this);
    _la = _input->LA(1);
    while ((((_la & ~ 0x3fULL) == 0) &&
      ((1ULL << _la) & ((1ULL << wenyanParser::T__0)
      | (1ULL << wenyanParser::T__4)
      | (1ULL << wenyanParser::T__6)
      | (1ULL << wenyanParser::T__7)
      | (1ULL << wenyanParser::T__8)
      | (1ULL << wenyanParser::T__9)
      | (1ULL << wenyanParser::T__11)
      | (1ULL << wenyanParser::T__21)
      | (1ULL << wenyanParser::T__23)
      | (1ULL << wenyanParser::T__24)
      | (1ULL << wenyanParser::T__25)
      | (1ULL << wenyanParser::T__29)
      | (1ULL << wenyanParser::T__30)
      | (1ULL << wenyanParser::T__31)
      | (1ULL << wenyanParser::T__32)
      | (1ULL << wenyanParser::T__40)
      | (1ULL << wenyanParser::T__41)
      | (1ULL << wenyanParser::T__42)
      | (1ULL << wenyanParser::T__43)
      | (1ULL << wenyanParser::T__44)
      | (1ULL << wenyanParser::ARITH_BINARY_OP)
      | (1ULL << wenyanParser::UNARY_OP)
      | (1ULL << wenyanParser::IF)
      | (1ULL << wenyanParser::FOR_START_ARR)
      | (1ULL << wenyanParser::FOR_START_ENUM)
      | (1ULL << wenyanParser::FOR_START_WHILE))) != 0) || _la == wenyanParser::BREAK) {
      setState(296);
      statement();
      setState(301);
      _errHandler->sync(this);
      _la = _input->LA(1);
    }
    setState(302);
    match(wenyanParser::FOR_IF_END);
   
  }
  catch (RecognitionException &e) {
    _errHandler->reportError(this, e);
    _localctx->exception = std::current_exception();
    _errHandler->recover(this, _localctx->exception);
  }

  return _localctx;
}

//----------------- For_while_statementContext ------------------------------------------------------------------

wenyanParser::For_while_statementContext::For_while_statementContext(ParserRuleContext *parent, size_t invokingState)
  : ParserRuleContext(parent, invokingState) {
}

tree::TerminalNode* wenyanParser::For_while_statementContext::FOR_START_WHILE() {
  return getToken(wenyanParser::FOR_START_WHILE, 0);
}

tree::TerminalNode* wenyanParser::For_while_statementContext::FOR_IF_END() {
  return getToken(wenyanParser::FOR_IF_END, 0);
}

std::vector<wenyanParser::StatementContext *> wenyanParser::For_while_statementContext::statement() {
  return getRuleContexts<wenyanParser::StatementContext>();
}

wenyanParser::StatementContext* wenyanParser::For_while_statementContext::statement(size_t i) {
  return getRuleContext<wenyanParser::StatementContext>(i);
}


size_t wenyanParser::For_while_statementContext::getRuleIndex() const {
  return wenyanParser::RuleFor_while_statement;
}

void wenyanParser::For_while_statementContext::enterRule(tree::ParseTreeListener *listener) {
  auto parserListener = dynamic_cast<wenyanListener *>(listener);
  if (parserListener != nullptr)
    parserListener->enterFor_while_statement(this);
}

void wenyanParser::For_while_statementContext::exitRule(tree::ParseTreeListener *listener) {
  auto parserListener = dynamic_cast<wenyanListener *>(listener);
  if (parserListener != nullptr)
    parserListener->exitFor_while_statement(this);
}

wenyanParser::For_while_statementContext* wenyanParser::for_while_statement() {
  For_while_statementContext *_localctx = _tracker.createInstance<For_while_statementContext>(_ctx, getState());
  enterRule(_localctx, 46, wenyanParser::RuleFor_while_statement);
  size_t _la = 0;

  auto onExit = finally([=] {
    exitRule();
  });
  try {
    enterOuterAlt(_localctx, 1);
    setState(304);
    match(wenyanParser::FOR_START_WHILE);
    setState(308);
    _errHandler->sync(this);
    _la = _input->LA(1);
    while ((((_la & ~ 0x3fULL) == 0) &&
      ((1ULL << _la) & ((1ULL << wenyanParser::T__0)
      | (1ULL << wenyanParser::T__4)
      | (1ULL << wenyanParser::T__6)
      | (1ULL << wenyanParser::T__7)
      | (1ULL << wenyanParser::T__8)
      | (1ULL << wenyanParser::T__9)
      | (1ULL << wenyanParser::T__11)
      | (1ULL << wenyanParser::T__21)
      | (1ULL << wenyanParser::T__23)
      | (1ULL << wenyanParser::T__24)
      | (1ULL << wenyanParser::T__25)
      | (1ULL << wenyanParser::T__29)
      | (1ULL << wenyanParser::T__30)
      | (1ULL << wenyanParser::T__31)
      | (1ULL << wenyanParser::T__32)
      | (1ULL << wenyanParser::T__40)
      | (1ULL << wenyanParser::T__41)
      | (1ULL << wenyanParser::T__42)
      | (1ULL << wenyanParser::T__43)
      | (1ULL << wenyanParser::T__44)
      | (1ULL << wenyanParser::ARITH_BINARY_OP)
      | (1ULL << wenyanParser::UNARY_OP)
      | (1ULL << wenyanParser::IF)
      | (1ULL << wenyanParser::FOR_START_ARR)
      | (1ULL << wenyanParser::FOR_START_ENUM)
      | (1ULL << wenyanParser::FOR_START_WHILE))) != 0) || _la == wenyanParser::BREAK) {
      setState(305);
      statement();
      setState(310);
      _errHandler->sync(this);
      _la = _input->LA(1);
    }
    setState(311);
    match(wenyanParser::FOR_IF_END);
   
  }
  catch (RecognitionException &e) {
    _errHandler->reportError(this, e);
    _localctx->exception = std::current_exception();
    _errHandler->recover(this, _localctx->exception);
  }

  return _localctx;
}

//----------------- Math_statementContext ------------------------------------------------------------------

wenyanParser::Math_statementContext::Math_statementContext(ParserRuleContext *parent, size_t invokingState)
  : ParserRuleContext(parent, invokingState) {
}

wenyanParser::Arith_math_statementContext* wenyanParser::Math_statementContext::arith_math_statement() {
  return getRuleContext<wenyanParser::Arith_math_statementContext>(0);
}

wenyanParser::Logic_math_statementContext* wenyanParser::Math_statementContext::logic_math_statement() {
  return getRuleContext<wenyanParser::Logic_math_statementContext>(0);
}

wenyanParser::Mod_math_statementContext* wenyanParser::Math_statementContext::mod_math_statement() {
  return getRuleContext<wenyanParser::Mod_math_statementContext>(0);
}

wenyanParser::Reference_multi_statementContext* wenyanParser::Math_statementContext::reference_multi_statement() {
  return getRuleContext<wenyanParser::Reference_multi_statementContext>(0);
}


size_t wenyanParser::Math_statementContext::getRuleIndex() const {
  return wenyanParser::RuleMath_statement;
}

void wenyanParser::Math_statementContext::enterRule(tree::ParseTreeListener *listener) {
  auto parserListener = dynamic_cast<wenyanListener *>(listener);
  if (parserListener != nullptr)
    parserListener->enterMath_statement(this);
}

void wenyanParser::Math_statementContext::exitRule(tree::ParseTreeListener *listener) {
  auto parserListener = dynamic_cast<wenyanListener *>(listener);
  if (parserListener != nullptr)
    parserListener->exitMath_statement(this);
}

wenyanParser::Math_statementContext* wenyanParser::math_statement() {
  Math_statementContext *_localctx = _tracker.createInstance<Math_statementContext>(_ctx, getState());
  enterRule(_localctx, 48, wenyanParser::RuleMath_statement);
  size_t _la = 0;

  auto onExit = finally([=] {
    exitRule();
  });
  try {
    enterOuterAlt(_localctx, 1);
    setState(316);
    _errHandler->sync(this);
    switch (_input->LA(1)) {
      case wenyanParser::ARITH_BINARY_OP:
      case wenyanParser::UNARY_OP: {
        setState(313);
        arith_math_statement();
        break;
      }

      case wenyanParser::T__0: {
        setState(314);
        logic_math_statement();
        break;
      }

      case wenyanParser::T__24: {
        setState(315);
        mod_math_statement();
        break;
      }

    default:
      throw NoViableAltException(this);
    }
    setState(319);
    _errHandler->sync(this);

    _la = _input->LA(1);
    if (_la == wenyanParser::T__22) {
      setState(318);
      reference_multi_statement();
    }
   
  }
  catch (RecognitionException &e) {
    _errHandler->reportError(this, e);
    _localctx->exception = std::current_exception();
    _errHandler->recover(this, _localctx->exception);
  }

  return _localctx;
}

//----------------- Arith_math_statementContext ------------------------------------------------------------------

wenyanParser::Arith_math_statementContext::Arith_math_statementContext(ParserRuleContext *parent, size_t invokingState)
  : ParserRuleContext(parent, invokingState) {
}

wenyanParser::Arith_binary_mathContext* wenyanParser::Arith_math_statementContext::arith_binary_math() {
  return getRuleContext<wenyanParser::Arith_binary_mathContext>(0);
}

wenyanParser::Arith_unary_mathContext* wenyanParser::Arith_math_statementContext::arith_unary_math() {
  return getRuleContext<wenyanParser::Arith_unary_mathContext>(0);
}


size_t wenyanParser::Arith_math_statementContext::getRuleIndex() const {
  return wenyanParser::RuleArith_math_statement;
}

void wenyanParser::Arith_math_statementContext::enterRule(tree::ParseTreeListener *listener) {
  auto parserListener = dynamic_cast<wenyanListener *>(listener);
  if (parserListener != nullptr)
    parserListener->enterArith_math_statement(this);
}

void wenyanParser::Arith_math_statementContext::exitRule(tree::ParseTreeListener *listener) {
  auto parserListener = dynamic_cast<wenyanListener *>(listener);
  if (parserListener != nullptr)
    parserListener->exitArith_math_statement(this);
}

wenyanParser::Arith_math_statementContext* wenyanParser::arith_math_statement() {
  Arith_math_statementContext *_localctx = _tracker.createInstance<Arith_math_statementContext>(_ctx, getState());
  enterRule(_localctx, 50, wenyanParser::RuleArith_math_statement);

  auto onExit = finally([=] {
    exitRule();
  });
  try {
    setState(323);
    _errHandler->sync(this);
    switch (_input->LA(1)) {
      case wenyanParser::ARITH_BINARY_OP: {
        enterOuterAlt(_localctx, 1);
        setState(321);
        arith_binary_math();
        break;
      }

      case wenyanParser::UNARY_OP: {
        enterOuterAlt(_localctx, 2);
        setState(322);
        arith_unary_math();
        break;
      }

    default:
      throw NoViableAltException(this);
    }
   
  }
  catch (RecognitionException &e) {
    _errHandler->reportError(this, e);
    _localctx->exception = std::current_exception();
    _errHandler->recover(this, _localctx->exception);
  }

  return _localctx;
}

//----------------- Arith_binary_mathContext ------------------------------------------------------------------

wenyanParser::Arith_binary_mathContext::Arith_binary_mathContext(ParserRuleContext *parent, size_t invokingState)
  : ParserRuleContext(parent, invokingState) {
}

tree::TerminalNode* wenyanParser::Arith_binary_mathContext::ARITH_BINARY_OP() {
  return getToken(wenyanParser::ARITH_BINARY_OP, 0);
}

wenyanParser::PrepositionContext* wenyanParser::Arith_binary_mathContext::preposition() {
  return getRuleContext<wenyanParser::PrepositionContext>(0);
}

std::vector<wenyanParser::DataContext *> wenyanParser::Arith_binary_mathContext::data() {
  return getRuleContexts<wenyanParser::DataContext>();
}

wenyanParser::DataContext* wenyanParser::Arith_binary_mathContext::data(size_t i) {
  return getRuleContext<wenyanParser::DataContext>(i);
}


size_t wenyanParser::Arith_binary_mathContext::getRuleIndex() const {
  return wenyanParser::RuleArith_binary_math;
}

void wenyanParser::Arith_binary_mathContext::enterRule(tree::ParseTreeListener *listener) {
  auto parserListener = dynamic_cast<wenyanListener *>(listener);
  if (parserListener != nullptr)
    parserListener->enterArith_binary_math(this);
}

void wenyanParser::Arith_binary_mathContext::exitRule(tree::ParseTreeListener *listener) {
  auto parserListener = dynamic_cast<wenyanListener *>(listener);
  if (parserListener != nullptr)
    parserListener->exitArith_binary_math(this);
}

wenyanParser::Arith_binary_mathContext* wenyanParser::arith_binary_math() {
  Arith_binary_mathContext *_localctx = _tracker.createInstance<Arith_binary_mathContext>(_ctx, getState());
  enterRule(_localctx, 52, wenyanParser::RuleArith_binary_math);

  auto onExit = finally([=] {
    exitRule();
  });
  try {
    enterOuterAlt(_localctx, 1);
    setState(325);
    match(wenyanParser::ARITH_BINARY_OP);
    setState(328);
    _errHandler->sync(this);
    switch (_input->LA(1)) {
      case wenyanParser::STRING_LITERAL:
      case wenyanParser::IDENTIFIER:
      case wenyanParser::FLOAT_NUM:
      case wenyanParser::INT_NUM:
      case wenyanParser::BOOL_VALUE: {
        setState(326);
        data();
        break;
      }

      case wenyanParser::T__5: {
        setState(327);
        match(wenyanParser::T__5);
        break;
      }

    default:
      throw NoViableAltException(this);
    }
    setState(330);
    preposition();
    setState(333);
    _errHandler->sync(this);
    switch (_input->LA(1)) {
      case wenyanParser::STRING_LITERAL:
      case wenyanParser::IDENTIFIER:
      case wenyanParser::FLOAT_NUM:
      case wenyanParser::INT_NUM:
      case wenyanParser::BOOL_VALUE: {
        setState(331);
        data();
        break;
      }

      case wenyanParser::T__5: {
        setState(332);
        match(wenyanParser::T__5);
        break;
      }

    default:
      throw NoViableAltException(this);
    }
   
  }
  catch (RecognitionException &e) {
    _errHandler->reportError(this, e);
    _localctx->exception = std::current_exception();
    _errHandler->recover(this, _localctx->exception);
  }

  return _localctx;
}

//----------------- Arith_unary_mathContext ------------------------------------------------------------------

wenyanParser::Arith_unary_mathContext::Arith_unary_mathContext(ParserRuleContext *parent, size_t invokingState)
  : ParserRuleContext(parent, invokingState) {
}

tree::TerminalNode* wenyanParser::Arith_unary_mathContext::UNARY_OP() {
  return getToken(wenyanParser::UNARY_OP, 0);
}

tree::TerminalNode* wenyanParser::Arith_unary_mathContext::IDENTIFIER() {
  return getToken(wenyanParser::IDENTIFIER, 0);
}


size_t wenyanParser::Arith_unary_mathContext::getRuleIndex() const {
  return wenyanParser::RuleArith_unary_math;
}

void wenyanParser::Arith_unary_mathContext::enterRule(tree::ParseTreeListener *listener) {
  auto parserListener = dynamic_cast<wenyanListener *>(listener);
  if (parserListener != nullptr)
    parserListener->enterArith_unary_math(this);
}

void wenyanParser::Arith_unary_mathContext::exitRule(tree::ParseTreeListener *listener) {
  auto parserListener = dynamic_cast<wenyanListener *>(listener);
  if (parserListener != nullptr)
    parserListener->exitArith_unary_math(this);
}

wenyanParser::Arith_unary_mathContext* wenyanParser::arith_unary_math() {
  Arith_unary_mathContext *_localctx = _tracker.createInstance<Arith_unary_mathContext>(_ctx, getState());
  enterRule(_localctx, 54, wenyanParser::RuleArith_unary_math);
  size_t _la = 0;

  auto onExit = finally([=] {
    exitRule();
  });
  try {
    enterOuterAlt(_localctx, 1);
    setState(335);
    match(wenyanParser::UNARY_OP);
    setState(336);
    _la = _input->LA(1);
    if (!(_la == wenyanParser::T__5

    || _la == wenyanParser::IDENTIFIER)) {
    _errHandler->recoverInline(this);
    }
    else {
      _errHandler->reportMatch(this);
      consume();
    }
   
  }
  catch (RecognitionException &e) {
    _errHandler->reportError(this, e);
    _localctx->exception = std::current_exception();
    _errHandler->recover(this, _localctx->exception);
  }

  return _localctx;
}

//----------------- Mod_math_statementContext ------------------------------------------------------------------

wenyanParser::Mod_math_statementContext::Mod_math_statementContext(ParserRuleContext *parent, size_t invokingState)
  : ParserRuleContext(parent, invokingState) {
}

wenyanParser::PrepositionContext* wenyanParser::Mod_math_statementContext::preposition() {
  return getRuleContext<wenyanParser::PrepositionContext>(0);
}

std::vector<tree::TerminalNode *> wenyanParser::Mod_math_statementContext::INT_NUM() {
  return getTokens(wenyanParser::INT_NUM);
}

tree::TerminalNode* wenyanParser::Mod_math_statementContext::INT_NUM(size_t i) {
  return getToken(wenyanParser::INT_NUM, i);
}

std::vector<tree::TerminalNode *> wenyanParser::Mod_math_statementContext::FLOAT_NUM() {
  return getTokens(wenyanParser::FLOAT_NUM);
}

tree::TerminalNode* wenyanParser::Mod_math_statementContext::FLOAT_NUM(size_t i) {
  return getToken(wenyanParser::FLOAT_NUM, i);
}

std::vector<tree::TerminalNode *> wenyanParser::Mod_math_statementContext::IDENTIFIER() {
  return getTokens(wenyanParser::IDENTIFIER);
}

tree::TerminalNode* wenyanParser::Mod_math_statementContext::IDENTIFIER(size_t i) {
  return getToken(wenyanParser::IDENTIFIER, i);
}

tree::TerminalNode* wenyanParser::Mod_math_statementContext::POST_MOD_MATH_OP() {
  return getToken(wenyanParser::POST_MOD_MATH_OP, 0);
}


size_t wenyanParser::Mod_math_statementContext::getRuleIndex() const {
  return wenyanParser::RuleMod_math_statement;
}

void wenyanParser::Mod_math_statementContext::enterRule(tree::ParseTreeListener *listener) {
  auto parserListener = dynamic_cast<wenyanListener *>(listener);
  if (parserListener != nullptr)
    parserListener->enterMod_math_statement(this);
}

void wenyanParser::Mod_math_statementContext::exitRule(tree::ParseTreeListener *listener) {
  auto parserListener = dynamic_cast<wenyanListener *>(listener);
  if (parserListener != nullptr)
    parserListener->exitMod_math_statement(this);
}

wenyanParser::Mod_math_statementContext* wenyanParser::mod_math_statement() {
  Mod_math_statementContext *_localctx = _tracker.createInstance<Mod_math_statementContext>(_ctx, getState());
  enterRule(_localctx, 56, wenyanParser::RuleMod_math_statement);
  size_t _la = 0;

  auto onExit = finally([=] {
    exitRule();
  });
  try {
    enterOuterAlt(_localctx, 1);
    setState(338);
    match(wenyanParser::T__24);
    setState(339);
    _la = _input->LA(1);
    if (!(((((_la - 6) & ~ 0x3fULL) == 0) &&
      ((1ULL << (_la - 6)) & ((1ULL << (wenyanParser::T__5 - 6))
      | (1ULL << (wenyanParser::IDENTIFIER - 6))
      | (1ULL << (wenyanParser::FLOAT_NUM - 6))
      | (1ULL << (wenyanParser::INT_NUM - 6)))) != 0))) {
    _errHandler->recoverInline(this);
    }
    else {
      _errHandler->reportMatch(this);
      consume();
    }
    setState(340);
    preposition();
    setState(341);
    _la = _input->LA(1);
    if (!(((((_la - 47) & ~ 0x3fULL) == 0) &&
      ((1ULL << (_la - 47)) & ((1ULL << (wenyanParser::IDENTIFIER - 47))
      | (1ULL << (wenyanParser::FLOAT_NUM - 47))
      | (1ULL << (wenyanParser::INT_NUM - 47)))) != 0))) {
    _errHandler->recoverInline(this);
    }
    else {
      _errHandler->reportMatch(this);
      consume();
    }
    setState(343);
    _errHandler->sync(this);

    _la = _input->LA(1);
    if (_la == wenyanParser::POST_MOD_MATH_OP) {
      setState(342);
      match(wenyanParser::POST_MOD_MATH_OP);
    }
   
  }
  catch (RecognitionException &e) {
    _errHandler->reportError(this, e);
    _localctx->exception = std::current_exception();
    _errHandler->recover(this, _localctx->exception);
  }

  return _localctx;
}

//----------------- Logic_math_statementContext ------------------------------------------------------------------

wenyanParser::Logic_math_statementContext::Logic_math_statementContext(ParserRuleContext *parent, size_t invokingState)
  : ParserRuleContext(parent, invokingState) {
}

std::vector<tree::TerminalNode *> wenyanParser::Logic_math_statementContext::IDENTIFIER() {
  return getTokens(wenyanParser::IDENTIFIER);
}

tree::TerminalNode* wenyanParser::Logic_math_statementContext::IDENTIFIER(size_t i) {
  return getToken(wenyanParser::IDENTIFIER, i);
}

tree::TerminalNode* wenyanParser::Logic_math_statementContext::LOGIC_BINARY_OP() {
  return getToken(wenyanParser::LOGIC_BINARY_OP, 0);
}


size_t wenyanParser::Logic_math_statementContext::getRuleIndex() const {
  return wenyanParser::RuleLogic_math_statement;
}

void wenyanParser::Logic_math_statementContext::enterRule(tree::ParseTreeListener *listener) {
  auto parserListener = dynamic_cast<wenyanListener *>(listener);
  if (parserListener != nullptr)
    parserListener->enterLogic_math_statement(this);
}

void wenyanParser::Logic_math_statementContext::exitRule(tree::ParseTreeListener *listener) {
  auto parserListener = dynamic_cast<wenyanListener *>(listener);
  if (parserListener != nullptr)
    parserListener->exitLogic_math_statement(this);
}

wenyanParser::Logic_math_statementContext* wenyanParser::logic_math_statement() {
  Logic_math_statementContext *_localctx = _tracker.createInstance<Logic_math_statementContext>(_ctx, getState());
  enterRule(_localctx, 58, wenyanParser::RuleLogic_math_statement);

  auto onExit = finally([=] {
    exitRule();
  });
  try {
    enterOuterAlt(_localctx, 1);
    setState(345);
    match(wenyanParser::T__0);
    setState(346);
    match(wenyanParser::IDENTIFIER);
    setState(347);
    match(wenyanParser::IDENTIFIER);
    setState(348);
    match(wenyanParser::LOGIC_BINARY_OP);
   
  }
  catch (RecognitionException &e) {
    _errHandler->reportError(this, e);
    _localctx->exception = std::current_exception();
    _errHandler->recover(this, _localctx->exception);
  }

  return _localctx;
}

//----------------- Assign_statementContext ------------------------------------------------------------------

wenyanParser::Assign_statementContext::Assign_statementContext(ParserRuleContext *parent, size_t invokingState)
  : ParserRuleContext(parent, invokingState) {
}

std::vector<tree::TerminalNode *> wenyanParser::Assign_statementContext::IDENTIFIER() {
  return getTokens(wenyanParser::IDENTIFIER);
}

tree::TerminalNode* wenyanParser::Assign_statementContext::IDENTIFIER(size_t i) {
  return getToken(wenyanParser::IDENTIFIER, i);
}

std::vector<tree::TerminalNode *> wenyanParser::Assign_statementContext::INT_NUM() {
  return getTokens(wenyanParser::INT_NUM);
}

tree::TerminalNode* wenyanParser::Assign_statementContext::INT_NUM(size_t i) {
  return getToken(wenyanParser::INT_NUM, i);
}

tree::TerminalNode* wenyanParser::Assign_statementContext::STRING_LITERAL() {
  return getToken(wenyanParser::STRING_LITERAL, 0);
}

wenyanParser::DataContext* wenyanParser::Assign_statementContext::data() {
  return getRuleContext<wenyanParser::DataContext>(0);
}


size_t wenyanParser::Assign_statementContext::getRuleIndex() const {
  return wenyanParser::RuleAssign_statement;
}

void wenyanParser::Assign_statementContext::enterRule(tree::ParseTreeListener *listener) {
  auto parserListener = dynamic_cast<wenyanListener *>(listener);
  if (parserListener != nullptr)
    parserListener->enterAssign_statement(this);
}

void wenyanParser::Assign_statementContext::exitRule(tree::ParseTreeListener *listener) {
  auto parserListener = dynamic_cast<wenyanListener *>(listener);
  if (parserListener != nullptr)
    parserListener->exitAssign_statement(this);
}

wenyanParser::Assign_statementContext* wenyanParser::assign_statement() {
  Assign_statementContext *_localctx = _tracker.createInstance<Assign_statementContext>(_ctx, getState());
  enterRule(_localctx, 60, wenyanParser::RuleAssign_statement);
  size_t _la = 0;

  auto onExit = finally([=] {
    exitRule();
  });
  try {
    enterOuterAlt(_localctx, 1);
    setState(350);
    match(wenyanParser::T__25);
    setState(351);
    match(wenyanParser::IDENTIFIER);
    setState(354);
    _errHandler->sync(this);

    _la = _input->LA(1);
    if (_la == wenyanParser::T__1) {
      setState(352);
      match(wenyanParser::T__1);
      setState(353);
      _la = _input->LA(1);
      if (!(((((_la - 46) & ~ 0x3fULL) == 0) &&
        ((1ULL << (_la - 46)) & ((1ULL << (wenyanParser::STRING_LITERAL - 46))
        | (1ULL << (wenyanParser::IDENTIFIER - 46))
        | (1ULL << (wenyanParser::INT_NUM - 46)))) != 0))) {
      _errHandler->recoverInline(this);
      }
      else {
        _errHandler->reportMatch(this);
        consume();
      }
    }
    setState(356);
    match(wenyanParser::T__20);
    setState(368);
    _errHandler->sync(this);
    switch (_input->LA(1)) {
      case wenyanParser::T__26: {
        setState(357);
        match(wenyanParser::T__26);
        setState(364);
        _errHandler->sync(this);
        switch (_input->LA(1)) {
          case wenyanParser::STRING_LITERAL:
          case wenyanParser::IDENTIFIER:
          case wenyanParser::FLOAT_NUM:
          case wenyanParser::INT_NUM:
          case wenyanParser::BOOL_VALUE: {
            setState(358);
            data();
            setState(361);
            _errHandler->sync(this);

            _la = _input->LA(1);
            if (_la == wenyanParser::T__1) {
              setState(359);
              match(wenyanParser::T__1);
              setState(360);
              match(wenyanParser::INT_NUM);
            }
            break;
          }

          case wenyanParser::T__5: {
            setState(363);
            match(wenyanParser::T__5);
            break;
          }

        default:
          throw NoViableAltException(this);
        }
        setState(366);
        match(wenyanParser::T__27);
        break;
      }

      case wenyanParser::T__28: {
        setState(367);
        match(wenyanParser::T__28);
        break;
      }

    default:
      throw NoViableAltException(this);
    }
   
  }
  catch (RecognitionException &e) {
    _errHandler->reportError(this, e);
    _localctx->exception = std::current_exception();
    _errHandler->recover(this, _localctx->exception);
  }

  return _localctx;
}

//----------------- Return_statementContext ------------------------------------------------------------------

wenyanParser::Return_statementContext::Return_statementContext(ParserRuleContext *parent, size_t invokingState)
  : ParserRuleContext(parent, invokingState) {
}

wenyanParser::DataContext* wenyanParser::Return_statementContext::data() {
  return getRuleContext<wenyanParser::DataContext>(0);
}


size_t wenyanParser::Return_statementContext::getRuleIndex() const {
  return wenyanParser::RuleReturn_statement;
}

void wenyanParser::Return_statementContext::enterRule(tree::ParseTreeListener *listener) {
  auto parserListener = dynamic_cast<wenyanListener *>(listener);
  if (parserListener != nullptr)
    parserListener->enterReturn_statement(this);
}

void wenyanParser::Return_statementContext::exitRule(tree::ParseTreeListener *listener) {
  auto parserListener = dynamic_cast<wenyanListener *>(listener);
  if (parserListener != nullptr)
    parserListener->exitReturn_statement(this);
}

wenyanParser::Return_statementContext* wenyanParser::return_statement() {
  Return_statementContext *_localctx = _tracker.createInstance<Return_statementContext>(_ctx, getState());
  enterRule(_localctx, 62, wenyanParser::RuleReturn_statement);

  auto onExit = finally([=] {
    exitRule();
  });
  try {
    setState(377);
    _errHandler->sync(this);
    switch (_input->LA(1)) {
      case wenyanParser::T__29: {
        enterOuterAlt(_localctx, 1);
        setState(370);
        match(wenyanParser::T__29);
        setState(373);
        _errHandler->sync(this);
        switch (_input->LA(1)) {
          case wenyanParser::STRING_LITERAL:
          case wenyanParser::IDENTIFIER:
          case wenyanParser::FLOAT_NUM:
          case wenyanParser::INT_NUM:
          case wenyanParser::BOOL_VALUE: {
            setState(371);
            data();
            break;
          }

          case wenyanParser::T__5: {
            setState(372);
            match(wenyanParser::T__5);
            break;
          }

        default:
          throw NoViableAltException(this);
        }
        break;
      }

      case wenyanParser::T__30: {
        enterOuterAlt(_localctx, 2);
        setState(375);
        match(wenyanParser::T__30);
        break;
      }

      case wenyanParser::T__31: {
        enterOuterAlt(_localctx, 3);
        setState(376);
        match(wenyanParser::T__31);
        break;
      }

    default:
      throw NoViableAltException(this);
    }
   
  }
  catch (RecognitionException &e) {
    _errHandler->reportError(this, e);
    _localctx->exception = std::current_exception();
    _errHandler->recover(this, _localctx->exception);
  }

  return _localctx;
}

//----------------- Import_statementContext ------------------------------------------------------------------

wenyanParser::Import_statementContext::Import_statementContext(ParserRuleContext *parent, size_t invokingState)
  : ParserRuleContext(parent, invokingState) {
}

tree::TerminalNode* wenyanParser::Import_statementContext::STRING_LITERAL() {
  return getToken(wenyanParser::STRING_LITERAL, 0);
}

std::vector<tree::TerminalNode *> wenyanParser::Import_statementContext::IDENTIFIER() {
  return getTokens(wenyanParser::IDENTIFIER);
}

tree::TerminalNode* wenyanParser::Import_statementContext::IDENTIFIER(size_t i) {
  return getToken(wenyanParser::IDENTIFIER, i);
}


size_t wenyanParser::Import_statementContext::getRuleIndex() const {
  return wenyanParser::RuleImport_statement;
}

void wenyanParser::Import_statementContext::enterRule(tree::ParseTreeListener *listener) {
  auto parserListener = dynamic_cast<wenyanListener *>(listener);
  if (parserListener != nullptr)
    parserListener->enterImport_statement(this);
}

void wenyanParser::Import_statementContext::exitRule(tree::ParseTreeListener *listener) {
  auto parserListener = dynamic_cast<wenyanListener *>(listener);
  if (parserListener != nullptr)
    parserListener->exitImport_statement(this);
}

wenyanParser::Import_statementContext* wenyanParser::import_statement() {
  Import_statementContext *_localctx = _tracker.createInstance<Import_statementContext>(_ctx, getState());
  enterRule(_localctx, 64, wenyanParser::RuleImport_statement);
  size_t _la = 0;

  auto onExit = finally([=] {
    exitRule();
  });
  try {
    enterOuterAlt(_localctx, 1);
    setState(379);
    match(wenyanParser::T__32);
    setState(380);
    match(wenyanParser::STRING_LITERAL);
    setState(381);
    match(wenyanParser::T__33);
    setState(389);
    _errHandler->sync(this);

    _la = _input->LA(1);
    if (_la == wenyanParser::T__34) {
      setState(382);
      match(wenyanParser::T__34);
      setState(384); 
      _errHandler->sync(this);
      _la = _input->LA(1);
      do {
        setState(383);
        match(wenyanParser::IDENTIFIER);
        setState(386); 
        _errHandler->sync(this);
        _la = _input->LA(1);
      } while (_la == wenyanParser::IDENTIFIER);
      setState(388);
      match(wenyanParser::T__35);
    }
   
  }
  catch (RecognitionException &e) {
    _errHandler->reportError(this, e);
    _localctx->exception = std::current_exception();
    _errHandler->recover(this, _localctx->exception);
  }

  return _localctx;
}

//----------------- Object_statementContext ------------------------------------------------------------------

wenyanParser::Object_statementContext::Object_statementContext(ParserRuleContext *parent, size_t invokingState)
  : ParserRuleContext(parent, invokingState) {
}

tree::TerminalNode* wenyanParser::Object_statementContext::INT_NUM() {
  return getToken(wenyanParser::INT_NUM, 0);
}

wenyanParser::Reference_multi_statementContext* wenyanParser::Object_statementContext::reference_multi_statement() {
  return getRuleContext<wenyanParser::Reference_multi_statementContext>(0);
}

wenyanParser::Object_define_statementContext* wenyanParser::Object_statementContext::object_define_statement() {
  return getRuleContext<wenyanParser::Object_define_statementContext>(0);
}


size_t wenyanParser::Object_statementContext::getRuleIndex() const {
  return wenyanParser::RuleObject_statement;
}

void wenyanParser::Object_statementContext::enterRule(tree::ParseTreeListener *listener) {
  auto parserListener = dynamic_cast<wenyanListener *>(listener);
  if (parserListener != nullptr)
    parserListener->enterObject_statement(this);
}

void wenyanParser::Object_statementContext::exitRule(tree::ParseTreeListener *listener) {
  auto parserListener = dynamic_cast<wenyanListener *>(listener);
  if (parserListener != nullptr)
    parserListener->exitObject_statement(this);
}

wenyanParser::Object_statementContext* wenyanParser::object_statement() {
  Object_statementContext *_localctx = _tracker.createInstance<Object_statementContext>(_ctx, getState());
  enterRule(_localctx, 66, wenyanParser::RuleObject_statement);
  size_t _la = 0;

  auto onExit = finally([=] {
    exitRule();
  });
  try {
    enterOuterAlt(_localctx, 1);
    setState(391);
    match(wenyanParser::T__11);
    setState(392);
    match(wenyanParser::INT_NUM);
    setState(393);
    match(wenyanParser::T__36);
    setState(394);
    reference_multi_statement();
    setState(396);
    _errHandler->sync(this);

    _la = _input->LA(1);
    if (_la == wenyanParser::T__37) {
      setState(395);
      object_define_statement();
    }
   
  }
  catch (RecognitionException &e) {
    _errHandler->reportError(this, e);
    _localctx->exception = std::current_exception();
    _errHandler->recover(this, _localctx->exception);
  }

  return _localctx;
}

//----------------- Object_define_statementContext ------------------------------------------------------------------

wenyanParser::Object_define_statementContext::Object_define_statementContext(ParserRuleContext *parent, size_t invokingState)
  : ParserRuleContext(parent, invokingState) {
}

tree::TerminalNode* wenyanParser::Object_define_statementContext::IDENTIFIER() {
  return getToken(wenyanParser::IDENTIFIER, 0);
}

std::vector<tree::TerminalNode *> wenyanParser::Object_define_statementContext::STRING_LITERAL() {
  return getTokens(wenyanParser::STRING_LITERAL);
}

tree::TerminalNode* wenyanParser::Object_define_statementContext::STRING_LITERAL(size_t i) {
  return getToken(wenyanParser::STRING_LITERAL, i);
}

std::vector<tree::TerminalNode *> wenyanParser::Object_define_statementContext::TYPE() {
  return getTokens(wenyanParser::TYPE);
}

tree::TerminalNode* wenyanParser::Object_define_statementContext::TYPE(size_t i) {
  return getToken(wenyanParser::TYPE, i);
}

std::vector<wenyanParser::DataContext *> wenyanParser::Object_define_statementContext::data() {
  return getRuleContexts<wenyanParser::DataContext>();
}

wenyanParser::DataContext* wenyanParser::Object_define_statementContext::data(size_t i) {
  return getRuleContext<wenyanParser::DataContext>(i);
}


size_t wenyanParser::Object_define_statementContext::getRuleIndex() const {
  return wenyanParser::RuleObject_define_statement;
}

void wenyanParser::Object_define_statementContext::enterRule(tree::ParseTreeListener *listener) {
  auto parserListener = dynamic_cast<wenyanListener *>(listener);
  if (parserListener != nullptr)
    parserListener->enterObject_define_statement(this);
}

void wenyanParser::Object_define_statementContext::exitRule(tree::ParseTreeListener *listener) {
  auto parserListener = dynamic_cast<wenyanListener *>(listener);
  if (parserListener != nullptr)
    parserListener->exitObject_define_statement(this);
}

wenyanParser::Object_define_statementContext* wenyanParser::object_define_statement() {
  Object_define_statementContext *_localctx = _tracker.createInstance<Object_define_statementContext>(_ctx, getState());
  enterRule(_localctx, 68, wenyanParser::RuleObject_define_statement);
  size_t _la = 0;

  auto onExit = finally([=] {
    exitRule();
  });
  try {
    enterOuterAlt(_localctx, 1);
    setState(398);
    match(wenyanParser::T__37);
    setState(405); 
    _errHandler->sync(this);
    _la = _input->LA(1);
    do {
      setState(399);
      match(wenyanParser::T__38);
      setState(400);
      match(wenyanParser::STRING_LITERAL);
      setState(401);
      match(wenyanParser::T__20);
      setState(402);
      match(wenyanParser::TYPE);
      setState(403);
      match(wenyanParser::T__15);
      setState(404);
      data();
      setState(407); 
      _errHandler->sync(this);
      _la = _input->LA(1);
    } while (_la == wenyanParser::T__38);
    setState(409);
    match(wenyanParser::T__18);
    setState(410);
    match(wenyanParser::IDENTIFIER);
    setState(411);
    match(wenyanParser::T__39);
   
  }
  catch (RecognitionException &e) {
    _errHandler->reportError(this, e);
    _localctx->exception = std::current_exception();
    _errHandler->recover(this, _localctx->exception);
  }

  return _localctx;
}

//----------------- DataContext ------------------------------------------------------------------

wenyanParser::DataContext::DataContext(ParserRuleContext *parent, size_t invokingState)
  : ParserRuleContext(parent, invokingState) {
}

tree::TerminalNode* wenyanParser::DataContext::STRING_LITERAL() {
  return getToken(wenyanParser::STRING_LITERAL, 0);
}

tree::TerminalNode* wenyanParser::DataContext::BOOL_VALUE() {
  return getToken(wenyanParser::BOOL_VALUE, 0);
}

tree::TerminalNode* wenyanParser::DataContext::IDENTIFIER() {
  return getToken(wenyanParser::IDENTIFIER, 0);
}

tree::TerminalNode* wenyanParser::DataContext::INT_NUM() {
  return getToken(wenyanParser::INT_NUM, 0);
}

tree::TerminalNode* wenyanParser::DataContext::FLOAT_NUM() {
  return getToken(wenyanParser::FLOAT_NUM, 0);
}


size_t wenyanParser::DataContext::getRuleIndex() const {
  return wenyanParser::RuleData;
}

void wenyanParser::DataContext::enterRule(tree::ParseTreeListener *listener) {
  auto parserListener = dynamic_cast<wenyanListener *>(listener);
  if (parserListener != nullptr)
    parserListener->enterData(this);
}

void wenyanParser::DataContext::exitRule(tree::ParseTreeListener *listener) {
  auto parserListener = dynamic_cast<wenyanListener *>(listener);
  if (parserListener != nullptr)
    parserListener->exitData(this);
}

wenyanParser::DataContext* wenyanParser::data() {
  DataContext *_localctx = _tracker.createInstance<DataContext>(_ctx, getState());
  enterRule(_localctx, 70, wenyanParser::RuleData);
  size_t _la = 0;

  auto onExit = finally([=] {
    exitRule();
  });
  try {
    enterOuterAlt(_localctx, 1);
    setState(413);
    _la = _input->LA(1);
    if (!(((((_la - 46) & ~ 0x3fULL) == 0) &&
      ((1ULL << (_la - 46)) & ((1ULL << (wenyanParser::STRING_LITERAL - 46))
      | (1ULL << (wenyanParser::IDENTIFIER - 46))
      | (1ULL << (wenyanParser::FLOAT_NUM - 46))
      | (1ULL << (wenyanParser::INT_NUM - 46))
      | (1ULL << (wenyanParser::BOOL_VALUE - 46)))) != 0))) {
    _errHandler->recoverInline(this);
    }
    else {
      _errHandler->reportMatch(this);
      consume();
    }
   
  }
  catch (RecognitionException &e) {
    _errHandler->reportError(this, e);
    _localctx->exception = std::current_exception();
    _errHandler->recover(this, _localctx->exception);
  }

  return _localctx;
}

//----------------- PrepositionContext ------------------------------------------------------------------

wenyanParser::PrepositionContext::PrepositionContext(ParserRuleContext *parent, size_t invokingState)
  : ParserRuleContext(parent, invokingState) {
}

tree::TerminalNode* wenyanParser::PrepositionContext::PREPOSITION_YI() {
  return getToken(wenyanParser::PREPOSITION_YI, 0);
}

tree::TerminalNode* wenyanParser::PrepositionContext::PREPOSITION_YU() {
  return getToken(wenyanParser::PREPOSITION_YU, 0);
}


size_t wenyanParser::PrepositionContext::getRuleIndex() const {
  return wenyanParser::RulePreposition;
}

void wenyanParser::PrepositionContext::enterRule(tree::ParseTreeListener *listener) {
  auto parserListener = dynamic_cast<wenyanListener *>(listener);
  if (parserListener != nullptr)
    parserListener->enterPreposition(this);
}

void wenyanParser::PrepositionContext::exitRule(tree::ParseTreeListener *listener) {
  auto parserListener = dynamic_cast<wenyanListener *>(listener);
  if (parserListener != nullptr)
    parserListener->exitPreposition(this);
}

wenyanParser::PrepositionContext* wenyanParser::preposition() {
  PrepositionContext *_localctx = _tracker.createInstance<PrepositionContext>(_ctx, getState());
  enterRule(_localctx, 72, wenyanParser::RulePreposition);
  size_t _la = 0;

  auto onExit = finally([=] {
    exitRule();
  });
  try {
    enterOuterAlt(_localctx, 1);
    setState(415);
    _la = _input->LA(1);
    if (!(_la == wenyanParser::PREPOSITION_YU

    || _la == wenyanParser::PREPOSITION_YI)) {
    _errHandler->recoverInline(this);
    }
    else {
      _errHandler->reportMatch(this);
      consume();
    }
   
  }
  catch (RecognitionException &e) {
    _errHandler->reportError(this, e);
    _localctx->exception = std::current_exception();
    _errHandler->recover(this, _localctx->exception);
  }

  return _localctx;
}

//----------------- Print_statementContext ------------------------------------------------------------------

wenyanParser::Print_statementContext::Print_statementContext(ParserRuleContext *parent, size_t invokingState)
  : ParserRuleContext(parent, invokingState) {
}


size_t wenyanParser::Print_statementContext::getRuleIndex() const {
  return wenyanParser::RulePrint_statement;
}

void wenyanParser::Print_statementContext::enterRule(tree::ParseTreeListener *listener) {
  auto parserListener = dynamic_cast<wenyanListener *>(listener);
  if (parserListener != nullptr)
    parserListener->enterPrint_statement(this);
}

void wenyanParser::Print_statementContext::exitRule(tree::ParseTreeListener *listener) {
  auto parserListener = dynamic_cast<wenyanListener *>(listener);
  if (parserListener != nullptr)
    parserListener->exitPrint_statement(this);
}

wenyanParser::Print_statementContext* wenyanParser::print_statement() {
  Print_statementContext *_localctx = _tracker.createInstance<Print_statementContext>(_ctx, getState());
  enterRule(_localctx, 74, wenyanParser::RulePrint_statement);

  auto onExit = finally([=] {
    exitRule();
  });
  try {
    enterOuterAlt(_localctx, 1);
    setState(417);
    match(wenyanParser::T__40);
   
  }
  catch (RecognitionException &e) {
    _errHandler->reportError(this, e);
    _localctx->exception = std::current_exception();
    _errHandler->recover(this, _localctx->exception);
  }

  return _localctx;
}

//----------------- CommentContext ------------------------------------------------------------------

wenyanParser::CommentContext::CommentContext(ParserRuleContext *parent, size_t invokingState)
  : ParserRuleContext(parent, invokingState) {
}

tree::TerminalNode* wenyanParser::CommentContext::STRING_LITERAL() {
  return getToken(wenyanParser::STRING_LITERAL, 0);
}


size_t wenyanParser::CommentContext::getRuleIndex() const {
  return wenyanParser::RuleComment;
}

void wenyanParser::CommentContext::enterRule(tree::ParseTreeListener *listener) {
  auto parserListener = dynamic_cast<wenyanListener *>(listener);
  if (parserListener != nullptr)
    parserListener->enterComment(this);
}

void wenyanParser::CommentContext::exitRule(tree::ParseTreeListener *listener) {
  auto parserListener = dynamic_cast<wenyanListener *>(listener);
  if (parserListener != nullptr)
    parserListener->exitComment(this);
}

wenyanParser::CommentContext* wenyanParser::comment() {
  CommentContext *_localctx = _tracker.createInstance<CommentContext>(_ctx, getState());
  enterRule(_localctx, 76, wenyanParser::RuleComment);
  size_t _la = 0;

  auto onExit = finally([=] {
    exitRule();
  });
  try {
    enterOuterAlt(_localctx, 1);
    setState(419);
    _la = _input->LA(1);
    if (!((((_la & ~ 0x3fULL) == 0) &&
      ((1ULL << _la) & ((1ULL << wenyanParser::T__41)
      | (1ULL << wenyanParser::T__42)
      | (1ULL << wenyanParser::T__43))) != 0))) {
    _errHandler->recoverInline(this);
    }
    else {
      _errHandler->reportMatch(this);
      consume();
    }
    setState(420);
    match(wenyanParser::STRING_LITERAL);
   
  }
  catch (RecognitionException &e) {
    _errHandler->reportError(this, e);
    _localctx->exception = std::current_exception();
    _errHandler->recover(this, _localctx->exception);
  }

  return _localctx;
}

//----------------- Clean_statementContext ------------------------------------------------------------------

wenyanParser::Clean_statementContext::Clean_statementContext(ParserRuleContext *parent, size_t invokingState)
  : ParserRuleContext(parent, invokingState) {
}


size_t wenyanParser::Clean_statementContext::getRuleIndex() const {
  return wenyanParser::RuleClean_statement;
}

void wenyanParser::Clean_statementContext::enterRule(tree::ParseTreeListener *listener) {
  auto parserListener = dynamic_cast<wenyanListener *>(listener);
  if (parserListener != nullptr)
    parserListener->enterClean_statement(this);
}

void wenyanParser::Clean_statementContext::exitRule(tree::ParseTreeListener *listener) {
  auto parserListener = dynamic_cast<wenyanListener *>(listener);
  if (parserListener != nullptr)
    parserListener->exitClean_statement(this);
}

wenyanParser::Clean_statementContext* wenyanParser::clean_statement() {
  Clean_statementContext *_localctx = _tracker.createInstance<Clean_statementContext>(_ctx, getState());
  enterRule(_localctx, 78, wenyanParser::RuleClean_statement);

  auto onExit = finally([=] {
    exitRule();
  });
  try {
    enterOuterAlt(_localctx, 1);
    setState(422);
    match(wenyanParser::T__44);
   
  }
  catch (RecognitionException &e) {
    _errHandler->reportError(this, e);
    _localctx->exception = std::current_exception();
    _errHandler->recover(this, _localctx->exception);
  }

  return _localctx;
}

// Static vars and initialization.
std::vector<dfa::DFA> wenyanParser::_decisionToDFA;
atn::PredictionContextCache wenyanParser::_sharedContextCache;

// We own the ATN which in turn owns the ATN states.
atn::ATN wenyanParser::_atn;
std::vector<uint16_t> wenyanParser::_serializedATN;

std::vector<std::string> wenyanParser::_ruleNames = {
  "program", "statement", "pick_up_statement", "array_statement", "array_cat_statement", 
  "array_push_statement", "function_statement", "function_call_statement", 
  "function_plain_call", "function_nested_call", "function_define_statement", 
  "if_statement", "if_expression", "unary_if_expression", "binary_if_expression", 
  "declare_statement", "define_statement", "reference_multi_statement", 
  "reference_single_statement", "init_define_statement", "for_statement", 
  "for_arr_statement", "for_enum_statement", "for_while_statement", "math_statement", 
  "arith_math_statement", "arith_binary_math", "arith_unary_math", "mod_math_statement", 
  "logic_math_statement", "assign_statement", "return_statement", "import_statement", 
  "object_statement", "object_define_statement", "data", "preposition", 
  "print_statement", "comment", "clean_statement"
};

std::vector<std::string> wenyanParser::_literalNames = {
  "", "'\u592B'", "'\u4E4B'", "'\u5176\u9918'", "'\u9577'", "'\u929C'", 
  "'\u5176'", "'\u5145'", "'\u65BD'", "'\u65BD\u5176'", "'\u53D6'", "'\u4EE5\u65BD'", 
  "'\u543E\u6709'", "'\u8853'", "'\u6B32\u884C\u662F\u8853'", "'\u5FC5\u5148\u5F97'", 
  "'\u66F0'", "'\u662F\u8853\u66F0'", "'\u4E43\u884C\u662F\u8853\u66F0'", 
  "'\u662F\u8B02'", "'\u4E4B\u8853\u4E5F'", "'\u8005'", "'\u4ECA\u6709'", 
  "'\u540D\u4E4B'", "'\u6709'", "'\u9664'", "'\u6614\u4E4B'", "'\u4ECA'", 
  "'\u662F\u77E3'", "'\u4ECA\u4E0D\u5FA9\u5B58\u77E3'", "'\u4E43\u5F97'", 
  "'\u4E43\u6B78\u7A7A\u7121'", "'\u4E43\u5F97\u77E3'", "'\u543E\u5617\u89C0'", 
  "'\u4E4B\u66F8'", "'\u65B9\u609F'", "'\u4E4B\u7FA9'", "'\u7269'", "'\u5176\u7269\u5982\u662F'", 
  "'\u7269\u4E4B'", "'\u4E4B\u7269\u4E5F'", "'\u66F8\u4E4B'", "'\u6CE8\u66F0'", 
  "'\u758F\u66F0'", "'\u6279\u66F0'", "'\u566B'", "", "", "", "", "'\u6240\u9918\u5E7E\u4F55'", 
  "'\u8B8A'", "'\u65BC'", "'\u4EE5'", "'\u82E5'", "'\u82E5\u975E'", "", 
  "'\u51E1'", "'\u70BA\u662F'", "'\u6046\u70BA\u662F'", "'\u4E2D\u4E4B'", 
  "'\u904D'", "", "", "", "", "", "", "", "", "'\u4E43\u6B62'"
};

std::vector<std::string> wenyanParser::_symbolicNames = {
  "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", 
  "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", 
  "", "", "", "", "", "", "", "", "", "", "STRING_LITERAL", "IDENTIFIER", 
  "ARITH_BINARY_OP", "LOGIC_BINARY_OP", "POST_MOD_MATH_OP", "UNARY_OP", 
  "PREPOSITION_YU", "PREPOSITION_YI", "IF", "ELSE", "IF_LOGIC_OP", "FOR_START_ARR", 
  "FOR_START_ENUM", "FOR_START_WHILE", "FOR_MID_ARR", "FOR_MID_ENUM", "FOR_IF_END", 
  "FLOAT_NUM", "FLOAT_NUM_KEYWORDS", "INT_NUM", "INT_NUM_KEYWORDS", "TYPE", 
  "BOOL_VALUE", "WS", "BREAK"
};

dfa::Vocabulary wenyanParser::_vocabulary(_literalNames, _symbolicNames);

std::vector<std::string> wenyanParser::_tokenNames;

wenyanParser::Initializer::Initializer() {
	for (size_t i = 0; i < _symbolicNames.size(); ++i) {
		std::string name = _vocabulary.getLiteralName(i);
		if (name.empty()) {
			name = _vocabulary.getSymbolicName(i);
		}

		if (name.empty()) {
			_tokenNames.push_back("<INVALID>");
		} else {
      _tokenNames.push_back(name);
    }
	}

  _serializedATN = {
    0x3, 0x608b, 0xa72a, 0x8133, 0xb9ed, 0x417c, 0x3be7, 0x7786, 0x5964, 
    0x3, 0x48, 0x1ab, 0x4, 0x2, 0x9, 0x2, 0x4, 0x3, 0x9, 0x3, 0x4, 0x4, 
    0x9, 0x4, 0x4, 0x5, 0x9, 0x5, 0x4, 0x6, 0x9, 0x6, 0x4, 0x7, 0x9, 0x7, 
    0x4, 0x8, 0x9, 0x8, 0x4, 0x9, 0x9, 0x9, 0x4, 0xa, 0x9, 0xa, 0x4, 0xb, 
    0x9, 0xb, 0x4, 0xc, 0x9, 0xc, 0x4, 0xd, 0x9, 0xd, 0x4, 0xe, 0x9, 0xe, 
    0x4, 0xf, 0x9, 0xf, 0x4, 0x10, 0x9, 0x10, 0x4, 0x11, 0x9, 0x11, 0x4, 
    0x12, 0x9, 0x12, 0x4, 0x13, 0x9, 0x13, 0x4, 0x14, 0x9, 0x14, 0x4, 0x15, 
    0x9, 0x15, 0x4, 0x16, 0x9, 0x16, 0x4, 0x17, 0x9, 0x17, 0x4, 0x18, 0x9, 
    0x18, 0x4, 0x19, 0x9, 0x19, 0x4, 0x1a, 0x9, 0x1a, 0x4, 0x1b, 0x9, 0x1b, 
    0x4, 0x1c, 0x9, 0x1c, 0x4, 0x1d, 0x9, 0x1d, 0x4, 0x1e, 0x9, 0x1e, 0x4, 
    0x1f, 0x9, 0x1f, 0x4, 0x20, 0x9, 0x20, 0x4, 0x21, 0x9, 0x21, 0x4, 0x22, 
    0x9, 0x22, 0x4, 0x23, 0x9, 0x23, 0x4, 0x24, 0x9, 0x24, 0x4, 0x25, 0x9, 
    0x25, 0x4, 0x26, 0x9, 0x26, 0x4, 0x27, 0x9, 0x27, 0x4, 0x28, 0x9, 0x28, 
    0x4, 0x29, 0x9, 0x29, 0x3, 0x2, 0x7, 0x2, 0x54, 0xa, 0x2, 0xc, 0x2, 
    0xe, 0x2, 0x57, 0xb, 0x2, 0x3, 0x3, 0x3, 0x3, 0x3, 0x3, 0x3, 0x3, 0x3, 
    0x3, 0x3, 0x3, 0x3, 0x3, 0x3, 0x3, 0x3, 0x3, 0x3, 0x3, 0x3, 0x3, 0x3, 
    0x3, 0x3, 0x3, 0x3, 0x3, 0x3, 0x3, 0x3, 0x3, 0x5, 0x3, 0x69, 0xa, 0x3, 
    0x3, 0x4, 0x3, 0x4, 0x3, 0x4, 0x3, 0x4, 0x5, 0x4, 0x6f, 0xa, 0x4, 0x3, 
    0x4, 0x5, 0x4, 0x72, 0xa, 0x4, 0x3, 0x5, 0x3, 0x5, 0x5, 0x5, 0x76, 0xa, 
    0x5, 0x3, 0x6, 0x3, 0x6, 0x3, 0x6, 0x3, 0x6, 0x6, 0x6, 0x7c, 0xa, 0x6, 
    0xd, 0x6, 0xe, 0x6, 0x7d, 0x3, 0x6, 0x5, 0x6, 0x81, 0xa, 0x6, 0x3, 0x7, 
    0x3, 0x7, 0x3, 0x7, 0x3, 0x7, 0x6, 0x7, 0x87, 0xa, 0x7, 0xd, 0x7, 0xe, 
    0x7, 0x88, 0x3, 0x7, 0x5, 0x7, 0x8c, 0xa, 0x7, 0x3, 0x8, 0x3, 0x8, 0x3, 
    0x8, 0x5, 0x8, 0x91, 0xa, 0x8, 0x5, 0x8, 0x93, 0xa, 0x8, 0x3, 0x9, 0x3, 
    0x9, 0x5, 0x9, 0x97, 0xa, 0x9, 0x3, 0xa, 0x3, 0xa, 0x3, 0xa, 0x3, 0xa, 
    0x3, 0xa, 0x7, 0xa, 0x9e, 0xa, 0xa, 0xc, 0xa, 0xe, 0xa, 0xa1, 0xb, 0xa, 
    0x3, 0xa, 0x3, 0xa, 0x3, 0xa, 0x3, 0xa, 0x7, 0xa, 0xa7, 0xa, 0xa, 0xc, 
    0xa, 0xe, 0xa, 0xaa, 0xb, 0xa, 0x5, 0xa, 0xac, 0xa, 0xa, 0x3, 0xb, 0x3, 
    0xb, 0x3, 0xb, 0x3, 0xb, 0x6, 0xb, 0xb2, 0xa, 0xb, 0xd, 0xb, 0xe, 0xb, 
    0xb3, 0x3, 0xc, 0x3, 0xc, 0x3, 0xc, 0x3, 0xc, 0x3, 0xc, 0x3, 0xc, 0x3, 
    0xc, 0x3, 0xc, 0x3, 0xc, 0x3, 0xc, 0x6, 0xc, 0xc0, 0xa, 0xc, 0xd, 0xc, 
    0xe, 0xc, 0xc1, 0x6, 0xc, 0xc4, 0xa, 0xc, 0xd, 0xc, 0xe, 0xc, 0xc5, 
    0x5, 0xc, 0xc8, 0xa, 0xc, 0x3, 0xc, 0x3, 0xc, 0x7, 0xc, 0xcc, 0xa, 0xc, 
    0xc, 0xc, 0xe, 0xc, 0xcf, 0xb, 0xc, 0x3, 0xc, 0x3, 0xc, 0x3, 0xc, 0x3, 
    0xc, 0x3, 0xd, 0x3, 0xd, 0x3, 0xd, 0x3, 0xd, 0x6, 0xd, 0xd9, 0xa, 0xd, 
    0xd, 0xd, 0xe, 0xd, 0xda, 0x3, 0xd, 0x3, 0xd, 0x6, 0xd, 0xdf, 0xa, 0xd, 
    0xd, 0xd, 0xe, 0xd, 0xe0, 0x5, 0xd, 0xe3, 0xa, 0xd, 0x3, 0xd, 0x3, 0xd, 
    0x3, 0xe, 0x3, 0xe, 0x5, 0xe, 0xe9, 0xa, 0xe, 0x3, 0xf, 0x3, 0xf, 0x3, 
    0xf, 0x3, 0xf, 0x3, 0xf, 0x5, 0xf, 0xf0, 0xa, 0xf, 0x3, 0x10, 0x3, 0x10, 
    0x3, 0x10, 0x3, 0x10, 0x3, 0x11, 0x3, 0x11, 0x3, 0x11, 0x3, 0x11, 0x3, 
    0x11, 0x7, 0x11, 0xfb, 0xa, 0x11, 0xc, 0x11, 0xe, 0x11, 0xfe, 0xb, 0x11, 
    0x3, 0x12, 0x3, 0x12, 0x3, 0x12, 0x3, 0x12, 0x5, 0x12, 0x104, 0xa, 0x12, 
    0x3, 0x13, 0x3, 0x13, 0x3, 0x13, 0x6, 0x13, 0x109, 0xa, 0x13, 0xd, 0x13, 
    0xe, 0x13, 0x10a, 0x3, 0x14, 0x3, 0x14, 0x3, 0x14, 0x3, 0x14, 0x3, 0x15, 
    0x3, 0x15, 0x3, 0x15, 0x3, 0x15, 0x5, 0x15, 0x115, 0xa, 0x15, 0x3, 0x16, 
    0x3, 0x16, 0x3, 0x16, 0x5, 0x16, 0x11a, 0xa, 0x16, 0x3, 0x17, 0x3, 0x17, 
    0x3, 0x17, 0x3, 0x17, 0x3, 0x17, 0x7, 0x17, 0x121, 0xa, 0x17, 0xc, 0x17, 
    0xe, 0x17, 0x124, 0xb, 0x17, 0x3, 0x17, 0x3, 0x17, 0x3, 0x18, 0x3, 0x18, 
    0x3, 0x18, 0x3, 0x18, 0x7, 0x18, 0x12c, 0xa, 0x18, 0xc, 0x18, 0xe, 0x18, 
    0x12f, 0xb, 0x18, 0x3, 0x18, 0x3, 0x18, 0x3, 0x19, 0x3, 0x19, 0x7, 0x19, 
    0x135, 0xa, 0x19, 0xc, 0x19, 0xe, 0x19, 0x138, 0xb, 0x19, 0x3, 0x19, 
    0x3, 0x19, 0x3, 0x1a, 0x3, 0x1a, 0x3, 0x1a, 0x5, 0x1a, 0x13f, 0xa, 0x1a, 
    0x3, 0x1a, 0x5, 0x1a, 0x142, 0xa, 0x1a, 0x3, 0x1b, 0x3, 0x1b, 0x5, 0x1b, 
    0x146, 0xa, 0x1b, 0x3, 0x1c, 0x3, 0x1c, 0x3, 0x1c, 0x5, 0x1c, 0x14b, 
    0xa, 0x1c, 0x3, 0x1c, 0x3, 0x1c, 0x3, 0x1c, 0x5, 0x1c, 0x150, 0xa, 0x1c, 
    0x3, 0x1d, 0x3, 0x1d, 0x3, 0x1d, 0x3, 0x1e, 0x3, 0x1e, 0x3, 0x1e, 0x3, 
    0x1e, 0x3, 0x1e, 0x5, 0x1e, 0x15a, 0xa, 0x1e, 0x3, 0x1f, 0x3, 0x1f, 
    0x3, 0x1f, 0x3, 0x1f, 0x3, 0x1f, 0x3, 0x20, 0x3, 0x20, 0x3, 0x20, 0x3, 
    0x20, 0x5, 0x20, 0x165, 0xa, 0x20, 0x3, 0x20, 0x3, 0x20, 0x3, 0x20, 
    0x3, 0x20, 0x3, 0x20, 0x5, 0x20, 0x16c, 0xa, 0x20, 0x3, 0x20, 0x5, 0x20, 
    0x16f, 0xa, 0x20, 0x3, 0x20, 0x3, 0x20, 0x5, 0x20, 0x173, 0xa, 0x20, 
    0x3, 0x21, 0x3, 0x21, 0x3, 0x21, 0x5, 0x21, 0x178, 0xa, 0x21, 0x3, 0x21, 
    0x3, 0x21, 0x5, 0x21, 0x17c, 0xa, 0x21, 0x3, 0x22, 0x3, 0x22, 0x3, 0x22, 
    0x3, 0x22, 0x3, 0x22, 0x6, 0x22, 0x183, 0xa, 0x22, 0xd, 0x22, 0xe, 0x22, 
    0x184, 0x3, 0x22, 0x5, 0x22, 0x188, 0xa, 0x22, 0x3, 0x23, 0x3, 0x23, 
    0x3, 0x23, 0x3, 0x23, 0x3, 0x23, 0x5, 0x23, 0x18f, 0xa, 0x23, 0x3, 0x24, 
    0x3, 0x24, 0x3, 0x24, 0x3, 0x24, 0x3, 0x24, 0x3, 0x24, 0x3, 0x24, 0x6, 
    0x24, 0x198, 0xa, 0x24, 0xd, 0x24, 0xe, 0x24, 0x199, 0x3, 0x24, 0x3, 
    0x24, 0x3, 0x24, 0x3, 0x24, 0x3, 0x25, 0x3, 0x25, 0x3, 0x26, 0x3, 0x26, 
    0x3, 0x27, 0x3, 0x27, 0x3, 0x28, 0x3, 0x28, 0x3, 0x28, 0x3, 0x29, 0x3, 
    0x29, 0x3, 0x29, 0x2, 0x2, 0x2a, 0x2, 0x4, 0x6, 0x8, 0xa, 0xc, 0xe, 
    0x10, 0x12, 0x14, 0x16, 0x18, 0x1a, 0x1c, 0x1e, 0x20, 0x22, 0x24, 0x26, 
    0x28, 0x2a, 0x2c, 0x2e, 0x30, 0x32, 0x34, 0x36, 0x38, 0x3a, 0x3c, 0x3e, 
    0x40, 0x42, 0x44, 0x46, 0x48, 0x4a, 0x4c, 0x4e, 0x50, 0x2, 0xe, 0x5, 
    0x2, 0x5, 0x6, 0x30, 0x31, 0x43, 0x43, 0x4, 0x2, 0x8, 0x8, 0x31, 0x31, 
    0x3, 0x2, 0x13, 0x14, 0x4, 0x2, 0x6, 0x6, 0x30, 0x31, 0x4, 0x2, 0xe, 
    0xe, 0x18, 0x18, 0x4, 0x2, 0x31, 0x31, 0x43, 0x43, 0x6, 0x2, 0x8, 0x8, 
    0x31, 0x31, 0x41, 0x41, 0x43, 0x43, 0x5, 0x2, 0x31, 0x31, 0x41, 0x41, 
    0x43, 0x43, 0x4, 0x2, 0x30, 0x31, 0x43, 0x43, 0x6, 0x2, 0x30, 0x31, 
    0x41, 0x41, 0x43, 0x43, 0x46, 0x46, 0x3, 0x2, 0x36, 0x37, 0x3, 0x2, 
    0x2c, 0x2e, 0x2, 0x1c5, 0x2, 0x55, 0x3, 0x2, 0x2, 0x2, 0x4, 0x68, 0x3, 
    0x2, 0x2, 0x2, 0x6, 0x6a, 0x3, 0x2, 0x2, 0x2, 0x8, 0x75, 0x3, 0x2, 0x2, 
    0x2, 0xa, 0x77, 0x3, 0x2, 0x2, 0x2, 0xc, 0x82, 0x3, 0x2, 0x2, 0x2, 0xe, 
    0x92, 0x3, 0x2, 0x2, 0x2, 0x10, 0x96, 0x3, 0x2, 0x2, 0x2, 0x12, 0xab, 
    0x3, 0x2, 0x2, 0x2, 0x14, 0xb1, 0x3, 0x2, 0x2, 0x2, 0x16, 0xb5, 0x3, 
    0x2, 0x2, 0x2, 0x18, 0xd4, 0x3, 0x2, 0x2, 0x2, 0x1a, 0xe8, 0x3, 0x2, 
    0x2, 0x2, 0x1c, 0xef, 0x3, 0x2, 0x2, 0x2, 0x1e, 0xf1, 0x3, 0x2, 0x2, 
    0x2, 0x20, 0xf5, 0x3, 0x2, 0x2, 0x2, 0x22, 0x103, 0x3, 0x2, 0x2, 0x2, 
    0x24, 0x105, 0x3, 0x2, 0x2, 0x2, 0x26, 0x10c, 0x3, 0x2, 0x2, 0x2, 0x28, 
    0x110, 0x3, 0x2, 0x2, 0x2, 0x2a, 0x119, 0x3, 0x2, 0x2, 0x2, 0x2c, 0x11b, 
    0x3, 0x2, 0x2, 0x2, 0x2e, 0x127, 0x3, 0x2, 0x2, 0x2, 0x30, 0x132, 0x3, 
    0x2, 0x2, 0x2, 0x32, 0x13e, 0x3, 0x2, 0x2, 0x2, 0x34, 0x145, 0x3, 0x2, 
    0x2, 0x2, 0x36, 0x147, 0x3, 0x2, 0x2, 0x2, 0x38, 0x151, 0x3, 0x2, 0x2, 
    0x2, 0x3a, 0x154, 0x3, 0x2, 0x2, 0x2, 0x3c, 0x15b, 0x3, 0x2, 0x2, 0x2, 
    0x3e, 0x160, 0x3, 0x2, 0x2, 0x2, 0x40, 0x17b, 0x3, 0x2, 0x2, 0x2, 0x42, 
    0x17d, 0x3, 0x2, 0x2, 0x2, 0x44, 0x189, 0x3, 0x2, 0x2, 0x2, 0x46, 0x190, 
    0x3, 0x2, 0x2, 0x2, 0x48, 0x19f, 0x3, 0x2, 0x2, 0x2, 0x4a, 0x1a1, 0x3, 
    0x2, 0x2, 0x2, 0x4c, 0x1a3, 0x3, 0x2, 0x2, 0x2, 0x4e, 0x1a5, 0x3, 0x2, 
    0x2, 0x2, 0x50, 0x1a8, 0x3, 0x2, 0x2, 0x2, 0x52, 0x54, 0x5, 0x4, 0x3, 
    0x2, 0x53, 0x52, 0x3, 0x2, 0x2, 0x2, 0x54, 0x57, 0x3, 0x2, 0x2, 0x2, 
    0x55, 0x53, 0x3, 0x2, 0x2, 0x2, 0x55, 0x56, 0x3, 0x2, 0x2, 0x2, 0x56, 
    0x3, 0x3, 0x2, 0x2, 0x2, 0x57, 0x55, 0x3, 0x2, 0x2, 0x2, 0x58, 0x69, 
    0x5, 0x20, 0x11, 0x2, 0x59, 0x69, 0x5, 0x22, 0x12, 0x2, 0x5a, 0x69, 
    0x5, 0x4c, 0x27, 0x2, 0x5b, 0x69, 0x5, 0x2a, 0x16, 0x2, 0x5c, 0x69, 
    0x5, 0xe, 0x8, 0x2, 0x5d, 0x69, 0x5, 0x18, 0xd, 0x2, 0x5e, 0x69, 0x5, 
    0x40, 0x21, 0x2, 0x5f, 0x69, 0x5, 0x32, 0x1a, 0x2, 0x60, 0x69, 0x5, 
    0x3e, 0x20, 0x2, 0x61, 0x69, 0x5, 0x42, 0x22, 0x2, 0x62, 0x69, 0x5, 
    0x44, 0x23, 0x2, 0x63, 0x69, 0x5, 0x6, 0x4, 0x2, 0x64, 0x69, 0x5, 0x8, 
    0x5, 0x2, 0x65, 0x69, 0x5, 0x50, 0x29, 0x2, 0x66, 0x69, 0x7, 0x48, 0x2, 
    0x2, 0x67, 0x69, 0x5, 0x4e, 0x28, 0x2, 0x68, 0x58, 0x3, 0x2, 0x2, 0x2, 
    0x68, 0x59, 0x3, 0x2, 0x2, 0x2, 0x68, 0x5a, 0x3, 0x2, 0x2, 0x2, 0x68, 
    0x5b, 0x3, 0x2, 0x2, 0x2, 0x68, 0x5c, 0x3, 0x2, 0x2, 0x2, 0x68, 0x5d, 
    0x3, 0x2, 0x2, 0x2, 0x68, 0x5e, 0x3, 0x2, 0x2, 0x2, 0x68, 0x5f, 0x3, 
    0x2, 0x2, 0x2, 0x68, 0x60, 0x3, 0x2, 0x2, 0x2, 0x68, 0x61, 0x3, 0x2, 
    0x2, 0x2, 0x68, 0x62, 0x3, 0x2, 0x2, 0x2, 0x68, 0x63, 0x3, 0x2, 0x2, 
    0x2, 0x68, 0x64, 0x3, 0x2, 0x2, 0x2, 0x68, 0x65, 0x3, 0x2, 0x2, 0x2, 
    0x68, 0x66, 0x3, 0x2, 0x2, 0x2, 0x68, 0x67, 0x3, 0x2, 0x2, 0x2, 0x69, 
    0x5, 0x3, 0x2, 0x2, 0x2, 0x6a, 0x6b, 0x7, 0x3, 0x2, 0x2, 0x6b, 0x6e, 
    0x5, 0x48, 0x25, 0x2, 0x6c, 0x6d, 0x7, 0x4, 0x2, 0x2, 0x6d, 0x6f, 0x9, 
    0x2, 0x2, 0x2, 0x6e, 0x6c, 0x3, 0x2, 0x2, 0x2, 0x6e, 0x6f, 0x3, 0x2, 
    0x2, 0x2, 0x6f, 0x71, 0x3, 0x2, 0x2, 0x2, 0x70, 0x72, 0x5, 0x26, 0x14, 
    0x2, 0x71, 0x70, 0x3, 0x2, 0x2, 0x2, 0x71, 0x72, 0x3, 0x2, 0x2, 0x2, 
    0x72, 0x7, 0x3, 0x2, 0x2, 0x2, 0x73, 0x76, 0x5, 0xa, 0x6, 0x2, 0x74, 
    0x76, 0x5, 0xc, 0x7, 0x2, 0x75, 0x73, 0x3, 0x2, 0x2, 0x2, 0x75, 0x74, 
    0x3, 0x2, 0x2, 0x2, 0x76, 0x9, 0x3, 0x2, 0x2, 0x2, 0x77, 0x78, 0x7, 
    0x7, 0x2, 0x2, 0x78, 0x7b, 0x9, 0x3, 0x2, 0x2, 0x79, 0x7a, 0x7, 0x37, 
    0x2, 0x2, 0x7a, 0x7c, 0x7, 0x31, 0x2, 0x2, 0x7b, 0x79, 0x3, 0x2, 0x2, 
    0x2, 0x7c, 0x7d, 0x3, 0x2, 0x2, 0x2, 0x7d, 0x7b, 0x3, 0x2, 0x2, 0x2, 
    0x7d, 0x7e, 0x3, 0x2, 0x2, 0x2, 0x7e, 0x80, 0x3, 0x2, 0x2, 0x2, 0x7f, 
    0x81, 0x5, 0x26, 0x14, 0x2, 0x80, 0x7f, 0x3, 0x2, 0x2, 0x2, 0x80, 0x81, 
    0x3, 0x2, 0x2, 0x2, 0x81, 0xb, 0x3, 0x2, 0x2, 0x2, 0x82, 0x83, 0x7, 
    0x9, 0x2, 0x2, 0x83, 0x86, 0x9, 0x3, 0x2, 0x2, 0x84, 0x85, 0x7, 0x37, 
    0x2, 0x2, 0x85, 0x87, 0x5, 0x48, 0x25, 0x2, 0x86, 0x84, 0x3, 0x2, 0x2, 
    0x2, 0x87, 0x88, 0x3, 0x2, 0x2, 0x2, 0x88, 0x86, 0x3, 0x2, 0x2, 0x2, 
    0x88, 0x89, 0x3, 0x2, 0x2, 0x2, 0x89, 0x8b, 0x3, 0x2, 0x2, 0x2, 0x8a, 
    0x8c, 0x5, 0x26, 0x14, 0x2, 0x8b, 0x8a, 0x3, 0x2, 0x2, 0x2, 0x8b, 0x8c, 
    0x3, 0x2, 0x2, 0x2, 0x8c, 0xd, 0x3, 0x2, 0x2, 0x2, 0x8d, 0x93, 0x5, 
    0x16, 0xc, 0x2, 0x8e, 0x90, 0x5, 0x10, 0x9, 0x2, 0x8f, 0x91, 0x5, 0x26, 
    0x14, 0x2, 0x90, 0x8f, 0x3, 0x2, 0x2, 0x2, 0x90, 0x91, 0x3, 0x2, 0x2, 
    0x2, 0x91, 0x93, 0x3, 0x2, 0x2, 0x2, 0x92, 0x8d, 0x3, 0x2, 0x2, 0x2, 
    0x92, 0x8e, 0x3, 0x2, 0x2, 0x2, 0x93, 0xf, 0x3, 0x2, 0x2, 0x2, 0x94, 
    0x97, 0x5, 0x12, 0xa, 0x2, 0x95, 0x97, 0x5, 0x14, 0xb, 0x2, 0x96, 0x94, 
    0x3, 0x2, 0x2, 0x2, 0x96, 0x95, 0x3, 0x2, 0x2, 0x2, 0x97, 0x11, 0x3, 
    0x2, 0x2, 0x2, 0x98, 0x99, 0x7, 0xa, 0x2, 0x2, 0x99, 0x9f, 0x7, 0x31, 
    0x2, 0x2, 0x9a, 0x9b, 0x5, 0x4a, 0x26, 0x2, 0x9b, 0x9c, 0x5, 0x48, 0x25, 
    0x2, 0x9c, 0x9e, 0x3, 0x2, 0x2, 0x2, 0x9d, 0x9a, 0x3, 0x2, 0x2, 0x2, 
    0x9e, 0xa1, 0x3, 0x2, 0x2, 0x2, 0x9f, 0x9d, 0x3, 0x2, 0x2, 0x2, 0x9f, 
    0xa0, 0x3, 0x2, 0x2, 0x2, 0xa0, 0xac, 0x3, 0x2, 0x2, 0x2, 0xa1, 0x9f, 
    0x3, 0x2, 0x2, 0x2, 0xa2, 0xa8, 0x7, 0xb, 0x2, 0x2, 0xa3, 0xa4, 0x5, 
    0x4a, 0x26, 0x2, 0xa4, 0xa5, 0x5, 0x48, 0x25, 0x2, 0xa5, 0xa7, 0x3, 
    0x2, 0x2, 0x2, 0xa6, 0xa3, 0x3, 0x2, 0x2, 0x2, 0xa7, 0xaa, 0x3, 0x2, 
    0x2, 0x2, 0xa8, 0xa6, 0x3, 0x2, 0x2, 0x2, 0xa8, 0xa9, 0x3, 0x2, 0x2, 
    0x2, 0xa9, 0xac, 0x3, 0x2, 0x2, 0x2, 0xaa, 0xa8, 0x3, 0x2, 0x2, 0x2, 
    0xab, 0x98, 0x3, 0x2, 0x2, 0x2, 0xab, 0xa2, 0x3, 0x2, 0x2, 0x2, 0xac, 
    0x13, 0x3, 0x2, 0x2, 0x2, 0xad, 0xae, 0x7, 0xc, 0x2, 0x2, 0xae, 0xaf, 
    0x7, 0x43, 0x2, 0x2, 0xaf, 0xb0, 0x7, 0xd, 0x2, 0x2, 0xb0, 0xb2, 0x7, 
    0x31, 0x2, 0x2, 0xb1, 0xad, 0x3, 0x2, 0x2, 0x2, 0xb2, 0xb3, 0x3, 0x2, 
    0x2, 0x2, 0xb3, 0xb1, 0x3, 0x2, 0x2, 0x2, 0xb3, 0xb4, 0x3, 0x2, 0x2, 
    0x2, 0xb4, 0x15, 0x3, 0x2, 0x2, 0x2, 0xb5, 0xb6, 0x7, 0xe, 0x2, 0x2, 
    0xb6, 0xb7, 0x7, 0x43, 0x2, 0x2, 0xb7, 0xb8, 0x7, 0xf, 0x2, 0x2, 0xb8, 
    0xc7, 0x5, 0x26, 0x14, 0x2, 0xb9, 0xba, 0x7, 0x10, 0x2, 0x2, 0xba, 0xc3, 
    0x7, 0x11, 0x2, 0x2, 0xbb, 0xbc, 0x7, 0x43, 0x2, 0x2, 0xbc, 0xbf, 0x7, 
    0x45, 0x2, 0x2, 0xbd, 0xbe, 0x7, 0x12, 0x2, 0x2, 0xbe, 0xc0, 0x7, 0x31, 
    0x2, 0x2, 0xbf, 0xbd, 0x3, 0x2, 0x2, 0x2, 0xc0, 0xc1, 0x3, 0x2, 0x2, 
    0x2, 0xc1, 0xbf, 0x3, 0x2, 0x2, 0x2, 0xc1, 0xc2, 0x3, 0x2, 0x2, 0x2, 
    0xc2, 0xc4, 0x3, 0x2, 0x2, 0x2, 0xc3, 0xbb, 0x3, 0x2, 0x2, 0x2, 0xc4, 
    0xc5, 0x3, 0x2, 0x2, 0x2, 0xc5, 0xc3, 0x3, 0x2, 0x2, 0x2, 0xc5, 0xc6, 
    0x3, 0x2, 0x2, 0x2, 0xc6, 0xc8, 0x3, 0x2, 0x2, 0x2, 0xc7, 0xb9, 0x3, 
    0x2, 0x2, 0x2, 0xc7, 0xc8, 0x3, 0x2, 0x2, 0x2, 0xc8, 0xc9, 0x3, 0x2, 
    0x2, 0x2, 0xc9, 0xcd, 0x9, 0x4, 0x2, 0x2, 0xca, 0xcc, 0x5, 0x4, 0x3, 
    0x2, 0xcb, 0xca, 0x3, 0x2, 0x2, 0x2, 0xcc, 0xcf, 0x3, 0x2, 0x2, 0x2, 
    0xcd, 0xcb, 0x3, 0x2, 0x2, 0x2, 0xcd, 0xce, 0x3, 0x2, 0x2, 0x2, 0xce, 
    0xd0, 0x3, 0x2, 0x2, 0x2, 0xcf, 0xcd, 0x3, 0x2, 0x2, 0x2, 0xd0, 0xd1, 
    0x7, 0x15, 0x2, 0x2, 0xd1, 0xd2, 0x7, 0x31, 0x2, 0x2, 0xd2, 0xd3, 0x7, 
    0x16, 0x2, 0x2, 0xd3, 0x17, 0x3, 0x2, 0x2, 0x2, 0xd4, 0xd5, 0x7, 0x38, 
    0x2, 0x2, 0xd5, 0xd6, 0x5, 0x1a, 0xe, 0x2, 0xd6, 0xd8, 0x7, 0x17, 0x2, 
    0x2, 0xd7, 0xd9, 0x5, 0x4, 0x3, 0x2, 0xd8, 0xd7, 0x3, 0x2, 0x2, 0x2, 
    0xd9, 0xda, 0x3, 0x2, 0x2, 0x2, 0xda, 0xd8, 0x3, 0x2, 0x2, 0x2, 0xda, 
    0xdb, 0x3, 0x2, 0x2, 0x2, 0xdb, 0xe2, 0x3, 0x2, 0x2, 0x2, 0xdc, 0xde, 
    0x7, 0x39, 0x2, 0x2, 0xdd, 0xdf, 0x5, 0x4, 0x3, 0x2, 0xde, 0xdd, 0x3, 
    0x2, 0x2, 0x2, 0xdf, 0xe0, 0x3, 0x2, 0x2, 0x2, 0xe0, 0xde, 0x3, 0x2, 
    0x2, 0x2, 0xe0, 0xe1, 0x3, 0x2, 0x2, 0x2, 0xe1, 0xe3, 0x3, 0x2, 0x2, 
    0x2, 0xe2, 0xdc, 0x3, 0x2, 0x2, 0x2, 0xe2, 0xe3, 0x3, 0x2, 0x2, 0x2, 
    0xe3, 0xe4, 0x3, 0x2, 0x2, 0x2, 0xe4, 0xe5, 0x7, 0x40, 0x2, 0x2, 0xe5, 
    0x19, 0x3, 0x2, 0x2, 0x2, 0xe6, 0xe9, 0x5, 0x1c, 0xf, 0x2, 0xe7, 0xe9, 
    0x5, 0x1e, 0x10, 0x2, 0xe8, 0xe6, 0x3, 0x2, 0x2, 0x2, 0xe8, 0xe7, 0x3, 
    0x2, 0x2, 0x2, 0xe9, 0x1b, 0x3, 0x2, 0x2, 0x2, 0xea, 0xf0, 0x5, 0x48, 
    0x25, 0x2, 0xeb, 0xec, 0x7, 0x31, 0x2, 0x2, 0xec, 0xed, 0x7, 0x4, 0x2, 
    0x2, 0xed, 0xf0, 0x9, 0x5, 0x2, 0x2, 0xee, 0xf0, 0x7, 0x8, 0x2, 0x2, 
    0xef, 0xea, 0x3, 0x2, 0x2, 0x2, 0xef, 0xeb, 0x3, 0x2, 0x2, 0x2, 0xef, 
    0xee, 0x3, 0x2, 0x2, 0x2, 0xf0, 0x1d, 0x3, 0x2, 0x2, 0x2, 0xf1, 0xf2, 
    0x5, 0x1c, 0xf, 0x2, 0xf2, 0xf3, 0x7, 0x3a, 0x2, 0x2, 0xf3, 0xf4, 0x5, 
    0x1c, 0xf, 0x2, 0xf4, 0x1f, 0x3, 0x2, 0x2, 0x2, 0xf5, 0xf6, 0x9, 0x6, 
    0x2, 0x2, 0xf6, 0xf7, 0x7, 0x43, 0x2, 0x2, 0xf7, 0xfc, 0x7, 0x45, 0x2, 
    0x2, 0xf8, 0xf9, 0x7, 0x12, 0x2, 0x2, 0xf9, 0xfb, 0x5, 0x48, 0x25, 0x2, 
    0xfa, 0xf8, 0x3, 0x2, 0x2, 0x2, 0xfb, 0xfe, 0x3, 0x2, 0x2, 0x2, 0xfc, 
    0xfa, 0x3, 0x2, 0x2, 0x2, 0xfc, 0xfd, 0x3, 0x2, 0x2, 0x2, 0xfd, 0x21, 
    0x3, 0x2, 0x2, 0x2, 0xfe, 0xfc, 0x3, 0x2, 0x2, 0x2, 0xff, 0x100, 0x5, 
    0x20, 0x11, 0x2, 0x100, 0x101, 0x5, 0x24, 0x13, 0x2, 0x101, 0x104, 0x3, 
    0x2, 0x2, 0x2, 0x102, 0x104, 0x5, 0x28, 0x15, 0x2, 0x103, 0xff, 0x3, 
    0x2, 0x2, 0x2, 0x103, 0x102, 0x3, 0x2, 0x2, 0x2, 0x104, 0x23, 0x3, 0x2, 
    0x2, 0x2, 0x105, 0x108, 0x7, 0x19, 0x2, 0x2, 0x106, 0x107, 0x7, 0x12, 
    0x2, 0x2, 0x107, 0x109, 0x7, 0x31, 0x2, 0x2, 0x108, 0x106, 0x3, 0x2, 
    0x2, 0x2, 0x109, 0x10a, 0x3, 0x2, 0x2, 0x2, 0x10a, 0x108, 0x3, 0x2, 
    0x2, 0x2, 0x10a, 0x10b, 0x3, 0x2, 0x2, 0x2, 0x10b, 0x25, 0x3, 0x2, 0x2, 
    0x2, 0x10c, 0x10d, 0x7, 0x19, 0x2, 0x2, 0x10d, 0x10e, 0x7, 0x12, 0x2, 
    0x2, 0x10e, 0x10f, 0x7, 0x31, 0x2, 0x2, 0x10f, 0x27, 0x3, 0x2, 0x2, 
    0x2, 0x110, 0x111, 0x7, 0x1a, 0x2, 0x2, 0x111, 0x112, 0x7, 0x45, 0x2, 
    0x2, 0x112, 0x114, 0x5, 0x48, 0x25, 0x2, 0x113, 0x115, 0x5, 0x26, 0x14, 
    0x2, 0x114, 0x113, 0x3, 0x2, 0x2, 0x2, 0x114, 0x115, 0x3, 0x2, 0x2, 
    0x2, 0x115, 0x29, 0x3, 0x2, 0x2, 0x2, 0x116, 0x11a, 0x5, 0x2c, 0x17, 
    0x2, 0x117, 0x11a, 0x5, 0x2e, 0x18, 0x2, 0x118, 0x11a, 0x5, 0x30, 0x19, 
    0x2, 0x119, 0x116, 0x3, 0x2, 0x2, 0x2, 0x119, 0x117, 0x3, 0x2, 0x2, 
    0x2, 0x119, 0x118, 0x3, 0x2, 0x2, 0x2, 0x11a, 0x2b, 0x3, 0x2, 0x2, 0x2, 
    0x11b, 0x11c, 0x7, 0x3b, 0x2, 0x2, 0x11c, 0x11d, 0x7, 0x31, 0x2, 0x2, 
    0x11d, 0x11e, 0x7, 0x3e, 0x2, 0x2, 0x11e, 0x122, 0x7, 0x31, 0x2, 0x2, 
    0x11f, 0x121, 0x5, 0x4, 0x3, 0x2, 0x120, 0x11f, 0x3, 0x2, 0x2, 0x2, 
    0x121, 0x124, 0x3, 0x2, 0x2, 0x2, 0x122, 0x120, 0x3, 0x2, 0x2, 0x2, 
    0x122, 0x123, 0x3, 0x2, 0x2, 0x2, 0x123, 0x125, 0x3, 0x2, 0x2, 0x2, 
    0x124, 0x122, 0x3, 0x2, 0x2, 0x2, 0x125, 0x126, 0x7, 0x40, 0x2, 0x2, 
    0x126, 0x2d, 0x3, 0x2, 0x2, 0x2, 0x127, 0x128, 0x7, 0x3c, 0x2, 0x2, 
    0x128, 0x129, 0x9, 0x7, 0x2, 0x2, 0x129, 0x12d, 0x7, 0x3f, 0x2, 0x2, 
    0x12a, 0x12c, 0x5, 0x4, 0x3, 0x2, 0x12b, 0x12a, 0x3, 0x2, 0x2, 0x2, 
    0x12c, 0x12f, 0x3, 0x2, 0x2, 0x2, 0x12d, 0x12b, 0x3, 0x2, 0x2, 0x2, 
    0x12d, 0x12e, 0x3, 0x2, 0x2, 0x2, 0x12e, 0x130, 0x3, 0x2, 0x2, 0x2, 
    0x12f, 0x12d, 0x3, 0x2, 0x2, 0x2, 0x130, 0x131, 0x7, 0x40, 0x2, 0x2, 
    0x131, 0x2f, 0x3, 0x2, 0x2, 0x2, 0x132, 0x136, 0x7, 0x3d, 0x2, 0x2, 
    0x133, 0x135, 0x5, 0x4, 0x3, 0x2, 0x134, 0x133, 0x3, 0x2, 0x2, 0x2, 
    0x135, 0x138, 0x3, 0x2, 0x2, 0x2, 0x136, 0x134, 0x3, 0x2, 0x2, 0x2, 
    0x136, 0x137, 0x3, 0x2, 0x2, 0x2, 0x137, 0x139, 0x3, 0x2, 0x2, 0x2, 
    0x138, 0x136, 0x3, 0x2, 0x2, 0x2, 0x139, 0x13a, 0x7, 0x40, 0x2, 0x2, 
    0x13a, 0x31, 0x3, 0x2, 0x2, 0x2, 0x13b, 0x13f, 0x5, 0x34, 0x1b, 0x2, 
    0x13c, 0x13f, 0x5, 0x3c, 0x1f, 0x2, 0x13d, 0x13f, 0x5, 0x3a, 0x1e, 0x2, 
    0x13e, 0x13b, 0x3, 0x2, 0x2, 0x2, 0x13e, 0x13c, 0x3, 0x2, 0x2, 0x2, 
    0x13e, 0x13d, 0x3, 0x2, 0x2, 0x2, 0x13f, 0x141, 0x3, 0x2, 0x2, 0x2, 
    0x140, 0x142, 0x5, 0x24, 0x13, 0x2, 0x141, 0x140, 0x3, 0x2, 0x2, 0x2, 
    0x141, 0x142, 0x3, 0x2, 0x2, 0x2, 0x142, 0x33, 0x3, 0x2, 0x2, 0x2, 0x143, 
    0x146, 0x5, 0x36, 0x1c, 0x2, 0x144, 0x146, 0x5, 0x38, 0x1d, 0x2, 0x145, 
    0x143, 0x3, 0x2, 0x2, 0x2, 0x145, 0x144, 0x3, 0x2, 0x2, 0x2, 0x146, 
    0x35, 0x3, 0x2, 0x2, 0x2, 0x147, 0x14a, 0x7, 0x32, 0x2, 0x2, 0x148, 
    0x14b, 0x5, 0x48, 0x25, 0x2, 0x149, 0x14b, 0x7, 0x8, 0x2, 0x2, 0x14a, 
    0x148, 0x3, 0x2, 0x2, 0x2, 0x14a, 0x149, 0x3, 0x2, 0x2, 0x2, 0x14b, 
    0x14c, 0x3, 0x2, 0x2, 0x2, 0x14c, 0x14f, 0x5, 0x4a, 0x26, 0x2, 0x14d, 
    0x150, 0x5, 0x48, 0x25, 0x2, 0x14e, 0x150, 0x7, 0x8, 0x2, 0x2, 0x14f, 
    0x14d, 0x3, 0x2, 0x2, 0x2, 0x14f, 0x14e, 0x3, 0x2, 0x2, 0x2, 0x150, 
    0x37, 0x3, 0x2, 0x2, 0x2, 0x151, 0x152, 0x7, 0x35, 0x2, 0x2, 0x152, 
    0x153, 0x9, 0x3, 0x2, 0x2, 0x153, 0x39, 0x3, 0x2, 0x2, 0x2, 0x154, 0x155, 
    0x7, 0x1b, 0x2, 0x2, 0x155, 0x156, 0x9, 0x8, 0x2, 0x2, 0x156, 0x157, 
    0x5, 0x4a, 0x26, 0x2, 0x157, 0x159, 0x9, 0x9, 0x2, 0x2, 0x158, 0x15a, 
    0x7, 0x34, 0x2, 0x2, 0x159, 0x158, 0x3, 0x2, 0x2, 0x2, 0x159, 0x15a, 
    0x3, 0x2, 0x2, 0x2, 0x15a, 0x3b, 0x3, 0x2, 0x2, 0x2, 0x15b, 0x15c, 0x7, 
    0x3, 0x2, 0x2, 0x15c, 0x15d, 0x7, 0x31, 0x2, 0x2, 0x15d, 0x15e, 0x7, 
    0x31, 0x2, 0x2, 0x15e, 0x15f, 0x7, 0x33, 0x2, 0x2, 0x15f, 0x3d, 0x3, 
    0x2, 0x2, 0x2, 0x160, 0x161, 0x7, 0x1c, 0x2, 0x2, 0x161, 0x164, 0x7, 
    0x31, 0x2, 0x2, 0x162, 0x163, 0x7, 0x4, 0x2, 0x2, 0x163, 0x165, 0x9, 
    0xa, 0x2, 0x2, 0x164, 0x162, 0x3, 0x2, 0x2, 0x2, 0x164, 0x165, 0x3, 
    0x2, 0x2, 0x2, 0x165, 0x166, 0x3, 0x2, 0x2, 0x2, 0x166, 0x172, 0x7, 
    0x17, 0x2, 0x2, 0x167, 0x16e, 0x7, 0x1d, 0x2, 0x2, 0x168, 0x16b, 0x5, 
    0x48, 0x25, 0x2, 0x169, 0x16a, 0x7, 0x4, 0x2, 0x2, 0x16a, 0x16c, 0x7, 
    0x43, 0x2, 0x2, 0x16b, 0x169, 0x3, 0x2, 0x2, 0x2, 0x16b, 0x16c, 0x3, 
    0x2, 0x2, 0x2, 0x16c, 0x16f, 0x3, 0x2, 0x2, 0x2, 0x16d, 0x16f, 0x7, 
    0x8, 0x2, 0x2, 0x16e, 0x168, 0x3, 0x2, 0x2, 0x2, 0x16e, 0x16d, 0x3, 
    0x2, 0x2, 0x2, 0x16f, 0x170, 0x3, 0x2, 0x2, 0x2, 0x170, 0x173, 0x7, 
    0x1e, 0x2, 0x2, 0x171, 0x173, 0x7, 0x1f, 0x2, 0x2, 0x172, 0x167, 0x3, 
    0x2, 0x2, 0x2, 0x172, 0x171, 0x3, 0x2, 0x2, 0x2, 0x173, 0x3f, 0x3, 0x2, 
    0x2, 0x2, 0x174, 0x177, 0x7, 0x20, 0x2, 0x2, 0x175, 0x178, 0x5, 0x48, 
    0x25, 0x2, 0x176, 0x178, 0x7, 0x8, 0x2, 0x2, 0x177, 0x175, 0x3, 0x2, 
    0x2, 0x2, 0x177, 0x176, 0x3, 0x2, 0x2, 0x2, 0x178, 0x17c, 0x3, 0x2, 
    0x2, 0x2, 0x179, 0x17c, 0x7, 0x21, 0x2, 0x2, 0x17a, 0x17c, 0x7, 0x22, 
    0x2, 0x2, 0x17b, 0x174, 0x3, 0x2, 0x2, 0x2, 0x17b, 0x179, 0x3, 0x2, 
    0x2, 0x2, 0x17b, 0x17a, 0x3, 0x2, 0x2, 0x2, 0x17c, 0x41, 0x3, 0x2, 0x2, 
    0x2, 0x17d, 0x17e, 0x7, 0x23, 0x2, 0x2, 0x17e, 0x17f, 0x7, 0x30, 0x2, 
    0x2, 0x17f, 0x187, 0x7, 0x24, 0x2, 0x2, 0x180, 0x182, 0x7, 0x25, 0x2, 
    0x2, 0x181, 0x183, 0x7, 0x31, 0x2, 0x2, 0x182, 0x181, 0x3, 0x2, 0x2, 
    0x2, 0x183, 0x184, 0x3, 0x2, 0x2, 0x2, 0x184, 0x182, 0x3, 0x2, 0x2, 
    0x2, 0x184, 0x185, 0x3, 0x2, 0x2, 0x2, 0x185, 0x186, 0x3, 0x2, 0x2, 
    0x2, 0x186, 0x188, 0x7, 0x26, 0x2, 0x2, 0x187, 0x180, 0x3, 0x2, 0x2, 
    0x2, 0x187, 0x188, 0x3, 0x2, 0x2, 0x2, 0x188, 0x43, 0x3, 0x2, 0x2, 0x2, 
    0x189, 0x18a, 0x7, 0xe, 0x2, 0x2, 0x18a, 0x18b, 0x7, 0x43, 0x2, 0x2, 
    0x18b, 0x18c, 0x7, 0x27, 0x2, 0x2, 0x18c, 0x18e, 0x5, 0x24, 0x13, 0x2, 
    0x18d, 0x18f, 0x5, 0x46, 0x24, 0x2, 0x18e, 0x18d, 0x3, 0x2, 0x2, 0x2, 
    0x18e, 0x18f, 0x3, 0x2, 0x2, 0x2, 0x18f, 0x45, 0x3, 0x2, 0x2, 0x2, 0x190, 
    0x197, 0x7, 0x28, 0x2, 0x2, 0x191, 0x192, 0x7, 0x29, 0x2, 0x2, 0x192, 
    0x193, 0x7, 0x30, 0x2, 0x2, 0x193, 0x194, 0x7, 0x17, 0x2, 0x2, 0x194, 
    0x195, 0x7, 0x45, 0x2, 0x2, 0x195, 0x196, 0x7, 0x12, 0x2, 0x2, 0x196, 
    0x198, 0x5, 0x48, 0x25, 0x2, 0x197, 0x191, 0x3, 0x2, 0x2, 0x2, 0x198, 
    0x199, 0x3, 0x2, 0x2, 0x2, 0x199, 0x197, 0x3, 0x2, 0x2, 0x2, 0x199, 
    0x19a, 0x3, 0x2, 0x2, 0x2, 0x19a, 0x19b, 0x3, 0x2, 0x2, 0x2, 0x19b, 
    0x19c, 0x7, 0x15, 0x2, 0x2, 0x19c, 0x19d, 0x7, 0x31, 0x2, 0x2, 0x19d, 
    0x19e, 0x7, 0x2a, 0x2, 0x2, 0x19e, 0x47, 0x3, 0x2, 0x2, 0x2, 0x19f, 
    0x1a0, 0x9, 0xb, 0x2, 0x2, 0x1a0, 0x49, 0x3, 0x2, 0x2, 0x2, 0x1a1, 0x1a2, 
    0x9, 0xc, 0x2, 0x2, 0x1a2, 0x4b, 0x3, 0x2, 0x2, 0x2, 0x1a3, 0x1a4, 0x7, 
    0x2b, 0x2, 0x2, 0x1a4, 0x4d, 0x3, 0x2, 0x2, 0x2, 0x1a5, 0x1a6, 0x9, 
    0xd, 0x2, 0x2, 0x1a6, 0x1a7, 0x7, 0x30, 0x2, 0x2, 0x1a7, 0x4f, 0x3, 
    0x2, 0x2, 0x2, 0x1a8, 0x1a9, 0x7, 0x2f, 0x2, 0x2, 0x1a9, 0x51, 0x3, 
    0x2, 0x2, 0x2, 0x33, 0x55, 0x68, 0x6e, 0x71, 0x75, 0x7d, 0x80, 0x88, 
    0x8b, 0x90, 0x92, 0x96, 0x9f, 0xa8, 0xab, 0xb3, 0xc1, 0xc5, 0xc7, 0xcd, 
    0xda, 0xe0, 0xe2, 0xe8, 0xef, 0xfc, 0x103, 0x10a, 0x114, 0x119, 0x122, 
    0x12d, 0x136, 0x13e, 0x141, 0x145, 0x14a, 0x14f, 0x159, 0x164, 0x16b, 
    0x16e, 0x172, 0x177, 0x17b, 0x184, 0x187, 0x18e, 0x199, 
  };

  atn::ATNDeserializer deserializer;
  _atn = deserializer.deserialize(_serializedATN);

  size_t count = _atn.getNumberOfDecisions();
  _decisionToDFA.reserve(count);
  for (size_t i = 0; i < count; i++) { 
    _decisionToDFA.emplace_back(_atn.getDecisionState(i), i);
  }
}

wenyanParser::Initializer wenyanParser::_init;
