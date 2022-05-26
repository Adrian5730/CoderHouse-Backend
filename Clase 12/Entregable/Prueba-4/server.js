const express = require('express')
const app = express();
const { Router } = express;
const router = Router();
const { Server: HttpServer } = require('http')
const { Server: IOServer } = require('socket.io')
const httpServer = new HttpServer(app)
const io = new IOServer(httpServer)
app.use(express.static('public'))
app.use(express.json())
app.use('/api', router)

const productos = [
    {
        "title": "Freidora de Aire Gadnic F4.0 Sin Aceite 4Lts Digital",
        "price": 17349,
        "thumbnail": "https://images.bidcom.com.ar/resize?src=https://www.bidcom.com.ar/publicacionesML/productos/FREI0001/1200x900-FREI0001-4.jpg&w=500&q=100",
        "id": "1"
    },
    {
        "title": "Freidora Eléctrica Moretti Comercial Fryer-11 11L 220V 3500W",
        "price": 35699,
        "thumbnail": "https://images.bidcom.com.ar/resize?src=https://www.bidcom.com.ar/publicacionesML/productos/FREI0100/1000x1000-FREI0100.jpg&w=500&q=100",
        "id": "2"
    },
    {
        "title": "Freidora de Aire sin Aceite Gadnic FA3.0",
        "price": 16749,
        "thumbnail": "https://images.bidcom.com.ar/resize?src=https://www.bidcom.com.ar/publicacionesML/productos/FREI0006/1000x1000-FREI0006.jpg&w=500&q=100",
        "id": "3"
    }
]

router.get('/', (req, res) => {
    res.render('index')
})

router.post('/productos', (req, res) => {
    res.render('index')
})

io.on('connection',(socket) => {
    console.log('Un cliente se ha conectado')
    socket.emit('productos', productos)
})

const PORT = 8080
httpServer.listen(PORT, () => { console.log("Se inicio el servidor en el puerto N° " + PORT) })