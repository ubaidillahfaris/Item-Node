const Sequelize = require('sequelize')
const  db  = require('../config/database')

var items_detail = db.define('item_detail',
    {
        id : {
          type: Sequelize.INTEGER,
          primaryKey: true
        },
        name : Sequelize.STRING,
        letter: Sequelize.STRING,
        description: Sequelize.STRING,
        item_id:Sequelize.INTEGER
    },
    {
        freezeTableName : true,
        timestamps : false,
    }
);

module.exports = items_detail