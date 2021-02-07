// Input: nums = [1,2,3,1,1,3]
// Output: 4
// Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.
var numIdenticalPairs = function (nums) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) count++;
    }
  }
  return count;
};

var numIdenticalPairs = function (nums) {
  let obj = {};
  let counter = 0;

  for (val of nums) {
    if (obj[val]) {
      counter += obj[val];
      obj[val]++;
    } else {
      obj[val] = 1;
    }
  }
  console.log(obj);
  return counter;
};
