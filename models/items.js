const Sequelize = require('sequelize')
const  db  = require('../config/database')
const items_detail = require('./items_detail')

var items = db.define('item',
    {
        id : {
          type: Sequelize.INTEGER,
          primaryKey: true
        },
        name : Sequelize.STRING,
    },
    {
        freezeTableName : true,
        timestamps : false,
    }
);

items.hasMany(items_detail, {
    foreignKey: 'item_id',
    sourceKey: 'id',
    as: 'Subcategories',
})

module.exports = items