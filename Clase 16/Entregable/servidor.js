const express = require('express');
const app = express();
const { Server: HttpServer } = require('http');
const { Server: IOServer } = require('socket.io');
const httpServer = new HttpServer(app);
const io = new IOServer(httpServer)
const PORT = process.env.PORT || 8080;
const handlebars = require('express-handlebars');
const { options } = require('./options/mysqlconn')
const { optionsSqlite } = require('./options/sqlite')

const ClienteSQL = require('./Knex')
const ClienteSQLITE = require('./sqlite3')

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))
app.engine(
    "hbs",
    handlebars.engine({
        extname: ".hbs",
        defaultLayout: 'main.hbs',
    })
);
app.set("view engine", "hbs");
app.set("views", "./views");


//Peticiones
app.use('/', (req, res) => {
    res.render('formulario', { root: __dirname })
})


//DB
const sql = new ClienteSQL(options)
const sqlite = new ClienteSQLITE(optionsSqlite)

const messages = [
    { correo: "Juan@gmail.com", date: new Date(), message: "¡Hola! ¿Que tal?" },
    { correo: "Pedro@gmail.com", date: new Date(), message: "¡Muy Bien! ¿y vos?" },
    { correo: "Ana@gmail.com", date: new Date(), message: "¡Genial!" }
]

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

//Creo la tabla y toda la informacion de default      Knex
//mysql
sql.crearTabla()
    .then(() => {
        console.log('Se creo la tabla')
        return sql.insertarProductos(productos)
    })
    .then(() => {
        console.log('Se insertaron los productos')
    })
    .catch((err) => { console.log(err) })


//sqlite3

let sqlite3Inicio = async function sqlite3Inicio() {
    await sqlite.crearTabla()
    console.log('Tabla creada SQLITE')
    await sqlite.insertarMensajes(messages)
    console.log('Se insertaron los mensajes')
}
sqlite3Inicio()

//Socket
io.on('connection', (socket) => {


    console.log('Un cliente se ha conectado')
    sqlite.obtenerMensajes()
        .then((messages) => {
            socket.emit('messages', messages)
        })
        .catch((err) => { console.log(err) })

    sql.obtenerProductos()
        .then((productos) => {
            socket.emit('productos', productos)
        })
        .catch((err) => { console.log(err) })
    socket.on('new-message', data => {
        sqlite.insertarMensajes(data)
        .then(() => {
            return sqlite.obtenerMensajes()
        })
        .then((messages) => {
            io.sockets.emit('messages', messages)
        })
        .catch((err) => { console.log(err) })

    })

    socket.on('new-product', data => {
        sql.insertarProductos(data)
            .then(() => {
                return sql.obtenerProductos()
            })
            .then((products) => {
                io.sockets.emit('productos', products)
            })
            .catch((err) => { console.log(err) })

    })
})


httpServer.listen(PORT, () => { console.log("Se inicio el servidor en el puerto N° " + PORT) })
