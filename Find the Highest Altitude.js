// Input: gain = [-5,1,5,0,-7]
// Output: 1
// Explanation: The altitudes are [0,-5,-4,1,1,-6]. The highest is 1.
var largestAltitude = function (gain) {
  let num = 0;
  const arr = [];
  for (let i = 0; i < gain.length; i++) {
    arr.push((num += gain[i]));
  }
  return [0, ...arr].sort((a, b) => b - a)[0];
};

var largestAltitude = function (gain) {
  return Math.max(...gain.reduce((a, c, i) => [...a, a[i] + c], [0]));
};
