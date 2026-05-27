import { Request, Response } from 'express';
import * as CompraModel from '../models/compra.model.js';

export const getAll = async (req: Request, res: Response) => {
    try {
        const compras = await CompraModel.getAll();
        res.json(compras);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar compras' });
    }
};

export const getById = async (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id as string, 10);
        if (isNaN(id)) {
            return res.status(400).json({ error: 'ID inválido' });
        }
        const compra = await CompraModel.get(id);
        if (compra) {
            res.json(compra);
        } else {
            res.status(404).json({ error: 'Compra não encontrada' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar compra' });
    }
};

export const create = async (req: Request, res: Response) => {
    try {
        const result = await CompraModel.create(req.body);
        res.status(201).json(result);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar compra' });
    }
};

export const update = async (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id as string, 10);
        if (isNaN(id)) {
            return res.status(400).json({ error: 'ID inválido' });
        }
        const result = await CompraModel.updat(id, req.body);
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar compra' });
    }
};

export const deleta = async (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id as string, 10);
        if (isNaN(id)) {
            return res.status(400).json({ error: 'ID inválido' });
        }
        const result = await CompraModel.deleta(id);
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao apagar compra' });
    }
};
