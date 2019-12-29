#include <iostream>
#include <strstream>
#include <string>
#include "antlr4-runtime.h"
#include "wenyanLexer.h"
#include "wenyanParser.h"
#include "wenyanVisitor.h"
#include <unistd.h>
#include <fstream>

bool OPT_PRINT_TOKEN = false;
bool OPT_FILENAME = false;
bool OPT_PRINT_HELP = false;

class WenyanParserErrorListener: public antlr4::BaseErrorListener {
    virtual void syntaxError(
        antlr4::Recognizer *recognizer,
        antlr4::Token *offendingSymbol,
        size_t line,
        size_t charPositionInLine,
        const std::string &msg,
        std::exception_ptr e) override {
            std::ostrstream s;
            s << "Line(" << line << ":" << charPositionInLine << ") Error(" << msg << ")";
            throw std::invalid_argument(s.str());
        }
};

std::string get_opt(int argc, char *argv[]) {
    int opt;
    std::string filename = "";
    while ((opt = getopt(argc, argv, ":f:th")) != -1) {
        switch(opt) {
            case 'f':
                OPT_FILENAME = true;
                filename = std::string(optarg);
                break;
            case 't':
                OPT_PRINT_TOKEN = true;
                break;
            case 'h':
                OPT_PRINT_HELP = true;
            case ':':
                break;
        }
    }

    for (; optind < argc; optind++) {
        filename += std::string(argv[optind]);
    }

    return filename;
}

void print_help_info() {
    std::string help_content = "Usage: wenyanCompiler [-f filename] [-t] [content]\n";
    help_content += "\t-h help information\n";
    help_content += "\t-t -- print token out\n";
    help_content += "\t-f filename -- take content in filename as input content\n";
    help_content += "\tcontent";
    std::cout << help_content << std::endl;
}

int main(int argc, char *argv[]) {
    std::string content = get_opt(argc, argv);
    if (OPT_PRINT_HELP || (argc < 2)) {
        print_help_info();
        return 0;
    }

    if (OPT_FILENAME) {
        std::ifstream ifs(content);
        std::string temp((std::istreambuf_iterator<char>(ifs) ),
                         (std::istreambuf_iterator<char>() ));
        content = temp;
    }

    antlr4::ANTLRInputStream input(content);
    wenyanLexer lexer(&input);
    antlr4::CommonTokenStream tokens(&lexer);

    WenyanParserErrorListener errorListner;

    
    tokens.fill();

    // Only if you want to list the tokens
    if (OPT_PRINT_TOKEN) {
        for (auto token : tokens.getTokens()) {
            std::cout << token->toString() << std::endl;
        }
    }

    wenyanParser parser(&tokens);
    parser.removeErrorListeners();
    parser.addErrorListener(&errorListner);
    /* Type Checking */
    try {
        wenyanVisitor visitor;
        visitor.visitProgram(parser.program());
        //antlr4::tree::ParseTree* tree = parser.program();
        return 0;
    } catch (std::invalid_argument &e) {
        std::cout << e.what() << std::endl;
        return 10;
    }
}
