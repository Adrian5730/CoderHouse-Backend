import mongoose from 'mongoose';
import * as models from './models/usuarios.js';
ReadFromDB();
async function ReadFromDB(){
    try{
        const URL = "mongodb+srv://AdrianDB:Camilo5730@cluster0.jrd62.mongodb.net/ecommerce?retryWrites=true&w=majority"

        let conexion = await mongoose.connect(URL);
        console.log("Conexion Exitosa")

        //Read usuarios
        const usuarios = await models.usuarios.find();
        console.log(usuarios)

        //Create Usuario Federico
        const usuario = new models.usuarios({
            nombre: "Federico",
            apellido: "Perez",
            dni:"12345678"
        })

        await usuario.save();
        console.log("Usuario Creado");

        return
    } catch (err) {
        console.log(err);
    }
}