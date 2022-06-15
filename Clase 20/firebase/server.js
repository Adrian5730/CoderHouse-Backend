var admin = require("firebase-admin");

var serviceAccount = require("./db/credential-firebase.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
})

console.log("Conectado a Firebase correctamente");
CrearUsuario();  
async function CrearUsuario(){
    const db = admin.firestore();
    const query = db.collection("usuarios");
    try{
        let id = 1;
        let doc = await query.doc(id.toString())
        console.log(query)
        // await doc.create({nombre: "Marcos", apellido: "Gonzalez", edad: "25"});
        console.log("Usuario creado correctamente");
    } catch(err) {
        console.log(err)
    }
}