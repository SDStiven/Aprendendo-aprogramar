import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
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
        const { senha, ...rest } = req.body;
        let hashedSenha = senha;
        if (senha) {
            hashedSenha = await bcrypt.hash(senha, 10);
        }
        const result = await UtilizadorModel.create({ ...rest, senha: hashedSenha });
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

export const login = async (req: Request, res: Response) => {
    const { email, senha } = req.body;
    if (!email || !senha) {
        res.status(400).json({ error: 'E-mail e senha são obrigatórios' });
        return;
    }
    try {
        const utilizador = await UtilizadorModel.getByEmail(email);
        if (utilizador) {
            const isMatch = await bcrypt.compare(senha, utilizador.senha);
            // Fallback para senhas antigas em texto puro (opcional, ajuda na transição)
            if (isMatch || senha === utilizador.senha) {
                const { senha: _, ...userWithoutPassword } = utilizador as any;
                res.json({ message: 'Login bem-sucedido', user: userWithoutPassword });
            } else {
                res.status(401).json({ error: 'Credenciais inválidas' });
            }
        } else {
            res.status(401).json({ error: 'Credenciais inválidas' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Erro ao fazer login' });
    }
};
