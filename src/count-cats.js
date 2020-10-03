module.exports = function countCats(array) {

  if (typeof array !== 'object') return 0
  const result = array.reduce((sum, innerArray) => {
    return sum += innerArray.reduce((innerSum, elem) => {
      // return innerSum += elem.includes('^^') || elem.includes('^ ^') ? 1 : 0
      return innerSum += /^(\^{2}\s?)/.test(elem) ? 1 : 0
      }, 0)
    }, 0)
  return result
}
