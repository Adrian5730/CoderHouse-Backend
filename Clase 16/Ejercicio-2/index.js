import { options } from './options/mysqlconn.js'
import ClienteSQL from './sql.js'

const sql = new ClienteSQL(options);

sql.crearTabla()
    .then(() => {
        console.log('tabla articulos creada')

        const articulos = [
            { nombre: 'Leche', codigo: 'AB-12', precio: 23.60, stock: 24 },
            { nombre: 'Harina', codigo: 'CD-34', precio: 12.80, stock: 45 }, 
            { nombre: 'DDL', codigo: 'EF-56', precio: 32.30, stock: 16 }, 
            { nombre: 'Fideos', codigo: 'FG-44', precio: 42.70, stock: 34 }, 
            { nombre: 'Crema', codigo: 'CR-77', precio: 67.90, stock: 24 }
        ]

        return sql.insertarArticulos(articulos)
        
    })
    .then(() => {
        console.log('Articulos Insertados')
        return sql.listarArticulos()
    })
    .then((articulos) => {
        console.log(`Listar Articulos`)
        console.table(articulos)
        return sql.borrarArticuloPorId(3)
    })
    .then(() => {
        console.log('Articulo 3 borrado')
        return sql.actualizarStockPorId(0, 2)
    })
    .then(() => {
        console.log('Stock actualizado para id 2')
        return sql.listarArticulos()
    })
    .then((articulos) => {
        console.log('Resultado Total')
        console.table(articulos)
    })
    .catch((err) => {
        console.log(err); throw err
    })
    .finally(() => {
        sql.close()
    })


