module.exports = class DepthCalculator {

  calculateDepth(arr, depth = 1, depthArr = []) {

    depthArr.push(depth)

    arr.forEach(el => { if (Array.isArray(el)) this.calculateDepth(el, depth + 1, depthArr) })

    return Math.max.apply(null, depthArr)
  }
}
