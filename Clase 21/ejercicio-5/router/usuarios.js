import express from 'express';
import ApiUsuariosMock from '../api/usuarios.js';

class UsuariosRouter extends express.Router {
    constructor() {
        super();
        const apiUsuarios = new ApiUsuariosMock();

        this.post('/popular', async (req, res, next) => {
            try {
                res.json(await apiUsuarios.popular(Number(req.query.cant)));
            } catch (e) {
                next(e);
            }
        })

        this.get('/', async (req, res, next) => {
            try {
                res.json(await apiUsuarios.listarTodos());
            } catch (e) {
                next(e);
            }
        })

        this.get('/:id', async (req, res, next) => {
            try {
                res.json(await apiUsuarios.listar(Number(req.params.id)));
            } catch (e) {
                next(e);
            }
        })

        this.post('/', async (req, res, next) => {
            try {
                res.json(await apiUsuarios.guardar(req.body))
            } catch (e) {
                next(e);
            }
        })

        this.put('/:id', async (req, res, next) => {
            try {
                res.json(await apiUsuarios.actualizar({...req.body, id: req.params.id}));
            } catch (e) {
                next(e);
            }
        })

        this.delete('/:id', async function (req, res, next) {
            try {
                res.json( await apiUsuarios.borrar(req.params.id))
            } catch (e){
                next(e);
            }
        })
    }
}

export default UsuariosRouter;

