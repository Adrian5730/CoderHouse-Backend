//le añadi a package.json en  la parte de script esto "start": "node servidor.js",
// instalar la libreria socket.io -> npm install socket.io
const express = require('express');
const { Router } = express;
const router = Router;
const app = express();
const { Server: HttpServer } = require('http')
const { Server: IOServer } = require('socket.io')
const httpServer = new HttpServer(app)
const io = new IOServer(httpServer)
const messages = []
app.use(express.static('public'));
app.get('/', (req, res) => {
    res.sendFile('index.html', {root: __dirname})
})

io.on('connection',(socket) => {
    console.log('Un cliente se ha conectado')
    socket.emit('messages', messages)

    socket.on('new-message', data => {
        messages.push(data)
        io.sockets.emit('messages', messages)
    })
})

const PORT = process.env.PORT || 8080
httpServer.listen(PORT, () => console.log('Iniciando en el puerto ' + PORT))


