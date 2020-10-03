class VigenereCipheringMachine {

  constructor(mod = true) {
    this.mod = mod
    this.codeString = 'ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXY'
  }

  encrypt(message, key) {
    if (!message || !key) throw new Error()
    let result = ''
    let delta = 0
    for (let i = 0; i < message.length; i++) {
      if (/[A-Za-z]/.test(message[i])) {
        result += this.encryptOne(message[i], key[(i - delta) % key.length].toUpperCase())
      } else {
        result += message[i]
        delta++
      }
    }
    return this.mod ? result : this.reverseString(result)
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) throw new Error()
    let result = ''
    let delta = 0
    for (let i = 0; i < encryptedMessage.length; i++) {
      if (/[A-Za-z]/.test(encryptedMessage[i])) {
        result += this.decryptOne(encryptedMessage[i], key[(i - delta) % key.length].toUpperCase())
      } else {
        result += encryptedMessage[i]
        delta++
      }
    }
    return this.mod ? result : this.reverseString(result)
  }

  decryptOne(keySimbol, cryptSimbol) {
    const codeStr = this.cryptHelper(cryptSimbol)
    const pos = codeStr.indexOf(keySimbol)
    return this.codeString.substring(pos, pos + 1)
  }

  encryptOne(keySimbol, messageSimbol) {
    const codeStr = this.cryptHelper(keySimbol)
    const pos = this.codeString.indexOf(messageSimbol)
    return codeStr.substring(pos, pos + 1)
  }

  cryptHelper(simb) {
    const delta = this.codeString.indexOf(simb.toUpperCase())
    return this.codeString.substring(delta, delta + 26)
  }

  reverseString(str) {
    return str.split('').reverse().join('')
  }
}

module.exports = VigenereCipheringMachine
