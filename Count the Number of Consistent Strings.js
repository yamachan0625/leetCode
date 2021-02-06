// Input: allowed = "ab", words = ["ad","bd","aaab","baa","badab"]
// Output: 2
// Explanation: Strings "aaab" and "baa" are consistent since they only contain characters 'a' and 'b'.

var countConsistentStrings = function (allowed, words) {
  let result = 0;
  for (let i = 0; i < words.length; i++) {
    let num = 0;
    const word = words[i];
    for (let j = 0; j < word.length; j++) {
      if (allowed.includes(word[j])) num++; // 比較対象の文字列の中に含まれていればプラス
    }
    if (num === word.length) result++;
  }
  return result;
};
