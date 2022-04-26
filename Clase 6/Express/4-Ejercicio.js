const express = require('express');
const app = express();
const PORT = 8080

const server = app.listen(PORT, () => {
    console.log('Servidor HTTP escuchando en el puerto' + PORT);
});

app.get('/', function(req, res) {
    res.send('<h1 style:"color:blue"> Bienvenido al servidor express </h1>')
})

let cantVisitas = 0

app.get('/visitas', function(req, res) {
    cantVisitas++
    res.send('La cantidad de visitas es de ' + cantVisitas)
})

app.get('/fyh', function(req, res) {
    res.send({fechayhoraora: new Date().toLocaleString()})
})

