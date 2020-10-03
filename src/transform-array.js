module.exports = function transform(arr) {

  if (!Array.isArray(arr)) throw new Error('the arr is not an Array')
  else {
    let result = []
    let stateAction = null
    arr.forEach((el, ind) => {
      if (typeof el == 'string' && /^[-]{2}[d]/.test(el)) {
        switch (el) {
          case '--double-next':
            stateAction = 'double'
            break;
          case '--double-prev':
            result.length >= 1 && arr[ind - 2] !== '--discard-next' ? result.push(result[result.length - 1]) : null
            break;
          case '--discard-next':
            stateAction = 'discard'
            break;
          case '--discard-prev':
            result.length >= 1 && arr[ind - 2] !== '--discard-next' ? result.pop() : null
            break;
        }
      } else {
        if (stateAction != null) {
          if (stateAction == 'double') {
            result.push(el); result.push(el)
          }
        } else result.push(el)
        stateAction = null
      }
    })
    return result
  }
};
