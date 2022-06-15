const admin = require('firebase-admin');
admin.initializeApp({credential: admin.credential.cert(require('../credentials/credential-firebase.json'))});
const db = admin.firestore();
class ContenedorFirebase {
    constructor() {
        this.collection = db.collection('carrito');
    }

    async listarProductos(id) {
        try{
            return (await (this.collection.doc(id.toString()).get())).data().productos;
        } catch (error) {
            console.log(error)
        }
    }

    async listarTodos() {
        try{
            return await this.collection.get();
        } catch (error) {
            console.log(error)
        }
    }

    async crear(carrito) {
        try{
            return await this.collection.doc(carrito.id.toString()).set(carrito);
        } catch (error) {
            console.log(error)
        }
    }

    async sumProdsCarrito(id, producto) {
        try{
            return await this.collection.doc(id.toString()).update({
                productos: { nombre: producto.nombre, precio: producto.precio, cantidad: producto.cantidad }
            });
        } catch (error) {
            console.log(error)
        }
    }

    async borrar(id) {
        try{
            return await this.collection.doc(id.toString()).delete();
        } catch (error) {
            console.log(error)
        }
    }

    

}

module.exports = ContenedorFirebase;