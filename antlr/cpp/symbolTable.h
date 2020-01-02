#ifndef _SYMBOL_TABLE_H_
#define _SYMBOL_TABLE_H_
#include <string>
#include <vector>

template <class SYM, class DATA>
class SymbolTableEntry {
private:
    SYM     id;
    DATA*   data;
public:
    SymbolTableEntry(SYM x, DATA* d): id(x), data(d) { }
    ~SymbolTableEntry() {
        delete data;
        std::cout << "delete symbol table entry" << std::endl;
    }
    SYM     get_id() const      { return id;   }
    DATA*   get_data() const    { return data; }
};


template <class SYM, class DATA>
class SymbolTable {
    typedef SymbolTableEntry<SYM, DATA> ScopeEntry;
    typedef std::vector<ScopeEntry*> Scope;
    typedef std::vector<Scope*> ScopeStack;
private:
    ScopeStack table_stack;
public:
    SymbolTable() { }

    /* start a new nested scope */
    void enter_scope() {
        table_stack.push_back(new Scope());
    }

    /* add a symbol x to the table */
    ScopeEntry* add_symbol(SYM x, DATA* d) {
        ScopeEntry* item = new ScopeEntry(x, d);
        table_stack.top()->push_back(item);
        return item;
    }

    /* finds current x in all scope or null */
    DATA* check_all_scope(SYM x) {
        if (table_stack.size() == 0) {
            return NULL;
        }

        for (int i = table_stack.size(); i >= 0; i--) {
            Scope& current_scope = *(table_stack[i]);
            int current_idx = current_scope->size();
            for (; current_idx >= 0; current_idx--) {
                if (current_scope[current_idx]->get_id() == x) {
                    return current_scope[current_idx]->get_data();
                }
            }    
        }
        
        return NULL;
    }

    /* check_scope: true if x defined in current scope*/
    DATA* check_cur_scope(SYM x) {
        if (table_stack.size() == 0) {
            return NULL;
        }
        Scope& current_scope = *(table_stack.top());
        int current_idx = current_scope->size();
        for (; current_idx >= 0; current_idx--) {
            if (current_scope[current_idx]->get_id() == x) {
                return current_scope[current_idx]->get_data();
            }
        }
        return NULL;
    }

    void exit_scope() {
        if (table_stack.size() == 0) {
            std::cerr <<  "Symbol Table Error: no scope to exit" << std::endl;
            return;
        }
        table_stack.pop_back();
    }
};
#endif