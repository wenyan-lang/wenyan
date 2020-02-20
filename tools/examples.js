function loadExamples() {
  const examples = {};

  try {
    const raw = require.context("../examples", false, /.*\.wy$/);

    raw.keys().forEach(key => {
      examples[key.slice(2, -3)] = raw(key).default;
    });
  } catch (e) {}

  return examples;
}

module.exports = {
  examples: loadExamples(),
  examplesAlias: {
    beer: "九十九瓶啤酒",
    collatz: "考拉兹猜想",
    collatz2: "考拉兹猜想二",
    divination: "春秋古筮法",
    draw_heart: "畫心",
    eightqueens: "八皇后問題",
    euclidean: "歐幾里得法",
    factorial: "階乘",
    fibonacci: "斐氏列",
    fibonacci2: "斐氏列二",
    fibonacci_array: "斐氏列三",
    fizzbuzz: "嘶嘶嗡嗡",
    hanoi: "漢諾塔",
    hanoi_stack: "漢諾塔二",
    helloworld: "問天地好在",
    "helloworld+": "問天地好在+",
    import: "導入示例",
    crt: "大衍總數",
    serialization: "渾沌經",
    linglong_tower: "玲瓏塔",
    mandelbrot: "曼德博集",
    mergesort: "歸併排序",
    macro: "宏示例",
    misc: "雜項",
    modinv: "大衍求一術",
    multiplication_table: "乘算口訣",
    nested_fun: "嵌套調用示例",
    obj: "对象示例",
    pi_leibniz: "萊布尼茲圓周率估算",
    pi_liuhui: "劉徽割圓術求圓周率",
    quicksort: "快速排序",
    quicksort_inplace: "快速排序二",
    quine: "自產生程式",
    quine2: "自產生程式二",
    selectionsort: "選擇排序",
    sieve: "埃氏篩",
    sqrt_newton: "牛頓求根法",
    turing: "圖靈機",
    tree: "畫樹",
    tree2: "畫樹二",
    try: "異常處理示例",
    clock: "畫鐘",
    pascal_triangle: "賈憲三角",
    zh_sqrt: "增乘開平方"
  },
  examplesLinks: {
    fizzbuzz: "[1]: https://en.wikipedia.org/wiki/Fizz_buzz",
    quine: "[2]: https://zh.wikipedia.org/wiki/自產生程式"
  }
};
