// Input: nums = [1,2,3,4]
// Output: [2,4,4,4]
// Explanation: The first pair [1,2] means we have freq = 1 and val = 2 so we generate the array [2].
// The second pair [3,4] means we have freq = 3 and val = 4 so we generate [4,4,4].
// At the end the concatenation [2] + [4,4,4] is [2,4,4,4].

var decompressRLElist = function (nums) {
  const results = [];
  while (nums.length > 0) {
    let sliceArr = nums.splice(0, 2); // 配列の先頭から2つ取り出した新しい配列を作る spliceは破壊的
    for (let i = 0; i < sliceArr[0]; i++) {
      results.push(sliceArr[1]);
    }
  }
  return results;
};

var decompressRLElist = function (nums) {
  return nums.reduce((a, c, i, arr) => {
    return i % 2 ? [...a, ...Array(arr[i - 1]).fill(arr[i])] : a;
  }, []);
};
