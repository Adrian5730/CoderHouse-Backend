const express = require('express');
const { engine: exphbs } = require ('express-handlebars');
const session = require ('express-session');
const usuarios = []

const app = express()
app.use(
    session({
        secret: 'shhhhh',
        resave: false,
        saveUninitialized: false,
        cookie: {
            maxAge: 60000
        }
    })
)

app.engine('.hbs', exphbs({extname: '.hbs', defaultLayout: 'main.hbs'}))
app.set('view engine', 'hbs')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public/static/'));

//-----------------------------------------------------------------------------------//

//Verificar autenticacion

app.use((req,res, next) => {
    req.isAuthenticated = () => {
        if(req.session.nombre){
            return true;
        } else {
            return false;
        }
    }

    req.logout = done => {
        req.session.destroy(done);
    }
    next()
})


//-----------------------------------------------------------------------------------//
//Rutas Registro
app.get('/register', (req, res) => {
    res.render('register')
})

app.post('/register', (req, res) => {
    const {nombre, password, direccion } = req.body
    const usuario = usuarios.find(usuario => usuario.nombre == nombre)
    if(usuario){
        res.render('register-error')
    }
    usuarios.push({nombre, password, direccion})
    res.redirect('login')

})
//-----------------------------------------------------------------------------------//
//Rutas Login
app.get('/login', (req,res) => {
    if(req.isAuthenticated()){
        res.redirect('/datos')
    }
    res.render('login')    
})

app.post('/login', (req,res) => {
    const { nombre, password } = req.body
    const usuario = usuarios.find(usuario => usuario.nombre == nombre && usuario.password == password)
    if(!usuario){
        return res.render('login-error')
    }

    req.session.nombre = nombre
    req.session.contador = 0
    res.redirect('/datos')
    
})

//-----------------------------------------------------------------------------------//
//Rutas Datos

function requiereAuthentication(req, res, next) {
    if(req.isAuthenticated()){
        next( );
    } else {
        res.redirect('/login')
    }
}

function includeUserData(req, res, next) {
    if(req.session.nombre){
        req.user = usuarios.find(usuario => usuario.nombre == req.session.nombre)
    }
    next()
}

app.get('/datos', requiereAuthentication, includeUserData, (req, res) => {
    req.session.contador++;	
    res.render('datos', {
        datos: req.user,
        contador: req.session.contador
    })
})

//-----------------------------------------------------------------------------------//
//Ruta logout

app.get('/logout', (req, res) => {
    req.logout(err => {
        res.redirect('/login')
    })
})
//-----------------------------------------------------------------------------------//
//Ruta Inicio

app.get('/', (req, res) => {
    res.redirect('/datos')
})

const PORT = 8080
const server = app.listen(PORT, () => { 
    console.log('Server ON')
})



