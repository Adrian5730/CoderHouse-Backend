import admin from 'firebase-admin';
import fs from 'fs';

const serviceAccount = JSON.parse(fs.readFileSync('./db/credential-firebase.json'));

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
})

console.log("Conectado a Firebase correctamente");

const db = admin.firestore();

const query = db.collection("colores");
const red = await query.add({ nombre: "Red" })
const green = await query.add({ nombre: "Green" })
const blue = await query.add({ nombre: "Blue" })
console.log("colores creados correctamente");

const todosloscolores = await query.get();
todosloscolores.forEach(doc => {
    console.log(doc.data());
})
console.log("colores recuperados")

await query.doc(blue.id).update({nombre: "navy"})
console.log("color azul actualizado")

await query.doc(green.id).delete()
console.log("Color green eliminado")
