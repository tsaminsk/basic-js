module.exports = function createDreamTeam(members) {

  if (typeof members == 'object' && Array.isArray(members)) {
    const result = []
    members.forEach(name => {
      if (typeof name == 'string') result.push(name.trim()[0].toUpperCase())
    })
    return result.sort().join('')
  } else return false
}
