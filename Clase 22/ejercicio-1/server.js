const { normalize, schema } = require ('normalizr');
let empresa = require('./empresa')

/* ------------------------------------------------------ */
//Definicion  de schemas
/* ------------------------------------------------------ */

const empleado= new schema.Entity('empleado');
const organigrama = new schema.Entity('organigrama',{
    gerente: empleado,
    encargado: empleado,
    empleados: [empleado]
});

/* ------------------------------------------------------ */
//Normalizacion de datos
/* ------------------------------------------------------ */

const util = require('util');
function print(objeto){
    console.log(util.inspect(objeto,false, 12, true));
}

console.log('Objeto Normalizado');
const normalizedEmpresa = normalize(empresa, organigrama)
print(normalizedEmpresa)

console.log('La longitud del objeto original: ', JSON.stringify(empresa).length);
console.log('La longitud del objeto normalizado: ', JSON.stringify(normalizedEmpresa).length);

