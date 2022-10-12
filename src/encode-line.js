const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let res = '';
  let n = str.length;
  for (let i = 0; i < n; i++){
    let count = 1;
    while (i < n - 1 && str[i] == str[i+1]){
      count++;
      i++;
    }
    res = res + count + str[i]
  }
  for(let i = 0; i < res.length; i++){
    if(res[i] ==='1') {
      res = res.replace(res[i], '')
    }
  }
  return res
}

module.exports = {
  encodeLine
};
