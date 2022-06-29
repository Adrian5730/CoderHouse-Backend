import { faker } from "@faker-js/faker";
faker.locale = 'es';

function generarUsuario(){
    return {
        nombre: faker.name.findName(),
        email: faker.internet.email(),
        website: faker.internet.url(),
        imagen: faker.image.cats()

    }
}


export { generarUsuario }