import { Router } from 'express';
import * as LivroController from '../controlers/livro.controller.js';

const router = Router();

router.get('/', LivroController.getAll);
router.get('/:id', LivroController.getById);
router.post('/', LivroController.create);
router.put('/:id', LivroController.update);
router.delete('/:id', LivroController.deleta);

export default router;
