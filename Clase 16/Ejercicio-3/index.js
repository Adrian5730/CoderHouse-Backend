import ClienteSQL from './sql.js';
import { options } from './options/sqlite.js';
const sql = new ClienteSQL(options)

try {
    await sql.crearTabla()
    console.log('1- Tabla Creada')
    const articulos = [
        { nombre: 'Leche', codigo: 'AB-12', precio: 23.60, stock: 24 },
        { nombre: 'Harina', codigo: 'CD-34', precio: 12.80, stock: 45 }, 
        { nombre: 'DDL', codigo: 'EF-56', precio: 32.30, stock: 16 }, 
        { nombre: 'Fideos', codigo: 'FG-44', precio: 42.70, stock: 34 }, 
        { nombre: 'Crema', codigo: 'CR-77', precio: 67.90, stock: 24 }
    ]

    await sql.insertarArticulos(articulos)
    console.log('2- Articulos insertados')
    const articulosLeidos = await sql.listarArticulos()
    console.log('3- Listado de articulos')
    console.table(articulosLeidos)
    await sql.borrarArticuloPorId(3)
    console.log('4- Articulo con id 3 borrado')
    await sql.actualizarStockPorId(0,2)
    console.log('5- Articulo con id 2 actualizado')
    const articulosFinales = await sql.listarArticulos()
    console.log('Final')
    console.table(articulosFinales)
} catch (err){
    console.log(err)
} finally {
    sql.close()
}

