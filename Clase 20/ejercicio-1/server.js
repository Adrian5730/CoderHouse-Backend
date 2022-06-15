import mongoose from 'mongoose';
import * as models from './models/usuarios.js';
ReadFromDB();
async function ReadFromDB(){
    try{
        const URL = "mongodb+srv://AdrianDB:Camilo5730@cluster0.jrd62.mongodb.net/?retryWrites=true&w=majority"

        let conexion = await mongoose.connect(URL);
        console.log("Conexion Exitosa")
        console.log(models)
        //Read usuarios
        const usuarios = await models.usuarios.find();
        console.log(usuarios)
        return

    } catch (err) {
        console.log(err);
    }
}