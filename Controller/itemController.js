const models = require('../models/index')

class ItemController {

    async getData(req, res){
        
        const item = await models.items.findAll({
            attributes:['id',['name', 'Name'],['id','Number']],
            include:[{
                model : models.items_detail,
                attributes:[['name','Name'], ['letter','Letter'], ['description', 'Description']],
                as : "Subcategories"
            }]
        })

        res.send({item})


    }

}

module.exports = ItemController