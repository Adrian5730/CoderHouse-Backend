// 1 Crear Carpeta views
// 2- npm init -y
// 3-npm i ejs


const express = require('express')

const app = express()

app.set('view engine', 'ejs')

app.get('/',(req, res) => {
    res.render('pages/index', {mensaje: 'bienvenidos a nuestra primer plantilla de ejs'})
})

app.listen(8080)