#pragma once

#include "antlr4-runtime.h"
#include "wenyanParser.h"
#include "symbolTable.h"
#include "hanzi2num.h"

class WenyanVisitorErrorHandler {
public:
    void syntaxError(
        size_t line,
        size_t charPositionInLine,
        const std::string &msg) {
            std::ostrstream s;
            s << "Line(" << line << ":" << charPositionInLine << ") Error(" << msg << ")";
            throw std::invalid_argument(s.str());
        }
};


class  wenyanVisitor : public antlr4::tree::AbstractParseTreeVisitor {
    typedef std::string Symbol;
    typedef std::string Type;
private:
    SymbolTable<Symbol, Type> symTable;
    WenyanVisitorErrorHandler _err_handler;
public:
    antlrcpp::Any visitProgram(wenyanParser::ProgramContext *ctx) {
        symTable.enter_scope();
        std::cout << "visit program" << std::endl;
        for (wenyanParser::StatementContext* statement : ctx->statement()) {
            bool result = visitStatement(statement);
            if (!result) {
                return false;
            }
        }
        symTable.exit_scope();
        return true;
    }

    antlrcpp::Any visitStatement(wenyanParser::StatementContext *ctx) {
        std::cout << "visit statement" << std::endl;
        wenyanParser::Declare_statementContext* declare_ctx = ctx->declare_statement();
        wenyanParser::Define_statementContext* define_ctx = ctx->define_statement();
        wenyanParser::Print_statementContext* print_ctx = ctx->print_statement();
        wenyanParser::For_statementContext* for_ctx = ctx->for_statement();
        wenyanParser::Function_statementContext* function_ctx = ctx->function_statement();
        wenyanParser::If_statementContext* if_ctx = ctx->if_statement();
        wenyanParser::Return_statementContext* return_ctx = ctx->return_statement();
        wenyanParser::Math_statementContext* math_ctx = ctx->math_statement();
        wenyanParser::Assign_statementContext* assign_ctx = ctx->assign_statement();
        wenyanParser::Import_statementContext* import_ctx = ctx->import_statement();
        wenyanParser::Object_statementContext* object_ctx = ctx->object_statement();
        wenyanParser::Pick_up_statementContext* pick_up_ctx = ctx->pick_up_statement();
        wenyanParser::Array_statementContext* array_ctx = ctx->array_statement();
        wenyanParser::Clean_statementContext* clean_ctx = ctx->clean_statement();
        antlr4::tree::TerminalNode* break_terminal = ctx->BREAK();
        bool result = true;
        if (declare_ctx != NULL) {
            result = visitDeclare_statement(declare_ctx);
            // std::cout << "declare_statement Not Implemented" << std::endl;
        }
        else if (define_ctx != NULL) {
            std::cout << "define_statement Not Implemented" << std::endl;
        } 
        else if (print_ctx != NULL) {
            std::cout << "print_statement Not Implemented" << std::endl;
        }
        else if (for_ctx != NULL) {
            std::cout << "for_statement Not Implemented" << std::endl;
        }
        else if (function_ctx != NULL) {
            std::cout << "function_statement Not Implemented" << std::endl;
        }
        else if (if_ctx != NULL) {
            std::cout << "if_statement Not Implemented" << std::endl;
        }
        else if (return_ctx != NULL) {
            std::cout << "return_statement Not Implemented" << std::endl;
        }
        else if (math_ctx != NULL) {
            std::cout << "math_statement Not Implemented" << std::endl;
        }
        else if (assign_ctx != NULL) {
            std::cout << "assign_statement Not Implemented" << std::endl;
        }
        else if (import_ctx != NULL) {
            std::cout << "import_statement Not Implemented" << std::endl;
        }
        else if (object_ctx != NULL) {
            std::cout << "object_statement Not Implemented" << std::endl;
        }
        else if (pick_up_ctx != NULL) {
            std::cout << "pick_up_statement Not Implemented" << std::endl;
        }
        else if (array_ctx != NULL) {
            std::cout << "array_statement Not Implemented" << std::endl;
        }
        else if (clean_ctx != NULL) {
            std::cout << "clean_statement Not Implemented" << std::endl;
        }
        else if (break_terminal != NULL) {
            std::cout << "break_statement Not Implemented" << std::endl;
        }
        return result;
    }

    antlrcpp::Any visitPick_up_statement(wenyanParser::Pick_up_statementContext *context);

    antlrcpp::Any visitArray_statement(wenyanParser::Array_statementContext *context);

    antlrcpp::Any visitArray_cat_statement(wenyanParser::Array_cat_statementContext *context);

    antlrcpp::Any visitArray_push_statement(wenyanParser::Array_push_statementContext *context);

    antlrcpp::Any visitFunction_statement(wenyanParser::Function_statementContext *context);

    antlrcpp::Any visitFunction_call_statement(wenyanParser::Function_call_statementContext *context);

    antlrcpp::Any visitFunction_plain_call(wenyanParser::Function_plain_callContext *context);

    antlrcpp::Any visitFunction_nested_call(wenyanParser::Function_nested_callContext *context);

    antlrcpp::Any visitFunction_define_statement(wenyanParser::Function_define_statementContext *context);

    antlrcpp::Any visitIf_statement(wenyanParser::If_statementContext *context);

    antlrcpp::Any visitIf_expression(wenyanParser::If_expressionContext *context);

    antlrcpp::Any visitUnary_if_expression(wenyanParser::Unary_if_expressionContext *context);

    antlrcpp::Any visitBinary_if_expression(wenyanParser::Binary_if_expressionContext *context);

    antlrcpp::Any visitDeclare_statement(wenyanParser::Declare_statementContext *ctx) {
        antlr4::tree::TerminalNode* declare_num_node = ctx->INT_NUM();
        antlr4::tree::TerminalNode* declare_type_node = ctx->TYPE();
        std::string declare_num_str = declare_num_node->getText();
        std::string declare_type_str = declare_type_node->getText();
        std::cout << "str: " << declare_num_str << " : " << declare_type_str << std::endl;
        int64_t declare_num;
        try {
            declare_num = hanzi2int(declare_num_str);
        }
        catch (std::string msg) {
            _err_handler.syntaxError(declare_num_node->getSymbol()->getLine(),
                                     declare_num_node->getSymbol()->getCharPositionInLine(),
                                     std::string("[Error] Declare statement: ") + msg);
        }

        std::cout << "declare number: " << declare_num << std::endl;
        return true;
    }

    antlrcpp::Any visitDefine_statement(wenyanParser::Define_statementContext *context);

    antlrcpp::Any visitReference_multi_statement(wenyanParser::Reference_multi_statementContext *context);

    antlrcpp::Any visitReference_single_statement(wenyanParser::Reference_single_statementContext *context);

    antlrcpp::Any visitInit_define_statement(wenyanParser::Init_define_statementContext *context);

    antlrcpp::Any visitFor_statement(wenyanParser::For_statementContext *context);

    antlrcpp::Any visitFor_arr_statement(wenyanParser::For_arr_statementContext *context);

    antlrcpp::Any visitFor_enum_statement(wenyanParser::For_enum_statementContext *context);

    antlrcpp::Any visitFor_while_statement(wenyanParser::For_while_statementContext *context);

    antlrcpp::Any visitMath_statement(wenyanParser::Math_statementContext *context);

    antlrcpp::Any visitArith_math_statement(wenyanParser::Arith_math_statementContext *context);

    antlrcpp::Any visitArith_binary_math(wenyanParser::Arith_binary_mathContext *context);

    antlrcpp::Any visitArith_unary_math(wenyanParser::Arith_unary_mathContext *context);

    antlrcpp::Any visitMod_math_statement(wenyanParser::Mod_math_statementContext *context);

    antlrcpp::Any visitLogic_math_statement(wenyanParser::Logic_math_statementContext *context);

    antlrcpp::Any visitAssign_statement(wenyanParser::Assign_statementContext *context);

    antlrcpp::Any visitReturn_statement(wenyanParser::Return_statementContext *context);

    antlrcpp::Any visitImport_statement(wenyanParser::Import_statementContext *context);

    antlrcpp::Any visitObject_statement(wenyanParser::Object_statementContext *context);

    antlrcpp::Any visitObject_define_statement(wenyanParser::Object_define_statementContext *context);

    antlrcpp::Any visitData(wenyanParser::DataContext *context);

    antlrcpp::Any visitPreposition(wenyanParser::PrepositionContext *context);

    antlrcpp::Any visitPrint_statement(wenyanParser::Print_statementContext *context);

    antlrcpp::Any visitComment(wenyanParser::CommentContext *context);

    antlrcpp::Any visitClean_statement(wenyanParser::Clean_statementContext *context);


};

