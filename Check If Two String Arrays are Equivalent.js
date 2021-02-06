// Input: word1 = ["ab", "c"], word2 = ["a", "bc"]
// Output: true
// Explanation:
// word1 represents string "ab" + "c" -> "abc"
// word2 represents string "a" + "bc" -> "abc"
// The strings are the same, so return true.

// 参照まで見る
var arrayStringsAreEqual = function (word1, word2) {
  const joinWord1 = [...word1.join('')].sort();
  const joinWord2 = [...word2.join('')].sort();
  let count = 0;
  for (let i = 0; i < joinWord1.length; i++) {
    if (joinWord1[i] === joinWord2[i]) count++;
  }
  return count === joinWord1.length;
};

// simpleSolution
var arrayStringsAreEqual = function (word1, word2) {
  return word1.reduce((a, c) => a + c) === word2.reduce((a, c) => a + c);
};
