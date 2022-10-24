const mongoose = require('mongoose')

const MONGO_USERNAME = process.env.MONGO_USERNAME
const MONGO_PASSWORD = process.env.MONGO_PASSWORD
const MONGO_HOST = process.env.MONGO_HOST
const MONGO_PORT = process.env.MONGO_PORT
const MONGO_DB_NAME = process.env.MONGO_DB_NAME
const MONGO_URL = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOST}:${MONGO_PORT}/${MONGO_DB_NAME}`

console.log(MONGO_URL)
mongoose.connect(MONGO_URL)
const database = mongoose.connection

module.exports = database
