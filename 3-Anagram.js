const anagram = function (s, t) {
  s = s.split("").sort().join("");
  t = t.split("").sort().join("");

  return s === t;
};

//anagram => ["a","n","a","g","r","a","m"] => [a,a,a,g,m,n,r] =>aaagmnr
//nagaram => ["n","a","g","a","r","a","m"] => [a,a,a,g,m,n,r] =>aaagmnr
