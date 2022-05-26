// 1 Crear Carpeta views
// 2- npm init -y
// 3-npm i pug

const express = require('express')

const app = express()

app.set('views', './views')
app.set('view engine', 'pug')

app.get('/datos',(req, res) => {
    res.render('nivel', req.query)
})

app.listen(8080)
