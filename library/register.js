const fs = require('fs')
const crypto = require('crypto')

const _users = JSON.parse(fs.readFileSync('./library/database/pengguna.json'))

function createSerial(size) {
    return crypto.randomBytes(size).toString('hex').slice(0, size)
}

function addRegisteredUser(userid, name, serials) {
    const obj = { id: userid, name: name, serial: serials }
    _users.push(obj)
    fs.writeFileSync('./library/database/pengguna.json', JSON.stringify(_users))
}

module.exports = { createSerial, addRegisteredUser }