// npm init 
// npm i express
// npm i -D jest 

const moment = require('moment')
const hoy = moment()
const nacimiento = moment('12/10/2001', 'DD/MM/YYYY')

const diffYear = hoy.diff(nacimiento, 'years')
const diffDays = hoy.diff(nacimiento, 'days')

console.log(`Hoy es ${hoy.format('DD/MM/YYYY')}`);
console.log(`Naci el ${nacimiento.format('DD/MM/YYYY')}`);
console.log(`Desde mi nacimiento han pasando ${diffYear} años`);
console.log(`Desde mi nacimiento han pasando ${diffDays} dias`);


