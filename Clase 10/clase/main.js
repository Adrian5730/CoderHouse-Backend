// 1 Crear Carpeta views
// 2- npm init -y
// 3-npm i pug

const express = require('express')

const app = express()

app.set('views', './views')
app.set('view engine', 'pug')

app.get('/',(req, res) => {
    res.render('index', { mensaje: 'Nuestra primer pantalla'})
})

app.listen(8080)
