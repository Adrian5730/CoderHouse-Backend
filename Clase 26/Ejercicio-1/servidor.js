const express = require('express');
const { engine: exphbs} = require('express-handlebars');
const session = require('express-session');
const { Server } = require('http');
const { Passport } = require('passport');
//----------------------------------------------------------------//
// * PASSPORT
const passport = require('passport');
const {Strategy: TwitterStrategy} = require('passport-twitter');

const API_KEY = 'a9sf65adMcgJWbmQYZLQ2oqir';
const API_KEY_SECRET = 'trSZIZIULWBprHeezvvMXSG2N0qr7hWBCBFALCfJ5P46DLRiis';

passport.use(new TwitterStrategy({
    consumerKey: API_KEY,
    consumerSecret: API_KEY_SECRET,
    callbackURL: '/auth/twitter/callback',
}, (token, tokenSecret, userProfile, done) => {
    console.log(userProfile)
    done(null, userProfile)
}))

passport.serializeUser((user, cb) => {
    cb(null, user);
})

passport.deserializeUser((obj, cb) => {
    cb(null, obj);
})
//----------------------------------------------------------------//
// * Express
const app = express();
app.use(
    session({
        secret: 'shhhhhh',
        resave: false,
        saveUninitialized: false,
        cookie: {
            maxAge: 60000
        }
    })
);

app.use(passport.initialize());
app.use(passport.session());
app.engine('.hbs', exphbs({ extname: '.hbs', defaultLayout: 'main.hbs'}))
app.set('view engine', '.hbs');
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));

//----------------------------------------------------------------//
// * Rutas
// TODO: Login
app.get('/', (req, res) => {
    if(req.isAuthenticated()){
        res.redirect('/datos');
    } else {
        res.redirect('/login');
    }
});

app.get('/login', (req, res) => {
    if(req.isAuthenticated()){
        res.redirect('/datos');
    } 
    res.sendFile(__dirname + '/public/login.html');
})

// TODO: Login
app.get('/auth/twitter', passport.authenticate('twitter'))
app.get('/auth/twitter/callback', passport.authenticate('twitter', {
    successRedirect: '/',
    failureRedirect: '/faillogin',
}))
app.get('/faillogin', (req, res) => {
    res.render('login-error', {})
})

//----------------------------------------------------------------//
// TODO: Datos
app.get('/datos', (req, res) => {
    if(req.isAuthenticated()){
        if(!req.user.contador) req.user.contador = 0;
        req.user.contador++;
        res.render('/datos', {
            nombre: req.user.displayName,
            username: req.user.userName,
            foto: req.user.photos[0].value,
            contador: req.user.contador
        })
    } else {
        res.redirect('/');
    }
});

//----------------------------------------------------------------//
// TODO: Logout

app.get('/logout', (req, res) => {
    req.logout(err => {
        res.redirect('/');
    })
});

const PORT = 8080;
const server = app.listen(PORT, () => { console.log(`Serviidor escuchando en el puerto ${PORT}`)});

server.on("error", error => console.log(`Error en servidor ${error}`));

