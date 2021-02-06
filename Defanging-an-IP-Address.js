// Input: address = "1.1.1.1"
// Output: "1[.]1[.]1[.]1"

// 自分
var defangIPaddr = function (address) {
  return address.split('.').join('[.]');
};

// 正規表現を利用
var defangIPaddr = function (address) {
  return address.replace(/\./g, '[.]');
};
