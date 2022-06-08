const  knex = require('knex');


class ClienteSQL {
    constructor(options) {
        this.knex = knex(options);
    }
    
    crearTabla() {
        return this.knex.schema.dropTableIfExists('productos')
            .finally(() => {
                return this.knex.schema.createTable('productos', table => {
                    table.increments('id').primary();
                    table.string('title');
                    table.float('price');
                    table.string('thumbnail');
                })
            })
    }

    insertarProductos(productos) {
        return this.knex('productos').insert(productos);
    }

    obtenerProductos(){
        return this.knex('productos').select('*');
    }

    close() {
        this.knex.destroy();
    }
    
}

module.exports = ClienteSQL;