// Generated from wenyan.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');
var wenyanListener = require('./wenyanListener').wenyanListener;
var grammarFileName = "wenyan.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003H\u01ab\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014\t",
    "\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017\u0004",
    "\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a\u0004\u001b\t",
    "\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e\t\u001e\u0004",
    "\u001f\t\u001f\u0004 \t \u0004!\t!\u0004\"\t\"\u0004#\t#\u0004$\t$\u0004",
    "%\t%\u0004&\t&\u0004\'\t\'\u0004(\t(\u0004)\t)\u0003\u0002\u0007\u0002",
    "T\n\u0002\f\u0002\u000e\u0002W\u000b\u0002\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0005\u0003i\n\u0003\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0005\u0004o\n\u0004\u0003\u0004\u0005\u0004r\n\u0004",
    "\u0003\u0005\u0003\u0005\u0005\u0005v\n\u0005\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0006\u0006|\n\u0006\r\u0006\u000e\u0006}\u0003",
    "\u0006\u0005\u0006\u0081\n\u0006\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0006\u0007\u0087\n\u0007\r\u0007\u000e\u0007\u0088\u0003",
    "\u0007\u0005\u0007\u008c\n\u0007\u0003\b\u0003\b\u0003\b\u0005\b\u0091",
    "\n\b\u0005\b\u0093\n\b\u0003\t\u0003\t\u0005\t\u0097\n\t\u0003\n\u0003",
    "\n\u0003\n\u0003\n\u0003\n\u0007\n\u009e\n\n\f\n\u000e\n\u00a1\u000b",
    "\n\u0003\n\u0003\n\u0003\n\u0003\n\u0007\n\u00a7\n\n\f\n\u000e\n\u00aa",
    "\u000b\n\u0005\n\u00ac\n\n\u0003\u000b\u0003\u000b\u0003\u000b\u0003",
    "\u000b\u0006\u000b\u00b2\n\u000b\r\u000b\u000e\u000b\u00b3\u0003\f\u0003",
    "\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0006",
    "\f\u00c0\n\f\r\f\u000e\f\u00c1\u0006\f\u00c4\n\f\r\f\u000e\f\u00c5\u0005",
    "\f\u00c8\n\f\u0003\f\u0003\f\u0007\f\u00cc\n\f\f\f\u000e\f\u00cf\u000b",
    "\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\r\u0003\r\u0003\r\u0003\r\u0006",
    "\r\u00d9\n\r\r\r\u000e\r\u00da\u0003\r\u0003\r\u0006\r\u00df\n\r\r\r",
    "\u000e\r\u00e0\u0005\r\u00e3\n\r\u0003\r\u0003\r\u0003\u000e\u0003\u000e",
    "\u0005\u000e\u00e9\n\u000e\u0003\u000f\u0003\u000f\u0003\u000f\u0003",
    "\u000f\u0003\u000f\u0005\u000f\u00f0\n\u000f\u0003\u0010\u0003\u0010",
    "\u0003\u0010\u0003\u0010\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011",
    "\u0003\u0011\u0007\u0011\u00fb\n\u0011\f\u0011\u000e\u0011\u00fe\u000b",
    "\u0011\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0005\u0012\u0104",
    "\n\u0012\u0003\u0013\u0003\u0013\u0003\u0013\u0006\u0013\u0109\n\u0013",
    "\r\u0013\u000e\u0013\u010a\u0003\u0014\u0003\u0014\u0003\u0014\u0003",
    "\u0014\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0005\u0015\u0115",
    "\n\u0015\u0003\u0016\u0003\u0016\u0003\u0016\u0005\u0016\u011a\n\u0016",
    "\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0007\u0017",
    "\u0121\n\u0017\f\u0017\u000e\u0017\u0124\u000b\u0017\u0003\u0017\u0003",
    "\u0017\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0007\u0018\u012c",
    "\n\u0018\f\u0018\u000e\u0018\u012f\u000b\u0018\u0003\u0018\u0003\u0018",
    "\u0003\u0019\u0003\u0019\u0007\u0019\u0135\n\u0019\f\u0019\u000e\u0019",
    "\u0138\u000b\u0019\u0003\u0019\u0003\u0019\u0003\u001a\u0003\u001a\u0003",
    "\u001a\u0005\u001a\u013f\n\u001a\u0003\u001a\u0005\u001a\u0142\n\u001a",
    "\u0003\u001b\u0003\u001b\u0005\u001b\u0146\n\u001b\u0003\u001c\u0003",
    "\u001c\u0003\u001c\u0005\u001c\u014b\n\u001c\u0003\u001c\u0003\u001c",
    "\u0003\u001c\u0005\u001c\u0150\n\u001c\u0003\u001d\u0003\u001d\u0003",
    "\u001d\u0003\u001e\u0003\u001e\u0003\u001e\u0003\u001e\u0003\u001e\u0005",
    "\u001e\u015a\n\u001e\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f",
    "\u0003\u001f\u0003 \u0003 \u0003 \u0003 \u0005 \u0165\n \u0003 \u0003",
    " \u0003 \u0003 \u0003 \u0005 \u016c\n \u0003 \u0005 \u016f\n \u0003",
    " \u0003 \u0005 \u0173\n \u0003!\u0003!\u0003!\u0005!\u0178\n!\u0003",
    "!\u0003!\u0005!\u017c\n!\u0003\"\u0003\"\u0003\"\u0003\"\u0003\"\u0006",
    "\"\u0183\n\"\r\"\u000e\"\u0184\u0003\"\u0005\"\u0188\n\"\u0003#\u0003",
    "#\u0003#\u0003#\u0003#\u0005#\u018f\n#\u0003$\u0003$\u0003$\u0003$\u0003",
    "$\u0003$\u0003$\u0006$\u0198\n$\r$\u000e$\u0199\u0003$\u0003$\u0003",
    "$\u0003$\u0003%\u0003%\u0003&\u0003&\u0003\'\u0003\'\u0003(\u0003(\u0003",
    "(\u0003)\u0003)\u0003)\u0002\u0002*\u0002\u0004\u0006\b\n\f\u000e\u0010",
    "\u0012\u0014\u0016\u0018\u001a\u001c\u001e \"$&(*,.02468:<>@BDFHJLN",
    "P\u0002\u000e\u0005\u0002\u0005\u000601CC\u0004\u0002\b\b11\u0003\u0002",
    "\u0013\u0014\u0004\u0002\u0006\u000601\u0004\u0002\u000e\u000e\u0018",
    "\u0018\u0004\u000211CC\u0006\u0002\b\b11AACC\u0005\u000211AACC\u0004",
    "\u000201CC\u0006\u000201AACCFF\u0003\u000267\u0003\u0002,.\u0002\u01c5",
    "\u0002U\u0003\u0002\u0002\u0002\u0004h\u0003\u0002\u0002\u0002\u0006",
    "j\u0003\u0002\u0002\u0002\bu\u0003\u0002\u0002\u0002\nw\u0003\u0002",
    "\u0002\u0002\f\u0082\u0003\u0002\u0002\u0002\u000e\u0092\u0003\u0002",
    "\u0002\u0002\u0010\u0096\u0003\u0002\u0002\u0002\u0012\u00ab\u0003\u0002",
    "\u0002\u0002\u0014\u00b1\u0003\u0002\u0002\u0002\u0016\u00b5\u0003\u0002",
    "\u0002\u0002\u0018\u00d4\u0003\u0002\u0002\u0002\u001a\u00e8\u0003\u0002",
    "\u0002\u0002\u001c\u00ef\u0003\u0002\u0002\u0002\u001e\u00f1\u0003\u0002",
    "\u0002\u0002 \u00f5\u0003\u0002\u0002\u0002\"\u0103\u0003\u0002\u0002",
    "\u0002$\u0105\u0003\u0002\u0002\u0002&\u010c\u0003\u0002\u0002\u0002",
    "(\u0110\u0003\u0002\u0002\u0002*\u0119\u0003\u0002\u0002\u0002,\u011b",
    "\u0003\u0002\u0002\u0002.\u0127\u0003\u0002\u0002\u00020\u0132\u0003",
    "\u0002\u0002\u00022\u013e\u0003\u0002\u0002\u00024\u0145\u0003\u0002",
    "\u0002\u00026\u0147\u0003\u0002\u0002\u00028\u0151\u0003\u0002\u0002",
    "\u0002:\u0154\u0003\u0002\u0002\u0002<\u015b\u0003\u0002\u0002\u0002",
    ">\u0160\u0003\u0002\u0002\u0002@\u017b\u0003\u0002\u0002\u0002B\u017d",
    "\u0003\u0002\u0002\u0002D\u0189\u0003\u0002\u0002\u0002F\u0190\u0003",
    "\u0002\u0002\u0002H\u019f\u0003\u0002\u0002\u0002J\u01a1\u0003\u0002",
    "\u0002\u0002L\u01a3\u0003\u0002\u0002\u0002N\u01a5\u0003\u0002\u0002",
    "\u0002P\u01a8\u0003\u0002\u0002\u0002RT\u0005\u0004\u0003\u0002SR\u0003",
    "\u0002\u0002\u0002TW\u0003\u0002\u0002\u0002US\u0003\u0002\u0002\u0002",
    "UV\u0003\u0002\u0002\u0002V\u0003\u0003\u0002\u0002\u0002WU\u0003\u0002",
    "\u0002\u0002Xi\u0005 \u0011\u0002Yi\u0005\"\u0012\u0002Zi\u0005L\'\u0002",
    "[i\u0005*\u0016\u0002\\i\u0005\u000e\b\u0002]i\u0005\u0018\r\u0002^",
    "i\u0005@!\u0002_i\u00052\u001a\u0002`i\u0005> \u0002ai\u0005B\"\u0002",
    "bi\u0005D#\u0002ci\u0005\u0006\u0004\u0002di\u0005\b\u0005\u0002ei\u0005",
    "P)\u0002fi\u0007H\u0002\u0002gi\u0005N(\u0002hX\u0003\u0002\u0002\u0002",
    "hY\u0003\u0002\u0002\u0002hZ\u0003\u0002\u0002\u0002h[\u0003\u0002\u0002",
    "\u0002h\\\u0003\u0002\u0002\u0002h]\u0003\u0002\u0002\u0002h^\u0003",
    "\u0002\u0002\u0002h_\u0003\u0002\u0002\u0002h`\u0003\u0002\u0002\u0002",
    "ha\u0003\u0002\u0002\u0002hb\u0003\u0002\u0002\u0002hc\u0003\u0002\u0002",
    "\u0002hd\u0003\u0002\u0002\u0002he\u0003\u0002\u0002\u0002hf\u0003\u0002",
    "\u0002\u0002hg\u0003\u0002\u0002\u0002i\u0005\u0003\u0002\u0002\u0002",
    "jk\u0007\u0003\u0002\u0002kn\u0005H%\u0002lm\u0007\u0004\u0002\u0002",
    "mo\t\u0002\u0002\u0002nl\u0003\u0002\u0002\u0002no\u0003\u0002\u0002",
    "\u0002oq\u0003\u0002\u0002\u0002pr\u0005&\u0014\u0002qp\u0003\u0002",
    "\u0002\u0002qr\u0003\u0002\u0002\u0002r\u0007\u0003\u0002\u0002\u0002",
    "sv\u0005\n\u0006\u0002tv\u0005\f\u0007\u0002us\u0003\u0002\u0002\u0002",
    "ut\u0003\u0002\u0002\u0002v\t\u0003\u0002\u0002\u0002wx\u0007\u0007",
    "\u0002\u0002x{\t\u0003\u0002\u0002yz\u00077\u0002\u0002z|\u00071\u0002",
    "\u0002{y\u0003\u0002\u0002\u0002|}\u0003\u0002\u0002\u0002}{\u0003\u0002",
    "\u0002\u0002}~\u0003\u0002\u0002\u0002~\u0080\u0003\u0002\u0002\u0002",
    "\u007f\u0081\u0005&\u0014\u0002\u0080\u007f\u0003\u0002\u0002\u0002",
    "\u0080\u0081\u0003\u0002\u0002\u0002\u0081\u000b\u0003\u0002\u0002\u0002",
    "\u0082\u0083\u0007\t\u0002\u0002\u0083\u0086\t\u0003\u0002\u0002\u0084",
    "\u0085\u00077\u0002\u0002\u0085\u0087\u0005H%\u0002\u0086\u0084\u0003",
    "\u0002\u0002\u0002\u0087\u0088\u0003\u0002\u0002\u0002\u0088\u0086\u0003",
    "\u0002\u0002\u0002\u0088\u0089\u0003\u0002\u0002\u0002\u0089\u008b\u0003",
    "\u0002\u0002\u0002\u008a\u008c\u0005&\u0014\u0002\u008b\u008a\u0003",
    "\u0002\u0002\u0002\u008b\u008c\u0003\u0002\u0002\u0002\u008c\r\u0003",
    "\u0002\u0002\u0002\u008d\u0093\u0005\u0016\f\u0002\u008e\u0090\u0005",
    "\u0010\t\u0002\u008f\u0091\u0005&\u0014\u0002\u0090\u008f\u0003\u0002",
    "\u0002\u0002\u0090\u0091\u0003\u0002\u0002\u0002\u0091\u0093\u0003\u0002",
    "\u0002\u0002\u0092\u008d\u0003\u0002\u0002\u0002\u0092\u008e\u0003\u0002",
    "\u0002\u0002\u0093\u000f\u0003\u0002\u0002\u0002\u0094\u0097\u0005\u0012",
    "\n\u0002\u0095\u0097\u0005\u0014\u000b\u0002\u0096\u0094\u0003\u0002",
    "\u0002\u0002\u0096\u0095\u0003\u0002\u0002\u0002\u0097\u0011\u0003\u0002",
    "\u0002\u0002\u0098\u0099\u0007\n\u0002\u0002\u0099\u009f\u00071\u0002",
    "\u0002\u009a\u009b\u0005J&\u0002\u009b\u009c\u0005H%\u0002\u009c\u009e",
    "\u0003\u0002\u0002\u0002\u009d\u009a\u0003\u0002\u0002\u0002\u009e\u00a1",
    "\u0003\u0002\u0002\u0002\u009f\u009d\u0003\u0002\u0002\u0002\u009f\u00a0",
    "\u0003\u0002\u0002\u0002\u00a0\u00ac\u0003\u0002\u0002\u0002\u00a1\u009f",
    "\u0003\u0002\u0002\u0002\u00a2\u00a8\u0007\u000b\u0002\u0002\u00a3\u00a4",
    "\u0005J&\u0002\u00a4\u00a5\u0005H%\u0002\u00a5\u00a7\u0003\u0002\u0002",
    "\u0002\u00a6\u00a3\u0003\u0002\u0002\u0002\u00a7\u00aa\u0003\u0002\u0002",
    "\u0002\u00a8\u00a6\u0003\u0002\u0002\u0002\u00a8\u00a9\u0003\u0002\u0002",
    "\u0002\u00a9\u00ac\u0003\u0002\u0002\u0002\u00aa\u00a8\u0003\u0002\u0002",
    "\u0002\u00ab\u0098\u0003\u0002\u0002\u0002\u00ab\u00a2\u0003\u0002\u0002",
    "\u0002\u00ac\u0013\u0003\u0002\u0002\u0002\u00ad\u00ae\u0007\f\u0002",
    "\u0002\u00ae\u00af\u0007C\u0002\u0002\u00af\u00b0\u0007\r\u0002\u0002",
    "\u00b0\u00b2\u00071\u0002\u0002\u00b1\u00ad\u0003\u0002\u0002\u0002",
    "\u00b2\u00b3\u0003\u0002\u0002\u0002\u00b3\u00b1\u0003\u0002\u0002\u0002",
    "\u00b3\u00b4\u0003\u0002\u0002\u0002\u00b4\u0015\u0003\u0002\u0002\u0002",
    "\u00b5\u00b6\u0007\u000e\u0002\u0002\u00b6\u00b7\u0007C\u0002\u0002",
    "\u00b7\u00b8\u0007\u000f\u0002\u0002\u00b8\u00c7\u0005&\u0014\u0002",
    "\u00b9\u00ba\u0007\u0010\u0002\u0002\u00ba\u00c3\u0007\u0011\u0002\u0002",
    "\u00bb\u00bc\u0007C\u0002\u0002\u00bc\u00bf\u0007E\u0002\u0002\u00bd",
    "\u00be\u0007\u0012\u0002\u0002\u00be\u00c0\u00071\u0002\u0002\u00bf",
    "\u00bd\u0003\u0002\u0002\u0002\u00c0\u00c1\u0003\u0002\u0002\u0002\u00c1",
    "\u00bf\u0003\u0002\u0002\u0002\u00c1\u00c2\u0003\u0002\u0002\u0002\u00c2",
    "\u00c4\u0003\u0002\u0002\u0002\u00c3\u00bb\u0003\u0002\u0002\u0002\u00c4",
    "\u00c5\u0003\u0002\u0002\u0002\u00c5\u00c3\u0003\u0002\u0002\u0002\u00c5",
    "\u00c6\u0003\u0002\u0002\u0002\u00c6\u00c8\u0003\u0002\u0002\u0002\u00c7",
    "\u00b9\u0003\u0002\u0002\u0002\u00c7\u00c8\u0003\u0002\u0002\u0002\u00c8",
    "\u00c9\u0003\u0002\u0002\u0002\u00c9\u00cd\t\u0004\u0002\u0002\u00ca",
    "\u00cc\u0005\u0004\u0003\u0002\u00cb\u00ca\u0003\u0002\u0002\u0002\u00cc",
    "\u00cf\u0003\u0002\u0002\u0002\u00cd\u00cb\u0003\u0002\u0002\u0002\u00cd",
    "\u00ce\u0003\u0002\u0002\u0002\u00ce\u00d0\u0003\u0002\u0002\u0002\u00cf",
    "\u00cd\u0003\u0002\u0002\u0002\u00d0\u00d1\u0007\u0015\u0002\u0002\u00d1",
    "\u00d2\u00071\u0002\u0002\u00d2\u00d3\u0007\u0016\u0002\u0002\u00d3",
    "\u0017\u0003\u0002\u0002\u0002\u00d4\u00d5\u00078\u0002\u0002\u00d5",
    "\u00d6\u0005\u001a\u000e\u0002\u00d6\u00d8\u0007\u0017\u0002\u0002\u00d7",
    "\u00d9\u0005\u0004\u0003\u0002\u00d8\u00d7\u0003\u0002\u0002\u0002\u00d9",
    "\u00da\u0003\u0002\u0002\u0002\u00da\u00d8\u0003\u0002\u0002\u0002\u00da",
    "\u00db\u0003\u0002\u0002\u0002\u00db\u00e2\u0003\u0002\u0002\u0002\u00dc",
    "\u00de\u00079\u0002\u0002\u00dd\u00df\u0005\u0004\u0003\u0002\u00de",
    "\u00dd\u0003\u0002\u0002\u0002\u00df\u00e0\u0003\u0002\u0002\u0002\u00e0",
    "\u00de\u0003\u0002\u0002\u0002\u00e0\u00e1\u0003\u0002\u0002\u0002\u00e1",
    "\u00e3\u0003\u0002\u0002\u0002\u00e2\u00dc\u0003\u0002\u0002\u0002\u00e2",
    "\u00e3\u0003\u0002\u0002\u0002\u00e3\u00e4\u0003\u0002\u0002\u0002\u00e4",
    "\u00e5\u0007@\u0002\u0002\u00e5\u0019\u0003\u0002\u0002\u0002\u00e6",
    "\u00e9\u0005\u001c\u000f\u0002\u00e7\u00e9\u0005\u001e\u0010\u0002\u00e8",
    "\u00e6\u0003\u0002\u0002\u0002\u00e8\u00e7\u0003\u0002\u0002\u0002\u00e9",
    "\u001b\u0003\u0002\u0002\u0002\u00ea\u00f0\u0005H%\u0002\u00eb\u00ec",
    "\u00071\u0002\u0002\u00ec\u00ed\u0007\u0004\u0002\u0002\u00ed\u00f0",
    "\t\u0005\u0002\u0002\u00ee\u00f0\u0007\b\u0002\u0002\u00ef\u00ea\u0003",
    "\u0002\u0002\u0002\u00ef\u00eb\u0003\u0002\u0002\u0002\u00ef\u00ee\u0003",
    "\u0002\u0002\u0002\u00f0\u001d\u0003\u0002\u0002\u0002\u00f1\u00f2\u0005",
    "\u001c\u000f\u0002\u00f2\u00f3\u0007:\u0002\u0002\u00f3\u00f4\u0005",
    "\u001c\u000f\u0002\u00f4\u001f\u0003\u0002\u0002\u0002\u00f5\u00f6\t",
    "\u0006\u0002\u0002\u00f6\u00f7\u0007C\u0002\u0002\u00f7\u00fc\u0007",
    "E\u0002\u0002\u00f8\u00f9\u0007\u0012\u0002\u0002\u00f9\u00fb\u0005",
    "H%\u0002\u00fa\u00f8\u0003\u0002\u0002\u0002\u00fb\u00fe\u0003\u0002",
    "\u0002\u0002\u00fc\u00fa\u0003\u0002\u0002\u0002\u00fc\u00fd\u0003\u0002",
    "\u0002\u0002\u00fd!\u0003\u0002\u0002\u0002\u00fe\u00fc\u0003\u0002",
    "\u0002\u0002\u00ff\u0100\u0005 \u0011\u0002\u0100\u0101\u0005$\u0013",
    "\u0002\u0101\u0104\u0003\u0002\u0002\u0002\u0102\u0104\u0005(\u0015",
    "\u0002\u0103\u00ff\u0003\u0002\u0002\u0002\u0103\u0102\u0003\u0002\u0002",
    "\u0002\u0104#\u0003\u0002\u0002\u0002\u0105\u0108\u0007\u0019\u0002",
    "\u0002\u0106\u0107\u0007\u0012\u0002\u0002\u0107\u0109\u00071\u0002",
    "\u0002\u0108\u0106\u0003\u0002\u0002\u0002\u0109\u010a\u0003\u0002\u0002",
    "\u0002\u010a\u0108\u0003\u0002\u0002\u0002\u010a\u010b\u0003\u0002\u0002",
    "\u0002\u010b%\u0003\u0002\u0002\u0002\u010c\u010d\u0007\u0019\u0002",
    "\u0002\u010d\u010e\u0007\u0012\u0002\u0002\u010e\u010f\u00071\u0002",
    "\u0002\u010f\'\u0003\u0002\u0002\u0002\u0110\u0111\u0007\u001a\u0002",
    "\u0002\u0111\u0112\u0007E\u0002\u0002\u0112\u0114\u0005H%\u0002\u0113",
    "\u0115\u0005&\u0014\u0002\u0114\u0113\u0003\u0002\u0002\u0002\u0114",
    "\u0115\u0003\u0002\u0002\u0002\u0115)\u0003\u0002\u0002\u0002\u0116",
    "\u011a\u0005,\u0017\u0002\u0117\u011a\u0005.\u0018\u0002\u0118\u011a",
    "\u00050\u0019\u0002\u0119\u0116\u0003\u0002\u0002\u0002\u0119\u0117",
    "\u0003\u0002\u0002\u0002\u0119\u0118\u0003\u0002\u0002\u0002\u011a+",
    "\u0003\u0002\u0002\u0002\u011b\u011c\u0007;\u0002\u0002\u011c\u011d",
    "\u00071\u0002\u0002\u011d\u011e\u0007>\u0002\u0002\u011e\u0122\u0007",
    "1\u0002\u0002\u011f\u0121\u0005\u0004\u0003\u0002\u0120\u011f\u0003",
    "\u0002\u0002\u0002\u0121\u0124\u0003\u0002\u0002\u0002\u0122\u0120\u0003",
    "\u0002\u0002\u0002\u0122\u0123\u0003\u0002\u0002\u0002\u0123\u0125\u0003",
    "\u0002\u0002\u0002\u0124\u0122\u0003\u0002\u0002\u0002\u0125\u0126\u0007",
    "@\u0002\u0002\u0126-\u0003\u0002\u0002\u0002\u0127\u0128\u0007<\u0002",
    "\u0002\u0128\u0129\t\u0007\u0002\u0002\u0129\u012d\u0007?\u0002\u0002",
    "\u012a\u012c\u0005\u0004\u0003\u0002\u012b\u012a\u0003\u0002\u0002\u0002",
    "\u012c\u012f\u0003\u0002\u0002\u0002\u012d\u012b\u0003\u0002\u0002\u0002",
    "\u012d\u012e\u0003\u0002\u0002\u0002\u012e\u0130\u0003\u0002\u0002\u0002",
    "\u012f\u012d\u0003\u0002\u0002\u0002\u0130\u0131\u0007@\u0002\u0002",
    "\u0131/\u0003\u0002\u0002\u0002\u0132\u0136\u0007=\u0002\u0002\u0133",
    "\u0135\u0005\u0004\u0003\u0002\u0134\u0133\u0003\u0002\u0002\u0002\u0135",
    "\u0138\u0003\u0002\u0002\u0002\u0136\u0134\u0003\u0002\u0002\u0002\u0136",
    "\u0137\u0003\u0002\u0002\u0002\u0137\u0139\u0003\u0002\u0002\u0002\u0138",
    "\u0136\u0003\u0002\u0002\u0002\u0139\u013a\u0007@\u0002\u0002\u013a",
    "1\u0003\u0002\u0002\u0002\u013b\u013f\u00054\u001b\u0002\u013c\u013f",
    "\u0005<\u001f\u0002\u013d\u013f\u0005:\u001e\u0002\u013e\u013b\u0003",
    "\u0002\u0002\u0002\u013e\u013c\u0003\u0002\u0002\u0002\u013e\u013d\u0003",
    "\u0002\u0002\u0002\u013f\u0141\u0003\u0002\u0002\u0002\u0140\u0142\u0005",
    "$\u0013\u0002\u0141\u0140\u0003\u0002\u0002\u0002\u0141\u0142\u0003",
    "\u0002\u0002\u0002\u01423\u0003\u0002\u0002\u0002\u0143\u0146\u0005",
    "6\u001c\u0002\u0144\u0146\u00058\u001d\u0002\u0145\u0143\u0003\u0002",
    "\u0002\u0002\u0145\u0144\u0003\u0002\u0002\u0002\u01465\u0003\u0002",
    "\u0002\u0002\u0147\u014a\u00072\u0002\u0002\u0148\u014b\u0005H%\u0002",
    "\u0149\u014b\u0007\b\u0002\u0002\u014a\u0148\u0003\u0002\u0002\u0002",
    "\u014a\u0149\u0003\u0002\u0002\u0002\u014b\u014c\u0003\u0002\u0002\u0002",
    "\u014c\u014f\u0005J&\u0002\u014d\u0150\u0005H%\u0002\u014e\u0150\u0007",
    "\b\u0002\u0002\u014f\u014d\u0003\u0002\u0002\u0002\u014f\u014e\u0003",
    "\u0002\u0002\u0002\u01507\u0003\u0002\u0002\u0002\u0151\u0152\u0007",
    "5\u0002\u0002\u0152\u0153\t\u0003\u0002\u0002\u01539\u0003\u0002\u0002",
    "\u0002\u0154\u0155\u0007\u001b\u0002\u0002\u0155\u0156\t\b\u0002\u0002",
    "\u0156\u0157\u0005J&\u0002\u0157\u0159\t\t\u0002\u0002\u0158\u015a\u0007",
    "4\u0002\u0002\u0159\u0158\u0003\u0002\u0002\u0002\u0159\u015a\u0003",
    "\u0002\u0002\u0002\u015a;\u0003\u0002\u0002\u0002\u015b\u015c\u0007",
    "\u0003\u0002\u0002\u015c\u015d\u00071\u0002\u0002\u015d\u015e\u0007",
    "1\u0002\u0002\u015e\u015f\u00073\u0002\u0002\u015f=\u0003\u0002\u0002",
    "\u0002\u0160\u0161\u0007\u001c\u0002\u0002\u0161\u0164\u00071\u0002",
    "\u0002\u0162\u0163\u0007\u0004\u0002\u0002\u0163\u0165\t\n\u0002\u0002",
    "\u0164\u0162\u0003\u0002\u0002\u0002\u0164\u0165\u0003\u0002\u0002\u0002",
    "\u0165\u0166\u0003\u0002\u0002\u0002\u0166\u0172\u0007\u0017\u0002\u0002",
    "\u0167\u016e\u0007\u001d\u0002\u0002\u0168\u016b\u0005H%\u0002\u0169",
    "\u016a\u0007\u0004\u0002\u0002\u016a\u016c\u0007C\u0002\u0002\u016b",
    "\u0169\u0003\u0002\u0002\u0002\u016b\u016c\u0003\u0002\u0002\u0002\u016c",
    "\u016f\u0003\u0002\u0002\u0002\u016d\u016f\u0007\b\u0002\u0002\u016e",
    "\u0168\u0003\u0002\u0002\u0002\u016e\u016d\u0003\u0002\u0002\u0002\u016f",
    "\u0170\u0003\u0002\u0002\u0002\u0170\u0173\u0007\u001e\u0002\u0002\u0171",
    "\u0173\u0007\u001f\u0002\u0002\u0172\u0167\u0003\u0002\u0002\u0002\u0172",
    "\u0171\u0003\u0002\u0002\u0002\u0173?\u0003\u0002\u0002\u0002\u0174",
    "\u0177\u0007 \u0002\u0002\u0175\u0178\u0005H%\u0002\u0176\u0178\u0007",
    "\b\u0002\u0002\u0177\u0175\u0003\u0002\u0002\u0002\u0177\u0176\u0003",
    "\u0002\u0002\u0002\u0178\u017c\u0003\u0002\u0002\u0002\u0179\u017c\u0007",
    "!\u0002\u0002\u017a\u017c\u0007\"\u0002\u0002\u017b\u0174\u0003\u0002",
    "\u0002\u0002\u017b\u0179\u0003\u0002\u0002\u0002\u017b\u017a\u0003\u0002",
    "\u0002\u0002\u017cA\u0003\u0002\u0002\u0002\u017d\u017e\u0007#\u0002",
    "\u0002\u017e\u017f\u00070\u0002\u0002\u017f\u0187\u0007$\u0002\u0002",
    "\u0180\u0182\u0007%\u0002\u0002\u0181\u0183\u00071\u0002\u0002\u0182",
    "\u0181\u0003\u0002\u0002\u0002\u0183\u0184\u0003\u0002\u0002\u0002\u0184",
    "\u0182\u0003\u0002\u0002\u0002\u0184\u0185\u0003\u0002\u0002\u0002\u0185",
    "\u0186\u0003\u0002\u0002\u0002\u0186\u0188\u0007&\u0002\u0002\u0187",
    "\u0180\u0003\u0002\u0002\u0002\u0187\u0188\u0003\u0002\u0002\u0002\u0188",
    "C\u0003\u0002\u0002\u0002\u0189\u018a\u0007\u000e\u0002\u0002\u018a",
    "\u018b\u0007C\u0002\u0002\u018b\u018c\u0007\'\u0002\u0002\u018c\u018e",
    "\u0005$\u0013\u0002\u018d\u018f\u0005F$\u0002\u018e\u018d\u0003\u0002",
    "\u0002\u0002\u018e\u018f\u0003\u0002\u0002\u0002\u018fE\u0003\u0002",
    "\u0002\u0002\u0190\u0197\u0007(\u0002\u0002\u0191\u0192\u0007)\u0002",
    "\u0002\u0192\u0193\u00070\u0002\u0002\u0193\u0194\u0007\u0017\u0002",
    "\u0002\u0194\u0195\u0007E\u0002\u0002\u0195\u0196\u0007\u0012\u0002",
    "\u0002\u0196\u0198\u0005H%\u0002\u0197\u0191\u0003\u0002\u0002\u0002",
    "\u0198\u0199\u0003\u0002\u0002\u0002\u0199\u0197\u0003\u0002\u0002\u0002",
    "\u0199\u019a\u0003\u0002\u0002\u0002\u019a\u019b\u0003\u0002\u0002\u0002",
    "\u019b\u019c\u0007\u0015\u0002\u0002\u019c\u019d\u00071\u0002\u0002",
    "\u019d\u019e\u0007*\u0002\u0002\u019eG\u0003\u0002\u0002\u0002\u019f",
    "\u01a0\t\u000b\u0002\u0002\u01a0I\u0003\u0002\u0002\u0002\u01a1\u01a2",
    "\t\f\u0002\u0002\u01a2K\u0003\u0002\u0002\u0002\u01a3\u01a4\u0007+\u0002",
    "\u0002\u01a4M\u0003\u0002\u0002\u0002\u01a5\u01a6\t\r\u0002\u0002\u01a6",
    "\u01a7\u00070\u0002\u0002\u01a7O\u0003\u0002\u0002\u0002\u01a8\u01a9",
    "\u0007/\u0002\u0002\u01a9Q\u0003\u0002\u0002\u00023Uhnqu}\u0080\u0088",
    "\u008b\u0090\u0092\u0096\u009f\u00a8\u00ab\u00b3\u00c1\u00c5\u00c7\u00cd",
    "\u00da\u00e0\u00e2\u00e8\u00ef\u00fc\u0103\u010a\u0114\u0119\u0122\u012d",
    "\u0136\u013e\u0141\u0145\u014a\u014f\u0159\u0164\u016b\u016e\u0172\u0177",
    "\u017b\u0184\u0187\u018e\u0199"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'\u592B'", "'\u4E4B'", "'\u5176\u9918'", "'\u9577'", 
                     "'\u929C'", "'\u5176'", "'\u5145'", "'\u65BD'", "'\u65BD\u5176'", 
                     "'\u53D6'", "'\u4EE5\u65BD'", "'\u543E\u6709'", "'\u8853'", 
                     "'\u6B32\u884C\u662F\u8853'", "'\u5FC5\u5148\u5F97'", 
                     "'\u66F0'", "'\u662F\u8853\u66F0'", "'\u4E43\u884C\u662F\u8853\u66F0'", 
                     "'\u662F\u8B02'", "'\u4E4B\u8853\u4E5F'", "'\u8005'", 
                     "'\u4ECA\u6709'", "'\u540D\u4E4B'", "'\u6709'", "'\u9664'", 
                     "'\u6614\u4E4B'", "'\u4ECA'", "'\u662F\u77E3'", "'\u4ECA\u4E0D\u5FA9\u5B58\u77E3'", 
                     "'\u4E43\u5F97'", "'\u4E43\u6B78\u7A7A\u7121'", "'\u4E43\u5F97\u77E3'", 
                     "'\u543E\u5617\u89C0'", "'\u4E4B\u66F8'", "'\u65B9\u609F'", 
                     "'\u4E4B\u7FA9'", "'\u7269'", "'\u5176\u7269\u5982\u662F'", 
                     "'\u7269\u4E4B'", "'\u4E4B\u7269\u4E5F'", "'\u66F8\u4E4B'", 
                     "'\u6CE8\u66F0'", "'\u758F\u66F0'", "'\u6279\u66F0'", 
                     "'\u566B'", null, null, null, null, "'\u6240\u9918\u5E7E\u4F55'", 
                     "'\u8B8A'", "'\u65BC'", "'\u4EE5'", "'\u82E5'", "'\u82E5\u975E'", 
                     null, "'\u51E1'", "'\u70BA\u662F'", "'\u6046\u70BA\u662F'", 
                     "'\u4E2D\u4E4B'", "'\u904D'", null, null, null, null, 
                     null, null, null, null, "'\u4E43\u6B62'" ];

var symbolicNames = [ null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, "STRING_LITERAL", "IDENTIFIER", "ARITH_BINARY_OP", 
                      "LOGIC_BINARY_OP", "POST_MOD_MATH_OP", "UNARY_OP", 
                      "PREPOSITION_YU", "PREPOSITION_YI", "IF", "ELSE", 
                      "IF_LOGIC_OP", "FOR_START_ARR", "FOR_START_ENUM", 
                      "FOR_START_WHILE", "FOR_MID_ARR", "FOR_MID_ENUM", 
                      "FOR_IF_END", "FLOAT_NUM", "FLOAT_NUM_KEYWORDS", "INT_NUM", 
                      "INT_NUM_KEYWORDS", "TYPE", "BOOL_VALUE", "WS", "BREAK" ];

var ruleNames =  [ "program", "statement", "pick_up_statement", "array_statement", 
                   "array_cat_statement", "array_push_statement", "function_statement", 
                   "function_call_statement", "function_plain_call", "function_nested_call", 
                   "function_define_statement", "if_statement", "if_expression", 
                   "unary_if_expression", "binary_if_expression", "declare_statement", 
                   "define_statement", "reference_multi_statement", "reference_single_statement", 
                   "init_define_statement", "for_statement", "for_arr_statement", 
                   "for_enum_statement", "for_while_statement", "math_statement", 
                   "arith_math_statement", "arith_binary_math", "arith_unary_math", 
                   "mod_math_statement", "logic_math_statement", "assign_statement", 
                   "return_statement", "import_statement", "object_statement", 
                   "object_define_statement", "data", "preposition", "print_statement", 
                   "comment", "clean_statement" ];

function wenyanParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

wenyanParser.prototype = Object.create(antlr4.Parser.prototype);
wenyanParser.prototype.constructor = wenyanParser;

Object.defineProperty(wenyanParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

wenyanParser.EOF = antlr4.Token.EOF;
wenyanParser.T__0 = 1;
wenyanParser.T__1 = 2;
wenyanParser.T__2 = 3;
wenyanParser.T__3 = 4;
wenyanParser.T__4 = 5;
wenyanParser.T__5 = 6;
wenyanParser.T__6 = 7;
wenyanParser.T__7 = 8;
wenyanParser.T__8 = 9;
wenyanParser.T__9 = 10;
wenyanParser.T__10 = 11;
wenyanParser.T__11 = 12;
wenyanParser.T__12 = 13;
wenyanParser.T__13 = 14;
wenyanParser.T__14 = 15;
wenyanParser.T__15 = 16;
wenyanParser.T__16 = 17;
wenyanParser.T__17 = 18;
wenyanParser.T__18 = 19;
wenyanParser.T__19 = 20;
wenyanParser.T__20 = 21;
wenyanParser.T__21 = 22;
wenyanParser.T__22 = 23;
wenyanParser.T__23 = 24;
wenyanParser.T__24 = 25;
wenyanParser.T__25 = 26;
wenyanParser.T__26 = 27;
wenyanParser.T__27 = 28;
wenyanParser.T__28 = 29;
wenyanParser.T__29 = 30;
wenyanParser.T__30 = 31;
wenyanParser.T__31 = 32;
wenyanParser.T__32 = 33;
wenyanParser.T__33 = 34;
wenyanParser.T__34 = 35;
wenyanParser.T__35 = 36;
wenyanParser.T__36 = 37;
wenyanParser.T__37 = 38;
wenyanParser.T__38 = 39;
wenyanParser.T__39 = 40;
wenyanParser.T__40 = 41;
wenyanParser.T__41 = 42;
wenyanParser.T__42 = 43;
wenyanParser.T__43 = 44;
wenyanParser.T__44 = 45;
wenyanParser.STRING_LITERAL = 46;
wenyanParser.IDENTIFIER = 47;
wenyanParser.ARITH_BINARY_OP = 48;
wenyanParser.LOGIC_BINARY_OP = 49;
wenyanParser.POST_MOD_MATH_OP = 50;
wenyanParser.UNARY_OP = 51;
wenyanParser.PREPOSITION_YU = 52;
wenyanParser.PREPOSITION_YI = 53;
wenyanParser.IF = 54;
wenyanParser.ELSE = 55;
wenyanParser.IF_LOGIC_OP = 56;
wenyanParser.FOR_START_ARR = 57;
wenyanParser.FOR_START_ENUM = 58;
wenyanParser.FOR_START_WHILE = 59;
wenyanParser.FOR_MID_ARR = 60;
wenyanParser.FOR_MID_ENUM = 61;
wenyanParser.FOR_IF_END = 62;
wenyanParser.FLOAT_NUM = 63;
wenyanParser.FLOAT_NUM_KEYWORDS = 64;
wenyanParser.INT_NUM = 65;
wenyanParser.INT_NUM_KEYWORDS = 66;
wenyanParser.TYPE = 67;
wenyanParser.BOOL_VALUE = 68;
wenyanParser.WS = 69;
wenyanParser.BREAK = 70;

wenyanParser.RULE_program = 0;
wenyanParser.RULE_statement = 1;
wenyanParser.RULE_pick_up_statement = 2;
wenyanParser.RULE_array_statement = 3;
wenyanParser.RULE_array_cat_statement = 4;
wenyanParser.RULE_array_push_statement = 5;
wenyanParser.RULE_function_statement = 6;
wenyanParser.RULE_function_call_statement = 7;
wenyanParser.RULE_function_plain_call = 8;
wenyanParser.RULE_function_nested_call = 9;
wenyanParser.RULE_function_define_statement = 10;
wenyanParser.RULE_if_statement = 11;
wenyanParser.RULE_if_expression = 12;
wenyanParser.RULE_unary_if_expression = 13;
wenyanParser.RULE_binary_if_expression = 14;
wenyanParser.RULE_declare_statement = 15;
wenyanParser.RULE_define_statement = 16;
wenyanParser.RULE_reference_multi_statement = 17;
wenyanParser.RULE_reference_single_statement = 18;
wenyanParser.RULE_init_define_statement = 19;
wenyanParser.RULE_for_statement = 20;
wenyanParser.RULE_for_arr_statement = 21;
wenyanParser.RULE_for_enum_statement = 22;
wenyanParser.RULE_for_while_statement = 23;
wenyanParser.RULE_math_statement = 24;
wenyanParser.RULE_arith_math_statement = 25;
wenyanParser.RULE_arith_binary_math = 26;
wenyanParser.RULE_arith_unary_math = 27;
wenyanParser.RULE_mod_math_statement = 28;
wenyanParser.RULE_logic_math_statement = 29;
wenyanParser.RULE_assign_statement = 30;
wenyanParser.RULE_return_statement = 31;
wenyanParser.RULE_import_statement = 32;
wenyanParser.RULE_object_statement = 33;
wenyanParser.RULE_object_define_statement = 34;
wenyanParser.RULE_data = 35;
wenyanParser.RULE_preposition = 36;
wenyanParser.RULE_print_statement = 37;
wenyanParser.RULE_comment = 38;
wenyanParser.RULE_clean_statement = 39;


function ProgramContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = wenyanParser.RULE_program;
    return this;
}

ProgramContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ProgramContext.prototype.constructor = ProgramContext;

ProgramContext.prototype.statement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StatementContext);
    } else {
        return this.getTypedRuleContext(StatementContext,i);
    }
};

ProgramContext.prototype.enterRule = function(listener) {
    if(listener instanceof wenyanListener ) {
        listener.enterProgram(this);
	}
};

ProgramContext.prototype.exitRule = function(listener) {
    if(listener instanceof wenyanListener ) {
        listener.exitProgram(this);
	}
};




wenyanParser.ProgramContext = ProgramContext;

wenyanParser.prototype.program = function() {

    var localctx = new ProgramContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, wenyanParser.RULE_program);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 83;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << wenyanParser.T__0) | (1 << wenyanParser.T__4) | (1 << wenyanParser.T__6) | (1 << wenyanParser.T__7) | (1 << wenyanParser.T__8) | (1 << wenyanParser.T__9) | (1 << wenyanParser.T__11) | (1 << wenyanParser.T__21) | (1 << wenyanParser.T__23) | (1 << wenyanParser.T__24) | (1 << wenyanParser.T__25) | (1 << wenyanParser.T__29) | (1 << wenyanParser.T__30))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (wenyanParser.T__31 - 32)) | (1 << (wenyanParser.T__32 - 32)) | (1 << (wenyanParser.T__40 - 32)) | (1 << (wenyanParser.T__41 - 32)) | (1 << (wenyanParser.T__42 - 32)) | (1 << (wenyanParser.T__43 - 32)) | (1 << (wenyanParser.T__44 - 32)) | (1 << (wenyanParser.ARITH_BINARY_OP - 32)) | (1 << (wenyanParser.UNARY_OP - 32)) | (1 << (wenyanParser.IF - 32)) | (1 << (wenyanParser.FOR_START_ARR - 32)) | (1 << (wenyanParser.FOR_START_ENUM - 32)) | (1 << (wenyanParser.FOR_START_WHILE - 32)))) !== 0) || _la===wenyanParser.BREAK) {
            this.state = 80;
            this.statement();
            this.state = 85;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function StatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = wenyanParser.RULE_statement;
    return this;
}

StatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StatementContext.prototype.constructor = StatementContext;

StatementContext.prototype.declare_statement = function() {
    return this.getTypedRuleContext(Declare_statementContext,0);
};

StatementContext.prototype.define_statement = function() {
    return this.getTypedRuleContext(Define_statementContext,0);
};

StatementContext.prototype.print_statement = function() {
    return this.getTypedRuleContext(Print_statementContext,0);
};

StatementContext.prototype.for_statement = function() {
    return this.getTypedRuleContext(For_statementContext,0);
};

StatementContext.prototype.function_statement = function() {
    return this.getTypedRuleContext(Function_statementContext,0);
};

StatementContext.prototype.if_statement = function() {
    return this.getTypedRuleContext(If_statementContext,0);
};

StatementContext.prototype.return_statement = function() {
    return this.getTypedRuleContext(Return_statementContext,0);
};

StatementContext.prototype.math_statement = function() {
    return this.getTypedRuleContext(Math_statementContext,0);
};

StatementContext.prototype.assign_statement = function() {
    return this.getTypedRuleContext(Assign_statementContext,0);
};

StatementContext.prototype.import_statement = function() {
    return this.getTypedRuleContext(Import_statementContext,0);
};

StatementContext.prototype.object_statement = function() {
    return this.getTypedRuleContext(Object_statementContext,0);
};

StatementContext.prototype.pick_up_statement = function() {
    return this.getTypedRuleContext(Pick_up_statementContext,0);
};

StatementContext.prototype.array_statement = function() {
    return this.getTypedRuleContext(Array_statementContext,0);
};

StatementContext.prototype.clean_statement = function() {
    return this.getTypedRuleContext(Clean_statementContext,0);
};

StatementContext.prototype.BREAK = function() {
    return this.getToken(wenyanParser.BREAK, 0);
};

StatementContext.prototype.comment = function() {
    return this.getTypedRuleContext(CommentContext,0);
};

StatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof wenyanListener ) {
        listener.enterStatement(this);
	}
};

StatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof wenyanListener ) {
        listener.exitStatement(this);
	}
};




wenyanParser.StatementContext = StatementContext;

wenyanParser.prototype.statement = function() {

    var localctx = new StatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, wenyanParser.RULE_statement);
    try {
        this.state = 102;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 86;
            this.declare_statement();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 87;
            this.define_statement();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 88;
            this.print_statement();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 89;
            this.for_statement();
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 90;
            this.function_statement();
            break;

        case 6:
            this.enterOuterAlt(localctx, 6);
            this.state = 91;
            this.if_statement();
            break;

        case 7:
            this.enterOuterAlt(localctx, 7);
            this.state = 92;
            this.return_statement();
            break;

        case 8:
            this.enterOuterAlt(localctx, 8);
            this.state = 93;
            this.math_statement();
            break;

        case 9:
            this.enterOuterAlt(localctx, 9);
            this.state = 94;
            this.assign_statement();
            break;

        case 10:
            this.enterOuterAlt(localctx, 10);
            this.state = 95;
            this.import_statement();
            break;

        case 11:
            this.enterOuterAlt(localctx, 11);
            this.state = 96;
            this.object_statement();
            break;

        case 12:
            this.enterOuterAlt(localctx, 12);
            this.state = 97;
            this.pick_up_statement();
            break;

        case 13:
            this.enterOuterAlt(localctx, 13);
            this.state = 98;
            this.array_statement();
            break;

        case 14:
            this.enterOuterAlt(localctx, 14);
            this.state = 99;
            this.clean_statement();
            break;

        case 15:
            this.enterOuterAlt(localctx, 15);
            this.state = 100;
            this.match(wenyanParser.BREAK);
            break;

        case 16:
            this.enterOuterAlt(localctx, 16);
            this.state = 101;
            this.comment();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Pick_up_statementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = wenyanParser.RULE_pick_up_statement;
    return this;
}

Pick_up_statementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Pick_up_statementContext.prototype.constructor = Pick_up_statementContext;

Pick_up_statementContext.prototype.data = function() {
    return this.getTypedRuleContext(DataContext,0);
};

Pick_up_statementContext.prototype.reference_single_statement = function() {
    return this.getTypedRuleContext(Reference_single_statementContext,0);
};

Pick_up_statementContext.prototype.STRING_LITERAL = function() {
    return this.getToken(wenyanParser.STRING_LITERAL, 0);
};

Pick_up_statementContext.prototype.INT_NUM = function() {
    return this.getToken(wenyanParser.INT_NUM, 0);
};

Pick_up_statementContext.prototype.IDENTIFIER = function() {
    return this.getToken(wenyanParser.IDENTIFIER, 0);
};

Pick_up_statementContext.prototype.enterRule = function(listener) {
    if(listener instanceof wenyanListener ) {
        listener.enterPick_up_statement(this);
	}
};

Pick_up_statementContext.prototype.exitRule = function(listener) {
    if(listener instanceof wenyanListener ) {
        listener.exitPick_up_statement(this);
	}
};




wenyanParser.Pick_up_statementContext = Pick_up_statementContext;

wenyanParser.prototype.pick_up_statement = function() {

    var localctx = new Pick_up_statementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, wenyanParser.RULE_pick_up_statement);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 104;
        this.match(wenyanParser.T__0);
        this.state = 105;
        this.data();
        this.state = 108;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===wenyanParser.T__1) {
            this.state = 106;
            this.match(wenyanParser.T__1);
            this.state = 107;
            _la = this._input.LA(1);
            if(!(_la===wenyanParser.T__2 || _la===wenyanParser.T__3 || ((((_la - 46)) & ~0x1f) == 0 && ((1 << (_la - 46)) & ((1 << (wenyanParser.STRING_LITERAL - 46)) | (1 << (wenyanParser.IDENTIFIER - 46)) | (1 << (wenyanParser.INT_NUM - 46)))) !== 0))) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
        }

        this.state = 111;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===wenyanParser.T__22) {
            this.state = 110;
            this.reference_single_statement();
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Array_statementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = wenyanParser.RULE_array_statement;
    return this;
}

Array_statementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Array_statementContext.prototype.constructor = Array_statementContext;

Array_statementContext.prototype.array_cat_statement = function() {
    return this.getTypedRuleContext(Array_cat_statementContext,0);
};

Array_statementContext.prototype.array_push_statement = function() {
    return this.getTypedRuleContext(Array_push_statementContext,0);
};

Array_statementContext.prototype.enterRule = function(listener) {
    if(listener instanceof wenyanListener ) {
        listener.enterArray_statement(this);
	}
};

Array_statementContext.prototype.exitRule = function(listener) {
    if(listener instanceof wenyanListener ) {
        listener.exitArray_statement(this);
	}
};




wenyanParser.Array_statementContext = Array_statementContext;

wenyanParser.prototype.array_statement = function() {

    var localctx = new Array_statementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, wenyanParser.RULE_array_statement);
    try {
        this.state = 115;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case wenyanParser.T__4:
            this.enterOuterAlt(localctx, 1);
            this.state = 113;
            this.array_cat_statement();
            break;
        case wenyanParser.T__6:
            this.enterOuterAlt(localctx, 2);
            this.state = 114;
            this.array_push_statement();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Array_cat_statementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = wenyanParser.RULE_array_cat_statement;
    return this;
}

Array_cat_statementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Array_cat_statementContext.prototype.constructor = Array_cat_statementContext;

Array_cat_statementContext.prototype.IDENTIFIER = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(wenyanParser.IDENTIFIER);
    } else {
        return this.getToken(wenyanParser.IDENTIFIER, i);
    }
};


Array_cat_statementContext.prototype.PREPOSITION_YI = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(wenyanParser.PREPOSITION_YI);
    } else {
        return this.getToken(wenyanParser.PREPOSITION_YI, i);
    }
};


Array_cat_statementContext.prototype.reference_single_statement = function() {
    return this.getTypedRuleContext(Reference_single_statementContext,0);
};

Array_cat_statementContext.prototype.enterRule = function(listener) {
    if(listener instanceof wenyanListener ) {
        listener.enterArray_cat_statement(this);
	}
};

Array_cat_statementContext.prototype.exitRule = function(listener) {
    if(listener instanceof wenyanListener ) {
        listener.exitArray_cat_statement(this);
	}
};




wenyanParser.Array_cat_statementContext = Array_cat_statementContext;

wenyanParser.prototype.array_cat_statement = function() {

    var localctx = new Array_cat_statementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, wenyanParser.RULE_array_cat_statement);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 117;
        this.match(wenyanParser.T__4);
        this.state = 118;
        _la = this._input.LA(1);
        if(!(_la===wenyanParser.T__5 || _la===wenyanParser.IDENTIFIER)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
        this.state = 121; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 119;
            this.match(wenyanParser.PREPOSITION_YI);
            this.state = 120;
            this.match(wenyanParser.IDENTIFIER);
            this.state = 123; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===wenyanParser.PREPOSITION_YI);
        this.state = 126;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===wenyanParser.T__22) {
            this.state = 125;
            this.reference_single_statement();
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Array_push_statementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = wenyanParser.RULE_array_push_statement;
    return this;
}

Array_push_statementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Array_push_statementContext.prototype.constructor = Array_push_statementContext;

Array_push_statementContext.prototype.IDENTIFIER = function() {
    return this.getToken(wenyanParser.IDENTIFIER, 0);
};

Array_push_statementContext.prototype.PREPOSITION_YI = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(wenyanParser.PREPOSITION_YI);
    } else {
        return this.getToken(wenyanParser.PREPOSITION_YI, i);
    }
};


Array_push_statementContext.prototype.data = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(DataContext);
    } else {
        return this.getTypedRuleContext(DataContext,i);
    }
};

Array_push_statementContext.prototype.reference_single_statement = function() {
    return this.getTypedRuleContext(Reference_single_statementContext,0);
};

Array_push_statementContext.prototype.enterRule = function(listener) {
    if(listener instanceof wenyanListener ) {
        listener.enterArray_push_statement(this);
	}
};

Array_push_statementContext.prototype.exitRule = function(listener) {
    if(listener instanceof wenyanListener ) {
        listener.exitArray_push_statement(this);
	}
};




wenyanParser.Array_push_statementContext = Array_push_statementContext;

wenyanParser.prototype.array_push_statement = function() {

    var localctx = new Array_push_statementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, wenyanParser.RULE_array_push_statement);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 128;
        this.match(wenyanParser.T__6);
        this.state = 129;
        _la = this._input.LA(1);
        if(!(_la===wenyanParser.T__5 || _la===wenyanParser.IDENTIFIER)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
        this.state = 132; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 130;
            this.match(wenyanParser.PREPOSITION_YI);
            this.state = 131;
            this.data();
            this.state = 134; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===wenyanParser.PREPOSITION_YI);
        this.state = 137;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===wenyanParser.T__22) {
            this.state = 136;
            this.reference_single_statement();
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Function_statementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = wenyanParser.RULE_function_statement;
    return this;
}

Function_statementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Function_statementContext.prototype.constructor = Function_statementContext;

Function_statementContext.prototype.function_define_statement = function() {
    return this.getTypedRuleContext(Function_define_statementContext,0);
};

Function_statementContext.prototype.function_call_statement = function() {
    return this.getTypedRuleContext(Function_call_statementContext,0);
};

Function_statementContext.prototype.reference_single_statement = function() {
    return this.getTypedRuleContext(Reference_single_statementContext,0);
};

Function_statementContext.prototype.enterRule = function(listener) {
    if(listener instanceof wenyanListener ) {
        listener.enterFunction_statement(this);
	}
};

Function_statementContext.prototype.exitRule = function(listener) {
    if(listener instanceof wenyanListener ) {
        listener.exitFunction_statement(this);
	}
};




wenyanParser.Function_statementContext = Function_statementContext;

wenyanParser.prototype.function_statement = function() {

    var localctx = new Function_statementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, wenyanParser.RULE_function_statement);
    var _la = 0; // Token type
    try {
        this.state = 144;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case wenyanParser.T__11:
            this.enterOuterAlt(localctx, 1);
            this.state = 139;
            this.function_define_statement();
            break;
        case wenyanParser.T__7:
        case wenyanParser.T__8:
        case wenyanParser.T__9:
            this.enterOuterAlt(localctx, 2);
            this.state = 140;
            this.function_call_statement();
            this.state = 142;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===wenyanParser.T__22) {
                this.state = 141;
                this.reference_single_statement();
            }

            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Function_call_statementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = wenyanParser.RULE_function_call_statement;
    return this;
}

Function_call_statementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Function_call_statementContext.prototype.constructor = Function_call_statementContext;

Function_call_statementContext.prototype.function_plain_call = function() {
    return this.getTypedRuleContext(Function_plain_callContext,0);
};

Function_call_statementContext.prototype.function_nested_call = function() {
    return this.getTypedRuleContext(Function_nested_callContext,0);
};

Function_call_statementContext.prototype.enterRule = function(listener) {
    if(listener instanceof wenyanListener ) {
        listener.enterFunction_call_statement(this);
	}
};

Function_call_statementContext.prototype.exitRule = function(listener) {
    if(listener instanceof wenyanListener ) {
        listener.exitFunction_call_statement(this);
	}
};




wenyanParser.Function_call_statementContext = Function_call_statementContext;

wenyanParser.prototype.function_call_statement = function() {

    var localctx = new Function_call_statementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, wenyanParser.RULE_function_call_statement);
    try {
        this.state = 148;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case wenyanParser.T__7:
        case wenyanParser.T__8:
            this.enterOuterAlt(localctx, 1);
            this.state = 146;
            this.function_plain_call();
            break;
        case wenyanParser.T__9:
            this.enterOuterAlt(localctx, 2);
            this.state = 147;
            this.function_nested_call();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Function_plain_callContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = wenyanParser.RULE_function_plain_call;
    return this;
}

Function_plain_callContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Function_plain_callContext.prototype.constructor = Function_plain_callContext;

Function_plain_callContext.prototype.IDENTIFIER = function() {
    return this.getToken(wenyanParser.IDENTIFIER, 0);
};

Function_plain_callContext.prototype.preposition = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(PrepositionContext);
    } else {
        return this.getTypedRuleContext(PrepositionContext,i);
    }
};

Function_plain_callContext.prototype.data = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(DataContext);
    } else {
        return this.getTypedRuleContext(DataContext,i);
    }
};

Function_plain_callContext.prototype.enterRule = function(listener) {
    if(listener instanceof wenyanListener ) {
        listener.enterFunction_plain_call(this);
	}
};

Function_plain_callContext.prototype.exitRule = function(listener) {
    if(listener instanceof wenyanListener ) {
        listener.exitFunction_plain_call(this);
	}
};




wenyanParser.Function_plain_callContext = Function_plain_callContext;

wenyanParser.prototype.function_plain_call = function() {

    var localctx = new Function_plain_callContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, wenyanParser.RULE_function_plain_call);
    var _la = 0; // Token type
    try {
        this.state = 169;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case wenyanParser.T__7:
            this.enterOuterAlt(localctx, 1);
            this.state = 150;
            this.match(wenyanParser.T__7);
            this.state = 151;
            this.match(wenyanParser.IDENTIFIER);
            this.state = 157;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===wenyanParser.PREPOSITION_YU || _la===wenyanParser.PREPOSITION_YI) {
                this.state = 152;
                this.preposition();
                this.state = 153;
                this.data();
                this.state = 159;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            break;
        case wenyanParser.T__8:
            this.enterOuterAlt(localctx, 2);
            this.state = 160;
            this.match(wenyanParser.T__8);
            this.state = 166;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===wenyanParser.PREPOSITION_YU || _la===wenyanParser.PREPOSITION_YI) {
                this.state = 161;
                this.preposition();
                this.state = 162;
                this.data();
                this.state = 168;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Function_nested_callContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = wenyanParser.RULE_function_nested_call;
    return this;
}

Function_nested_callContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Function_nested_callContext.prototype.constructor = Function_nested_callContext;

Function_nested_callContext.prototype.INT_NUM = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(wenyanParser.INT_NUM);
    } else {
        return this.getToken(wenyanParser.INT_NUM, i);
    }
};


Function_nested_callContext.prototype.IDENTIFIER = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(wenyanParser.IDENTIFIER);
    } else {
        return this.getToken(wenyanParser.IDENTIFIER, i);
    }
};


Function_nested_callContext.prototype.enterRule = function(listener) {
    if(listener instanceof wenyanListener ) {
        listener.enterFunction_nested_call(this);
	}
};

Function_nested_callContext.prototype.exitRule = function(listener) {
    if(listener instanceof wenyanListener ) {
        listener.exitFunction_nested_call(this);
	}
};




wenyanParser.Function_nested_callContext = Function_nested_callContext;

wenyanParser.prototype.function_nested_call = function() {

    var localctx = new Function_nested_callContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, wenyanParser.RULE_function_nested_call);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 175; 
        this._errHandler.sync(this);
        var _alt = 1;
        do {
        	switch (_alt) {
        	case 1:
        		this.state = 171;
        		this.match(wenyanParser.T__9);
        		this.state = 172;
        		this.match(wenyanParser.INT_NUM);
        		this.state = 173;
        		this.match(wenyanParser.T__10);
        		this.state = 174;
        		this.match(wenyanParser.IDENTIFIER);
        		break;
        	default:
        		throw new antlr4.error.NoViableAltException(this);
        	}
        	this.state = 177; 
        	this._errHandler.sync(this);
        	_alt = this._interp.adaptivePredict(this._input,15, this._ctx);
        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Function_define_statementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = wenyanParser.RULE_function_define_statement;
    return this;
}

Function_define_statementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Function_define_statementContext.prototype.constructor = Function_define_statementContext;

Function_define_statementContext.prototype.INT_NUM = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(wenyanParser.INT_NUM);
    } else {
        return this.getToken(wenyanParser.INT_NUM, i);
    }
};


Function_define_statementContext.prototype.reference_single_statement = function() {
    return this.getTypedRuleContext(Reference_single_statementContext,0);
};

Function_define_statementContext.prototype.IDENTIFIER = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(wenyanParser.IDENTIFIER);
    } else {
        return this.getToken(wenyanParser.IDENTIFIER, i);
    }
};


Function_define_statementContext.prototype.statement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StatementContext);
    } else {
        return this.getTypedRuleContext(StatementContext,i);
    }
};

Function_define_statementContext.prototype.TYPE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(wenyanParser.TYPE);
    } else {
        return this.getToken(wenyanParser.TYPE, i);
    }
};


Function_define_statementContext.prototype.enterRule = function(listener) {
    if(listener instanceof wenyanListener ) {
        listener.enterFunction_define_statement(this);
	}
};

Function_define_statementContext.prototype.exitRule = function(listener) {
    if(listener instanceof wenyanListener ) {
        listener.exitFunction_define_statement(this);
	}
};




wenyanParser.Function_define_statementContext = Function_define_statementContext;

wenyanParser.prototype.function_define_statement = function() {

    var localctx = new Function_define_statementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, wenyanParser.RULE_function_define_statement);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 179;
        this.match(wenyanParser.T__11);
        this.state = 180;
        this.match(wenyanParser.INT_NUM);
        this.state = 181;
        this.match(wenyanParser.T__12);
        this.state = 182;
        this.reference_single_statement();
        this.state = 197;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===wenyanParser.T__13) {
            this.state = 183;
            this.match(wenyanParser.T__13);
            this.state = 184;
            this.match(wenyanParser.T__14);
            this.state = 193; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            do {
                this.state = 185;
                this.match(wenyanParser.INT_NUM);
                this.state = 186;
                this.match(wenyanParser.TYPE);
                this.state = 189; 
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    this.state = 187;
                    this.match(wenyanParser.T__15);
                    this.state = 188;
                    this.match(wenyanParser.IDENTIFIER);
                    this.state = 191; 
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while(_la===wenyanParser.T__15);
                this.state = 195; 
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            } while(_la===wenyanParser.INT_NUM);
        }

        this.state = 199;
        _la = this._input.LA(1);
        if(!(_la===wenyanParser.T__16 || _la===wenyanParser.T__17)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
        this.state = 203;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << wenyanParser.T__0) | (1 << wenyanParser.T__4) | (1 << wenyanParser.T__6) | (1 << wenyanParser.T__7) | (1 << wenyanParser.T__8) | (1 << wenyanParser.T__9) | (1 << wenyanParser.T__11) | (1 << wenyanParser.T__21) | (1 << wenyanParser.T__23) | (1 << wenyanParser.T__24) | (1 << wenyanParser.T__25) | (1 << wenyanParser.T__29) | (1 << wenyanParser.T__30))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (wenyanParser.T__31 - 32)) | (1 << (wenyanParser.T__32 - 32)) | (1 << (wenyanParser.T__40 - 32)) | (1 << (wenyanParser.T__41 - 32)) | (1 << (wenyanParser.T__42 - 32)) | (1 << (wenyanParser.T__43 - 32)) | (1 << (wenyanParser.T__44 - 32)) | (1 << (wenyanParser.ARITH_BINARY_OP - 32)) | (1 << (wenyanParser.UNARY_OP - 32)) | (1 << (wenyanParser.IF - 32)) | (1 << (wenyanParser.FOR_START_ARR - 32)) | (1 << (wenyanParser.FOR_START_ENUM - 32)) | (1 << (wenyanParser.FOR_START_WHILE - 32)))) !== 0) || _la===wenyanParser.BREAK) {
            this.state = 200;
            this.statement();
            this.state = 205;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 206;
        this.match(wenyanParser.T__18);
        this.state = 207;
        this.match(wenyanParser.IDENTIFIER);
        this.state = 208;
        this.match(wenyanParser.T__19);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function If_statementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = wenyanParser.RULE_if_statement;
    return this;
}

If_statementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
If_statementContext.prototype.constructor = If_statementContext;

If_statementContext.prototype.IF = function() {
    return this.getToken(wenyanParser.IF, 0);
};

If_statementContext.prototype.if_expression = function() {
    return this.getTypedRuleContext(If_expressionContext,0);
};

If_statementContext.prototype.FOR_IF_END = function() {
    return this.getToken(wenyanParser.FOR_IF_END, 0);
};

If_statementContext.prototype.statement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StatementContext);
    } else {
        return this.getTypedRuleContext(StatementContext,i);
    }
};

If_statementContext.prototype.ELSE = function() {
    return this.getToken(wenyanParser.ELSE, 0);
};

If_statementContext.prototype.enterRule = function(listener) {
    if(listener instanceof wenyanListener ) {
        listener.enterIf_statement(this);
	}
};

If_statementContext.prototype.exitRule = function(listener) {
    if(listener instanceof wenyanListener ) {
        listener.exitIf_statement(this);
	}
};




wenyanParser.If_statementContext = If_statementContext;

wenyanParser.prototype.if_statement = function() {

    var localctx = new If_statementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, wenyanParser.RULE_if_statement);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 210;
        this.match(wenyanParser.IF);
        this.state = 211;
        this.if_expression();
        this.state = 212;
        this.match(wenyanParser.T__20);
        this.state = 214; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 213;
            this.statement();
            this.state = 216; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << wenyanParser.T__0) | (1 << wenyanParser.T__4) | (1 << wenyanParser.T__6) | (1 << wenyanParser.T__7) | (1 << wenyanParser.T__8) | (1 << wenyanParser.T__9) | (1 << wenyanParser.T__11) | (1 << wenyanParser.T__21) | (1 << wenyanParser.T__23) | (1 << wenyanParser.T__24) | (1 << wenyanParser.T__25) | (1 << wenyanParser.T__29) | (1 << wenyanParser.T__30))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (wenyanParser.T__31 - 32)) | (1 << (wenyanParser.T__32 - 32)) | (1 << (wenyanParser.T__40 - 32)) | (1 << (wenyanParser.T__41 - 32)) | (1 << (wenyanParser.T__42 - 32)) | (1 << (wenyanParser.T__43 - 32)) | (1 << (wenyanParser.T__44 - 32)) | (1 << (wenyanParser.ARITH_BINARY_OP - 32)) | (1 << (wenyanParser.UNARY_OP - 32)) | (1 << (wenyanParser.IF - 32)) | (1 << (wenyanParser.FOR_START_ARR - 32)) | (1 << (wenyanParser.FOR_START_ENUM - 32)) | (1 << (wenyanParser.FOR_START_WHILE - 32)))) !== 0) || _la===wenyanParser.BREAK);
        this.state = 224;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===wenyanParser.ELSE) {
            this.state = 218;
            this.match(wenyanParser.ELSE);
            this.state = 220; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            do {
                this.state = 219;
                this.statement();
                this.state = 222; 
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << wenyanParser.T__0) | (1 << wenyanParser.T__4) | (1 << wenyanParser.T__6) | (1 << wenyanParser.T__7) | (1 << wenyanParser.T__8) | (1 << wenyanParser.T__9) | (1 << wenyanParser.T__11) | (1 << wenyanParser.T__21) | (1 << wenyanParser.T__23) | (1 << wenyanParser.T__24) | (1 << wenyanParser.T__25) | (1 << wenyanParser.T__29) | (1 << wenyanParser.T__30))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (wenyanParser.T__31 - 32)) | (1 << (wenyanParser.T__32 - 32)) | (1 << (wenyanParser.T__40 - 32)) | (1 << (wenyanParser.T__41 - 32)) | (1 << (wenyanParser.T__42 - 32)) | (1 << (wenyanParser.T__43 - 32)) | (1 << (wenyanParser.T__44 - 32)) | (1 << (wenyanParser.ARITH_BINARY_OP - 32)) | (1 << (wenyanParser.UNARY_OP - 32)) | (1 << (wenyanParser.IF - 32)) | (1 << (wenyanParser.FOR_START_ARR - 32)) | (1 << (wenyanParser.FOR_START_ENUM - 32)) | (1 << (wenyanParser.FOR_START_WHILE - 32)))) !== 0) || _la===wenyanParser.BREAK);
        }

        this.state = 226;
        this.match(wenyanParser.FOR_IF_END);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function If_expressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = wenyanParser.RULE_if_expression;
    return this;
}

If_expressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
If_expressionContext.prototype.constructor = If_expressionContext;

If_expressionContext.prototype.unary_if_expression = function() {
    return this.getTypedRuleContext(Unary_if_expressionContext,0);
};

If_expressionContext.prototype.binary_if_expression = function() {
    return this.getTypedRuleContext(Binary_if_expressionContext,0);
};

If_expressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof wenyanListener ) {
        listener.enterIf_expression(this);
	}
};

If_expressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof wenyanListener ) {
        listener.exitIf_expression(this);
	}
};




wenyanParser.If_expressionContext = If_expressionContext;

wenyanParser.prototype.if_expression = function() {

    var localctx = new If_expressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, wenyanParser.RULE_if_expression);
    try {
        this.state = 230;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,23,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 228;
            this.unary_if_expression();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 229;
            this.binary_if_expression();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Unary_if_expressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = wenyanParser.RULE_unary_if_expression;
    return this;
}

Unary_if_expressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Unary_if_expressionContext.prototype.constructor = Unary_if_expressionContext;

Unary_if_expressionContext.prototype.data = function() {
    return this.getTypedRuleContext(DataContext,0);
};

Unary_if_expressionContext.prototype.IDENTIFIER = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(wenyanParser.IDENTIFIER);
    } else {
        return this.getToken(wenyanParser.IDENTIFIER, i);
    }
};


Unary_if_expressionContext.prototype.STRING_LITERAL = function() {
    return this.getToken(wenyanParser.STRING_LITERAL, 0);
};

Unary_if_expressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof wenyanListener ) {
        listener.enterUnary_if_expression(this);
	}
};

Unary_if_expressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof wenyanListener ) {
        listener.exitUnary_if_expression(this);
	}
};




wenyanParser.Unary_if_expressionContext = Unary_if_expressionContext;

wenyanParser.prototype.unary_if_expression = function() {

    var localctx = new Unary_if_expressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, wenyanParser.RULE_unary_if_expression);
    var _la = 0; // Token type
    try {
        this.state = 237;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,24,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 232;
            this.data();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 233;
            this.match(wenyanParser.IDENTIFIER);
            this.state = 234;
            this.match(wenyanParser.T__1);
            this.state = 235;
            _la = this._input.LA(1);
            if(!(_la===wenyanParser.T__3 || _la===wenyanParser.STRING_LITERAL || _la===wenyanParser.IDENTIFIER)) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 236;
            this.match(wenyanParser.T__5);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Binary_if_expressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = wenyanParser.RULE_binary_if_expression;
    return this;
}

Binary_if_expressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Binary_if_expressionContext.prototype.constructor = Binary_if_expressionContext;

Binary_if_expressionContext.prototype.unary_if_expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Unary_if_expressionContext);
    } else {
        return this.getTypedRuleContext(Unary_if_expressionContext,i);
    }
};

Binary_if_expressionContext.prototype.IF_LOGIC_OP = function() {
    return this.getToken(wenyanParser.IF_LOGIC_OP, 0);
};

Binary_if_expressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof wenyanListener ) {
        listener.enterBinary_if_expression(this);
	}
};

Binary_if_expressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof wenyanListener ) {
        listener.exitBinary_if_expression(this);
	}
};




wenyanParser.Binary_if_expressionContext = Binary_if_expressionContext;

wenyanParser.prototype.binary_if_expression = function() {

    var localctx = new Binary_if_expressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, wenyanParser.RULE_binary_if_expression);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 239;
        this.unary_if_expression();
        this.state = 240;
        this.match(wenyanParser.IF_LOGIC_OP);
        this.state = 241;
        this.unary_if_expression();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Declare_statementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = wenyanParser.RULE_declare_statement;
    return this;
}

Declare_statementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Declare_statementContext.prototype.constructor = Declare_statementContext;

Declare_statementContext.prototype.INT_NUM = function() {
    return this.getToken(wenyanParser.INT_NUM, 0);
};

Declare_statementContext.prototype.TYPE = function() {
    return this.getToken(wenyanParser.TYPE, 0);
};

Declare_statementContext.prototype.data = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(DataContext);
    } else {
        return this.getTypedRuleContext(DataContext,i);
    }
};

Declare_statementContext.prototype.enterRule = function(listener) {
    if(listener instanceof wenyanListener ) {
        listener.enterDeclare_statement(this);
	}
};

Declare_statementContext.prototype.exitRule = function(listener) {
    if(listener instanceof wenyanListener ) {
        listener.exitDeclare_statement(this);
	}
};




wenyanParser.Declare_statementContext = Declare_statementContext;

wenyanParser.prototype.declare_statement = function() {

    var localctx = new Declare_statementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, wenyanParser.RULE_declare_statement);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 243;
        _la = this._input.LA(1);
        if(!(_la===wenyanParser.T__11 || _la===wenyanParser.T__21)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
        this.state = 244;
        this.match(wenyanParser.INT_NUM);
        this.state = 245;
        this.match(wenyanParser.TYPE);
        this.state = 250;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===wenyanParser.T__15) {
            this.state = 246;
            this.match(wenyanParser.T__15);
            this.state = 247;
            this.data();
            this.state = 252;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Define_statementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = wenyanParser.RULE_define_statement;
    return this;
}

Define_statementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Define_statementContext.prototype.constructor = Define_statementContext;

Define_statementContext.prototype.declare_statement = function() {
    return this.getTypedRuleContext(Declare_statementContext,0);
};

Define_statementContext.prototype.reference_multi_statement = function() {
    return this.getTypedRuleContext(Reference_multi_statementContext,0);
};

Define_statementContext.prototype.init_define_statement = function() {
    return this.getTypedRuleContext(Init_define_statementContext,0);
};

Define_statementContext.prototype.enterRule = function(listener) {
    if(listener instanceof wenyanListener ) {
        listener.enterDefine_statement(this);
	}
};

Define_statementContext.prototype.exitRule = function(listener) {
    if(listener instanceof wenyanListener ) {
        listener.exitDefine_statement(this);
	}
};




wenyanParser.Define_statementContext = Define_statementContext;

wenyanParser.prototype.define_statement = function() {

    var localctx = new Define_statementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, wenyanParser.RULE_define_statement);
    try {
        this.state = 257;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case wenyanParser.T__11:
        case wenyanParser.T__21:
            this.enterOuterAlt(localctx, 1);
            this.state = 253;
            this.declare_statement();
            this.state = 254;
            this.reference_multi_statement();
            break;
        case wenyanParser.T__23:
            this.enterOuterAlt(localctx, 2);
            this.state = 256;
            this.init_define_statement();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Reference_multi_statementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = wenyanParser.RULE_reference_multi_statement;
    return this;
}

Reference_multi_statementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Reference_multi_statementContext.prototype.constructor = Reference_multi_statementContext;

Reference_multi_statementContext.prototype.IDENTIFIER = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(wenyanParser.IDENTIFIER);
    } else {
        return this.getToken(wenyanParser.IDENTIFIER, i);
    }
};


Reference_multi_statementContext.prototype.enterRule = function(listener) {
    if(listener instanceof wenyanListener ) {
        listener.enterReference_multi_statement(this);
	}
};

Reference_multi_statementContext.prototype.exitRule = function(listener) {
    if(listener instanceof wenyanListener ) {
        listener.exitReference_multi_statement(this);
	}
};




wenyanParser.Reference_multi_statementContext = Reference_multi_statementContext;

wenyanParser.prototype.reference_multi_statement = function() {

    var localctx = new Reference_multi_statementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, wenyanParser.RULE_reference_multi_statement);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 259;
        this.match(wenyanParser.T__22);
        this.state = 262; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 260;
            this.match(wenyanParser.T__15);
            this.state = 261;
            this.match(wenyanParser.IDENTIFIER);
            this.state = 264; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===wenyanParser.T__15);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Reference_single_statementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = wenyanParser.RULE_reference_single_statement;
    return this;
}

Reference_single_statementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Reference_single_statementContext.prototype.constructor = Reference_single_statementContext;

Reference_single_statementContext.prototype.IDENTIFIER = function() {
    return this.getToken(wenyanParser.IDENTIFIER, 0);
};

Reference_single_statementContext.prototype.enterRule = function(listener) {
    if(listener instanceof wenyanListener ) {
        listener.enterReference_single_statement(this);
	}
};

Reference_single_statementContext.prototype.exitRule = function(listener) {
    if(listener instanceof wenyanListener ) {
        listener.exitReference_single_statement(this);
	}
};




wenyanParser.Reference_single_statementContext = Reference_single_statementContext;

wenyanParser.prototype.reference_single_statement = function() {

    var localctx = new Reference_single_statementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, wenyanParser.RULE_reference_single_statement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 266;
        this.match(wenyanParser.T__22);

        this.state = 267;
        this.match(wenyanParser.T__15);
        this.state = 268;
        this.match(wenyanParser.IDENTIFIER);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Init_define_statementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = wenyanParser.RULE_init_define_statement;
    return this;
}

Init_define_statementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Init_define_statementContext.prototype.constructor = Init_define_statementContext;

Init_define_statementContext.prototype.TYPE = function() {
    return this.getToken(wenyanParser.TYPE, 0);
};

Init_define_statementContext.prototype.data = function() {
    return this.getTypedRuleContext(DataContext,0);
};

Init_define_statementContext.prototype.reference_single_statement = function() {
    return this.getTypedRuleContext(Reference_single_statementContext,0);
};

Init_define_statementContext.prototype.enterRule = function(listener) {
    if(listener instanceof wenyanListener ) {
        listener.enterInit_define_statement(this);
	}
};

Init_define_statementContext.prototype.exitRule = function(listener) {
    if(listener instanceof wenyanListener ) {
        listener.exitInit_define_statement(this);
	}
};




wenyanParser.Init_define_statementContext = Init_define_statementContext;

wenyanParser.prototype.init_define_statement = function() {

    var localctx = new Init_define_statementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, wenyanParser.RULE_init_define_statement);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 270;
        this.match(wenyanParser.T__23);
        this.state = 271;
        this.match(wenyanParser.TYPE);
        this.state = 272;
        this.data();
        this.state = 274;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===wenyanParser.T__22) {
            this.state = 273;
            this.reference_single_statement();
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function For_statementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = wenyanParser.RULE_for_statement;
    return this;
}

For_statementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
For_statementContext.prototype.constructor = For_statementContext;

For_statementContext.prototype.for_arr_statement = function() {
    return this.getTypedRuleContext(For_arr_statementContext,0);
};

For_statementContext.prototype.for_enum_statement = function() {
    return this.getTypedRuleContext(For_enum_statementContext,0);
};

For_statementContext.prototype.for_while_statement = function() {
    return this.getTypedRuleContext(For_while_statementContext,0);
};

For_statementContext.prototype.enterRule = function(listener) {
    if(listener instanceof wenyanListener ) {
        listener.enterFor_statement(this);
	}
};

For_statementContext.prototype.exitRule = function(listener) {
    if(listener instanceof wenyanListener ) {
        listener.exitFor_statement(this);
	}
};




wenyanParser.For_statementContext = For_statementContext;

wenyanParser.prototype.for_statement = function() {

    var localctx = new For_statementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 40, wenyanParser.RULE_for_statement);
    try {
        this.state = 279;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case wenyanParser.FOR_START_ARR:
            this.enterOuterAlt(localctx, 1);
            this.state = 276;
            this.for_arr_statement();
            break;
        case wenyanParser.FOR_START_ENUM:
            this.enterOuterAlt(localctx, 2);
            this.state = 277;
            this.for_enum_statement();
            break;
        case wenyanParser.FOR_START_WHILE:
            this.enterOuterAlt(localctx, 3);
            this.state = 278;
            this.for_while_statement();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function For_arr_statementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = wenyanParser.RULE_for_arr_statement;
    return this;
}

For_arr_statementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
For_arr_statementContext.prototype.constructor = For_arr_statementContext;

For_arr_statementContext.prototype.FOR_START_ARR = function() {
    return this.getToken(wenyanParser.FOR_START_ARR, 0);
};

For_arr_statementContext.prototype.IDENTIFIER = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(wenyanParser.IDENTIFIER);
    } else {
        return this.getToken(wenyanParser.IDENTIFIER, i);
    }
};


For_arr_statementContext.prototype.FOR_MID_ARR = function() {
    return this.getToken(wenyanParser.FOR_MID_ARR, 0);
};

For_arr_statementContext.prototype.FOR_IF_END = function() {
    return this.getToken(wenyanParser.FOR_IF_END, 0);
};

For_arr_statementContext.prototype.statement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StatementContext);
    } else {
        return this.getTypedRuleContext(StatementContext,i);
    }
};

For_arr_statementContext.prototype.enterRule = function(listener) {
    if(listener instanceof wenyanListener ) {
        listener.enterFor_arr_statement(this);
	}
};

For_arr_statementContext.prototype.exitRule = function(listener) {
    if(listener instanceof wenyanListener ) {
        listener.exitFor_arr_statement(this);
	}
};




wenyanParser.For_arr_statementContext = For_arr_statementContext;

wenyanParser.prototype.for_arr_statement = function() {

    var localctx = new For_arr_statementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 42, wenyanParser.RULE_for_arr_statement);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 281;
        this.match(wenyanParser.FOR_START_ARR);
        this.state = 282;
        this.match(wenyanParser.IDENTIFIER);
        this.state = 283;
        this.match(wenyanParser.FOR_MID_ARR);
        this.state = 284;
        this.match(wenyanParser.IDENTIFIER);
        this.state = 288;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << wenyanParser.T__0) | (1 << wenyanParser.T__4) | (1 << wenyanParser.T__6) | (1 << wenyanParser.T__7) | (1 << wenyanParser.T__8) | (1 << wenyanParser.T__9) | (1 << wenyanParser.T__11) | (1 << wenyanParser.T__21) | (1 << wenyanParser.T__23) | (1 << wenyanParser.T__24) | (1 << wenyanParser.T__25) | (1 << wenyanParser.T__29) | (1 << wenyanParser.T__30))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (wenyanParser.T__31 - 32)) | (1 << (wenyanParser.T__32 - 32)) | (1 << (wenyanParser.T__40 - 32)) | (1 << (wenyanParser.T__41 - 32)) | (1 << (wenyanParser.T__42 - 32)) | (1 << (wenyanParser.T__43 - 32)) | (1 << (wenyanParser.T__44 - 32)) | (1 << (wenyanParser.ARITH_BINARY_OP - 32)) | (1 << (wenyanParser.UNARY_OP - 32)) | (1 << (wenyanParser.IF - 32)) | (1 << (wenyanParser.FOR_START_ARR - 32)) | (1 << (wenyanParser.FOR_START_ENUM - 32)) | (1 << (wenyanParser.FOR_START_WHILE - 32)))) !== 0) || _la===wenyanParser.BREAK) {
            this.state = 285;
            this.statement();
            this.state = 290;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 291;
        this.match(wenyanParser.FOR_IF_END);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function For_enum_statementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = wenyanParser.RULE_for_enum_statement;
    return this;
}

For_enum_statementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
For_enum_statementContext.prototype.constructor = For_enum_statementContext;

For_enum_statementContext.prototype.FOR_START_ENUM = function() {
    return this.getToken(wenyanParser.FOR_START_ENUM, 0);
};

For_enum_statementContext.prototype.FOR_MID_ENUM = function() {
    return this.getToken(wenyanParser.FOR_MID_ENUM, 0);
};

For_enum_statementContext.prototype.FOR_IF_END = function() {
    return this.getToken(wenyanParser.FOR_IF_END, 0);
};

For_enum_statementContext.prototype.INT_NUM = function() {
    return this.getToken(wenyanParser.INT_NUM, 0);
};

For_enum_statementContext.prototype.IDENTIFIER = function() {
    return this.getToken(wenyanParser.IDENTIFIER, 0);
};

For_enum_statementContext.prototype.statement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StatementContext);
    } else {
        return this.getTypedRuleContext(StatementContext,i);
    }
};

For_enum_statementContext.prototype.enterRule = function(listener) {
    if(listener instanceof wenyanListener ) {
        listener.enterFor_enum_statement(this);
	}
};

For_enum_statementContext.prototype.exitRule = function(listener) {
    if(listener instanceof wenyanListener ) {
        listener.exitFor_enum_statement(this);
	}
};




wenyanParser.For_enum_statementContext = For_enum_statementContext;

wenyanParser.prototype.for_enum_statement = function() {

    var localctx = new For_enum_statementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 44, wenyanParser.RULE_for_enum_statement);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 293;
        this.match(wenyanParser.FOR_START_ENUM);
        this.state = 294;
        _la = this._input.LA(1);
        if(!(_la===wenyanParser.IDENTIFIER || _la===wenyanParser.INT_NUM)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
        this.state = 295;
        this.match(wenyanParser.FOR_MID_ENUM);
        this.state = 299;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << wenyanParser.T__0) | (1 << wenyanParser.T__4) | (1 << wenyanParser.T__6) | (1 << wenyanParser.T__7) | (1 << wenyanParser.T__8) | (1 << wenyanParser.T__9) | (1 << wenyanParser.T__11) | (1 << wenyanParser.T__21) | (1 << wenyanParser.T__23) | (1 << wenyanParser.T__24) | (1 << wenyanParser.T__25) | (1 << wenyanParser.T__29) | (1 << wenyanParser.T__30))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (wenyanParser.T__31 - 32)) | (1 << (wenyanParser.T__32 - 32)) | (1 << (wenyanParser.T__40 - 32)) | (1 << (wenyanParser.T__41 - 32)) | (1 << (wenyanParser.T__42 - 32)) | (1 << (wenyanParser.T__43 - 32)) | (1 << (wenyanParser.T__44 - 32)) | (1 << (wenyanParser.ARITH_BINARY_OP - 32)) | (1 << (wenyanParser.UNARY_OP - 32)) | (1 << (wenyanParser.IF - 32)) | (1 << (wenyanParser.FOR_START_ARR - 32)) | (1 << (wenyanParser.FOR_START_ENUM - 32)) | (1 << (wenyanParser.FOR_START_WHILE - 32)))) !== 0) || _la===wenyanParser.BREAK) {
            this.state = 296;
            this.statement();
            this.state = 301;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 302;
        this.match(wenyanParser.FOR_IF_END);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function For_while_statementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = wenyanParser.RULE_for_while_statement;
    return this;
}

For_while_statementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
For_while_statementContext.prototype.constructor = For_while_statementContext;

For_while_statementContext.prototype.FOR_START_WHILE = function() {
    return this.getToken(wenyanParser.FOR_START_WHILE, 0);
};

For_while_statementContext.prototype.FOR_IF_END = function() {
    return this.getToken(wenyanParser.FOR_IF_END, 0);
};

For_while_statementContext.prototype.statement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StatementContext);
    } else {
        return this.getTypedRuleContext(StatementContext,i);
    }
};

For_while_statementContext.prototype.enterRule = function(listener) {
    if(listener instanceof wenyanListener ) {
        listener.enterFor_while_statement(this);
	}
};

For_while_statementContext.prototype.exitRule = function(listener) {
    if(listener instanceof wenyanListener ) {
        listener.exitFor_while_statement(this);
	}
};




wenyanParser.For_while_statementContext = For_while_statementContext;

wenyanParser.prototype.for_while_statement = function() {

    var localctx = new For_while_statementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 46, wenyanParser.RULE_for_while_statement);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 304;
        this.match(wenyanParser.FOR_START_WHILE);
        this.state = 308;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << wenyanParser.T__0) | (1 << wenyanParser.T__4) | (1 << wenyanParser.T__6) | (1 << wenyanParser.T__7) | (1 << wenyanParser.T__8) | (1 << wenyanParser.T__9) | (1 << wenyanParser.T__11) | (1 << wenyanParser.T__21) | (1 << wenyanParser.T__23) | (1 << wenyanParser.T__24) | (1 << wenyanParser.T__25) | (1 << wenyanParser.T__29) | (1 << wenyanParser.T__30))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (wenyanParser.T__31 - 32)) | (1 << (wenyanParser.T__32 - 32)) | (1 << (wenyanParser.T__40 - 32)) | (1 << (wenyanParser.T__41 - 32)) | (1 << (wenyanParser.T__42 - 32)) | (1 << (wenyanParser.T__43 - 32)) | (1 << (wenyanParser.T__44 - 32)) | (1 << (wenyanParser.ARITH_BINARY_OP - 32)) | (1 << (wenyanParser.UNARY_OP - 32)) | (1 << (wenyanParser.IF - 32)) | (1 << (wenyanParser.FOR_START_ARR - 32)) | (1 << (wenyanParser.FOR_START_ENUM - 32)) | (1 << (wenyanParser.FOR_START_WHILE - 32)))) !== 0) || _la===wenyanParser.BREAK) {
            this.state = 305;
            this.statement();
            this.state = 310;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 311;
        this.match(wenyanParser.FOR_IF_END);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Math_statementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = wenyanParser.RULE_math_statement;
    return this;
}

Math_statementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Math_statementContext.prototype.constructor = Math_statementContext;

Math_statementContext.prototype.arith_math_statement = function() {
    return this.getTypedRuleContext(Arith_math_statementContext,0);
};

Math_statementContext.prototype.logic_math_statement = function() {
    return this.getTypedRuleContext(Logic_math_statementContext,0);
};

Math_statementContext.prototype.mod_math_statement = function() {
    return this.getTypedRuleContext(Mod_math_statementContext,0);
};

Math_statementContext.prototype.reference_multi_statement = function() {
    return this.getTypedRuleContext(Reference_multi_statementContext,0);
};

Math_statementContext.prototype.enterRule = function(listener) {
    if(listener instanceof wenyanListener ) {
        listener.enterMath_statement(this);
	}
};

Math_statementContext.prototype.exitRule = function(listener) {
    if(listener instanceof wenyanListener ) {
        listener.exitMath_statement(this);
	}
};




wenyanParser.Math_statementContext = Math_statementContext;

wenyanParser.prototype.math_statement = function() {

    var localctx = new Math_statementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 48, wenyanParser.RULE_math_statement);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 316;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case wenyanParser.ARITH_BINARY_OP:
        case wenyanParser.UNARY_OP:
            this.state = 313;
            this.arith_math_statement();
            break;
        case wenyanParser.T__0:
            this.state = 314;
            this.logic_math_statement();
            break;
        case wenyanParser.T__24:
            this.state = 315;
            this.mod_math_statement();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this.state = 319;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===wenyanParser.T__22) {
            this.state = 318;
            this.reference_multi_statement();
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Arith_math_statementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = wenyanParser.RULE_arith_math_statement;
    return this;
}

Arith_math_statementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Arith_math_statementContext.prototype.constructor = Arith_math_statementContext;

Arith_math_statementContext.prototype.arith_binary_math = function() {
    return this.getTypedRuleContext(Arith_binary_mathContext,0);
};

Arith_math_statementContext.prototype.arith_unary_math = function() {
    return this.getTypedRuleContext(Arith_unary_mathContext,0);
};

Arith_math_statementContext.prototype.enterRule = function(listener) {
    if(listener instanceof wenyanListener ) {
        listener.enterArith_math_statement(this);
	}
};

Arith_math_statementContext.prototype.exitRule = function(listener) {
    if(listener instanceof wenyanListener ) {
        listener.exitArith_math_statement(this);
	}
};




wenyanParser.Arith_math_statementContext = Arith_math_statementContext;

wenyanParser.prototype.arith_math_statement = function() {

    var localctx = new Arith_math_statementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 50, wenyanParser.RULE_arith_math_statement);
    try {
        this.state = 323;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case wenyanParser.ARITH_BINARY_OP:
            this.enterOuterAlt(localctx, 1);
            this.state = 321;
            this.arith_binary_math();
            break;
        case wenyanParser.UNARY_OP:
            this.enterOuterAlt(localctx, 2);
            this.state = 322;
            this.arith_unary_math();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Arith_binary_mathContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = wenyanParser.RULE_arith_binary_math;
    return this;
}

Arith_binary_mathContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Arith_binary_mathContext.prototype.constructor = Arith_binary_mathContext;

Arith_binary_mathContext.prototype.ARITH_BINARY_OP = function() {
    return this.getToken(wenyanParser.ARITH_BINARY_OP, 0);
};

Arith_binary_mathContext.prototype.preposition = function() {
    return this.getTypedRuleContext(PrepositionContext,0);
};

Arith_binary_mathContext.prototype.data = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(DataContext);
    } else {
        return this.getTypedRuleContext(DataContext,i);
    }
};

Arith_binary_mathContext.prototype.enterRule = function(listener) {
    if(listener instanceof wenyanListener ) {
        listener.enterArith_binary_math(this);
	}
};

Arith_binary_mathContext.prototype.exitRule = function(listener) {
    if(listener instanceof wenyanListener ) {
        listener.exitArith_binary_math(this);
	}
};




wenyanParser.Arith_binary_mathContext = Arith_binary_mathContext;

wenyanParser.prototype.arith_binary_math = function() {

    var localctx = new Arith_binary_mathContext(this, this._ctx, this.state);
    this.enterRule(localctx, 52, wenyanParser.RULE_arith_binary_math);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 325;
        this.match(wenyanParser.ARITH_BINARY_OP);
        this.state = 328;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case wenyanParser.STRING_LITERAL:
        case wenyanParser.IDENTIFIER:
        case wenyanParser.FLOAT_NUM:
        case wenyanParser.INT_NUM:
        case wenyanParser.BOOL_VALUE:
            this.state = 326;
            this.data();
            break;
        case wenyanParser.T__5:
            this.state = 327;
            this.match(wenyanParser.T__5);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this.state = 330;
        this.preposition();
        this.state = 333;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case wenyanParser.STRING_LITERAL:
        case wenyanParser.IDENTIFIER:
        case wenyanParser.FLOAT_NUM:
        case wenyanParser.INT_NUM:
        case wenyanParser.BOOL_VALUE:
            this.state = 331;
            this.data();
            break;
        case wenyanParser.T__5:
            this.state = 332;
            this.match(wenyanParser.T__5);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Arith_unary_mathContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = wenyanParser.RULE_arith_unary_math;
    return this;
}

Arith_unary_mathContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Arith_unary_mathContext.prototype.constructor = Arith_unary_mathContext;

Arith_unary_mathContext.prototype.UNARY_OP = function() {
    return this.getToken(wenyanParser.UNARY_OP, 0);
};

Arith_unary_mathContext.prototype.IDENTIFIER = function() {
    return this.getToken(wenyanParser.IDENTIFIER, 0);
};

Arith_unary_mathContext.prototype.enterRule = function(listener) {
    if(listener instanceof wenyanListener ) {
        listener.enterArith_unary_math(this);
	}
};

Arith_unary_mathContext.prototype.exitRule = function(listener) {
    if(listener instanceof wenyanListener ) {
        listener.exitArith_unary_math(this);
	}
};




wenyanParser.Arith_unary_mathContext = Arith_unary_mathContext;

wenyanParser.prototype.arith_unary_math = function() {

    var localctx = new Arith_unary_mathContext(this, this._ctx, this.state);
    this.enterRule(localctx, 54, wenyanParser.RULE_arith_unary_math);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 335;
        this.match(wenyanParser.UNARY_OP);
        this.state = 336;
        _la = this._input.LA(1);
        if(!(_la===wenyanParser.T__5 || _la===wenyanParser.IDENTIFIER)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Mod_math_statementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = wenyanParser.RULE_mod_math_statement;
    return this;
}

Mod_math_statementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Mod_math_statementContext.prototype.constructor = Mod_math_statementContext;

Mod_math_statementContext.prototype.preposition = function() {
    return this.getTypedRuleContext(PrepositionContext,0);
};

Mod_math_statementContext.prototype.INT_NUM = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(wenyanParser.INT_NUM);
    } else {
        return this.getToken(wenyanParser.INT_NUM, i);
    }
};


Mod_math_statementContext.prototype.FLOAT_NUM = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(wenyanParser.FLOAT_NUM);
    } else {
        return this.getToken(wenyanParser.FLOAT_NUM, i);
    }
};


Mod_math_statementContext.prototype.IDENTIFIER = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(wenyanParser.IDENTIFIER);
    } else {
        return this.getToken(wenyanParser.IDENTIFIER, i);
    }
};


Mod_math_statementContext.prototype.POST_MOD_MATH_OP = function() {
    return this.getToken(wenyanParser.POST_MOD_MATH_OP, 0);
};

Mod_math_statementContext.prototype.enterRule = function(listener) {
    if(listener instanceof wenyanListener ) {
        listener.enterMod_math_statement(this);
	}
};

Mod_math_statementContext.prototype.exitRule = function(listener) {
    if(listener instanceof wenyanListener ) {
        listener.exitMod_math_statement(this);
	}
};




wenyanParser.Mod_math_statementContext = Mod_math_statementContext;

wenyanParser.prototype.mod_math_statement = function() {

    var localctx = new Mod_math_statementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 56, wenyanParser.RULE_mod_math_statement);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 338;
        this.match(wenyanParser.T__24);
        this.state = 339;
        _la = this._input.LA(1);
        if(!(_la===wenyanParser.T__5 || ((((_la - 47)) & ~0x1f) == 0 && ((1 << (_la - 47)) & ((1 << (wenyanParser.IDENTIFIER - 47)) | (1 << (wenyanParser.FLOAT_NUM - 47)) | (1 << (wenyanParser.INT_NUM - 47)))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
        this.state = 340;
        this.preposition();
        this.state = 341;
        _la = this._input.LA(1);
        if(!(((((_la - 47)) & ~0x1f) == 0 && ((1 << (_la - 47)) & ((1 << (wenyanParser.IDENTIFIER - 47)) | (1 << (wenyanParser.FLOAT_NUM - 47)) | (1 << (wenyanParser.INT_NUM - 47)))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
        this.state = 343;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===wenyanParser.POST_MOD_MATH_OP) {
            this.state = 342;
            this.match(wenyanParser.POST_MOD_MATH_OP);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Logic_math_statementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = wenyanParser.RULE_logic_math_statement;
    return this;
}

Logic_math_statementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Logic_math_statementContext.prototype.constructor = Logic_math_statementContext;

Logic_math_statementContext.prototype.IDENTIFIER = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(wenyanParser.IDENTIFIER);
    } else {
        return this.getToken(wenyanParser.IDENTIFIER, i);
    }
};


Logic_math_statementContext.prototype.LOGIC_BINARY_OP = function() {
    return this.getToken(wenyanParser.LOGIC_BINARY_OP, 0);
};

Logic_math_statementContext.prototype.enterRule = function(listener) {
    if(listener instanceof wenyanListener ) {
        listener.enterLogic_math_statement(this);
	}
};

Logic_math_statementContext.prototype.exitRule = function(listener) {
    if(listener instanceof wenyanListener ) {
        listener.exitLogic_math_statement(this);
	}
};




wenyanParser.Logic_math_statementContext = Logic_math_statementContext;

wenyanParser.prototype.logic_math_statement = function() {

    var localctx = new Logic_math_statementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 58, wenyanParser.RULE_logic_math_statement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 345;
        this.match(wenyanParser.T__0);
        this.state = 346;
        this.match(wenyanParser.IDENTIFIER);
        this.state = 347;
        this.match(wenyanParser.IDENTIFIER);
        this.state = 348;
        this.match(wenyanParser.LOGIC_BINARY_OP);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Assign_statementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = wenyanParser.RULE_assign_statement;
    return this;
}

Assign_statementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Assign_statementContext.prototype.constructor = Assign_statementContext;

Assign_statementContext.prototype.IDENTIFIER = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(wenyanParser.IDENTIFIER);
    } else {
        return this.getToken(wenyanParser.IDENTIFIER, i);
    }
};


Assign_statementContext.prototype.INT_NUM = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(wenyanParser.INT_NUM);
    } else {
        return this.getToken(wenyanParser.INT_NUM, i);
    }
};


Assign_statementContext.prototype.STRING_LITERAL = function() {
    return this.getToken(wenyanParser.STRING_LITERAL, 0);
};

Assign_statementContext.prototype.data = function() {
    return this.getTypedRuleContext(DataContext,0);
};

Assign_statementContext.prototype.enterRule = function(listener) {
    if(listener instanceof wenyanListener ) {
        listener.enterAssign_statement(this);
	}
};

Assign_statementContext.prototype.exitRule = function(listener) {
    if(listener instanceof wenyanListener ) {
        listener.exitAssign_statement(this);
	}
};




wenyanParser.Assign_statementContext = Assign_statementContext;

wenyanParser.prototype.assign_statement = function() {

    var localctx = new Assign_statementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 60, wenyanParser.RULE_assign_statement);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 350;
        this.match(wenyanParser.T__25);
        this.state = 351;
        this.match(wenyanParser.IDENTIFIER);
        this.state = 354;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===wenyanParser.T__1) {
            this.state = 352;
            this.match(wenyanParser.T__1);
            this.state = 353;
            _la = this._input.LA(1);
            if(!(((((_la - 46)) & ~0x1f) == 0 && ((1 << (_la - 46)) & ((1 << (wenyanParser.STRING_LITERAL - 46)) | (1 << (wenyanParser.IDENTIFIER - 46)) | (1 << (wenyanParser.INT_NUM - 46)))) !== 0))) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
        }

        this.state = 356;
        this.match(wenyanParser.T__20);
        this.state = 368;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case wenyanParser.T__26:
            this.state = 357;
            this.match(wenyanParser.T__26);
            this.state = 364;
            this._errHandler.sync(this);
            switch(this._input.LA(1)) {
            case wenyanParser.STRING_LITERAL:
            case wenyanParser.IDENTIFIER:
            case wenyanParser.FLOAT_NUM:
            case wenyanParser.INT_NUM:
            case wenyanParser.BOOL_VALUE:
                this.state = 358;
                this.data();
                this.state = 361;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if(_la===wenyanParser.T__1) {
                    this.state = 359;
                    this.match(wenyanParser.T__1);
                    this.state = 360;
                    this.match(wenyanParser.INT_NUM);
                }

                break;
            case wenyanParser.T__5:
                this.state = 363;
                this.match(wenyanParser.T__5);
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
            }
            this.state = 366;
            this.match(wenyanParser.T__27);
            break;
        case wenyanParser.T__28:
            this.state = 367;
            this.match(wenyanParser.T__28);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Return_statementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = wenyanParser.RULE_return_statement;
    return this;
}

Return_statementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Return_statementContext.prototype.constructor = Return_statementContext;

Return_statementContext.prototype.data = function() {
    return this.getTypedRuleContext(DataContext,0);
};

Return_statementContext.prototype.enterRule = function(listener) {
    if(listener instanceof wenyanListener ) {
        listener.enterReturn_statement(this);
	}
};

Return_statementContext.prototype.exitRule = function(listener) {
    if(listener instanceof wenyanListener ) {
        listener.exitReturn_statement(this);
	}
};




wenyanParser.Return_statementContext = Return_statementContext;

wenyanParser.prototype.return_statement = function() {

    var localctx = new Return_statementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 62, wenyanParser.RULE_return_statement);
    try {
        this.state = 377;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case wenyanParser.T__29:
            this.enterOuterAlt(localctx, 1);
            this.state = 370;
            this.match(wenyanParser.T__29);
            this.state = 373;
            this._errHandler.sync(this);
            switch(this._input.LA(1)) {
            case wenyanParser.STRING_LITERAL:
            case wenyanParser.IDENTIFIER:
            case wenyanParser.FLOAT_NUM:
            case wenyanParser.INT_NUM:
            case wenyanParser.BOOL_VALUE:
                this.state = 371;
                this.data();
                break;
            case wenyanParser.T__5:
                this.state = 372;
                this.match(wenyanParser.T__5);
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
            }
            break;
        case wenyanParser.T__30:
            this.enterOuterAlt(localctx, 2);
            this.state = 375;
            this.match(wenyanParser.T__30);
            break;
        case wenyanParser.T__31:
            this.enterOuterAlt(localctx, 3);
            this.state = 376;
            this.match(wenyanParser.T__31);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Import_statementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = wenyanParser.RULE_import_statement;
    return this;
}

Import_statementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Import_statementContext.prototype.constructor = Import_statementContext;

Import_statementContext.prototype.STRING_LITERAL = function() {
    return this.getToken(wenyanParser.STRING_LITERAL, 0);
};

Import_statementContext.prototype.IDENTIFIER = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(wenyanParser.IDENTIFIER);
    } else {
        return this.getToken(wenyanParser.IDENTIFIER, i);
    }
};


Import_statementContext.prototype.enterRule = function(listener) {
    if(listener instanceof wenyanListener ) {
        listener.enterImport_statement(this);
	}
};

Import_statementContext.prototype.exitRule = function(listener) {
    if(listener instanceof wenyanListener ) {
        listener.exitImport_statement(this);
	}
};




wenyanParser.Import_statementContext = Import_statementContext;

wenyanParser.prototype.import_statement = function() {

    var localctx = new Import_statementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 64, wenyanParser.RULE_import_statement);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 379;
        this.match(wenyanParser.T__32);
        this.state = 380;
        this.match(wenyanParser.STRING_LITERAL);
        this.state = 381;
        this.match(wenyanParser.T__33);
        this.state = 389;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===wenyanParser.T__34) {
            this.state = 382;
            this.match(wenyanParser.T__34);
            this.state = 384; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            do {
                this.state = 383;
                this.match(wenyanParser.IDENTIFIER);
                this.state = 386; 
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            } while(_la===wenyanParser.IDENTIFIER);
            this.state = 388;
            this.match(wenyanParser.T__35);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Object_statementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = wenyanParser.RULE_object_statement;
    return this;
}

Object_statementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Object_statementContext.prototype.constructor = Object_statementContext;

Object_statementContext.prototype.INT_NUM = function() {
    return this.getToken(wenyanParser.INT_NUM, 0);
};

Object_statementContext.prototype.reference_multi_statement = function() {
    return this.getTypedRuleContext(Reference_multi_statementContext,0);
};

Object_statementContext.prototype.object_define_statement = function() {
    return this.getTypedRuleContext(Object_define_statementContext,0);
};

Object_statementContext.prototype.enterRule = function(listener) {
    if(listener instanceof wenyanListener ) {
        listener.enterObject_statement(this);
	}
};

Object_statementContext.prototype.exitRule = function(listener) {
    if(listener instanceof wenyanListener ) {
        listener.exitObject_statement(this);
	}
};




wenyanParser.Object_statementContext = Object_statementContext;

wenyanParser.prototype.object_statement = function() {

    var localctx = new Object_statementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 66, wenyanParser.RULE_object_statement);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 391;
        this.match(wenyanParser.T__11);
        this.state = 392;
        this.match(wenyanParser.INT_NUM);
        this.state = 393;
        this.match(wenyanParser.T__36);
        this.state = 394;
        this.reference_multi_statement();
        this.state = 396;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===wenyanParser.T__37) {
            this.state = 395;
            this.object_define_statement();
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Object_define_statementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = wenyanParser.RULE_object_define_statement;
    return this;
}

Object_define_statementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Object_define_statementContext.prototype.constructor = Object_define_statementContext;

Object_define_statementContext.prototype.IDENTIFIER = function() {
    return this.getToken(wenyanParser.IDENTIFIER, 0);
};

Object_define_statementContext.prototype.STRING_LITERAL = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(wenyanParser.STRING_LITERAL);
    } else {
        return this.getToken(wenyanParser.STRING_LITERAL, i);
    }
};


Object_define_statementContext.prototype.TYPE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(wenyanParser.TYPE);
    } else {
        return this.getToken(wenyanParser.TYPE, i);
    }
};


Object_define_statementContext.prototype.data = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(DataContext);
    } else {
        return this.getTypedRuleContext(DataContext,i);
    }
};

Object_define_statementContext.prototype.enterRule = function(listener) {
    if(listener instanceof wenyanListener ) {
        listener.enterObject_define_statement(this);
	}
};

Object_define_statementContext.prototype.exitRule = function(listener) {
    if(listener instanceof wenyanListener ) {
        listener.exitObject_define_statement(this);
	}
};




wenyanParser.Object_define_statementContext = Object_define_statementContext;

wenyanParser.prototype.object_define_statement = function() {

    var localctx = new Object_define_statementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 68, wenyanParser.RULE_object_define_statement);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 398;
        this.match(wenyanParser.T__37);
        this.state = 405; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 399;
            this.match(wenyanParser.T__38);
            this.state = 400;
            this.match(wenyanParser.STRING_LITERAL);
            this.state = 401;
            this.match(wenyanParser.T__20);
            this.state = 402;
            this.match(wenyanParser.TYPE);
            this.state = 403;
            this.match(wenyanParser.T__15);
            this.state = 404;
            this.data();
            this.state = 407; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===wenyanParser.T__38);
        this.state = 409;
        this.match(wenyanParser.T__18);
        this.state = 410;
        this.match(wenyanParser.IDENTIFIER);
        this.state = 411;
        this.match(wenyanParser.T__39);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function DataContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = wenyanParser.RULE_data;
    return this;
}

DataContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DataContext.prototype.constructor = DataContext;

DataContext.prototype.STRING_LITERAL = function() {
    return this.getToken(wenyanParser.STRING_LITERAL, 0);
};

DataContext.prototype.BOOL_VALUE = function() {
    return this.getToken(wenyanParser.BOOL_VALUE, 0);
};

DataContext.prototype.IDENTIFIER = function() {
    return this.getToken(wenyanParser.IDENTIFIER, 0);
};

DataContext.prototype.INT_NUM = function() {
    return this.getToken(wenyanParser.INT_NUM, 0);
};

DataContext.prototype.FLOAT_NUM = function() {
    return this.getToken(wenyanParser.FLOAT_NUM, 0);
};

DataContext.prototype.enterRule = function(listener) {
    if(listener instanceof wenyanListener ) {
        listener.enterData(this);
	}
};

DataContext.prototype.exitRule = function(listener) {
    if(listener instanceof wenyanListener ) {
        listener.exitData(this);
	}
};




wenyanParser.DataContext = DataContext;

wenyanParser.prototype.data = function() {

    var localctx = new DataContext(this, this._ctx, this.state);
    this.enterRule(localctx, 70, wenyanParser.RULE_data);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 413;
        _la = this._input.LA(1);
        if(!(((((_la - 46)) & ~0x1f) == 0 && ((1 << (_la - 46)) & ((1 << (wenyanParser.STRING_LITERAL - 46)) | (1 << (wenyanParser.IDENTIFIER - 46)) | (1 << (wenyanParser.FLOAT_NUM - 46)) | (1 << (wenyanParser.INT_NUM - 46)) | (1 << (wenyanParser.BOOL_VALUE - 46)))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function PrepositionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = wenyanParser.RULE_preposition;
    return this;
}

PrepositionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PrepositionContext.prototype.constructor = PrepositionContext;

PrepositionContext.prototype.PREPOSITION_YI = function() {
    return this.getToken(wenyanParser.PREPOSITION_YI, 0);
};

PrepositionContext.prototype.PREPOSITION_YU = function() {
    return this.getToken(wenyanParser.PREPOSITION_YU, 0);
};

PrepositionContext.prototype.enterRule = function(listener) {
    if(listener instanceof wenyanListener ) {
        listener.enterPreposition(this);
	}
};

PrepositionContext.prototype.exitRule = function(listener) {
    if(listener instanceof wenyanListener ) {
        listener.exitPreposition(this);
	}
};




wenyanParser.PrepositionContext = PrepositionContext;

wenyanParser.prototype.preposition = function() {

    var localctx = new PrepositionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 72, wenyanParser.RULE_preposition);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 415;
        _la = this._input.LA(1);
        if(!(_la===wenyanParser.PREPOSITION_YU || _la===wenyanParser.PREPOSITION_YI)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Print_statementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = wenyanParser.RULE_print_statement;
    return this;
}

Print_statementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Print_statementContext.prototype.constructor = Print_statementContext;


Print_statementContext.prototype.enterRule = function(listener) {
    if(listener instanceof wenyanListener ) {
        listener.enterPrint_statement(this);
	}
};

Print_statementContext.prototype.exitRule = function(listener) {
    if(listener instanceof wenyanListener ) {
        listener.exitPrint_statement(this);
	}
};




wenyanParser.Print_statementContext = Print_statementContext;

wenyanParser.prototype.print_statement = function() {

    var localctx = new Print_statementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 74, wenyanParser.RULE_print_statement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 417;
        this.match(wenyanParser.T__40);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function CommentContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = wenyanParser.RULE_comment;
    return this;
}

CommentContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CommentContext.prototype.constructor = CommentContext;

CommentContext.prototype.STRING_LITERAL = function() {
    return this.getToken(wenyanParser.STRING_LITERAL, 0);
};

CommentContext.prototype.enterRule = function(listener) {
    if(listener instanceof wenyanListener ) {
        listener.enterComment(this);
	}
};

CommentContext.prototype.exitRule = function(listener) {
    if(listener instanceof wenyanListener ) {
        listener.exitComment(this);
	}
};




wenyanParser.CommentContext = CommentContext;

wenyanParser.prototype.comment = function() {

    var localctx = new CommentContext(this, this._ctx, this.state);
    this.enterRule(localctx, 76, wenyanParser.RULE_comment);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 419;
        _la = this._input.LA(1);
        if(!(((((_la - 42)) & ~0x1f) == 0 && ((1 << (_la - 42)) & ((1 << (wenyanParser.T__41 - 42)) | (1 << (wenyanParser.T__42 - 42)) | (1 << (wenyanParser.T__43 - 42)))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
        this.state = 420;
        this.match(wenyanParser.STRING_LITERAL);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Clean_statementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = wenyanParser.RULE_clean_statement;
    return this;
}

Clean_statementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Clean_statementContext.prototype.constructor = Clean_statementContext;


Clean_statementContext.prototype.enterRule = function(listener) {
    if(listener instanceof wenyanListener ) {
        listener.enterClean_statement(this);
	}
};

Clean_statementContext.prototype.exitRule = function(listener) {
    if(listener instanceof wenyanListener ) {
        listener.exitClean_statement(this);
	}
};




wenyanParser.Clean_statementContext = Clean_statementContext;

wenyanParser.prototype.clean_statement = function() {

    var localctx = new Clean_statementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 78, wenyanParser.RULE_clean_statement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 422;
        this.match(wenyanParser.T__44);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


exports.wenyanParser = wenyanParser;
