const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  arr : [],
  getLength() {
      this.arr.length;
      return this;
  },
  addLink(value) {
      if(typeof value === 'undefined'){
          this.arr.push(` () `);
      } else {
          this.arr.push(`( ${value} )`);
      }
      return this;
  },
  removeLink(position) {
      let removeItem = position - 1;
      if(this.arr[removeItem] === undefined){
          this.arr = [];
          throw new Error('You can\'t remove incorrect link!');
          
      } else{
          this.arr.splice(removeItem,1);
      }
      return this;
  },
  reverseChain() {
      this.arr.reverse();
      return this;
  },
  finishChain() {
      let res = this.arr.join('~~'); 
      this.arr = [];
      return res;
  }
};

module.exports = {
  chainMaker
};
