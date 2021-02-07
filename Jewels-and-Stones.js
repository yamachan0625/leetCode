// Input: jewels = "aA", stones = "aAAbbbb"
// Output: 3

var numJewelsInStones = function (jewels, stones) {
  const stonesArr = stones.split('');
  const jewelsArr = jewels.split('');
  let result = 0;
  for (let i = 0; i < stonesArr.length; i++) {
    for (let j = 0; j < jewelsArr.length; j++) {
      if (stonesArr[i] === jewelsArr[j]) result++;
    }
  }
  return result;
};

var numJewelsInStones = function (jewels, stones) {
  const arr = new Set(jewels); // Setで重複を削除
  return stones.split('').reduce((a, c) => {
    return a + arr.has(c); // a + boolean
  }, 0);
};
