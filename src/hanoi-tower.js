module.exports = function calculateHanoi(diskCounts, turnsSpeed) {

  const turns = Math.pow(2, diskCounts) - 1
  const seconds = Math.floor(turns / turnsSpeed * 3600)
  return { turns, seconds }
}
