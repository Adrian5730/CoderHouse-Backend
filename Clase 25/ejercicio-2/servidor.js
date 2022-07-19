const express = require('express');
const { engine: exphbs } = require('express-handlebars');
const session = require('express-session');
const passport = require('passport');
const { Strategy: LocalStrategy} = require('passport-local');
const usuarios = [];

//-----------------------------------------------------------------------------------//
//Passport register

passport.use('register', new LocalStrategy({
    passReqToCallback: true
}, (req, username, password, done) => {
    const { direccion } = req.body
    const usuario = usuarios.find(usuario => usuario.usename = username)
    if(usuario){
        return done('user alredy registered')
    }

    const user = {
        username,
        password,
        direccion,
    }

    usuarios. push(user)
    return done(null, user)
}))

//-----------------------------------------------------------------------------------//
// Passport loginticket

passport.use('login', new LocalStrategy((username, password, done) => {
    const user = usuarios.find(usuario => usuario.username == username);
    if(!user){
        return done(null, false)
    }

    if(user.password != password){
        return done(null, false)
    }

    user.contador = 0;

    done(null, user)
}))

//-----------------------------------------------------------------------------------//
//Serializar y deserializar

passport.serializeUser(function(err, done){
    done(null, user.name)
})

passport.deserializeUser(function(err, done){
    const usuario = usuarios.find(usuario => usuario.username == username);
    done(null, usuario)
})

//-----------------------------------------------------------------------------------//
const app = express();
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

//-----------------------------------------------------------------------------------//
//Middleware de passport

app.use(passport.initialize());
app.use(passport.session());
//-----------------------------------------------------------------------------------//

app.engine('.hbs', exphbs({extname: '.hbs', defaultLayout: 'main.hbs'}))
app.set('view engine', 'hbs')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public/static/'));

function isAuth(req, res, next) {
    if(req.isAuthenticated()) {
        next();
    } else {
        res.redirect('/login');
    }
}

//-----------------------------------------------------------------------------------//
//Rutas register

app.get('/register', (req, res) => {
    res.sendFile(__dirname + '/views/register.html');
})

app.post('/register', passport.authenticate('register', { failureRedirect:'/failregister', successRedirect: '/'}));
app.get('failregister', (req, res) => {
    res.render('register-error');
})

//-----------------------------------------------------------------------------------//
//Rutas login

app.get('/login', (req, res) => {
    if (req.isAuthenticated()) {
      res.redirect('/datos')
  }
    res.sendFile(__dirname + '/views/login.html')
  })
  
  app.post('/login', passport.authenticate('login', { failureRedirect: '/faillogin', successRedirect: '/datos'}))
  
  app.get('/faillogin', (req, res) => {
    res.render('login-error')
  })

//-----------------------------------------------------------------------------------//
//Rutas Datos

app.get('/datos', (req, res) => {
    if(!req.user.contador){
        req.user.contador = 0;
    } 
    req.user.contador++;
    res.render('datos', { 
        datos: usuarios.find(usuario => usuario.username == req.user.username),
        contador: req.user.contador
    })
})

//-----------------------------------------------------------------------------------//
//Rutas logout

app.get('logout', (req, res) => {
    res.logout(err => {
        res.redirect('/login')
    });
})

//-----------------------------------------------------------------------------------//
//Rutas Inicio
app.get('/', isAuth, (req, res) => {
    res.redirect('/datos')
})

const PORT = 8080
const server = app.listen(PORT, () => { 
    console.log('Server ON')
})

