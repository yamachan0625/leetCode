// Input: nums = [0,1,2,3,4], index = [0,1,2,2,1]
// Output: [0,4,1,3,2]
// Explanation:
// nums       index     target
// 0            0        [0]
// 1            1        [0,1]
// 2            2        [0,1,2]
// 3            2        [0,1,3,2]
// 4            1        [0,4,1,3,2]

var createTargetArray = function (nums, index) {
  const arr = [];
  for (let i = 0; i < nums.length; i++) {
    // splice(先頭からn個目から, n個を削除, 要素を追加);
    arr.splice(index[i], 0, nums[i]);
  }
  return arr;
};
