const express = require('express')
const cors = require('cors')
const app = express()
const axios = require('axios')

app.use(cors())

app.get('*', function (req, res, next) {
    console.log(req.originalUrl);
    axios.get(`https://maps.googleapis.com${req.originalUrl}`).then(response => { res.json(response.data) })
})

app.listen(2020, function () {
    console.log('CORS-enabled web server listening on port 2020')
})

//node server.js