// Input: n = 234
// Output: 15
// Explanation:
// Product of digits = 2 * 3 * 4 = 24
// Sum of digits = 2 + 3 + 4 = 9
// Result = 24 - 9 = 15

var subtractProductAndSum = function (n) {
  let a = 1;
  let b = 0;
  n.toString()
    .split('')
    .forEach((s) => {
      a *= Number(s);
      b += Number(s);
    });
  return a - b;
};
