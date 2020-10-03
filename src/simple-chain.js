const chainMaker = {

  _result: [],

  getLength() {
    return this._result.length
  },

  addLink(value) {
    this._result.push(String(value))
    return this
  },

  removeLink(position) {
    if (typeof position != 'number' || position <= 0 || position > this._result.length) {
      this._result = []
      throw new Error('Егор')
    }
    this._result.splice(position - 1, 1)
    return this
  },

  reverseChain() {
    this._result.reverse()
    return this
  },

  finishChain() {
    let result = '';
    if (this._result.length > 0) {
      this._result.forEach((el, ind) => {
        const prefix = ind != 0 ? '~~' : ''
        result += prefix + '( ' + el + ' )'
      })
    }
    this._result = []
    return result
  }
};

module.exports = chainMaker;
