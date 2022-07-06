class crearSession {
    cerrarLogin(req, res){
        const nombre = req.session.nombre 
        if(req.session.nombre){
            req.session.destroy((err) => {
                res.render('logout', {nombre: nombre}) // will always fire after session is destroyed
              })
        } else {
            res.redirect('/login')
        }

    }
}
module.exports = new crearSession;