const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  let res = arr.slice(0);
  for(let i = 0 ; i < res.length; i++){
      if(res[i] === '--double-next') {
          res[i] = res[i+1];
      }
      else if(res[i] == '--discard-prev'){
          res.splice(i-1,2)
      }
  }
  return res
}

module.exports = {
  transform
};
