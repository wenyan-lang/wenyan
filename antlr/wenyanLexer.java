// Generated from wenyan.g4 by ANTLR 4.7.2
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class wenyanLexer extends Lexer {
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
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "T__7", "T__8", 
			"T__9", "T__10", "T__11", "T__12", "T__13", "T__14", "T__15", "T__16", 
			"T__17", "T__18", "T__19", "T__20", "T__21", "T__22", "T__23", "T__24", 
			"T__25", "T__26", "T__27", "T__28", "T__29", "T__30", "T__31", "T__32", 
			"T__33", "T__34", "T__35", "T__36", "T__37", "T__38", "T__39", "T__40", 
			"T__41", "T__42", "T__43", "T__44", "STRING_LITERAL", "IDENTIFIER", "ARITH_BINARY_OP", 
			"LOGIC_BINARY_OP", "POST_MOD_MATH_OP", "UNARY_OP", "PREPOSITION_YU", 
			"PREPOSITION_YI", "IF", "ELSE", "IF_LOGIC_OP", "FOR_START_ARR", "FOR_START_ENUM", 
			"FOR_START_WHILE", "FOR_MID_ARR", "FOR_MID_ENUM", "FOR_IF_END", "FLOAT_NUM", 
			"FLOAT_NUM_KEYWORDS", "INT_NUM", "INT_NUM_KEYWORDS", "TYPE", "BOOL_VALUE", 
			"WS", "BREAK"
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


	public wenyanLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "wenyan.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public String[] getChannelNames() { return channelNames; }

	@Override
	public String[] getModeNames() { return modeNames; }

	@Override
	public ATN getATN() { return _ATN; }

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\2H\u018c\b\1\4\2\t"+
		"\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13"+
		"\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30\4\31\t\31"+
		"\4\32\t\32\4\33\t\33\4\34\t\34\4\35\t\35\4\36\t\36\4\37\t\37\4 \t \4!"+
		"\t!\4\"\t\"\4#\t#\4$\t$\4%\t%\4&\t&\4\'\t\'\4(\t(\4)\t)\4*\t*\4+\t+\4"+
		",\t,\4-\t-\4.\t.\4/\t/\4\60\t\60\4\61\t\61\4\62\t\62\4\63\t\63\4\64\t"+
		"\64\4\65\t\65\4\66\t\66\4\67\t\67\48\t8\49\t9\4:\t:\4;\t;\4<\t<\4=\t="+
		"\4>\t>\4?\t?\4@\t@\4A\tA\4B\tB\4C\tC\4D\tD\4E\tE\4F\tF\4G\tG\3\2\3\2\3"+
		"\3\3\3\3\4\3\4\3\4\3\5\3\5\3\6\3\6\3\7\3\7\3\b\3\b\3\t\3\t\3\n\3\n\3\n"+
		"\3\13\3\13\3\f\3\f\3\f\3\r\3\r\3\r\3\16\3\16\3\17\3\17\3\17\3\17\3\17"+
		"\3\20\3\20\3\20\3\20\3\21\3\21\3\22\3\22\3\22\3\22\3\23\3\23\3\23\3\23"+
		"\3\23\3\23\3\24\3\24\3\24\3\25\3\25\3\25\3\25\3\26\3\26\3\27\3\27\3\27"+
		"\3\30\3\30\3\30\3\31\3\31\3\32\3\32\3\33\3\33\3\33\3\34\3\34\3\35\3\35"+
		"\3\35\3\36\3\36\3\36\3\36\3\36\3\36\3\37\3\37\3\37\3 \3 \3 \3 \3 \3!\3"+
		"!\3!\3!\3\"\3\"\3\"\3\"\3#\3#\3#\3$\3$\3$\3%\3%\3%\3&\3&\3\'\3\'\3\'\3"+
		"\'\3\'\3(\3(\3(\3)\3)\3)\3)\3*\3*\3*\3+\3+\3+\3,\3,\3,\3-\3-\3-\3.\3."+
		"\3/\3/\3/\3/\7/\u011d\n/\f/\16/\u0120\13/\3/\3/\3/\3\60\3\60\6\60\u0127"+
		"\n\60\r\60\16\60\u0128\3\60\3\60\3\61\3\61\3\62\3\62\3\62\3\62\3\62\3"+
		"\62\3\62\3\62\5\62\u0137\n\62\3\63\3\63\3\63\3\63\3\63\3\64\3\64\3\65"+
		"\3\65\3\66\3\66\3\67\3\67\38\38\38\39\39\39\39\39\39\39\39\39\39\39\3"+
		"9\39\39\39\59\u0158\n9\3:\3:\3;\3;\3;\3<\3<\3<\3<\3=\3=\3=\3>\3>\3?\3"+
		"?\3?\5?\u016b\n?\3@\3@\3@\3@\3@\6@\u0172\n@\r@\16@\u0173\3A\3A\3B\6B\u0179"+
		"\nB\rB\16B\u017a\3C\3C\3D\3D\3E\3E\3F\6F\u0184\nF\rF\16F\u0185\3F\3F\3"+
		"G\3G\3G\2\2H\3\3\5\4\7\5\t\6\13\7\r\b\17\t\21\n\23\13\25\f\27\r\31\16"+
		"\33\17\35\20\37\21!\22#\23%\24\'\25)\26+\27-\30/\31\61\32\63\33\65\34"+
		"\67\359\36;\37= ?!A\"C#E$G%I&K\'M(O)Q*S+U,W-Y.[/]\60_\61a\62c\63e\64g"+
		"\65i\66k\67m8o9q:s;u<w=y>{?}@\177A\u0081B\u0083C\u0085D\u0087E\u0089F"+
		"\u008bG\u008dH\3\2\t\3\2\u300f\u300f\5\2\u4e5a\u4e5a\u52a2\u52a2\u6e1d"+
		"\u6e1d\f\2\u5208\u5208\u57c5\u57c5\u5877\u5877\u5fb0\u5fb0\u5fff\u5fff"+
		"\u6bed\u6bed\u6e3c\u6e3c\u6f22\u6f22\u7d74\u7d74\u91d2\u91d2\33\2\u4e02"+
		"\u4e02\u4e05\u4e05\u4e0b\u4e0b\u4e5f\u4e5f\u4e8e\u4e8e\u4e96\u4e96\u4eae"+
		"\u4eae\u5106\u5106\u5148\u5148\u516d\u516d\u516f\u516f\u5343\u5343\u5345"+
		"\u5345\u56dd\u56dd\u5795\u5795\u6977\u6977\u6b65\u6b65\u6e9f\u6e9f\u6f99"+
		"\u6f99\u7680\u7680\u79ef\u79ef\u7a65\u7a65\u842e\u842e\u8f0b\u8f0b\u96f8"+
		"\u96f8\6\2\u5219\u5219\u657a\u657a\u723d\u723d\u8a02\u8a02\4\2\u9672\u9672"+
		"\u967f\u967f\7\2\13\f\17\17\"\"\u3004\u3004\uff0e\uff0e\2\u0197\2\3\3"+
		"\2\2\2\2\5\3\2\2\2\2\7\3\2\2\2\2\t\3\2\2\2\2\13\3\2\2\2\2\r\3\2\2\2\2"+
		"\17\3\2\2\2\2\21\3\2\2\2\2\23\3\2\2\2\2\25\3\2\2\2\2\27\3\2\2\2\2\31\3"+
		"\2\2\2\2\33\3\2\2\2\2\35\3\2\2\2\2\37\3\2\2\2\2!\3\2\2\2\2#\3\2\2\2\2"+
		"%\3\2\2\2\2\'\3\2\2\2\2)\3\2\2\2\2+\3\2\2\2\2-\3\2\2\2\2/\3\2\2\2\2\61"+
		"\3\2\2\2\2\63\3\2\2\2\2\65\3\2\2\2\2\67\3\2\2\2\29\3\2\2\2\2;\3\2\2\2"+
		"\2=\3\2\2\2\2?\3\2\2\2\2A\3\2\2\2\2C\3\2\2\2\2E\3\2\2\2\2G\3\2\2\2\2I"+
		"\3\2\2\2\2K\3\2\2\2\2M\3\2\2\2\2O\3\2\2\2\2Q\3\2\2\2\2S\3\2\2\2\2U\3\2"+
		"\2\2\2W\3\2\2\2\2Y\3\2\2\2\2[\3\2\2\2\2]\3\2\2\2\2_\3\2\2\2\2a\3\2\2\2"+
		"\2c\3\2\2\2\2e\3\2\2\2\2g\3\2\2\2\2i\3\2\2\2\2k\3\2\2\2\2m\3\2\2\2\2o"+
		"\3\2\2\2\2q\3\2\2\2\2s\3\2\2\2\2u\3\2\2\2\2w\3\2\2\2\2y\3\2\2\2\2{\3\2"+
		"\2\2\2}\3\2\2\2\2\177\3\2\2\2\2\u0081\3\2\2\2\2\u0083\3\2\2\2\2\u0085"+
		"\3\2\2\2\2\u0087\3\2\2\2\2\u0089\3\2\2\2\2\u008b\3\2\2\2\2\u008d\3\2\2"+
		"\2\3\u008f\3\2\2\2\5\u0091\3\2\2\2\7\u0093\3\2\2\2\t\u0096\3\2\2\2\13"+
		"\u0098\3\2\2\2\r\u009a\3\2\2\2\17\u009c\3\2\2\2\21\u009e\3\2\2\2\23\u00a0"+
		"\3\2\2\2\25\u00a3\3\2\2\2\27\u00a5\3\2\2\2\31\u00a8\3\2\2\2\33\u00ab\3"+
		"\2\2\2\35\u00ad\3\2\2\2\37\u00b2\3\2\2\2!\u00b6\3\2\2\2#\u00b8\3\2\2\2"+
		"%\u00bc\3\2\2\2\'\u00c2\3\2\2\2)\u00c5\3\2\2\2+\u00c9\3\2\2\2-\u00cb\3"+
		"\2\2\2/\u00ce\3\2\2\2\61\u00d1\3\2\2\2\63\u00d3\3\2\2\2\65\u00d5\3\2\2"+
		"\2\67\u00d8\3\2\2\29\u00da\3\2\2\2;\u00dd\3\2\2\2=\u00e3\3\2\2\2?\u00e6"+
		"\3\2\2\2A\u00eb\3\2\2\2C\u00ef\3\2\2\2E\u00f3\3\2\2\2G\u00f6\3\2\2\2I"+
		"\u00f9\3\2\2\2K\u00fc\3\2\2\2M\u00fe\3\2\2\2O\u0103\3\2\2\2Q\u0106\3\2"+
		"\2\2S\u010a\3\2\2\2U\u010d\3\2\2\2W\u0110\3\2\2\2Y\u0113\3\2\2\2[\u0116"+
		"\3\2\2\2]\u0118\3\2\2\2_\u0124\3\2\2\2a\u012c\3\2\2\2c\u0136\3\2\2\2e"+
		"\u0138\3\2\2\2g\u013d\3\2\2\2i\u013f\3\2\2\2k\u0141\3\2\2\2m\u0143\3\2"+
		"\2\2o\u0145\3\2\2\2q\u0157\3\2\2\2s\u0159\3\2\2\2u\u015b\3\2\2\2w\u015e"+
		"\3\2\2\2y\u0162\3\2\2\2{\u0165\3\2\2\2}\u016a\3\2\2\2\177\u016c\3\2\2"+
		"\2\u0081\u0175\3\2\2\2\u0083\u0178\3\2\2\2\u0085\u017c\3\2\2\2\u0087\u017e"+
		"\3\2\2\2\u0089\u0180\3\2\2\2\u008b\u0183\3\2\2\2\u008d\u0189\3\2\2\2\u008f"+
		"\u0090\7\u592d\2\2\u0090\4\3\2\2\2\u0091\u0092\7\u4e4d\2\2\u0092\6\3\2"+
		"\2\2\u0093\u0094\7\u5178\2\2\u0094\u0095\7\u991a\2\2\u0095\b\3\2\2\2\u0096"+
		"\u0097\7\u9579\2\2\u0097\n\3\2\2\2\u0098\u0099\7\u929e\2\2\u0099\f\3\2"+
		"\2\2\u009a\u009b\7\u5178\2\2\u009b\16\3\2\2\2\u009c\u009d\7\u5147\2\2"+
		"\u009d\20\3\2\2\2\u009e\u009f\7\u65bf\2\2\u009f\22\3\2\2\2\u00a0\u00a1"+
		"\7\u65bf\2\2\u00a1\u00a2\7\u5178\2\2\u00a2\24\3\2\2\2\u00a3\u00a4\7\u53d8"+
		"\2\2\u00a4\26\3\2\2\2\u00a5\u00a6\7\u4ee7\2\2\u00a6\u00a7\7\u65bf\2\2"+
		"\u00a7\30\3\2\2\2\u00a8\u00a9\7\u5440\2\2\u00a9\u00aa\7\u670b\2\2\u00aa"+
		"\32\3\2\2\2\u00ab\u00ac\7\u8855\2\2\u00ac\34\3\2\2\2\u00ad\u00ae\7\u6b34"+
		"\2\2\u00ae\u00af\7\u884e\2\2\u00af\u00b0\7\u6631\2\2\u00b0\u00b1\7\u8855"+
		"\2\2\u00b1\36\3\2\2\2\u00b2\u00b3\7\u5fc7\2\2\u00b3\u00b4\7\u514a\2\2"+
		"\u00b4\u00b5\7\u5f99\2\2\u00b5 \3\2\2\2\u00b6\u00b7\7\u66f2\2\2\u00b7"+
		"\"\3\2\2\2\u00b8\u00b9\7\u6631\2\2\u00b9\u00ba\7\u8855\2\2\u00ba\u00bb"+
		"\7\u66f2\2\2\u00bb$\3\2\2\2\u00bc\u00bd\7\u4e45\2\2\u00bd\u00be\7\u884e"+
		"\2\2\u00be\u00bf\7\u6631\2\2\u00bf\u00c0\7\u8855\2\2\u00c0\u00c1\7\u66f2"+
		"\2\2\u00c1&\3\2\2\2\u00c2\u00c3\7\u6631\2\2\u00c3\u00c4\7\u8b04\2\2\u00c4"+
		"(\3\2\2\2\u00c5\u00c6\7\u4e4d\2\2\u00c6\u00c7\7\u8855\2\2\u00c7\u00c8"+
		"\7\u4e61\2\2\u00c8*\3\2\2\2\u00c9\u00ca\7\u8007\2\2\u00ca,\3\2\2\2\u00cb"+
		"\u00cc\7\u4ecc\2\2\u00cc\u00cd\7\u670b\2\2\u00cd.\3\2\2\2\u00ce\u00cf"+
		"\7\u540f\2\2\u00cf\u00d0\7\u4e4d\2\2\u00d0\60\3\2\2\2\u00d1\u00d2\7\u670b"+
		"\2\2\u00d2\62\3\2\2\2\u00d3\u00d4\7\u9666\2\2\u00d4\64\3\2\2\2\u00d5\u00d6"+
		"\7\u6616\2\2\u00d6\u00d7\7\u4e4d\2\2\u00d7\66\3\2\2\2\u00d8\u00d9\7\u4ecc"+
		"\2\2\u00d98\3\2\2\2\u00da\u00db\7\u6631\2\2\u00db\u00dc\7\u77e5\2\2\u00dc"+
		":\3\2\2\2\u00dd\u00de\7\u4ecc\2\2\u00de\u00df\7\u4e0f\2\2\u00df\u00e0"+
		"\7\u5fab\2\2\u00e0\u00e1\7\u5b5a\2\2\u00e1\u00e2\7\u77e5\2\2\u00e2<\3"+
		"\2\2\2\u00e3\u00e4\7\u4e45\2\2\u00e4\u00e5\7\u5f99\2\2\u00e5>\3\2\2\2"+
		"\u00e6\u00e7\7\u4e45\2\2\u00e7\u00e8\7\u6b7a\2\2\u00e8\u00e9\7\u7a7c\2"+
		"\2\u00e9\u00ea\7\u7123\2\2\u00ea@\3\2\2\2\u00eb\u00ec\7\u4e45\2\2\u00ec"+
		"\u00ed\7\u5f99\2\2\u00ed\u00ee\7\u77e5\2\2\u00eeB\3\2\2\2\u00ef\u00f0"+
		"\7\u5440\2\2\u00f0\u00f1\7\u5619\2\2\u00f1\u00f2\7\u89c2\2\2\u00f2D\3"+
		"\2\2\2\u00f3\u00f4\7\u4e4d\2\2\u00f4\u00f5\7\u66fa\2\2\u00f5F\3\2\2\2"+
		"\u00f6\u00f7\7\u65bb\2\2\u00f7\u00f8\7\u60a1\2\2\u00f8H\3\2\2\2\u00f9"+
		"\u00fa\7\u4e4d\2\2\u00fa\u00fb\7\u7fab\2\2\u00fbJ\3\2\2\2\u00fc\u00fd"+
		"\7\u726b\2\2\u00fdL\3\2\2\2\u00fe\u00ff\7\u5178\2\2\u00ff\u0100\7\u726b"+
		"\2\2\u0100\u0101\7\u5984\2\2\u0101\u0102\7\u6631\2\2\u0102N\3\2\2\2\u0103"+
		"\u0104\7\u726b\2\2\u0104\u0105\7\u4e4d\2\2\u0105P\3\2\2\2\u0106\u0107"+
		"\7\u4e4d\2\2\u0107\u0108\7\u726b\2\2\u0108\u0109\7\u4e61\2\2\u0109R\3"+
		"\2\2\2\u010a\u010b\7\u66fa\2\2\u010b\u010c\7\u4e4d\2\2\u010cT\3\2\2\2"+
		"\u010d\u010e\7\u6cea\2\2\u010e\u010f\7\u66f2\2\2\u010fV\3\2\2\2\u0110"+
		"\u0111\7\u7591\2\2\u0111\u0112\7\u66f2\2\2\u0112X\3\2\2\2\u0113\u0114"+
		"\7\u627b\2\2\u0114\u0115\7\u66f2\2\2\u0115Z\3\2\2\2\u0116\u0117\7\u566d"+
		"\2\2\u0117\\\3\2\2\2\u0118\u0119\7\u300e\2\2\u0119\u011a\7\u300e\2\2\u011a"+
		"\u011e\3\2\2\2\u011b\u011d\n\2\2\2\u011c\u011b\3\2\2\2\u011d\u0120\3\2"+
		"\2\2\u011e\u011c\3\2\2\2\u011e\u011f\3\2\2\2\u011f\u0121\3\2\2\2\u0120"+
		"\u011e\3\2\2\2\u0121\u0122\7\u300f\2\2\u0122\u0123\7\u300f\2\2\u0123^"+
		"\3\2\2\2\u0124\u0126\7\u300e\2\2\u0125\u0127\n\2\2\2\u0126\u0125\3\2\2"+
		"\2\u0127\u0128\3\2\2\2\u0128\u0126\3\2\2\2\u0128\u0129\3\2\2\2\u0129\u012a"+
		"\3\2\2\2\u012a\u012b\7\u300f\2\2\u012b`\3\2\2\2\u012c\u012d\t\3\2\2\u012d"+
		"b\3\2\2\2\u012e\u012f\7\u4e2f\2\2\u012f\u0130\7\u670b\2\2\u0130\u0131"+
		"\7\u967f\2\2\u0131\u0137\7\u4e50\2\2\u0132\u0133\7\u4e2f\2\2\u0133\u0134"+
		"\7\u7123\2\2\u0134\u0135\7\u9672\2\2\u0135\u0137\7\u4e50\2\2\u0136\u012e"+
		"\3\2\2\2\u0136\u0132\3\2\2\2\u0137d\3\2\2\2\u0138\u0139\7\u6242\2\2\u0139"+
		"\u013a\7\u991a\2\2\u013a\u013b\7\u5e80\2\2\u013b\u013c\7\u4f57\2\2\u013c"+
		"f\3\2\2\2\u013d\u013e\7\u8b8c\2\2\u013eh\3\2\2\2\u013f\u0140\7\u65be\2"+
		"\2\u0140j\3\2\2\2\u0141\u0142\7\u4ee7\2\2\u0142l\3\2\2\2\u0143\u0144\7"+
		"\u82e7\2\2\u0144n\3\2\2\2\u0145\u0146\7\u82e7\2\2\u0146\u0147\7\u9760"+
		"\2\2\u0147p\3\2\2\2\u0148\u0149\7\u7b4b\2\2\u0149\u0158\7\u65be\2\2\u014a"+
		"\u014b\7\u4e0f\2\2\u014b\u014c\7\u7b4b\2\2\u014c\u0158\7\u65be\2\2\u014d"+
		"\u014e\7\u4e0f\2\2\u014e\u014f\7\u5929\2\2\u014f\u0158\7\u65be\2\2\u0150"+
		"\u0151\7\u4e0f\2\2\u0151\u0152\7\u5c11\2\2\u0152\u0158\7\u65be\2\2\u0153"+
		"\u0154\7\u5929\2\2\u0154\u0158\7\u65be\2\2\u0155\u0156\7\u5c11\2\2\u0156"+
		"\u0158\7\u65be\2\2\u0157\u0148\3\2\2\2\u0157\u014a\3\2\2\2\u0157\u014d"+
		"\3\2\2\2\u0157\u0150\3\2\2\2\u0157\u0153\3\2\2\2\u0157\u0155\3\2\2\2\u0158"+
		"r\3\2\2\2\u0159\u015a\7\u51e3\2\2\u015at\3\2\2\2\u015b\u015c\7\u70bc\2"+
		"\2\u015c\u015d\7\u6631\2\2\u015dv\3\2\2\2\u015e\u015f\7\u6048\2\2\u015f"+
		"\u0160\7\u70bc\2\2\u0160\u0161\7\u6631\2\2\u0161x\3\2\2\2\u0162\u0163"+
		"\7\u4e2f\2\2\u0163\u0164\7\u4e4d\2\2\u0164z\3\2\2\2\u0165\u0166\7\u904f"+
		"\2\2\u0166|\3\2\2\2\u0167\u0168\7\u4e93\2\2\u0168\u016b\7\u4e93\2\2\u0169"+
		"\u016b\7\u4e61\2\2\u016a\u0167\3\2\2\2\u016a\u0169\3\2\2\2\u016b~\3\2"+
		"\2\2\u016c\u016d\5\u0083B\2\u016d\u0171\7\u53ca\2\2\u016e\u016f\5\u0083"+
		"B\2\u016f\u0170\5\u0081A\2\u0170\u0172\3\2\2\2\u0171\u016e\3\2\2\2\u0172"+
		"\u0173\3\2\2\2\u0173\u0171\3\2\2\2\u0173\u0174\3\2\2\2\u0174\u0080\3\2"+
		"\2\2\u0175\u0176\t\4\2\2\u0176\u0082\3\2\2\2\u0177\u0179\5\u0085C\2\u0178"+
		"\u0177\3\2\2\2\u0179\u017a\3\2\2\2\u017a\u0178\3\2\2\2\u017a\u017b\3\2"+
		"\2\2\u017b\u0084\3\2\2\2\u017c\u017d\t\5\2\2\u017d\u0086\3\2\2\2\u017e"+
		"\u017f\t\6\2\2\u017f\u0088\3\2\2\2\u0180\u0181\t\7\2\2\u0181\u008a\3\2"+
		"\2\2\u0182\u0184\t\b\2\2\u0183\u0182\3\2\2\2\u0184\u0185\3\2\2\2\u0185"+
		"\u0183\3\2\2\2\u0185\u0186\3\2\2\2\u0186\u0187\3\2\2\2\u0187\u0188\bF"+
		"\2\2\u0188\u008c\3\2\2\2\u0189\u018a\7\u4e45\2\2\u018a\u018b\7\u6b64\2"+
		"\2\u018b\u008e\3\2\2\2\f\2\u011e\u0128\u0136\u0157\u016a\u0173\u017a\u0183"+
		"\u0185\3\b\2\2";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}