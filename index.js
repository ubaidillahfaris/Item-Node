const express = require('express');
const app = express()
const bodyParser = require('body-parser');
const PORT = 3001
const itemController = require('./Controller/itemController')

app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/item', new itemController().getData)

app.use('/',(req,res) => {
    res.send({
        'status' : true
    })
})

app.listen(PORT, () => {
    console.log('server is listening on port '+PORT)
})

