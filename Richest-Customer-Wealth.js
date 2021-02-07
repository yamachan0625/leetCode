// Input: accounts = [[1,2,3],[3,2,1]]
// Output: 6
// Explanation:
// 1st customer has wealth = 1 + 2 + 3 = 6
// 2nd customer has wealth = 3 + 2 + 1 = 6
// Both customers are considered the richest with a wealth of 6 each, so return 6.

// 自分
var maximumWealth = function (accounts) {
  let welth = 0;
  for (let i = 0; i < accounts.length; i++) {
    let sum = 0;
    for (let j = 0; j < accounts[i].length; j++) {
      sum += accounts[i][j];
    }
    if (sum > welth) {
      welth = sum;
      sum = 0;
    }
  }
  return welth;
};

var maximumWealth = function (accounts) {
  return accounts
    .map((arr) => arr.reduce((acc, cur) => (acc += cur)))
    .sort((a, b) => a - b)[0];
};
