const http = require('http');

const server = http.createServer((req, res) => {
    respuesta.end('Hola mundo')
})

const connectedServer = server.listen(8080, () => {
    console.log(`Servidor Http escuchando en el puesto ${connectedServer.address().port}`);
})