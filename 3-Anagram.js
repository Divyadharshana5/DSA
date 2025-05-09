const isAnagram1 = function (s, t) {
  s = s.split("").sort().join("");
  t = t.split("").sort().join("");

  return s === t;
};
isAnagram();

//anagram => ["a","n","a","g","r","a","m"] => [a,a,a,g,m,n,r] =>aaagmnr
//nagaram => ["n","a","g","a","r","a","m"] => [a,a,a,g,m,n,r] =>aaagmnr

const isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  let obj1 = {};
  let obj2 = {};

  for (let i = 0; i < s.length; i++) {}
};
