const isAdmin = true

function userCheck(req, res, next) {
    if (isAdmin) {
        next();
    } else {
        let mensaje = {"error" : "-1", "descripcion":  "Accion no autorizada con este usuario" }        
        res.send(mensaje)
    }
}
module.exports = userCheck