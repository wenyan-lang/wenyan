// Generated from wenyan.g4 by ANTLR 4.7.2
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class wenyanParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.7.2", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, T__2=3, T__3=4, T__4=5, T__5=6, T__6=7, T__7=8, T__8=9, 
		T__9=10, T__10=11, T__11=12, T__12=13, T__13=14, T__14=15, T__15=16, T__16=17, 
		T__17=18, T__18=19, T__19=20, T__20=21, T__21=22, T__22=23, T__23=24, 
		T__24=25, T__25=26, T__26=27, T__27=28, T__28=29, T__29=30, T__30=31, 
		T__31=32, T__32=33, T__33=34, T__34=35, T__35=36, T__36=37, T__37=38, 
		T__38=39, T__39=40, T__40=41, T__41=42, T__42=43, T__43=44, T__44=45, 
		STRING_LITERAL=46, IDENTIFIER=47, ARITH_BINARY_OP=48, LOGIC_BINARY_OP=49, 
		POST_MOD_MATH_OP=50, UNARY_OP=51, PREPOSITION_YU=52, PREPOSITION_YI=53, 
		IF=54, ELSE=55, IF_LOGIC_OP=56, FOR_START_ARR=57, FOR_START_ENUM=58, FOR_START_WHILE=59, 
		FOR_MID_ARR=60, FOR_MID_ENUM=61, FOR_IF_END=62, FLOAT_NUM=63, FLOAT_NUM_KEYWORDS=64, 
		INT_NUM=65, INT_NUM_KEYWORDS=66, TYPE=67, BOOL_VALUE=68, WS=69, BREAK=70;
	public static final int
		RULE_program = 0, RULE_statement = 1, RULE_pick_up_statement = 2, RULE_array_statement = 3, 
		RULE_array_cat_statement = 4, RULE_array_push_statement = 5, RULE_function_statement = 6, 
		RULE_function_call_statement = 7, RULE_function_plain_call = 8, RULE_function_nested_call = 9, 
		RULE_function_define_statement = 10, RULE_if_statement = 11, RULE_if_expression = 12, 
		RULE_unary_if_expression = 13, RULE_binary_if_expression = 14, RULE_declare_statement = 15, 
		RULE_define_statement = 16, RULE_reference_multi_statement = 17, RULE_reference_single_statement = 18, 
		RULE_init_define_statement = 19, RULE_for_statement = 20, RULE_for_arr_statement = 21, 
		RULE_for_enum_statement = 22, RULE_for_while_statement = 23, RULE_math_statement = 24, 
		RULE_arith_math_statement = 25, RULE_arith_binary_math = 26, RULE_arith_unary_math = 27, 
		RULE_mod_math_statement = 28, RULE_logic_math_statement = 29, RULE_assign_statement = 30, 
		RULE_return_statement = 31, RULE_import_statement = 32, RULE_object_statement = 33, 
		RULE_object_define_statement = 34, RULE_data = 35, RULE_preposition = 36, 
		RULE_print_statement = 37, RULE_comment = 38, RULE_clean_statement = 39;
	private static String[] makeRuleNames() {
		return new String[] {
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
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'\u592B'", "'\u4E4B'", "'\u5176\u9918'", "'\u9577'", "'\u929C'", 
			"'\u5176'", "'\u5145'", "'\u65BD'", "'\u65BD\u5176'", "'\u53D6'", "'\u4EE5\u65BD'", 
			"'\u543E\u6709'", "'\u8853'", "'\u6B32\u884C\u662F\u8853'", "'\u5FC5\u5148\u5F97'", 
			"'\u66F0'", "'\u662F\u8853\u66F0'", "'\u4E43\u884C\u662F\u8853\u66F0'", 
			"'\u662F\u8B02'", "'\u4E4B\u8853\u4E5F'", "'\u8005'", "'\u4ECA\u6709'", 
			"'\u540D\u4E4B'", "'\u6709'", "'\u9664'", "'\u6614\u4E4B'", "'\u4ECA'", 
			"'\u662F\u77E3'", "'\u4ECA\u4E0D\u5FA9\u5B58\u77E3'", "'\u4E43\u5F97'", 
			"'\u4E43\u6B78\u7A7A\u7121'", "'\u4E43\u5F97\u77E3'", "'\u543E\u5617\u89C0'", 
			"'\u4E4B\u66F8'", "'\u65B9\u609F'", "'\u4E4B\u7FA9'", "'\u7269'", "'\u5176\u7269\u5982\u662F'", 
			"'\u7269\u4E4B'", "'\u4E4B\u7269\u4E5F'", "'\u66F8\u4E4B'", "'\u6CE8\u66F0'", 
			"'\u758F\u66F0'", "'\u6279\u66F0'", "'\u566B'", null, null, null, null, 
			"'\u6240\u9918\u5E7E\u4F55'", "'\u8B8A'", "'\u65BC'", "'\u4EE5'", "'\u82E5'", 
			"'\u82E5\u975E'", null, "'\u51E1'", "'\u70BA\u662F'", "'\u6046\u70BA\u662F'", 
			"'\u4E2D\u4E4B'", "'\u904D'", null, null, null, null, null, null, null, 
			null, "'\u4E43\u6B62'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, null, "STRING_LITERAL", 
			"IDENTIFIER", "ARITH_BINARY_OP", "LOGIC_BINARY_OP", "POST_MOD_MATH_OP", 
			"UNARY_OP", "PREPOSITION_YU", "PREPOSITION_YI", "IF", "ELSE", "IF_LOGIC_OP", 
			"FOR_START_ARR", "FOR_START_ENUM", "FOR_START_WHILE", "FOR_MID_ARR", 
			"FOR_MID_ENUM", "FOR_IF_END", "FLOAT_NUM", "FLOAT_NUM_KEYWORDS", "INT_NUM", 
			"INT_NUM_KEYWORDS", "TYPE", "BOOL_VALUE", "WS", "BREAK"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "wenyan.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public wenyanParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	public static class ProgramContext extends ParserRuleContext {
		public List<StatementContext> statement() {
			return getRuleContexts(StatementContext.class);
		}
		public StatementContext statement(int i) {
			return getRuleContext(StatementContext.class,i);
		}
		public ProgramContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_program; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof wenyanListener ) ((wenyanListener)listener).enterProgram(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof wenyanListener ) ((wenyanListener)listener).exitProgram(this);
		}
	}

	public final ProgramContext program() throws RecognitionException {
		ProgramContext _localctx = new ProgramContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_program);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(83);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__0) | (1L << T__4) | (1L << T__6) | (1L << T__7) | (1L << T__8) | (1L << T__9) | (1L << T__11) | (1L << T__21) | (1L << T__23) | (1L << T__24) | (1L << T__25) | (1L << T__29) | (1L << T__30) | (1L << T__31) | (1L << T__32) | (1L << T__40) | (1L << T__41) | (1L << T__42) | (1L << T__43) | (1L << T__44) | (1L << ARITH_BINARY_OP) | (1L << UNARY_OP) | (1L << IF) | (1L << FOR_START_ARR) | (1L << FOR_START_ENUM) | (1L << FOR_START_WHILE))) != 0) || _la==BREAK) {
				{
				{
				setState(80);
				statement();
				}
				}
				setState(85);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class StatementContext extends ParserRuleContext {
		public Declare_statementContext declare_statement() {
			return getRuleContext(Declare_statementContext.class,0);
		}
		public Define_statementContext define_statement() {
			return getRuleContext(Define_statementContext.class,0);
		}
		public Print_statementContext print_statement() {
			return getRuleContext(Print_statementContext.class,0);
		}
		public For_statementContext for_statement() {
			return getRuleContext(For_statementContext.class,0);
		}
		public Function_statementContext function_statement() {
			return getRuleContext(Function_statementContext.class,0);
		}
		public If_statementContext if_statement() {
			return getRuleContext(If_statementContext.class,0);
		}
		public Return_statementContext return_statement() {
			return getRuleContext(Return_statementContext.class,0);
		}
		public Math_statementContext math_statement() {
			return getRuleContext(Math_statementContext.class,0);
		}
		public Assign_statementContext assign_statement() {
			return getRuleContext(Assign_statementContext.class,0);
		}
		public Import_statementContext import_statement() {
			return getRuleContext(Import_statementContext.class,0);
		}
		public Object_statementContext object_statement() {
			return getRuleContext(Object_statementContext.class,0);
		}
		public Pick_up_statementContext pick_up_statement() {
			return getRuleContext(Pick_up_statementContext.class,0);
		}
		public Array_statementContext array_statement() {
			return getRuleContext(Array_statementContext.class,0);
		}
		public Clean_statementContext clean_statement() {
			return getRuleContext(Clean_statementContext.class,0);
		}
		public TerminalNode BREAK() { return getToken(wenyanParser.BREAK, 0); }
		public CommentContext comment() {
			return getRuleContext(CommentContext.class,0);
		}
		public StatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_statement; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof wenyanListener ) ((wenyanListener)listener).enterStatement(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof wenyanListener ) ((wenyanListener)listener).exitStatement(this);
		}
	}

	public final StatementContext statement() throws RecognitionException {
		StatementContext _localctx = new StatementContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_statement);
		try {
			setState(102);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,1,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(86);
				declare_statement();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(87);
				define_statement();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(88);
				print_statement();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(89);
				for_statement();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(90);
				function_statement();
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(91);
				if_statement();
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(92);
				return_statement();
				}
				break;
			case 8:
				enterOuterAlt(_localctx, 8);
				{
				setState(93);
				math_statement();
				}
				break;
			case 9:
				enterOuterAlt(_localctx, 9);
				{
				setState(94);
				assign_statement();
				}
				break;
			case 10:
				enterOuterAlt(_localctx, 10);
				{
				setState(95);
				import_statement();
				}
				break;
			case 11:
				enterOuterAlt(_localctx, 11);
				{
				setState(96);
				object_statement();
				}
				break;
			case 12:
				enterOuterAlt(_localctx, 12);
				{
				setState(97);
				pick_up_statement();
				}
				break;
			case 13:
				enterOuterAlt(_localctx, 13);
				{
				setState(98);
				array_statement();
				}
				break;
			case 14:
				enterOuterAlt(_localctx, 14);
				{
				setState(99);
				clean_statement();
				}
				break;
			case 15:
				enterOuterAlt(_localctx, 15);
				{
				setState(100);
				match(BREAK);
				}
				break;
			case 16:
				enterOuterAlt(_localctx, 16);
				{
				setState(101);
				comment();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Pick_up_statementContext extends ParserRuleContext {
		public DataContext data() {
			return getRuleContext(DataContext.class,0);
		}
		public Reference_single_statementContext reference_single_statement() {
			return getRuleContext(Reference_single_statementContext.class,0);
		}
		public TerminalNode STRING_LITERAL() { return getToken(wenyanParser.STRING_LITERAL, 0); }
		public TerminalNode INT_NUM() { return getToken(wenyanParser.INT_NUM, 0); }
		public TerminalNode IDENTIFIER() { return getToken(wenyanParser.IDENTIFIER, 0); }
		public Pick_up_statementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_pick_up_statement; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof wenyanListener ) ((wenyanListener)listener).enterPick_up_statement(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof wenyanListener ) ((wenyanListener)listener).exitPick_up_statement(this);
		}
	}

	public final Pick_up_statementContext pick_up_statement() throws RecognitionException {
		Pick_up_statementContext _localctx = new Pick_up_statementContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_pick_up_statement);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(104);
			match(T__0);
			setState(105);
			data();
			setState(108);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__1) {
				{
				setState(106);
				match(T__1);
				setState(107);
				_la = _input.LA(1);
				if ( !(((((_la - 3)) & ~0x3f) == 0 && ((1L << (_la - 3)) & ((1L << (T__2 - 3)) | (1L << (T__3 - 3)) | (1L << (STRING_LITERAL - 3)) | (1L << (IDENTIFIER - 3)) | (1L << (INT_NUM - 3)))) != 0)) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
			}

			setState(111);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__22) {
				{
				setState(110);
				reference_single_statement();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Array_statementContext extends ParserRuleContext {
		public Array_cat_statementContext array_cat_statement() {
			return getRuleContext(Array_cat_statementContext.class,0);
		}
		public Array_push_statementContext array_push_statement() {
			return getRuleContext(Array_push_statementContext.class,0);
		}
		public Array_statementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_array_statement; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof wenyanListener ) ((wenyanListener)listener).enterArray_statement(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof wenyanListener ) ((wenyanListener)listener).exitArray_statement(this);
		}
	}

	public final Array_statementContext array_statement() throws RecognitionException {
		Array_statementContext _localctx = new Array_statementContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_array_statement);
		try {
			setState(115);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__4:
				enterOuterAlt(_localctx, 1);
				{
				setState(113);
				array_cat_statement();
				}
				break;
			case T__6:
				enterOuterAlt(_localctx, 2);
				{
				setState(114);
				array_push_statement();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Array_cat_statementContext extends ParserRuleContext {
		public List<TerminalNode> IDENTIFIER() { return getTokens(wenyanParser.IDENTIFIER); }
		public TerminalNode IDENTIFIER(int i) {
			return getToken(wenyanParser.IDENTIFIER, i);
		}
		public List<TerminalNode> PREPOSITION_YI() { return getTokens(wenyanParser.PREPOSITION_YI); }
		public TerminalNode PREPOSITION_YI(int i) {
			return getToken(wenyanParser.PREPOSITION_YI, i);
		}
		public Reference_single_statementContext reference_single_statement() {
			return getRuleContext(Reference_single_statementContext.class,0);
		}
		public Array_cat_statementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_array_cat_statement; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof wenyanListener ) ((wenyanListener)listener).enterArray_cat_statement(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof wenyanListener ) ((wenyanListener)listener).exitArray_cat_statement(this);
		}
	}

	public final Array_cat_statementContext array_cat_statement() throws RecognitionException {
		Array_cat_statementContext _localctx = new Array_cat_statementContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_array_cat_statement);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(117);
			match(T__4);
			setState(118);
			_la = _input.LA(1);
			if ( !(_la==T__5 || _la==IDENTIFIER) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(121); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(119);
				match(PREPOSITION_YI);
				setState(120);
				match(IDENTIFIER);
				}
				}
				setState(123); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( _la==PREPOSITION_YI );
			setState(126);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__22) {
				{
				setState(125);
				reference_single_statement();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Array_push_statementContext extends ParserRuleContext {
		public TerminalNode IDENTIFIER() { return getToken(wenyanParser.IDENTIFIER, 0); }
		public List<TerminalNode> PREPOSITION_YI() { return getTokens(wenyanParser.PREPOSITION_YI); }
		public TerminalNode PREPOSITION_YI(int i) {
			return getToken(wenyanParser.PREPOSITION_YI, i);
		}
		public List<DataContext> data() {
			return getRuleContexts(DataContext.class);
		}
		public DataContext data(int i) {
			return getRuleContext(DataContext.class,i);
		}
		public Reference_single_statementContext reference_single_statement() {
			return getRuleContext(Reference_single_statementContext.class,0);
		}
		public Array_push_statementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_array_push_statement; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof wenyanListener ) ((wenyanListener)listener).enterArray_push_statement(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof wenyanListener ) ((wenyanListener)listener).exitArray_push_statement(this);
		}
	}

	public final Array_push_statementContext array_push_statement() throws RecognitionException {
		Array_push_statementContext _localctx = new Array_push_statementContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_array_push_statement);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(128);
			match(T__6);
			setState(129);
			_la = _input.LA(1);
			if ( !(_la==T__5 || _la==IDENTIFIER) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(132); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(130);
				match(PREPOSITION_YI);
				setState(131);
				data();
				}
				}
				setState(134); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( _la==PREPOSITION_YI );
			setState(137);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__22) {
				{
				setState(136);
				reference_single_statement();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Function_statementContext extends ParserRuleContext {
		public Function_define_statementContext function_define_statement() {
			return getRuleContext(Function_define_statementContext.class,0);
		}
		public Function_call_statementContext function_call_statement() {
			return getRuleContext(Function_call_statementContext.class,0);
		}
		public Reference_single_statementContext reference_single_statement() {
			return getRuleContext(Reference_single_statementContext.class,0);
		}
		public Function_statementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_function_statement; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof wenyanListener ) ((wenyanListener)listener).enterFunction_statement(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof wenyanListener ) ((wenyanListener)listener).exitFunction_statement(this);
		}
	}

	public final Function_statementContext function_statement() throws RecognitionException {
		Function_statementContext _localctx = new Function_statementContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_function_statement);
		int _la;
		try {
			setState(144);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__11:
				enterOuterAlt(_localctx, 1);
				{
				setState(139);
				function_define_statement();
				}
				break;
			case T__7:
			case T__8:
			case T__9:
				enterOuterAlt(_localctx, 2);
				{
				{
				setState(140);
				function_call_statement();
				setState(142);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==T__22) {
					{
					setState(141);
					reference_single_statement();
					}
				}

				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Function_call_statementContext extends ParserRuleContext {
		public Function_plain_callContext function_plain_call() {
			return getRuleContext(Function_plain_callContext.class,0);
		}
		public Function_nested_callContext function_nested_call() {
			return getRuleContext(Function_nested_callContext.class,0);
		}
		public Function_call_statementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_function_call_statement; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof wenyanListener ) ((wenyanListener)listener).enterFunction_call_statement(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof wenyanListener ) ((wenyanListener)listener).exitFunction_call_statement(this);
		}
	}

	public final Function_call_statementContext function_call_statement() throws RecognitionException {
		Function_call_statementContext _localctx = new Function_call_statementContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_function_call_statement);
		try {
			setState(148);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__7:
			case T__8:
				enterOuterAlt(_localctx, 1);
				{
				setState(146);
				function_plain_call();
				}
				break;
			case T__9:
				enterOuterAlt(_localctx, 2);
				{
				setState(147);
				function_nested_call();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Function_plain_callContext extends ParserRuleContext {
		public TerminalNode IDENTIFIER() { return getToken(wenyanParser.IDENTIFIER, 0); }
		public List<PrepositionContext> preposition() {
			return getRuleContexts(PrepositionContext.class);
		}
		public PrepositionContext preposition(int i) {
			return getRuleContext(PrepositionContext.class,i);
		}
		public List<DataContext> data() {
			return getRuleContexts(DataContext.class);
		}
		public DataContext data(int i) {
			return getRuleContext(DataContext.class,i);
		}
		public Function_plain_callContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_function_plain_call; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof wenyanListener ) ((wenyanListener)listener).enterFunction_plain_call(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof wenyanListener ) ((wenyanListener)listener).exitFunction_plain_call(this);
		}
	}

	public final Function_plain_callContext function_plain_call() throws RecognitionException {
		Function_plain_callContext _localctx = new Function_plain_callContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_function_plain_call);
		int _la;
		try {
			setState(169);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__7:
				enterOuterAlt(_localctx, 1);
				{
				{
				setState(150);
				match(T__7);
				setState(151);
				match(IDENTIFIER);
				setState(157);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==PREPOSITION_YU || _la==PREPOSITION_YI) {
					{
					{
					setState(152);
					preposition();
					setState(153);
					data();
					}
					}
					setState(159);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
				}
				break;
			case T__8:
				enterOuterAlt(_localctx, 2);
				{
				{
				setState(160);
				match(T__8);
				setState(166);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==PREPOSITION_YU || _la==PREPOSITION_YI) {
					{
					{
					setState(161);
					preposition();
					setState(162);
					data();
					}
					}
					setState(168);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Function_nested_callContext extends ParserRuleContext {
		public List<TerminalNode> INT_NUM() { return getTokens(wenyanParser.INT_NUM); }
		public TerminalNode INT_NUM(int i) {
			return getToken(wenyanParser.INT_NUM, i);
		}
		public List<TerminalNode> IDENTIFIER() { return getTokens(wenyanParser.IDENTIFIER); }
		public TerminalNode IDENTIFIER(int i) {
			return getToken(wenyanParser.IDENTIFIER, i);
		}
		public Function_nested_callContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_function_nested_call; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof wenyanListener ) ((wenyanListener)listener).enterFunction_nested_call(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof wenyanListener ) ((wenyanListener)listener).exitFunction_nested_call(this);
		}
	}

	public final Function_nested_callContext function_nested_call() throws RecognitionException {
		Function_nested_callContext _localctx = new Function_nested_callContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_function_nested_call);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(175); 
			_errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					setState(171);
					match(T__9);
					setState(172);
					match(INT_NUM);
					setState(173);
					match(T__10);
					setState(174);
					match(IDENTIFIER);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(177); 
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,15,_ctx);
			} while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Function_define_statementContext extends ParserRuleContext {
		public List<TerminalNode> INT_NUM() { return getTokens(wenyanParser.INT_NUM); }
		public TerminalNode INT_NUM(int i) {
			return getToken(wenyanParser.INT_NUM, i);
		}
		public Reference_single_statementContext reference_single_statement() {
			return getRuleContext(Reference_single_statementContext.class,0);
		}
		public List<TerminalNode> IDENTIFIER() { return getTokens(wenyanParser.IDENTIFIER); }
		public TerminalNode IDENTIFIER(int i) {
			return getToken(wenyanParser.IDENTIFIER, i);
		}
		public List<StatementContext> statement() {
			return getRuleContexts(StatementContext.class);
		}
		public StatementContext statement(int i) {
			return getRuleContext(StatementContext.class,i);
		}
		public List<TerminalNode> TYPE() { return getTokens(wenyanParser.TYPE); }
		public TerminalNode TYPE(int i) {
			return getToken(wenyanParser.TYPE, i);
		}
		public Function_define_statementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_function_define_statement; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof wenyanListener ) ((wenyanListener)listener).enterFunction_define_statement(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof wenyanListener ) ((wenyanListener)listener).exitFunction_define_statement(this);
		}
	}

	public final Function_define_statementContext function_define_statement() throws RecognitionException {
		Function_define_statementContext _localctx = new Function_define_statementContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_function_define_statement);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(179);
			match(T__11);
			setState(180);
			match(INT_NUM);
			setState(181);
			match(T__12);
			setState(182);
			reference_single_statement();
			setState(197);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__13) {
				{
				setState(183);
				match(T__13);
				setState(184);
				match(T__14);
				setState(193); 
				_errHandler.sync(this);
				_la = _input.LA(1);
				do {
					{
					{
					setState(185);
					match(INT_NUM);
					setState(186);
					match(TYPE);
					setState(189); 
					_errHandler.sync(this);
					_la = _input.LA(1);
					do {
						{
						{
						setState(187);
						match(T__15);
						setState(188);
						match(IDENTIFIER);
						}
						}
						setState(191); 
						_errHandler.sync(this);
						_la = _input.LA(1);
					} while ( _la==T__15 );
					}
					}
					setState(195); 
					_errHandler.sync(this);
					_la = _input.LA(1);
				} while ( _la==INT_NUM );
				}
			}

			setState(199);
			_la = _input.LA(1);
			if ( !(_la==T__16 || _la==T__17) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(203);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__0) | (1L << T__4) | (1L << T__6) | (1L << T__7) | (1L << T__8) | (1L << T__9) | (1L << T__11) | (1L << T__21) | (1L << T__23) | (1L << T__24) | (1L << T__25) | (1L << T__29) | (1L << T__30) | (1L << T__31) | (1L << T__32) | (1L << T__40) | (1L << T__41) | (1L << T__42) | (1L << T__43) | (1L << T__44) | (1L << ARITH_BINARY_OP) | (1L << UNARY_OP) | (1L << IF) | (1L << FOR_START_ARR) | (1L << FOR_START_ENUM) | (1L << FOR_START_WHILE))) != 0) || _la==BREAK) {
				{
				{
				setState(200);
				statement();
				}
				}
				setState(205);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(206);
			match(T__18);
			setState(207);
			match(IDENTIFIER);
			setState(208);
			match(T__19);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class If_statementContext extends ParserRuleContext {
		public TerminalNode IF() { return getToken(wenyanParser.IF, 0); }
		public If_expressionContext if_expression() {
			return getRuleContext(If_expressionContext.class,0);
		}
		public TerminalNode FOR_IF_END() { return getToken(wenyanParser.FOR_IF_END, 0); }
		public List<StatementContext> statement() {
			return getRuleContexts(StatementContext.class);
		}
		public StatementContext statement(int i) {
			return getRuleContext(StatementContext.class,i);
		}
		public TerminalNode ELSE() { return getToken(wenyanParser.ELSE, 0); }
		public If_statementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_if_statement; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof wenyanListener ) ((wenyanListener)listener).enterIf_statement(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof wenyanListener ) ((wenyanListener)listener).exitIf_statement(this);
		}
	}

	public final If_statementContext if_statement() throws RecognitionException {
		If_statementContext _localctx = new If_statementContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_if_statement);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(210);
			match(IF);
			setState(211);
			if_expression();
			setState(212);
			match(T__20);
			setState(214); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(213);
				statement();
				}
				}
				setState(216); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( (((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__0) | (1L << T__4) | (1L << T__6) | (1L << T__7) | (1L << T__8) | (1L << T__9) | (1L << T__11) | (1L << T__21) | (1L << T__23) | (1L << T__24) | (1L << T__25) | (1L << T__29) | (1L << T__30) | (1L << T__31) | (1L << T__32) | (1L << T__40) | (1L << T__41) | (1L << T__42) | (1L << T__43) | (1L << T__44) | (1L << ARITH_BINARY_OP) | (1L << UNARY_OP) | (1L << IF) | (1L << FOR_START_ARR) | (1L << FOR_START_ENUM) | (1L << FOR_START_WHILE))) != 0) || _la==BREAK );
			setState(224);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==ELSE) {
				{
				setState(218);
				match(ELSE);
				setState(220); 
				_errHandler.sync(this);
				_la = _input.LA(1);
				do {
					{
					{
					setState(219);
					statement();
					}
					}
					setState(222); 
					_errHandler.sync(this);
					_la = _input.LA(1);
				} while ( (((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__0) | (1L << T__4) | (1L << T__6) | (1L << T__7) | (1L << T__8) | (1L << T__9) | (1L << T__11) | (1L << T__21) | (1L << T__23) | (1L << T__24) | (1L << T__25) | (1L << T__29) | (1L << T__30) | (1L << T__31) | (1L << T__32) | (1L << T__40) | (1L << T__41) | (1L << T__42) | (1L << T__43) | (1L << T__44) | (1L << ARITH_BINARY_OP) | (1L << UNARY_OP) | (1L << IF) | (1L << FOR_START_ARR) | (1L << FOR_START_ENUM) | (1L << FOR_START_WHILE))) != 0) || _la==BREAK );
				}
			}

			setState(226);
			match(FOR_IF_END);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class If_expressionContext extends ParserRuleContext {
		public Unary_if_expressionContext unary_if_expression() {
			return getRuleContext(Unary_if_expressionContext.class,0);
		}
		public Binary_if_expressionContext binary_if_expression() {
			return getRuleContext(Binary_if_expressionContext.class,0);
		}
		public If_expressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_if_expression; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof wenyanListener ) ((wenyanListener)listener).enterIf_expression(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof wenyanListener ) ((wenyanListener)listener).exitIf_expression(this);
		}
	}

	public final If_expressionContext if_expression() throws RecognitionException {
		If_expressionContext _localctx = new If_expressionContext(_ctx, getState());
		enterRule(_localctx, 24, RULE_if_expression);
		try {
			setState(230);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,23,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(228);
				unary_if_expression();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(229);
				binary_if_expression();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Unary_if_expressionContext extends ParserRuleContext {
		public DataContext data() {
			return getRuleContext(DataContext.class,0);
		}
		public List<TerminalNode> IDENTIFIER() { return getTokens(wenyanParser.IDENTIFIER); }
		public TerminalNode IDENTIFIER(int i) {
			return getToken(wenyanParser.IDENTIFIER, i);
		}
		public TerminalNode STRING_LITERAL() { return getToken(wenyanParser.STRING_LITERAL, 0); }
		public Unary_if_expressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_unary_if_expression; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof wenyanListener ) ((wenyanListener)listener).enterUnary_if_expression(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof wenyanListener ) ((wenyanListener)listener).exitUnary_if_expression(this);
		}
	}

	public final Unary_if_expressionContext unary_if_expression() throws RecognitionException {
		Unary_if_expressionContext _localctx = new Unary_if_expressionContext(_ctx, getState());
		enterRule(_localctx, 26, RULE_unary_if_expression);
		int _la;
		try {
			setState(237);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,24,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(232);
				data();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				{
				setState(233);
				match(IDENTIFIER);
				setState(234);
				match(T__1);
				setState(235);
				_la = _input.LA(1);
				if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__3) | (1L << STRING_LITERAL) | (1L << IDENTIFIER))) != 0)) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(236);
				match(T__5);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Binary_if_expressionContext extends ParserRuleContext {
		public List<Unary_if_expressionContext> unary_if_expression() {
			return getRuleContexts(Unary_if_expressionContext.class);
		}
		public Unary_if_expressionContext unary_if_expression(int i) {
			return getRuleContext(Unary_if_expressionContext.class,i);
		}
		public TerminalNode IF_LOGIC_OP() { return getToken(wenyanParser.IF_LOGIC_OP, 0); }
		public Binary_if_expressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_binary_if_expression; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof wenyanListener ) ((wenyanListener)listener).enterBinary_if_expression(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof wenyanListener ) ((wenyanListener)listener).exitBinary_if_expression(this);
		}
	}

	public final Binary_if_expressionContext binary_if_expression() throws RecognitionException {
		Binary_if_expressionContext _localctx = new Binary_if_expressionContext(_ctx, getState());
		enterRule(_localctx, 28, RULE_binary_if_expression);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(239);
			unary_if_expression();
			setState(240);
			match(IF_LOGIC_OP);
			setState(241);
			unary_if_expression();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Declare_statementContext extends ParserRuleContext {
		public TerminalNode INT_NUM() { return getToken(wenyanParser.INT_NUM, 0); }
		public TerminalNode TYPE() { return getToken(wenyanParser.TYPE, 0); }
		public List<DataContext> data() {
			return getRuleContexts(DataContext.class);
		}
		public DataContext data(int i) {
			return getRuleContext(DataContext.class,i);
		}
		public Declare_statementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_declare_statement; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof wenyanListener ) ((wenyanListener)listener).enterDeclare_statement(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof wenyanListener ) ((wenyanListener)listener).exitDeclare_statement(this);
		}
	}

	public final Declare_statementContext declare_statement() throws RecognitionException {
		Declare_statementContext _localctx = new Declare_statementContext(_ctx, getState());
		enterRule(_localctx, 30, RULE_declare_statement);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(243);
			_la = _input.LA(1);
			if ( !(_la==T__11 || _la==T__21) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(244);
			match(INT_NUM);
			setState(245);
			match(TYPE);
			setState(250);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__15) {
				{
				{
				setState(246);
				match(T__15);
				setState(247);
				data();
				}
				}
				setState(252);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Define_statementContext extends ParserRuleContext {
		public Declare_statementContext declare_statement() {
			return getRuleContext(Declare_statementContext.class,0);
		}
		public Reference_multi_statementContext reference_multi_statement() {
			return getRuleContext(Reference_multi_statementContext.class,0);
		}
		public Init_define_statementContext init_define_statement() {
			return getRuleContext(Init_define_statementContext.class,0);
		}
		public Define_statementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_define_statement; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof wenyanListener ) ((wenyanListener)listener).enterDefine_statement(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof wenyanListener ) ((wenyanListener)listener).exitDefine_statement(this);
		}
	}

	public final Define_statementContext define_statement() throws RecognitionException {
		Define_statementContext _localctx = new Define_statementContext(_ctx, getState());
		enterRule(_localctx, 32, RULE_define_statement);
		try {
			setState(257);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__11:
			case T__21:
				enterOuterAlt(_localctx, 1);
				{
				{
				setState(253);
				declare_statement();
				setState(254);
				reference_multi_statement();
				}
				}
				break;
			case T__23:
				enterOuterAlt(_localctx, 2);
				{
				setState(256);
				init_define_statement();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Reference_multi_statementContext extends ParserRuleContext {
		public List<TerminalNode> IDENTIFIER() { return getTokens(wenyanParser.IDENTIFIER); }
		public TerminalNode IDENTIFIER(int i) {
			return getToken(wenyanParser.IDENTIFIER, i);
		}
		public Reference_multi_statementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_reference_multi_statement; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof wenyanListener ) ((wenyanListener)listener).enterReference_multi_statement(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof wenyanListener ) ((wenyanListener)listener).exitReference_multi_statement(this);
		}
	}

	public final Reference_multi_statementContext reference_multi_statement() throws RecognitionException {
		Reference_multi_statementContext _localctx = new Reference_multi_statementContext(_ctx, getState());
		enterRule(_localctx, 34, RULE_reference_multi_statement);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(259);
			match(T__22);
			setState(262); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(260);
				match(T__15);
				setState(261);
				match(IDENTIFIER);
				}
				}
				setState(264); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( _la==T__15 );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Reference_single_statementContext extends ParserRuleContext {
		public TerminalNode IDENTIFIER() { return getToken(wenyanParser.IDENTIFIER, 0); }
		public Reference_single_statementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_reference_single_statement; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof wenyanListener ) ((wenyanListener)listener).enterReference_single_statement(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof wenyanListener ) ((wenyanListener)listener).exitReference_single_statement(this);
		}
	}

	public final Reference_single_statementContext reference_single_statement() throws RecognitionException {
		Reference_single_statementContext _localctx = new Reference_single_statementContext(_ctx, getState());
		enterRule(_localctx, 36, RULE_reference_single_statement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(266);
			match(T__22);
			{
			setState(267);
			match(T__15);
			setState(268);
			match(IDENTIFIER);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Init_define_statementContext extends ParserRuleContext {
		public TerminalNode TYPE() { return getToken(wenyanParser.TYPE, 0); }
		public DataContext data() {
			return getRuleContext(DataContext.class,0);
		}
		public Reference_single_statementContext reference_single_statement() {
			return getRuleContext(Reference_single_statementContext.class,0);
		}
		public Init_define_statementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_init_define_statement; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof wenyanListener ) ((wenyanListener)listener).enterInit_define_statement(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof wenyanListener ) ((wenyanListener)listener).exitInit_define_statement(this);
		}
	}

	public final Init_define_statementContext init_define_statement() throws RecognitionException {
		Init_define_statementContext _localctx = new Init_define_statementContext(_ctx, getState());
		enterRule(_localctx, 38, RULE_init_define_statement);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(270);
			match(T__23);
			setState(271);
			match(TYPE);
			setState(272);
			data();
			setState(274);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__22) {
				{
				setState(273);
				reference_single_statement();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class For_statementContext extends ParserRuleContext {
		public For_arr_statementContext for_arr_statement() {
			return getRuleContext(For_arr_statementContext.class,0);
		}
		public For_enum_statementContext for_enum_statement() {
			return getRuleContext(For_enum_statementContext.class,0);
		}
		public For_while_statementContext for_while_statement() {
			return getRuleContext(For_while_statementContext.class,0);
		}
		public For_statementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_for_statement; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof wenyanListener ) ((wenyanListener)listener).enterFor_statement(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof wenyanListener ) ((wenyanListener)listener).exitFor_statement(this);
		}
	}

	public final For_statementContext for_statement() throws RecognitionException {
		For_statementContext _localctx = new For_statementContext(_ctx, getState());
		enterRule(_localctx, 40, RULE_for_statement);
		try {
			setState(279);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case FOR_START_ARR:
				enterOuterAlt(_localctx, 1);
				{
				setState(276);
				for_arr_statement();
				}
				break;
			case FOR_START_ENUM:
				enterOuterAlt(_localctx, 2);
				{
				setState(277);
				for_enum_statement();
				}
				break;
			case FOR_START_WHILE:
				enterOuterAlt(_localctx, 3);
				{
				setState(278);
				for_while_statement();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class For_arr_statementContext extends ParserRuleContext {
		public TerminalNode FOR_START_ARR() { return getToken(wenyanParser.FOR_START_ARR, 0); }
		public List<TerminalNode> IDENTIFIER() { return getTokens(wenyanParser.IDENTIFIER); }
		public TerminalNode IDENTIFIER(int i) {
			return getToken(wenyanParser.IDENTIFIER, i);
		}
		public TerminalNode FOR_MID_ARR() { return getToken(wenyanParser.FOR_MID_ARR, 0); }
		public TerminalNode FOR_IF_END() { return getToken(wenyanParser.FOR_IF_END, 0); }
		public List<StatementContext> statement() {
			return getRuleContexts(StatementContext.class);
		}
		public StatementContext statement(int i) {
			return getRuleContext(StatementContext.class,i);
		}
		public For_arr_statementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_for_arr_statement; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof wenyanListener ) ((wenyanListener)listener).enterFor_arr_statement(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof wenyanListener ) ((wenyanListener)listener).exitFor_arr_statement(this);
		}
	}

	public final For_arr_statementContext for_arr_statement() throws RecognitionException {
		For_arr_statementContext _localctx = new For_arr_statementContext(_ctx, getState());
		enterRule(_localctx, 42, RULE_for_arr_statement);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(281);
			match(FOR_START_ARR);
			setState(282);
			match(IDENTIFIER);
			setState(283);
			match(FOR_MID_ARR);
			setState(284);
			match(IDENTIFIER);
			setState(288);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__0) | (1L << T__4) | (1L << T__6) | (1L << T__7) | (1L << T__8) | (1L << T__9) | (1L << T__11) | (1L << T__21) | (1L << T__23) | (1L << T__24) | (1L << T__25) | (1L << T__29) | (1L << T__30) | (1L << T__31) | (1L << T__32) | (1L << T__40) | (1L << T__41) | (1L << T__42) | (1L << T__43) | (1L << T__44) | (1L << ARITH_BINARY_OP) | (1L << UNARY_OP) | (1L << IF) | (1L << FOR_START_ARR) | (1L << FOR_START_ENUM) | (1L << FOR_START_WHILE))) != 0) || _la==BREAK) {
				{
				{
				setState(285);
				statement();
				}
				}
				setState(290);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(291);
			match(FOR_IF_END);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class For_enum_statementContext extends ParserRuleContext {
		public TerminalNode FOR_START_ENUM() { return getToken(wenyanParser.FOR_START_ENUM, 0); }
		public TerminalNode FOR_MID_ENUM() { return getToken(wenyanParser.FOR_MID_ENUM, 0); }
		public TerminalNode FOR_IF_END() { return getToken(wenyanParser.FOR_IF_END, 0); }
		public TerminalNode INT_NUM() { return getToken(wenyanParser.INT_NUM, 0); }
		public TerminalNode IDENTIFIER() { return getToken(wenyanParser.IDENTIFIER, 0); }
		public List<StatementContext> statement() {
			return getRuleContexts(StatementContext.class);
		}
		public StatementContext statement(int i) {
			return getRuleContext(StatementContext.class,i);
		}
		public For_enum_statementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_for_enum_statement; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof wenyanListener ) ((wenyanListener)listener).enterFor_enum_statement(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof wenyanListener ) ((wenyanListener)listener).exitFor_enum_statement(this);
		}
	}

	public final For_enum_statementContext for_enum_statement() throws RecognitionException {
		For_enum_statementContext _localctx = new For_enum_statementContext(_ctx, getState());
		enterRule(_localctx, 44, RULE_for_enum_statement);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(293);
			match(FOR_START_ENUM);
			setState(294);
			_la = _input.LA(1);
			if ( !(_la==IDENTIFIER || _la==INT_NUM) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(295);
			match(FOR_MID_ENUM);
			setState(299);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__0) | (1L << T__4) | (1L << T__6) | (1L << T__7) | (1L << T__8) | (1L << T__9) | (1L << T__11) | (1L << T__21) | (1L << T__23) | (1L << T__24) | (1L << T__25) | (1L << T__29) | (1L << T__30) | (1L << T__31) | (1L << T__32) | (1L << T__40) | (1L << T__41) | (1L << T__42) | (1L << T__43) | (1L << T__44) | (1L << ARITH_BINARY_OP) | (1L << UNARY_OP) | (1L << IF) | (1L << FOR_START_ARR) | (1L << FOR_START_ENUM) | (1L << FOR_START_WHILE))) != 0) || _la==BREAK) {
				{
				{
				setState(296);
				statement();
				}
				}
				setState(301);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(302);
			match(FOR_IF_END);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class For_while_statementContext extends ParserRuleContext {
		public TerminalNode FOR_START_WHILE() { return getToken(wenyanParser.FOR_START_WHILE, 0); }
		public TerminalNode FOR_IF_END() { return getToken(wenyanParser.FOR_IF_END, 0); }
		public List<StatementContext> statement() {
			return getRuleContexts(StatementContext.class);
		}
		public StatementContext statement(int i) {
			return getRuleContext(StatementContext.class,i);
		}
		public For_while_statementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_for_while_statement; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof wenyanListener ) ((wenyanListener)listener).enterFor_while_statement(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof wenyanListener ) ((wenyanListener)listener).exitFor_while_statement(this);
		}
	}

	public final For_while_statementContext for_while_statement() throws RecognitionException {
		For_while_statementContext _localctx = new For_while_statementContext(_ctx, getState());
		enterRule(_localctx, 46, RULE_for_while_statement);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(304);
			match(FOR_START_WHILE);
			setState(308);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__0) | (1L << T__4) | (1L << T__6) | (1L << T__7) | (1L << T__8) | (1L << T__9) | (1L << T__11) | (1L << T__21) | (1L << T__23) | (1L << T__24) | (1L << T__25) | (1L << T__29) | (1L << T__30) | (1L << T__31) | (1L << T__32) | (1L << T__40) | (1L << T__41) | (1L << T__42) | (1L << T__43) | (1L << T__44) | (1L << ARITH_BINARY_OP) | (1L << UNARY_OP) | (1L << IF) | (1L << FOR_START_ARR) | (1L << FOR_START_ENUM) | (1L << FOR_START_WHILE))) != 0) || _la==BREAK) {
				{
				{
				setState(305);
				statement();
				}
				}
				setState(310);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(311);
			match(FOR_IF_END);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Math_statementContext extends ParserRuleContext {
		public Arith_math_statementContext arith_math_statement() {
			return getRuleContext(Arith_math_statementContext.class,0);
		}
		public Logic_math_statementContext logic_math_statement() {
			return getRuleContext(Logic_math_statementContext.class,0);
		}
		public Mod_math_statementContext mod_math_statement() {
			return getRuleContext(Mod_math_statementContext.class,0);
		}
		public Reference_multi_statementContext reference_multi_statement() {
			return getRuleContext(Reference_multi_statementContext.class,0);
		}
		public Math_statementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_math_statement; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof wenyanListener ) ((wenyanListener)listener).enterMath_statement(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof wenyanListener ) ((wenyanListener)listener).exitMath_statement(this);
		}
	}

	public final Math_statementContext math_statement() throws RecognitionException {
		Math_statementContext _localctx = new Math_statementContext(_ctx, getState());
		enterRule(_localctx, 48, RULE_math_statement);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(316);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case ARITH_BINARY_OP:
			case UNARY_OP:
				{
				setState(313);
				arith_math_statement();
				}
				break;
			case T__0:
				{
				setState(314);
				logic_math_statement();
				}
				break;
			case T__24:
				{
				setState(315);
				mod_math_statement();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			setState(319);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__22) {
				{
				setState(318);
				reference_multi_statement();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Arith_math_statementContext extends ParserRuleContext {
		public Arith_binary_mathContext arith_binary_math() {
			return getRuleContext(Arith_binary_mathContext.class,0);
		}
		public Arith_unary_mathContext arith_unary_math() {
			return getRuleContext(Arith_unary_mathContext.class,0);
		}
		public Arith_math_statementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_arith_math_statement; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof wenyanListener ) ((wenyanListener)listener).enterArith_math_statement(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof wenyanListener ) ((wenyanListener)listener).exitArith_math_statement(this);
		}
	}

	public final Arith_math_statementContext arith_math_statement() throws RecognitionException {
		Arith_math_statementContext _localctx = new Arith_math_statementContext(_ctx, getState());
		enterRule(_localctx, 50, RULE_arith_math_statement);
		try {
			setState(323);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case ARITH_BINARY_OP:
				enterOuterAlt(_localctx, 1);
				{
				setState(321);
				arith_binary_math();
				}
				break;
			case UNARY_OP:
				enterOuterAlt(_localctx, 2);
				{
				setState(322);
				arith_unary_math();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Arith_binary_mathContext extends ParserRuleContext {
		public TerminalNode ARITH_BINARY_OP() { return getToken(wenyanParser.ARITH_BINARY_OP, 0); }
		public PrepositionContext preposition() {
			return getRuleContext(PrepositionContext.class,0);
		}
		public List<DataContext> data() {
			return getRuleContexts(DataContext.class);
		}
		public DataContext data(int i) {
			return getRuleContext(DataContext.class,i);
		}
		public Arith_binary_mathContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_arith_binary_math; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof wenyanListener ) ((wenyanListener)listener).enterArith_binary_math(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof wenyanListener ) ((wenyanListener)listener).exitArith_binary_math(this);
		}
	}

	public final Arith_binary_mathContext arith_binary_math() throws RecognitionException {
		Arith_binary_mathContext _localctx = new Arith_binary_mathContext(_ctx, getState());
		enterRule(_localctx, 52, RULE_arith_binary_math);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(325);
			match(ARITH_BINARY_OP);
			setState(328);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case STRING_LITERAL:
			case IDENTIFIER:
			case FLOAT_NUM:
			case INT_NUM:
			case BOOL_VALUE:
				{
				setState(326);
				data();
				}
				break;
			case T__5:
				{
				setState(327);
				match(T__5);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			setState(330);
			preposition();
			setState(333);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case STRING_LITERAL:
			case IDENTIFIER:
			case FLOAT_NUM:
			case INT_NUM:
			case BOOL_VALUE:
				{
				setState(331);
				data();
				}
				break;
			case T__5:
				{
				setState(332);
				match(T__5);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Arith_unary_mathContext extends ParserRuleContext {
		public TerminalNode UNARY_OP() { return getToken(wenyanParser.UNARY_OP, 0); }
		public TerminalNode IDENTIFIER() { return getToken(wenyanParser.IDENTIFIER, 0); }
		public Arith_unary_mathContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_arith_unary_math; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof wenyanListener ) ((wenyanListener)listener).enterArith_unary_math(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof wenyanListener ) ((wenyanListener)listener).exitArith_unary_math(this);
		}
	}

	public final Arith_unary_mathContext arith_unary_math() throws RecognitionException {
		Arith_unary_mathContext _localctx = new Arith_unary_mathContext(_ctx, getState());
		enterRule(_localctx, 54, RULE_arith_unary_math);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(335);
			match(UNARY_OP);
			setState(336);
			_la = _input.LA(1);
			if ( !(_la==T__5 || _la==IDENTIFIER) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Mod_math_statementContext extends ParserRuleContext {
		public PrepositionContext preposition() {
			return getRuleContext(PrepositionContext.class,0);
		}
		public List<TerminalNode> INT_NUM() { return getTokens(wenyanParser.INT_NUM); }
		public TerminalNode INT_NUM(int i) {
			return getToken(wenyanParser.INT_NUM, i);
		}
		public List<TerminalNode> FLOAT_NUM() { return getTokens(wenyanParser.FLOAT_NUM); }
		public TerminalNode FLOAT_NUM(int i) {
			return getToken(wenyanParser.FLOAT_NUM, i);
		}
		public List<TerminalNode> IDENTIFIER() { return getTokens(wenyanParser.IDENTIFIER); }
		public TerminalNode IDENTIFIER(int i) {
			return getToken(wenyanParser.IDENTIFIER, i);
		}
		public TerminalNode POST_MOD_MATH_OP() { return getToken(wenyanParser.POST_MOD_MATH_OP, 0); }
		public Mod_math_statementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_mod_math_statement; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof wenyanListener ) ((wenyanListener)listener).enterMod_math_statement(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof wenyanListener ) ((wenyanListener)listener).exitMod_math_statement(this);
		}
	}

	public final Mod_math_statementContext mod_math_statement() throws RecognitionException {
		Mod_math_statementContext _localctx = new Mod_math_statementContext(_ctx, getState());
		enterRule(_localctx, 56, RULE_mod_math_statement);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(338);
			match(T__24);
			setState(339);
			_la = _input.LA(1);
			if ( !(((((_la - 6)) & ~0x3f) == 0 && ((1L << (_la - 6)) & ((1L << (T__5 - 6)) | (1L << (IDENTIFIER - 6)) | (1L << (FLOAT_NUM - 6)) | (1L << (INT_NUM - 6)))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(340);
			preposition();
			setState(341);
			_la = _input.LA(1);
			if ( !(((((_la - 47)) & ~0x3f) == 0 && ((1L << (_la - 47)) & ((1L << (IDENTIFIER - 47)) | (1L << (FLOAT_NUM - 47)) | (1L << (INT_NUM - 47)))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(343);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==POST_MOD_MATH_OP) {
				{
				setState(342);
				match(POST_MOD_MATH_OP);
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Logic_math_statementContext extends ParserRuleContext {
		public List<TerminalNode> IDENTIFIER() { return getTokens(wenyanParser.IDENTIFIER); }
		public TerminalNode IDENTIFIER(int i) {
			return getToken(wenyanParser.IDENTIFIER, i);
		}
		public TerminalNode LOGIC_BINARY_OP() { return getToken(wenyanParser.LOGIC_BINARY_OP, 0); }
		public Logic_math_statementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_logic_math_statement; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof wenyanListener ) ((wenyanListener)listener).enterLogic_math_statement(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof wenyanListener ) ((wenyanListener)listener).exitLogic_math_statement(this);
		}
	}

	public final Logic_math_statementContext logic_math_statement() throws RecognitionException {
		Logic_math_statementContext _localctx = new Logic_math_statementContext(_ctx, getState());
		enterRule(_localctx, 58, RULE_logic_math_statement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(345);
			match(T__0);
			setState(346);
			match(IDENTIFIER);
			setState(347);
			match(IDENTIFIER);
			setState(348);
			match(LOGIC_BINARY_OP);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Assign_statementContext extends ParserRuleContext {
		public List<TerminalNode> IDENTIFIER() { return getTokens(wenyanParser.IDENTIFIER); }
		public TerminalNode IDENTIFIER(int i) {
			return getToken(wenyanParser.IDENTIFIER, i);
		}
		public List<TerminalNode> INT_NUM() { return getTokens(wenyanParser.INT_NUM); }
		public TerminalNode INT_NUM(int i) {
			return getToken(wenyanParser.INT_NUM, i);
		}
		public TerminalNode STRING_LITERAL() { return getToken(wenyanParser.STRING_LITERAL, 0); }
		public DataContext data() {
			return getRuleContext(DataContext.class,0);
		}
		public Assign_statementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_assign_statement; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof wenyanListener ) ((wenyanListener)listener).enterAssign_statement(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof wenyanListener ) ((wenyanListener)listener).exitAssign_statement(this);
		}
	}

	public final Assign_statementContext assign_statement() throws RecognitionException {
		Assign_statementContext _localctx = new Assign_statementContext(_ctx, getState());
		enterRule(_localctx, 60, RULE_assign_statement);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(350);
			match(T__25);
			setState(351);
			match(IDENTIFIER);
			setState(354);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__1) {
				{
				setState(352);
				match(T__1);
				setState(353);
				_la = _input.LA(1);
				if ( !(((((_la - 46)) & ~0x3f) == 0 && ((1L << (_la - 46)) & ((1L << (STRING_LITERAL - 46)) | (1L << (IDENTIFIER - 46)) | (1L << (INT_NUM - 46)))) != 0)) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
			}

			setState(356);
			match(T__20);
			setState(368);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__26:
				{
				{
				setState(357);
				match(T__26);
				setState(364);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case STRING_LITERAL:
				case IDENTIFIER:
				case FLOAT_NUM:
				case INT_NUM:
				case BOOL_VALUE:
					{
					{
					setState(358);
					data();
					setState(361);
					_errHandler.sync(this);
					_la = _input.LA(1);
					if (_la==T__1) {
						{
						setState(359);
						match(T__1);
						setState(360);
						match(INT_NUM);
						}
					}

					}
					}
					break;
				case T__5:
					{
					setState(363);
					match(T__5);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(366);
				match(T__27);
				}
				}
				break;
			case T__28:
				{
				setState(367);
				match(T__28);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Return_statementContext extends ParserRuleContext {
		public DataContext data() {
			return getRuleContext(DataContext.class,0);
		}
		public Return_statementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_return_statement; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof wenyanListener ) ((wenyanListener)listener).enterReturn_statement(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof wenyanListener ) ((wenyanListener)listener).exitReturn_statement(this);
		}
	}

	public final Return_statementContext return_statement() throws RecognitionException {
		Return_statementContext _localctx = new Return_statementContext(_ctx, getState());
		enterRule(_localctx, 62, RULE_return_statement);
		try {
			setState(377);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__29:
				enterOuterAlt(_localctx, 1);
				{
				setState(370);
				match(T__29);
				setState(373);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case STRING_LITERAL:
				case IDENTIFIER:
				case FLOAT_NUM:
				case INT_NUM:
				case BOOL_VALUE:
					{
					setState(371);
					data();
					}
					break;
				case T__5:
					{
					setState(372);
					match(T__5);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;
			case T__30:
				enterOuterAlt(_localctx, 2);
				{
				setState(375);
				match(T__30);
				}
				break;
			case T__31:
				enterOuterAlt(_localctx, 3);
				{
				setState(376);
				match(T__31);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Import_statementContext extends ParserRuleContext {
		public TerminalNode STRING_LITERAL() { return getToken(wenyanParser.STRING_LITERAL, 0); }
		public List<TerminalNode> IDENTIFIER() { return getTokens(wenyanParser.IDENTIFIER); }
		public TerminalNode IDENTIFIER(int i) {
			return getToken(wenyanParser.IDENTIFIER, i);
		}
		public Import_statementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_import_statement; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof wenyanListener ) ((wenyanListener)listener).enterImport_statement(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof wenyanListener ) ((wenyanListener)listener).exitImport_statement(this);
		}
	}

	public final Import_statementContext import_statement() throws RecognitionException {
		Import_statementContext _localctx = new Import_statementContext(_ctx, getState());
		enterRule(_localctx, 64, RULE_import_statement);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(379);
			match(T__32);
			setState(380);
			match(STRING_LITERAL);
			setState(381);
			match(T__33);
			setState(389);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__34) {
				{
				setState(382);
				match(T__34);
				setState(384); 
				_errHandler.sync(this);
				_la = _input.LA(1);
				do {
					{
					{
					setState(383);
					match(IDENTIFIER);
					}
					}
					setState(386); 
					_errHandler.sync(this);
					_la = _input.LA(1);
				} while ( _la==IDENTIFIER );
				setState(388);
				match(T__35);
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Object_statementContext extends ParserRuleContext {
		public TerminalNode INT_NUM() { return getToken(wenyanParser.INT_NUM, 0); }
		public Reference_multi_statementContext reference_multi_statement() {
			return getRuleContext(Reference_multi_statementContext.class,0);
		}
		public Object_define_statementContext object_define_statement() {
			return getRuleContext(Object_define_statementContext.class,0);
		}
		public Object_statementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_object_statement; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof wenyanListener ) ((wenyanListener)listener).enterObject_statement(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof wenyanListener ) ((wenyanListener)listener).exitObject_statement(this);
		}
	}

	public final Object_statementContext object_statement() throws RecognitionException {
		Object_statementContext _localctx = new Object_statementContext(_ctx, getState());
		enterRule(_localctx, 66, RULE_object_statement);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(391);
			match(T__11);
			setState(392);
			match(INT_NUM);
			setState(393);
			match(T__36);
			setState(394);
			reference_multi_statement();
			setState(396);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__37) {
				{
				setState(395);
				object_define_statement();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Object_define_statementContext extends ParserRuleContext {
		public TerminalNode IDENTIFIER() { return getToken(wenyanParser.IDENTIFIER, 0); }
		public List<TerminalNode> STRING_LITERAL() { return getTokens(wenyanParser.STRING_LITERAL); }
		public TerminalNode STRING_LITERAL(int i) {
			return getToken(wenyanParser.STRING_LITERAL, i);
		}
		public List<TerminalNode> TYPE() { return getTokens(wenyanParser.TYPE); }
		public TerminalNode TYPE(int i) {
			return getToken(wenyanParser.TYPE, i);
		}
		public List<DataContext> data() {
			return getRuleContexts(DataContext.class);
		}
		public DataContext data(int i) {
			return getRuleContext(DataContext.class,i);
		}
		public Object_define_statementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_object_define_statement; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof wenyanListener ) ((wenyanListener)listener).enterObject_define_statement(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof wenyanListener ) ((wenyanListener)listener).exitObject_define_statement(this);
		}
	}

	public final Object_define_statementContext object_define_statement() throws RecognitionException {
		Object_define_statementContext _localctx = new Object_define_statementContext(_ctx, getState());
		enterRule(_localctx, 68, RULE_object_define_statement);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(398);
			match(T__37);
			setState(405); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(399);
				match(T__38);
				setState(400);
				match(STRING_LITERAL);
				setState(401);
				match(T__20);
				setState(402);
				match(TYPE);
				setState(403);
				match(T__15);
				setState(404);
				data();
				}
				}
				setState(407); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( _la==T__38 );
			setState(409);
			match(T__18);
			setState(410);
			match(IDENTIFIER);
			setState(411);
			match(T__39);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DataContext extends ParserRuleContext {
		public TerminalNode STRING_LITERAL() { return getToken(wenyanParser.STRING_LITERAL, 0); }
		public TerminalNode BOOL_VALUE() { return getToken(wenyanParser.BOOL_VALUE, 0); }
		public TerminalNode IDENTIFIER() { return getToken(wenyanParser.IDENTIFIER, 0); }
		public TerminalNode INT_NUM() { return getToken(wenyanParser.INT_NUM, 0); }
		public TerminalNode FLOAT_NUM() { return getToken(wenyanParser.FLOAT_NUM, 0); }
		public DataContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_data; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof wenyanListener ) ((wenyanListener)listener).enterData(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof wenyanListener ) ((wenyanListener)listener).exitData(this);
		}
	}

	public final DataContext data() throws RecognitionException {
		DataContext _localctx = new DataContext(_ctx, getState());
		enterRule(_localctx, 70, RULE_data);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(413);
			_la = _input.LA(1);
			if ( !(((((_la - 46)) & ~0x3f) == 0 && ((1L << (_la - 46)) & ((1L << (STRING_LITERAL - 46)) | (1L << (IDENTIFIER - 46)) | (1L << (FLOAT_NUM - 46)) | (1L << (INT_NUM - 46)) | (1L << (BOOL_VALUE - 46)))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class PrepositionContext extends ParserRuleContext {
		public TerminalNode PREPOSITION_YI() { return getToken(wenyanParser.PREPOSITION_YI, 0); }
		public TerminalNode PREPOSITION_YU() { return getToken(wenyanParser.PREPOSITION_YU, 0); }
		public PrepositionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_preposition; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof wenyanListener ) ((wenyanListener)listener).enterPreposition(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof wenyanListener ) ((wenyanListener)listener).exitPreposition(this);
		}
	}

	public final PrepositionContext preposition() throws RecognitionException {
		PrepositionContext _localctx = new PrepositionContext(_ctx, getState());
		enterRule(_localctx, 72, RULE_preposition);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(415);
			_la = _input.LA(1);
			if ( !(_la==PREPOSITION_YU || _la==PREPOSITION_YI) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Print_statementContext extends ParserRuleContext {
		public Print_statementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_print_statement; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof wenyanListener ) ((wenyanListener)listener).enterPrint_statement(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof wenyanListener ) ((wenyanListener)listener).exitPrint_statement(this);
		}
	}

	public final Print_statementContext print_statement() throws RecognitionException {
		Print_statementContext _localctx = new Print_statementContext(_ctx, getState());
		enterRule(_localctx, 74, RULE_print_statement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(417);
			match(T__40);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class CommentContext extends ParserRuleContext {
		public TerminalNode STRING_LITERAL() { return getToken(wenyanParser.STRING_LITERAL, 0); }
		public CommentContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_comment; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof wenyanListener ) ((wenyanListener)listener).enterComment(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof wenyanListener ) ((wenyanListener)listener).exitComment(this);
		}
	}

	public final CommentContext comment() throws RecognitionException {
		CommentContext _localctx = new CommentContext(_ctx, getState());
		enterRule(_localctx, 76, RULE_comment);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(419);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__41) | (1L << T__42) | (1L << T__43))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(420);
			match(STRING_LITERAL);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Clean_statementContext extends ParserRuleContext {
		public Clean_statementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_clean_statement; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof wenyanListener ) ((wenyanListener)listener).enterClean_statement(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof wenyanListener ) ((wenyanListener)listener).exitClean_statement(this);
		}
	}

	public final Clean_statementContext clean_statement() throws RecognitionException {
		Clean_statementContext _localctx = new Clean_statementContext(_ctx, getState());
		enterRule(_localctx, 78, RULE_clean_statement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(422);
			match(T__44);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3H\u01ab\4\2\t\2\4"+
		"\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13\t"+
		"\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30\4\31\t\31"+
		"\4\32\t\32\4\33\t\33\4\34\t\34\4\35\t\35\4\36\t\36\4\37\t\37\4 \t \4!"+
		"\t!\4\"\t\"\4#\t#\4$\t$\4%\t%\4&\t&\4\'\t\'\4(\t(\4)\t)\3\2\7\2T\n\2\f"+
		"\2\16\2W\13\2\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3"+
		"\3\3\3\3\5\3i\n\3\3\4\3\4\3\4\3\4\5\4o\n\4\3\4\5\4r\n\4\3\5\3\5\5\5v\n"+
		"\5\3\6\3\6\3\6\3\6\6\6|\n\6\r\6\16\6}\3\6\5\6\u0081\n\6\3\7\3\7\3\7\3"+
		"\7\6\7\u0087\n\7\r\7\16\7\u0088\3\7\5\7\u008c\n\7\3\b\3\b\3\b\5\b\u0091"+
		"\n\b\5\b\u0093\n\b\3\t\3\t\5\t\u0097\n\t\3\n\3\n\3\n\3\n\3\n\7\n\u009e"+
		"\n\n\f\n\16\n\u00a1\13\n\3\n\3\n\3\n\3\n\7\n\u00a7\n\n\f\n\16\n\u00aa"+
		"\13\n\5\n\u00ac\n\n\3\13\3\13\3\13\3\13\6\13\u00b2\n\13\r\13\16\13\u00b3"+
		"\3\f\3\f\3\f\3\f\3\f\3\f\3\f\3\f\3\f\3\f\6\f\u00c0\n\f\r\f\16\f\u00c1"+
		"\6\f\u00c4\n\f\r\f\16\f\u00c5\5\f\u00c8\n\f\3\f\3\f\7\f\u00cc\n\f\f\f"+
		"\16\f\u00cf\13\f\3\f\3\f\3\f\3\f\3\r\3\r\3\r\3\r\6\r\u00d9\n\r\r\r\16"+
		"\r\u00da\3\r\3\r\6\r\u00df\n\r\r\r\16\r\u00e0\5\r\u00e3\n\r\3\r\3\r\3"+
		"\16\3\16\5\16\u00e9\n\16\3\17\3\17\3\17\3\17\3\17\5\17\u00f0\n\17\3\20"+
		"\3\20\3\20\3\20\3\21\3\21\3\21\3\21\3\21\7\21\u00fb\n\21\f\21\16\21\u00fe"+
		"\13\21\3\22\3\22\3\22\3\22\5\22\u0104\n\22\3\23\3\23\3\23\6\23\u0109\n"+
		"\23\r\23\16\23\u010a\3\24\3\24\3\24\3\24\3\25\3\25\3\25\3\25\5\25\u0115"+
		"\n\25\3\26\3\26\3\26\5\26\u011a\n\26\3\27\3\27\3\27\3\27\3\27\7\27\u0121"+
		"\n\27\f\27\16\27\u0124\13\27\3\27\3\27\3\30\3\30\3\30\3\30\7\30\u012c"+
		"\n\30\f\30\16\30\u012f\13\30\3\30\3\30\3\31\3\31\7\31\u0135\n\31\f\31"+
		"\16\31\u0138\13\31\3\31\3\31\3\32\3\32\3\32\5\32\u013f\n\32\3\32\5\32"+
		"\u0142\n\32\3\33\3\33\5\33\u0146\n\33\3\34\3\34\3\34\5\34\u014b\n\34\3"+
		"\34\3\34\3\34\5\34\u0150\n\34\3\35\3\35\3\35\3\36\3\36\3\36\3\36\3\36"+
		"\5\36\u015a\n\36\3\37\3\37\3\37\3\37\3\37\3 \3 \3 \3 \5 \u0165\n \3 \3"+
		" \3 \3 \3 \5 \u016c\n \3 \5 \u016f\n \3 \3 \5 \u0173\n \3!\3!\3!\5!\u0178"+
		"\n!\3!\3!\5!\u017c\n!\3\"\3\"\3\"\3\"\3\"\6\"\u0183\n\"\r\"\16\"\u0184"+
		"\3\"\5\"\u0188\n\"\3#\3#\3#\3#\3#\5#\u018f\n#\3$\3$\3$\3$\3$\3$\3$\6$"+
		"\u0198\n$\r$\16$\u0199\3$\3$\3$\3$\3%\3%\3&\3&\3\'\3\'\3(\3(\3(\3)\3)"+
		"\3)\2\2*\2\4\6\b\n\f\16\20\22\24\26\30\32\34\36 \"$&(*,.\60\62\64\668"+
		":<>@BDFHJLNP\2\16\5\2\5\6\60\61CC\4\2\b\b\61\61\3\2\23\24\4\2\6\6\60\61"+
		"\4\2\16\16\30\30\4\2\61\61CC\6\2\b\b\61\61AACC\5\2\61\61AACC\4\2\60\61"+
		"CC\6\2\60\61AACCFF\3\2\66\67\3\2,.\2\u01c5\2U\3\2\2\2\4h\3\2\2\2\6j\3"+
		"\2\2\2\bu\3\2\2\2\nw\3\2\2\2\f\u0082\3\2\2\2\16\u0092\3\2\2\2\20\u0096"+
		"\3\2\2\2\22\u00ab\3\2\2\2\24\u00b1\3\2\2\2\26\u00b5\3\2\2\2\30\u00d4\3"+
		"\2\2\2\32\u00e8\3\2\2\2\34\u00ef\3\2\2\2\36\u00f1\3\2\2\2 \u00f5\3\2\2"+
		"\2\"\u0103\3\2\2\2$\u0105\3\2\2\2&\u010c\3\2\2\2(\u0110\3\2\2\2*\u0119"+
		"\3\2\2\2,\u011b\3\2\2\2.\u0127\3\2\2\2\60\u0132\3\2\2\2\62\u013e\3\2\2"+
		"\2\64\u0145\3\2\2\2\66\u0147\3\2\2\28\u0151\3\2\2\2:\u0154\3\2\2\2<\u015b"+
		"\3\2\2\2>\u0160\3\2\2\2@\u017b\3\2\2\2B\u017d\3\2\2\2D\u0189\3\2\2\2F"+
		"\u0190\3\2\2\2H\u019f\3\2\2\2J\u01a1\3\2\2\2L\u01a3\3\2\2\2N\u01a5\3\2"+
		"\2\2P\u01a8\3\2\2\2RT\5\4\3\2SR\3\2\2\2TW\3\2\2\2US\3\2\2\2UV\3\2\2\2"+
		"V\3\3\2\2\2WU\3\2\2\2Xi\5 \21\2Yi\5\"\22\2Zi\5L\'\2[i\5*\26\2\\i\5\16"+
		"\b\2]i\5\30\r\2^i\5@!\2_i\5\62\32\2`i\5> \2ai\5B\"\2bi\5D#\2ci\5\6\4\2"+
		"di\5\b\5\2ei\5P)\2fi\7H\2\2gi\5N(\2hX\3\2\2\2hY\3\2\2\2hZ\3\2\2\2h[\3"+
		"\2\2\2h\\\3\2\2\2h]\3\2\2\2h^\3\2\2\2h_\3\2\2\2h`\3\2\2\2ha\3\2\2\2hb"+
		"\3\2\2\2hc\3\2\2\2hd\3\2\2\2he\3\2\2\2hf\3\2\2\2hg\3\2\2\2i\5\3\2\2\2"+
		"jk\7\3\2\2kn\5H%\2lm\7\4\2\2mo\t\2\2\2nl\3\2\2\2no\3\2\2\2oq\3\2\2\2p"+
		"r\5&\24\2qp\3\2\2\2qr\3\2\2\2r\7\3\2\2\2sv\5\n\6\2tv\5\f\7\2us\3\2\2\2"+
		"ut\3\2\2\2v\t\3\2\2\2wx\7\7\2\2x{\t\3\2\2yz\7\67\2\2z|\7\61\2\2{y\3\2"+
		"\2\2|}\3\2\2\2}{\3\2\2\2}~\3\2\2\2~\u0080\3\2\2\2\177\u0081\5&\24\2\u0080"+
		"\177\3\2\2\2\u0080\u0081\3\2\2\2\u0081\13\3\2\2\2\u0082\u0083\7\t\2\2"+
		"\u0083\u0086\t\3\2\2\u0084\u0085\7\67\2\2\u0085\u0087\5H%\2\u0086\u0084"+
		"\3\2\2\2\u0087\u0088\3\2\2\2\u0088\u0086\3\2\2\2\u0088\u0089\3\2\2\2\u0089"+
		"\u008b\3\2\2\2\u008a\u008c\5&\24\2\u008b\u008a\3\2\2\2\u008b\u008c\3\2"+
		"\2\2\u008c\r\3\2\2\2\u008d\u0093\5\26\f\2\u008e\u0090\5\20\t\2\u008f\u0091"+
		"\5&\24\2\u0090\u008f\3\2\2\2\u0090\u0091\3\2\2\2\u0091\u0093\3\2\2\2\u0092"+
		"\u008d\3\2\2\2\u0092\u008e\3\2\2\2\u0093\17\3\2\2\2\u0094\u0097\5\22\n"+
		"\2\u0095\u0097\5\24\13\2\u0096\u0094\3\2\2\2\u0096\u0095\3\2\2\2\u0097"+
		"\21\3\2\2\2\u0098\u0099\7\n\2\2\u0099\u009f\7\61\2\2\u009a\u009b\5J&\2"+
		"\u009b\u009c\5H%\2\u009c\u009e\3\2\2\2\u009d\u009a\3\2\2\2\u009e\u00a1"+
		"\3\2\2\2\u009f\u009d\3\2\2\2\u009f\u00a0\3\2\2\2\u00a0\u00ac\3\2\2\2\u00a1"+
		"\u009f\3\2\2\2\u00a2\u00a8\7\13\2\2\u00a3\u00a4\5J&\2\u00a4\u00a5\5H%"+
		"\2\u00a5\u00a7\3\2\2\2\u00a6\u00a3\3\2\2\2\u00a7\u00aa\3\2\2\2\u00a8\u00a6"+
		"\3\2\2\2\u00a8\u00a9\3\2\2\2\u00a9\u00ac\3\2\2\2\u00aa\u00a8\3\2\2\2\u00ab"+
		"\u0098\3\2\2\2\u00ab\u00a2\3\2\2\2\u00ac\23\3\2\2\2\u00ad\u00ae\7\f\2"+
		"\2\u00ae\u00af\7C\2\2\u00af\u00b0\7\r\2\2\u00b0\u00b2\7\61\2\2\u00b1\u00ad"+
		"\3\2\2\2\u00b2\u00b3\3\2\2\2\u00b3\u00b1\3\2\2\2\u00b3\u00b4\3\2\2\2\u00b4"+
		"\25\3\2\2\2\u00b5\u00b6\7\16\2\2\u00b6\u00b7\7C\2\2\u00b7\u00b8\7\17\2"+
		"\2\u00b8\u00c7\5&\24\2\u00b9\u00ba\7\20\2\2\u00ba\u00c3\7\21\2\2\u00bb"+
		"\u00bc\7C\2\2\u00bc\u00bf\7E\2\2\u00bd\u00be\7\22\2\2\u00be\u00c0\7\61"+
		"\2\2\u00bf\u00bd\3\2\2\2\u00c0\u00c1\3\2\2\2\u00c1\u00bf\3\2\2\2\u00c1"+
		"\u00c2\3\2\2\2\u00c2\u00c4\3\2\2\2\u00c3\u00bb\3\2\2\2\u00c4\u00c5\3\2"+
		"\2\2\u00c5\u00c3\3\2\2\2\u00c5\u00c6\3\2\2\2\u00c6\u00c8\3\2\2\2\u00c7"+
		"\u00b9\3\2\2\2\u00c7\u00c8\3\2\2\2\u00c8\u00c9\3\2\2\2\u00c9\u00cd\t\4"+
		"\2\2\u00ca\u00cc\5\4\3\2\u00cb\u00ca\3\2\2\2\u00cc\u00cf\3\2\2\2\u00cd"+
		"\u00cb\3\2\2\2\u00cd\u00ce\3\2\2\2\u00ce\u00d0\3\2\2\2\u00cf\u00cd\3\2"+
		"\2\2\u00d0\u00d1\7\25\2\2\u00d1\u00d2\7\61\2\2\u00d2\u00d3\7\26\2\2\u00d3"+
		"\27\3\2\2\2\u00d4\u00d5\78\2\2\u00d5\u00d6\5\32\16\2\u00d6\u00d8\7\27"+
		"\2\2\u00d7\u00d9\5\4\3\2\u00d8\u00d7\3\2\2\2\u00d9\u00da\3\2\2\2\u00da"+
		"\u00d8\3\2\2\2\u00da\u00db\3\2\2\2\u00db\u00e2\3\2\2\2\u00dc\u00de\79"+
		"\2\2\u00dd\u00df\5\4\3\2\u00de\u00dd\3\2\2\2\u00df\u00e0\3\2\2\2\u00e0"+
		"\u00de\3\2\2\2\u00e0\u00e1\3\2\2\2\u00e1\u00e3\3\2\2\2\u00e2\u00dc\3\2"+
		"\2\2\u00e2\u00e3\3\2\2\2\u00e3\u00e4\3\2\2\2\u00e4\u00e5\7@\2\2\u00e5"+
		"\31\3\2\2\2\u00e6\u00e9\5\34\17\2\u00e7\u00e9\5\36\20\2\u00e8\u00e6\3"+
		"\2\2\2\u00e8\u00e7\3\2\2\2\u00e9\33\3\2\2\2\u00ea\u00f0\5H%\2\u00eb\u00ec"+
		"\7\61\2\2\u00ec\u00ed\7\4\2\2\u00ed\u00f0\t\5\2\2\u00ee\u00f0\7\b\2\2"+
		"\u00ef\u00ea\3\2\2\2\u00ef\u00eb\3\2\2\2\u00ef\u00ee\3\2\2\2\u00f0\35"+
		"\3\2\2\2\u00f1\u00f2\5\34\17\2\u00f2\u00f3\7:\2\2\u00f3\u00f4\5\34\17"+
		"\2\u00f4\37\3\2\2\2\u00f5\u00f6\t\6\2\2\u00f6\u00f7\7C\2\2\u00f7\u00fc"+
		"\7E\2\2\u00f8\u00f9\7\22\2\2\u00f9\u00fb\5H%\2\u00fa\u00f8\3\2\2\2\u00fb"+
		"\u00fe\3\2\2\2\u00fc\u00fa\3\2\2\2\u00fc\u00fd\3\2\2\2\u00fd!\3\2\2\2"+
		"\u00fe\u00fc\3\2\2\2\u00ff\u0100\5 \21\2\u0100\u0101\5$\23\2\u0101\u0104"+
		"\3\2\2\2\u0102\u0104\5(\25\2\u0103\u00ff\3\2\2\2\u0103\u0102\3\2\2\2\u0104"+
		"#\3\2\2\2\u0105\u0108\7\31\2\2\u0106\u0107\7\22\2\2\u0107\u0109\7\61\2"+
		"\2\u0108\u0106\3\2\2\2\u0109\u010a\3\2\2\2\u010a\u0108\3\2\2\2\u010a\u010b"+
		"\3\2\2\2\u010b%\3\2\2\2\u010c\u010d\7\31\2\2\u010d\u010e\7\22\2\2\u010e"+
		"\u010f\7\61\2\2\u010f\'\3\2\2\2\u0110\u0111\7\32\2\2\u0111\u0112\7E\2"+
		"\2\u0112\u0114\5H%\2\u0113\u0115\5&\24\2\u0114\u0113\3\2\2\2\u0114\u0115"+
		"\3\2\2\2\u0115)\3\2\2\2\u0116\u011a\5,\27\2\u0117\u011a\5.\30\2\u0118"+
		"\u011a\5\60\31\2\u0119\u0116\3\2\2\2\u0119\u0117\3\2\2\2\u0119\u0118\3"+
		"\2\2\2\u011a+\3\2\2\2\u011b\u011c\7;\2\2\u011c\u011d\7\61\2\2\u011d\u011e"+
		"\7>\2\2\u011e\u0122\7\61\2\2\u011f\u0121\5\4\3\2\u0120\u011f\3\2\2\2\u0121"+
		"\u0124\3\2\2\2\u0122\u0120\3\2\2\2\u0122\u0123\3\2\2\2\u0123\u0125\3\2"+
		"\2\2\u0124\u0122\3\2\2\2\u0125\u0126\7@\2\2\u0126-\3\2\2\2\u0127\u0128"+
		"\7<\2\2\u0128\u0129\t\7\2\2\u0129\u012d\7?\2\2\u012a\u012c\5\4\3\2\u012b"+
		"\u012a\3\2\2\2\u012c\u012f\3\2\2\2\u012d\u012b\3\2\2\2\u012d\u012e\3\2"+
		"\2\2\u012e\u0130\3\2\2\2\u012f\u012d\3\2\2\2\u0130\u0131\7@\2\2\u0131"+
		"/\3\2\2\2\u0132\u0136\7=\2\2\u0133\u0135\5\4\3\2\u0134\u0133\3\2\2\2\u0135"+
		"\u0138\3\2\2\2\u0136\u0134\3\2\2\2\u0136\u0137\3\2\2\2\u0137\u0139\3\2"+
		"\2\2\u0138\u0136\3\2\2\2\u0139\u013a\7@\2\2\u013a\61\3\2\2\2\u013b\u013f"+
		"\5\64\33\2\u013c\u013f\5<\37\2\u013d\u013f\5:\36\2\u013e\u013b\3\2\2\2"+
		"\u013e\u013c\3\2\2\2\u013e\u013d\3\2\2\2\u013f\u0141\3\2\2\2\u0140\u0142"+
		"\5$\23\2\u0141\u0140\3\2\2\2\u0141\u0142\3\2\2\2\u0142\63\3\2\2\2\u0143"+
		"\u0146\5\66\34\2\u0144\u0146\58\35\2\u0145\u0143\3\2\2\2\u0145\u0144\3"+
		"\2\2\2\u0146\65\3\2\2\2\u0147\u014a\7\62\2\2\u0148\u014b\5H%\2\u0149\u014b"+
		"\7\b\2\2\u014a\u0148\3\2\2\2\u014a\u0149\3\2\2\2\u014b\u014c\3\2\2\2\u014c"+
		"\u014f\5J&\2\u014d\u0150\5H%\2\u014e\u0150\7\b\2\2\u014f\u014d\3\2\2\2"+
		"\u014f\u014e\3\2\2\2\u0150\67\3\2\2\2\u0151\u0152\7\65\2\2\u0152\u0153"+
		"\t\3\2\2\u01539\3\2\2\2\u0154\u0155\7\33\2\2\u0155\u0156\t\b\2\2\u0156"+
		"\u0157\5J&\2\u0157\u0159\t\t\2\2\u0158\u015a\7\64\2\2\u0159\u0158\3\2"+
		"\2\2\u0159\u015a\3\2\2\2\u015a;\3\2\2\2\u015b\u015c\7\3\2\2\u015c\u015d"+
		"\7\61\2\2\u015d\u015e\7\61\2\2\u015e\u015f\7\63\2\2\u015f=\3\2\2\2\u0160"+
		"\u0161\7\34\2\2\u0161\u0164\7\61\2\2\u0162\u0163\7\4\2\2\u0163\u0165\t"+
		"\n\2\2\u0164\u0162\3\2\2\2\u0164\u0165\3\2\2\2\u0165\u0166\3\2\2\2\u0166"+
		"\u0172\7\27\2\2\u0167\u016e\7\35\2\2\u0168\u016b\5H%\2\u0169\u016a\7\4"+
		"\2\2\u016a\u016c\7C\2\2\u016b\u0169\3\2\2\2\u016b\u016c\3\2\2\2\u016c"+
		"\u016f\3\2\2\2\u016d\u016f\7\b\2\2\u016e\u0168\3\2\2\2\u016e\u016d\3\2"+
		"\2\2\u016f\u0170\3\2\2\2\u0170\u0173\7\36\2\2\u0171\u0173\7\37\2\2\u0172"+
		"\u0167\3\2\2\2\u0172\u0171\3\2\2\2\u0173?\3\2\2\2\u0174\u0177\7 \2\2\u0175"+
		"\u0178\5H%\2\u0176\u0178\7\b\2\2\u0177\u0175\3\2\2\2\u0177\u0176\3\2\2"+
		"\2\u0178\u017c\3\2\2\2\u0179\u017c\7!\2\2\u017a\u017c\7\"\2\2\u017b\u0174"+
		"\3\2\2\2\u017b\u0179\3\2\2\2\u017b\u017a\3\2\2\2\u017cA\3\2\2\2\u017d"+
		"\u017e\7#\2\2\u017e\u017f\7\60\2\2\u017f\u0187\7$\2\2\u0180\u0182\7%\2"+
		"\2\u0181\u0183\7\61\2\2\u0182\u0181\3\2\2\2\u0183\u0184\3\2\2\2\u0184"+
		"\u0182\3\2\2\2\u0184\u0185\3\2\2\2\u0185\u0186\3\2\2\2\u0186\u0188\7&"+
		"\2\2\u0187\u0180\3\2\2\2\u0187\u0188\3\2\2\2\u0188C\3\2\2\2\u0189\u018a"+
		"\7\16\2\2\u018a\u018b\7C\2\2\u018b\u018c\7\'\2\2\u018c\u018e\5$\23\2\u018d"+
		"\u018f\5F$\2\u018e\u018d\3\2\2\2\u018e\u018f\3\2\2\2\u018fE\3\2\2\2\u0190"+
		"\u0197\7(\2\2\u0191\u0192\7)\2\2\u0192\u0193\7\60\2\2\u0193\u0194\7\27"+
		"\2\2\u0194\u0195\7E\2\2\u0195\u0196\7\22\2\2\u0196\u0198\5H%\2\u0197\u0191"+
		"\3\2\2\2\u0198\u0199\3\2\2\2\u0199\u0197\3\2\2\2\u0199\u019a\3\2\2\2\u019a"+
		"\u019b\3\2\2\2\u019b\u019c\7\25\2\2\u019c\u019d\7\61\2\2\u019d\u019e\7"+
		"*\2\2\u019eG\3\2\2\2\u019f\u01a0\t\13\2\2\u01a0I\3\2\2\2\u01a1\u01a2\t"+
		"\f\2\2\u01a2K\3\2\2\2\u01a3\u01a4\7+\2\2\u01a4M\3\2\2\2\u01a5\u01a6\t"+
		"\r\2\2\u01a6\u01a7\7\60\2\2\u01a7O\3\2\2\2\u01a8\u01a9\7/\2\2\u01a9Q\3"+
		"\2\2\2\63Uhnqu}\u0080\u0088\u008b\u0090\u0092\u0096\u009f\u00a8\u00ab"+
		"\u00b3\u00c1\u00c5\u00c7\u00cd\u00da\u00e0\u00e2\u00e8\u00ef\u00fc\u0103"+
		"\u010a\u0114\u0119\u0122\u012d\u0136\u013e\u0141\u0145\u014a\u014f\u0159"+
		"\u0164\u016b\u016e\u0172\u0177\u017b\u0184\u0187\u018e\u0199";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}