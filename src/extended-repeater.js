const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example

 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let repeatTimes = options.repeatTimes || 1;
  let addition = options.addition
  let additionRepeat = options.additionRepeatTimes || 1;
  let separator = options.separator || '+';
  let additionSeparator = options.additionSeparator || '|';
  let result = '';
  let preResult = '';
  
  typeof addition === 'boolean' || addition === null ? addition = String(addition) : addition = (addition) || '';

  for (let i = 0; i < additionRepeat; i++) {
      i !== additionRepeat - 1 ? preResult += addition + additionSeparator : preResult += addition;
  }

  for (let i = 0; i < repeatTimes; i++) {
      i !== repeatTimes - 1 ? result += str + preResult + separator : result += str + preResult;
  }
  return result;
}

module.exports = {
  repeater
};