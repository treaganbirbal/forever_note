const pgp = require('pg-promise')({})
const db = pgp('postgres://localhost:5432/forever_note')

module.exports = db 