const Sequelize = require('sequelize')
const config = require('./dbJson.json')
var db = new Sequelize(config.development)

module.exports = db