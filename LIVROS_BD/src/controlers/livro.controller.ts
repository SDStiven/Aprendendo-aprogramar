import { Request, Response } from 'express';
import * as LivroModel from '../models/livro.model.js';

export const getAll = async (req: Request, res: Response) => {
    try {
        const livros = await LivroModel.getAll();
        res.json(livros);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar livros' });
    }
};

export const getById = async (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id as string, 10);
        if (isNaN(id)) {
            return res.status(400).json({ error: 'ID inválido' });
        }
        const livro = await LivroModel.get(id);
        if (livro) {
            res.json(livro);
        } else {
            res.status(404).json({ error: 'Livro não encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar livro' });
    }
};

export const create = async (req: Request, res: Response) => {
    try {
        const result = await LivroModel.create(req.body);
        res.status(201).json(result);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar livro' });
    }
};

export const update = async (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id as string, 10);
        if (isNaN(id)) {
            return res.status(400).json({ error: 'ID inválido' });
        }
        const result = await LivroModel.updat(id, req.body);
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar livro' });
    }
};

export const deleta = async (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id as string, 10);
        if (isNaN(id)) {
            return res.status(400).json({ error: 'ID inválido' });
        }
        const result = await LivroModel.deleta(id);
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao apagar livro' });
    }
};
