//npm init
//npm i express
const express = require('express')
const app = express();
const PORT = 8080

const server = app.listen(PORT, () => {
    console.log('Servidor HTTP escuchando en el puerto' + PORT);
});

app.get('/', function(req, res, next) {
    res.send({mensaje: 'Hola CoderHouse'})
})

//GET
// POST
// DELETE
// PUT

// app.listen(3000);