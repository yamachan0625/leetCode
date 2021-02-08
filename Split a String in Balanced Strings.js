// Input: s = "RLRRLLRLRL"
// Output: 4
// Explanation: s can be split into "RL", "RRLL", "RL", "RL", each substring contains same number of 'L' and 'R'.

var balancedStringSplit = function (s) {
  let num = 0;
  return s.split('').reduce((a, c) => {
    c === 'R' ? num++ : num--;
    // ++aでプラスを評価してからreturnしない場合無効になる
    return num === 0 ? ++a : a;
  }, 0);
};
