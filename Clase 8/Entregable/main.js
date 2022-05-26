const express = require('express');
const { Router } = express;

const PORT = 8080;
const app = express();
const router = Router();

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json());

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

router.get('/productos', (req, res) => {
    res.json(productos)
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
    console.log(newId)
    const nuevaLista = { ...nuevoProducto, id: newId }
    productos.push(nuevaLista)
    res.json(nuevaLista)
})

router.get('/producto/:id', (req, res) => {

    let id = req.params.id;
    let producto = productos.find((item) => item.id === id)
    if (!producto) {
        res.json({ error: 'producto no encontrado' })
    } else {
        res.json(producto)
    }
})

router.put('/producto/:id', (req, res) => {

    let id = req.params.id;
    let producto = productos.find((item) => item.id === id)
    if (!producto) {
        res.json({ error: 'producto no encontrado' })
    } else {
        producto.title = req.body.titulo
        producto.price = req.body.precio
        producto.thumbnail = req.body.thumbnail
        res.json(producto)
    }
})

router.delete('/producto/:id', (req, res) => {
    let id = req.params.id;
    let seleccionado = productos.findIndex((item) => item.id === id)
    if (seleccionado == -1) {
        console.log('No se encontro ningun producto con ese Id')
    } else {
        productos.splice(seleccionado, 1)
        res.redirect('/api/productos')
    }
})


app.use('/api', router)

const server = app.listen(PORT, () => {
    console.log('Servidor HTTP escuchando en el puerto ' + PORT);
});


