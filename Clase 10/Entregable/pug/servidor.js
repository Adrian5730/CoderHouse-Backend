const express = require('express')
const { Router } = express;
const router = Router();
const PORT = 8080;
const app = express()
app.set('views', './views')
app.set('view engine', 'pug')
app.use(express.urlencoded({ extended: true }))
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
    res.render('formulario')
})

router.get('/productos', (req, res) => {
    res.render('productos', {productos: productos})
})

router.post('/productos', (req, res) => {
    let nuevoProducto = req.body
    let newId
    if (productos.length == 0) {
        newId = 1
    } else {
        newId = productos[productos.length - 1].id
        newId++
    }
    const nuevaLista = { ...nuevoProducto, id: newId }
    productos.push(nuevaLista)
    res.redirect('/api')
})

const server = app.listen(PORT, () => {
    console.log('Servidor HTTP escuchando en el puerto ' + PORT);
});