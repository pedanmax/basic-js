const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */

class DepthCalculator {
  calculateDepth(arr) {
    let depth = 0; 
    if (Array.isArray(arr)) { 
        for (let i in arr) { 
            depth = Math.max(depth, this.calculateDepth(arr[i])); 
        } 
        depth++; 
    } 
    return depth; 
  }
}
const instance = new DepthCalculator();
const calculateDepth = instance.calculateDepth.bind(instance);
module.exports = {
  DepthCalculator
};
