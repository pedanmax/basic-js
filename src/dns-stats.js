const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let res = [];
    for(let i = 0; i< domains.length; i++){
        let domen = [];
        let oneArr = domains[i].split('.').reverse();
        let item = '';
        for(let j = 0 ; j < oneArr.length; j++){
            item = item +'.' + oneArr[j];
            domen.push(item)
        }
        res.push(domen)
    }
    res  = res.reverse().flat();
    let result = {};
    for (let i = 0; i < res.length; ++i){
    let a = res[i];
    if (result[a] != undefined)
        ++result[a];
    else
        result[a] = 1;
    }
    return result
}

module.exports = {
  getDNSStats
};
