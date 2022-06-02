const { options } = require('./options/mysqlconn')
const knex = require('knex')(options)

const usuario = [
    {
        nombre: 'Juan',
        apellido: 'Duarte',
        edad: 25,
        email: 'asd@asd'
    },
    {
        nombre: 'wilander',
        apellido: 'Velazques',
        edad: 32,
        email: 'asd@asd'
    },
    {
        nombre: 'Miguel',
        apellido: 'Avalle',
        edad: 30,
        email: 'asd@asd'
    }
]

knex('usuario').insert(usuario)
    .then(() => {
        console.log('todo vientos')
    })
    .catch(err => {
        console.log(err); throw err
    })
    .finally(() => {
        knex.destroy()
    })