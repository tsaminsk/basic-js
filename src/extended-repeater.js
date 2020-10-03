module.exports = function repeater(str, options) {

  str = String(str)

  if (options.addition !== undefined) {
    let addition = String(options.addition)
    if (options.additionRepeatTimes) {
      const additionSeparator = options.additionSeparator || '|'
      for (let i = 1; i < options.additionRepeatTimes; i++) {
        addition += additionSeparator + options.addition
      }
    }
    str = str + addition
  }

  let result = str
  const separator = options.separator || '+'
  if (options.repeatTimes) {
    for (let i = 1; i < options.repeatTimes; i++) {
      result += separator + str
    }
  }
  return result
}