#ifndef _HANZI2NUM_H_
#define _HANZI2NUM_H_
#include <string>
#include <unordered_map>
#include <vector>
#include <cstdint>

std::unordered_map<std::string, int64_t> _hanzi_unit = {{"零",   0}, 
                                                        {"一",   1}, 
                                                        {"二",   2},
                                                        {"三",   3},
                                                        {"四",   4},
                                                        {"五",   5},
                                                        {"六",   6},
                                                        {"七",   7},
                                                        {"八",   8},
                                                        {"九",   9},
                                                        {"十",   10},
                                                        {"百",   100},
                                                        {"千",   1000},
                                                        {"萬",   10000},
                                                        {"億",   100000000}
                                                        };

class HanziItem {
private:
    int64_t _value;
    int64_t _unit;
    bool _zeroed;
    std::string _origin;
public:
    HanziItem(int64_t value, int64_t unit, std::string origin):_value(value), _unit(unit), _zeroed(false), _origin(origin) {}
    int64_t get_value() {
        return _value;
    }

    int64_t get_unit() {
        return _unit;
    }

    bool get_zeroed() {
        return _zeroed;
    }

    bool zerofy() {
        if (!_zeroed) {
            _zeroed = true;
            return true;
        }
        return false;
    }

    std::string get_origin() {
        return _origin;
    }

    std::string to_string() {
        return "value: " + std::to_string(_value) + 
               " unit: " + std::to_string(_unit) +
               " zeroed: " + std::to_string(_zeroed);
    }

};

int get_unit(std::string hanzi) {
    if (_hanzi_unit.count(hanzi) != 0) {
        return _hanzi_unit.at(hanzi);
    }
    return -1;
}

bool check_unit_legal(HanziItem* a, int64_t b_unit) {
    int64_t a_unit = a->get_unit();
    if (a_unit >= b_unit) {
        return false;
    }
    if (((a_unit == 100) && (b_unit == 1000)) || 
        ((a_unit == 10) && (b_unit == 1000)) ||
        ((a_unit == 10) && (b_unit == 100))) {
        return false;
    }
    return true;
}

int64_t hanzi2int(std::string hanzi) {
    std::vector<HanziItem*> s; // item stack
    HanziItem* last_item;
    bool flag = true;
    std::string msg;
    // std::cout << "hanzi " << hanzi << " len: " << hanzi.size() << std::endl;
    // for (int i = 0; i < hanzi.size(); i++) {
    //     std::cout << std::hex << unsigned(hanzi[i]) << " ";
    // }
    // std::cout << std::dec << std::endl;

    for (int i = 0; i < hanzi.size(); i += 3) {
        // get each hanzi  e.g. 十、一、百 
        std::string cur_str = hanzi.substr(i, 3);
        // std::cout << "cur_str: " << cur_str << std::endl;
        int64_t cur_int = get_unit(cur_str);
        // std::cout << "cur_int: " << cur_int << std::endl;
        if (s.size() == 0) {
            // if the stack is empty
            if (cur_int >= 100) {
                // starting hanzi cannot be 百
                msg = std::string("The first character cannot be ") + cur_str;
                flag = false;
                break;
            }
            if (cur_int < 10) {
                s.push_back(new HanziItem(cur_int, 1, cur_str));
            }
            else {
                s.push_back(new HanziItem(1, cur_int, cur_str));
            }
        }
        else {
            last_item = s[s.size() - 1];
            if (cur_int == last_item->get_unit()) {
                // repeated unit is illegal e.g. 百百
                msg = cur_str + std::string("cannot be repeated");
                flag = false;
                break;
            }
            else if (cur_int == 0) {
                if (!last_item->zerofy()) {
                    msg = std::string("零 cannot be repeated");
                    flag = false;
                    break;
                }
            }
            else if (cur_int > last_item->get_unit()) {
                // merge the units for this section
                int64_t acc = 0;
                while (s.size() > 0) {
                    last_item = s[s.size() - 1];
                    // std::cout << "last_item: " << last_item->get_origin()
                    //           << "cur_item: " << cur_str << std::endl;
                    if (last_item->get_unit() > cur_int) {
                        break;
                    }
                    if (!check_unit_legal(last_item, cur_int)) {
                        msg = std::string("neighbor units illegal: ") + last_item->get_origin() + cur_str;
                        flag = false;
                        break;
                    }
                    if (s.size() > 1) {
                        HanziItem* last_last_item = s[s.size() - 2];
                        if ((last_last_item->get_unit() < cur_int)) { 
                            if ((last_last_item->get_unit() > 10 * last_item->get_unit() * last_item->get_value()) &&
                                (!last_last_item->get_zeroed())) {
                                // e.g. 八萬八百
                                msg = std::string("There should be 零 between") + 
                                      last_last_item->get_origin() + 
                                      std::string(" and ") + 
                                      last_item->get_origin();
                                flag = false;
                                break;
                            }
                            if ((last_last_item->get_unit() < 10 * last_item->get_unit() * last_item->get_value()) &&
                                (last_last_item->get_zeroed())) {
                                // e.g. 八萬八百
                                msg = std::string("There should be no 零 between") + 
                                      last_last_item->get_origin() + 
                                      std::string(" and ") + 
                                      last_item->get_origin();
                                flag = false;
                                break;
                            }
                        }
                    }
                    acc += last_item->get_value() * last_item->get_unit();
                    delete last_item;
                    s.pop_back();
                }
                if (!flag) {
                    break;
                }
                if (acc == 0) {
                    msg = std::string("single ") + cur_str + std::string(" is illegal");
                    flag = false;
                    break;
                }
                s.push_back(new HanziItem(acc, cur_int, cur_str));
            }
            else {
                if (cur_int >= 100) {
                    msg = std::string("single ") + cur_str + std::string(" is illegal");
                    flag = false;
                    break;
                }
                s.push_back(new HanziItem(1, cur_int, cur_str));
            }
        }
        // for (HanziItem* p : s) {
        //     std::cout << p->to_string() << std::endl;
        // }
    }

    

    // get the final value
    int64_t result = 0;
    while (s.size() > 0) {
        last_item = s[s.size() - 1];
        if (s.size() > 1) {
            HanziItem* last_last_item = s[s.size() - 2];
            if ((last_last_item->get_unit() > 10 * last_item->get_unit() * last_item->get_value()) &&
                (!last_last_item->get_zeroed())) {
                // e.g. 八萬八百
                msg = std::string("There should be 零 between") + 
                      last_last_item->get_origin() + 
                      std::string(" and ") + 
                      last_item->get_origin();
                flag = false;
                break;
            }
            if ((last_last_item->get_unit() < 10 * last_item->get_unit() * last_item->get_value()) &&
                (last_last_item->get_zeroed())) {
                // e.g. 八萬八百
                msg = std::string("There should be no 零 between") + 
                      last_last_item->get_origin() + 
                      std::string(" and ") + 
                      last_item->get_origin();
                flag = false;
                break;
            }
        }
        result += last_item->get_value() * last_item->get_unit();
        delete last_item;
        s.pop_back();
    }

    // delete the allocated space;
    for (HanziItem* p : s) {
        delete p;
    }

    if (!flag) {
        throw msg;
    }

    return result;
}

#endif