const isPalindrome = function (x) {
  return x < 0 ? false : x === +x.toString().split("").reverse().join("");
};
const res = isPalindrome(121);
console.log(res);

//toString => 121="121"
//split 121 => ["1","2","1"]
//x === x.toString().split("").reverse() => 121="121" =>["1","2","1"] =>["1","2","1"] =>"121"
