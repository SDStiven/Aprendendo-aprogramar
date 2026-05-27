import { Request, Response } from 'express';
import * as UtilizadorModel from '../models/utilizador.model.js';

export const getAll = async (req: Request, res: Response) => {
    try {
        const utilizadores = await UtilizadorModel.getAll();
        res.json(utilizadores);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar utilizadores' });
    }
};

export const getById = async (req: Request, res: Response) => {
    try {
        const utilizador = await UtilizadorModel.get(req.params.id as string);
        if (utilizador) {
            res.json(utilizador);
        } else {
            res.status(404).json({ error: 'Utilizador não encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar utilizador' });
    }
};

export const create = async (req: Request, res: Response) => {
    try {
        const result = await UtilizadorModel.create(req.body);
        res.status(201).json(result);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar utilizador' });
    }
};

export const update = async (req: Request, res: Response) => {
    try {
        const result = await UtilizadorModel.updat(req.params.id as string, req.body);
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar utilizador' });
    }
};

export const deleta = async (req: Request, res: Response) => {
    try {
        const result = await UtilizadorModel.deleta(req.params.id as string);
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao apagar utilizador' });
    }
};
