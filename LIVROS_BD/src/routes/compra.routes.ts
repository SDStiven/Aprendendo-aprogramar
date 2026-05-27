import { Router } from 'express';
import * as CompraController from '../controlers/compra.controller.js';

const router = Router();

router.get('/', CompraController.getAll);
router.get('/:id', CompraController.getById);
router.post('/', CompraController.create);
router.put('/:id', CompraController.update);
router.delete('/:id', CompraController.deleta);

export default router;
