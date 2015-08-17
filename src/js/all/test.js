/**
 * grunt-boiler
 * all.js - sample_a.js
 * Author: sekiya
 * ---------------------------------------------------------------------- */
'use strict';

(function (WIN) {
  'use strict';

  function loop(func) {
    var count = arguments.length <= 1 || arguments[1] === undefined ? 3 : arguments[1];

    for (var i = 0; i < count; i++) {
      func();
    }
  }

  function sum() {
    for (var _len = arguments.length, numbers = Array(_len), _key = 0; _key < _len; _key++) {
      numbers[_key] = arguments[_key];
    }

    return numbers.reduce(function (a, b) {
      return a + b;
    });
  }

  loop(function () {
    console.log('hello');
  }); // hello hello hello
  console.log(sum(1, 2, 3, 4)); // 10
})(window);
//# sourceMappingURL=test.js.map
