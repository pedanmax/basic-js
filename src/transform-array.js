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
  try{
    // if(!Array.isArray(arr)) return '\'arr\' parameter must be an instance of the Array!'
    if (!Array.isArray(arr)) {
        throw new Error("'arr' parameter must be an instance of the Array!");
        }
    let res = arr.slice(0);
    if(arr[0] === '--discard-prev' || arr[0] === '--double-prev'){
        let res2 = res.splice(1);
        return res2
    } else if(arr[arr.length-1] === '--discard-next' || arr[arr.length-1] === '--double-next'){
        let res2 = res.slice(0,-1);
        return res2
    }
    for(let i = 0 ; i < res.length; i++){
        if(res[i] === '--double-next') {
            res[i] = res[i+1];
            for(let j =0; j<res.length;j++){
                if(res[j] === '--double-prev'){
                    res[j] = res[j-1]
                }
            }
        }
        else if(res[i] === '--discard-next'){
            res.splice(i,2);
            for(let j =0; j<res.length;j++){
                if(res[j] === '--double-prev' || res[j] === '--discard-prev'){
                    res.splice(j,1)
                }
            }
        }
        else if(res[i] === '--discard-prev'){
            res.splice(i-1,2);
            for(let j =0; j<res.length;j++){
                
            }
        }
    }
    return res
}
  catch(error){
    throw new Error('\'arr\' parameter must be an instance of the Array!')
  }
}

module.exports = {
  transform
};
