import { Router } from 'express';
import * as UtilizadorController from '../controlers/utilizador.controller.js';

const router = Router();

router.get('/', UtilizadorController.getAll);
router.get('/:id', UtilizadorController.getById);
router.post('/login', UtilizadorController.login);
router.post('/', UtilizadorController.create);
router.put('/:id', UtilizadorController.update);
router.delete('/:id', UtilizadorController.deleta);

export default router;
