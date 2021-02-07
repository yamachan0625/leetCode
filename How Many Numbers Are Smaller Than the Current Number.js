// Input: nums = [8,1,2,2,3]
// Output: [4,0,1,1,3]
// Explanation:
// For nums[0]=8 there exist four smaller numbers than it (1, 2, 2 and 3).
// For nums[1]=1 does not exist any smaller number than it.
// For nums[2]=2 there exist one smaller number than it (1).
// For nums[3]=2 there exist one smaller number than it (1).
// For nums[4]=3 there exist three smaller numbers than it (1, 2 and 2).
var smallerNumbersThanCurrent = function (nums) {
  let arr = [];
  for (let i = 0; i < nums.length; i++) {
    let n = 0;
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] > nums[j]) n++;
    }
    arr.push(n);
  }
  return arr;
};

var smallerNumbersThanCurrent = function (nums) {
  // sortは破壊的変更を含むメソッド
  const orderNums = [...nums].sort((a, b) => a - b);
  return nums.map((num) => orderNums.indexOf(num)); // indexOfは最初に見つけた添字を返す
};

function smallerNumbersThanCurrent(nums) {
  const sorted = Array.from(nums).sort((n1, n2) => n2 - n1);
  const map = new Map(
    sorted.map((num, index) => [num, nums.length - index - 1]) // 2次元配列でMapオブジェクトの作成
  );
  console.log(sorted.map((num, index) => [num, nums.length - index - 1]));
  return nums.map((num) => map.get(num));
}
