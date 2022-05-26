const express = require('express')

const app = express()

app.set('view engine', 'ejs')

app.get('/datos', (req, res) => {
    res.render('pages/nivel', req.query)
})

app.listen(8080)
