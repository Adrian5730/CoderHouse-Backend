let nombre = 'Pepe';
let edad = 25;
let precio = 99.90
let seriesFav = ['Dark', 'Mr. Robot', 'Castlevania']

let peliculasFav = [
    {
        nombre: 'Iron man',
        estreno: 2008,
        protagonistas: ['Robert D Junior', 'Jon Favreau', 'Gwyneth Paltrow']
    },
    {
        nombre: 'Spider Man: No Way Home',
        estreno: 2021,
        protagonistas: ['Tom Holland', 'Zendaya', 'Benedict Cumberbatch']
    },
    {
        nombre: 'Avengers',
        estreno: 2012,
        protagonistas: ['Robert D Junior', 'Chris Evans', 'Chris Hemsworth']
    }
]

console.warn('Nombre');
console.log(nombre);
console.log("\n");

console.warn('Edad');
console.log(edad);
console.log("\n");

console.warn('Precio');
console.log(precio);
console.log("\n");

console.warn('Peliculas Favoritas');
console.log(peliculasFav);
console.log("\n");

//Incremento en 1 la edad

edad = edad + 1 //edad++

console.warn('Cumplimos años!!! ahora tengo:');
console.log(edad);
console.log("\n");

seriesFav.push('MoonKnight')

console.warn('Nueva serie favorita');
console.log(seriesFav);
