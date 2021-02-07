// Input: (candies = [2, 3, 5, 1, 3]), (extraCandies = 3);
// Output: [true, true, true, false, true];

var kidsWithCandies = function (candies, extraCandies) {
  const maxNum = Math.max(...candies);
  return candies.map((num) => num + extraCandies >= maxNum);
};
