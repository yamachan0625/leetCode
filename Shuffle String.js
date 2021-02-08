// Input: s = "codeleet", indices = [4,5,6,7,0,2,1,3]
// Output: "leetcode"
// Explanation: As shown, "codeleet" becomes "leetcode" after shuffling.

// 無駄なことしすぎた
var restoreString = function (s, indices) {
  const arr = s.split('').map((str, i) => [str, indices[i]]);
  return arr
    .sort((a, b) => a[1] - b[1])
    .map((a) => a[0])
    .join('');
};

// length分のから配列を作成しておいてそこに添字に沿った文字列を置き換える
var restoreString = function (s, indices) {
  let result = new Array(indices.length);
  for (let i = 0; i < indices.length; i++) {
    result[indices[i]] = s[i];
  }
  return result.join('');
};
