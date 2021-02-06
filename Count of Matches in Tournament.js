// Input: n = 7
// Output: 6
// Explanation: Details of the tournament:
// - 1st Round: Teams = 7, Matches = 3, and 4 teams advance.
// - 2nd Round: Teams = 4, Matches = 2, and 2 teams advance.
// - 3rd Round: Teams = 2, Matches = 1, and 1 team is declared the winner.
// Total number of matches = 3 + 2 + 1 = 6.
var numberOfMatches = function (n) {
  let teams = n;
  let result = 0;
  while (teams !== 1) {
    if (teams % 2 === 0) {
      teams = teams / 2;
      result += teams;
    } else {
      teams = (teams - 1) / 2 + 1;
      result += teams - 1;
    }
  }
  return result;
};
