// const chainMaker = require('./src/simple-chain.js');


// console.log(chainMaker.addLink('8.963').reverseChain().reverseChain().reverseChain().reverseChain().addLink({ 0: 'first', 1: 'second', 'length': 2 }).reverseChain().addLink(3.14).addLink('DEF').reverseChain().finishChain());
// console.log('( DEF )~~( 3.14 )~~( 8.963 )~~( [object Object] )')


const VigenereCipheringMachine = require('./src/vigenere-cipher.js');
const directMachine = new VigenereCipheringMachine();

// console.log(directMachine.encrypt('LEARN FRONTEND DEVELOPMENT :\)', 'js'), 'UWJJW XAGWLNFM VNNNDXHVWWL :\)');
// console.log(directMachine.decrypt('UWJJW XAGWLNFM VNNNDXHVWWL :\)', 'js'), 'LEARN FRONTEND DEVELOPMENT :\)');
console.log(directMachine.decrypt('HSVD AJAL ^^', 'behappy'), 'GOOD LUCK ^^');


// const repeater = require('./src/extended-repeater.js');
// console.log(repeater(null, { repeatTimes: 3, separator: '??? ', addition: null, additionRepeatTimes: 3, additionSeparator: '!!!' }));


// const calculateHanoi = require('./src/hanoi-tower.js');
// console.log(calculateHanoi(5, 4074));


// const DepthCalculator = require('./src/recursive-depth.js');
// const depthCalc = new DepthCalculator();
// const { calculateDepth } = depthCalc;
// const arr = ['--discard-prev', 1, 2, 3, '--discard-prev', 4, 5, '--double-next']
// console.log(calculateDepth(arr));


// const transform = require('./src/transform-array.js');
// const arr = [1, 2, 3, '--discard-next', 1337, '--double-prev', 4, 5]
// const res = [1, 2, 3, 4, 5]
// console.log(transform(arr));
// console.log(res);


// const getSeason = require('./src/what-season.js');
// const date = new Date(2018, 4, 17, 11, 27, 4, 321)
// const deeperFakeDate = {
//     toString() {
//         return Date.prototype.toString.call(new Date());
//     },
//     getMonth() {
//         return Date.prototype.getMonth.call(new Date());
//     },
//     getFullYear() {
//         return Date.prototype.getFullYear.call(new Date(1994, 1, 2, 3, 4, 5));
//     },
//     getDate() {
//         return Date.prototype.getDate.call(new Date(2020, 0, 3, 4, 5, 6));
//     },
//     getHours() {
//         return Date.prototype.getHours.call(new Date(1978, 2, 4, 5, 6, 7));
//     },
//     getMinutes() {
//         return Date.prototype.getMinutes.call(new Date(202, 3, 5, 6, 7, 8));
//     },
//     getSeconds() {
//         return Date.prototype.getSeconds.call(new Date(1, 4, 6, 7, 8, 9));
//     },
//     getMilliseconds() {
//         return Date.prototype.getMilliseconds.call(new Date(2019, 7, 8, 9, 10, 11));
//     },
//     getDay() {
//         return Date.prototype.getDay.call(new Date(1812, 8, 9, 10, 11, 12));
//     }
// };
// Object.setPrototypeOf(deeperFakeDate, Object.getPrototypeOf(new Date()));
// console.log(getSeason(deeperFakeDate))


// const dreamTeam = require('./src/dream-team.js');
// const members = ['Peter', 'Adam', 'Gary', 'Bobby', 'Philip', 'Andrea', 'Evelyn', 'Evelyn', 'Kimberly', 'Denise']
// console.log(dreamTeam(members));


// const carbonDating = require('./src/carbon-dating.js');
// const sampleActivity = 'ACTIVITY OVER 9000'
// console.log(carbonDating(sampleActivity));


// const countCats = require('./src/count-cats.js');
// const testArr = [
//         ["^^", ".", null, 0, false, "", NaN, 2, true, "dasdas", 1],
//         [2, NaN, "", false, "^^", "^^"],
//         [false, ".", 1, 0, "^^", null, "", 2, "dasdas", "^^", NaN, true],
//         ["."],
//         [false, ".", 1, 0, "^^", true, null, "^^", "", NaN, 2, "dasdas"],
//         [false, NaN, 1, 0, ".", "^^"],
//         [null, 1, NaN],
//         [],
//       ]
// console.log(countCats(testArr));