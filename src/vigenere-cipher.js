const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
 class VigenereCipheringMachine {

  constructor(boolean) {
    if (boolean === false)
        this.boolean = false;
    else
        this.boolean = true;
}

  
alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

  encrypt(text, key) {
    if ((text === undefined) || (key === undefined)){
      throw new Error('Incorrect arguments!');
    }
      key = key.padEnd(text.length, key).toUpperCase().split('');
      text = text.toUpperCase().split('');
      text.forEach((elem, index) => {
        if (this.alphabet.indexOf(elem) === -1) {
          key.splice(index, 0, ' ');
        }
      });
      key = key.splice(0, text.length);
      text = text.map((elem, index) => {
        if (this.alphabet.indexOf(elem) !== -1) {
          let Index = this.alphabet.indexOf(elem) + this.alphabet.indexOf(key[index]);
          if (Index > 25) {
            return this.alphabet[Index - 26];
          } else {
            return this.alphabet[Index];
          }
        } else {
          return elem;
        }
      })
      return this.boolean === true ? text.join('') : text.reverse().join('');
  }

  decrypt(encryptedText, key) {
    if ((encryptedText === undefined) || (key === undefined)){
      throw new Error('Incorrect arguments!');
    }
    key = key.padEnd(encryptedText.length, key).toUpperCase().split('');
    encryptedText = encryptedText.toUpperCase().split('');
    encryptedText.forEach((elem, index) => {
      if (this.alphabet.indexOf(elem) === -1) {
        key.splice(index, 0, ' ');
      }
    });
    key = key.splice(0, encryptedText.length);
    encryptedText = encryptedText.map((elem, index) => {
      if (this.alphabet.indexOf(elem) !== -1) {
        let curIndex = this.alphabet.indexOf(elem) - this.alphabet.indexOf(key[index]);
        if (curIndex < 0) {
          return this.alphabet[this.alphabet.indexOf(elem) + 26 - this.alphabet.indexOf(key[index])];
        } else {
          return this.alphabet[this.alphabet.indexOf(elem) - this.alphabet.indexOf(key[index])];
        }
      } else {
        return elem;
      }
    })
    return this.boolean === true ? encryptedText.join('') : encryptedText.reverse().join('');
  }
}
module.exports = {
  VigenereCipheringMachine
};
