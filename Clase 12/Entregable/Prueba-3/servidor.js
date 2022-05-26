const express = require('express')
const handlebars = require('express-handlebars');
const app = express();
const { Router } = express;
const router = Router();
const { Server: HttpServer } = require('http')
const { Server: IOServer } = require('socket.io')
const httpServer = new HttpServer(app)
const io = new IOServer(httpServer)
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))
app.use('/api', router)
app.engine(
    "hbs",
    handlebars.engine({
        extname: ".hbs",
        defaultLayout: 'main.hbs',
    })
);
app.set("view engine", "hbs");
app.set("views", "./views");

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

class Contenedor {
    constructor(ruta) {
        this.ruta = ruta;
    }
}

router.get('/', (req, res) => {
    res.render('formulario',{root: __dirname})
})

router.post('/productos', (req, res) => {
    // let nuevoProducto = req.body
    // let newId
    // if (productos.length == 0) {
    //     newId = 1
    // } else {
    //     newId = productos[productos.length - 1].id
    //     newId++
    // }
    // const nuevaLista = { ...nuevoProducto, id: newId }
    // productos.push(nuevaLista)
    // res.redirect('/api')
})

io.on('connection',(socket) => {
    console.log('Un cliente se ha conectado')
    socket.emit('productos', productos)
})

const PORT = 8080
httpServer.listen(PORT, () => { console.log("Se inicio el servidor en el puerto N° " + PORT) })