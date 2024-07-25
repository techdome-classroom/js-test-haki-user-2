const decodeTheRing = function (s, p) {
  let n = s.length;
  let m = p.length;
  let i = 0;
  console.log({s, p})
  let j = 0;
  while(j<m && i<n) {
    while(i<n && j<m && p[j]===s[i]) {
      i++;
      j++;
    }
    if(p[j] === "?") {
      i++;
      j++;
    } else if(p[j] === "*") {
      // while(j<m && p[j]==="*") {
      //   j++;
      // }
      let k = m-1;
      while(k>=j && p[k]!=="*") {
        k--;
      }
      // console.log({k, j, m})
      j = k;
      k = m-1;
      let z = n-1;
      while(j<k && i<z && s[z]===p[k]) {
        // console.log({j, k, z, i, m});
        k--;
        z--;
      }
      // console.log({j, k, m})
      return j===k;
    } else j++;
  }
  return i===n && j===m;
};

console.log(decodeTheRing("abc", "a*"));
  
  module.exports = decodeTheRing;