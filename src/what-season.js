module.exports = function getSeason(date) {

  if (!date || date == '') return 'Unable to determine the time of year!'
  if (date instanceof Date && Object.getOwnPropertyNames(date).length == 0) {
    let result
    switch (date.getMonth()) {
      case 2: case 3: case 4:
        result = 'spring'
        break;
      case 5: case 6: case 7:
        result = 'summer'
        break;
      case 8: case 9: case 10:
        result = 'autumn'
        break;
      case 11: case 0: case 1:
        result = 'winter'
        break;
    }
    return result
  } else {
    throw new Error('argument is invalid')
  }
}
