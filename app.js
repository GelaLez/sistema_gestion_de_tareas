const express = require('express')
const app = express();
const PORT = 3030;
const cors = require('cors');

app.use(cors())

const bodyParser = require('body-parser')
app.use(bodyParser.json());
conexionDataBase = require('./models/main')

app.get('/v1/', function (req, res) {
    res.json({ error: false, description: 'Servicio ok ' })
})

var homeWorksRoute = require('./routes/homeworks')
app.use('/v1/homeworks/', homeWorksRoute)

conexionDataBase.start().then(function () {
    app.listen(PORT, function () {
        console.log(`start on ${PORT}`)
    })
})

