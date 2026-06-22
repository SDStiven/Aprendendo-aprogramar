import db from '../lib/bd';
import { Livro } from '../types';

export const create = async (data: Omit<Livro, 'id' | 'data_criacao' | 'updat'>) => {
    const result = await db.query(
        'INSERT INTO tbl_livros (titulo, autor, preco, descricao, capa, ano, categoria, id_utilizador, updat) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, NOW()) RETURNING *',
        [data.titulo, data.autor, data.preco, data.descricao ?? null, data.capa ?? null, data.ano ?? null, data.categoria ?? null, data.id_utilizador ?? null]
    );
    return result.rows[0];
};

export const getAll = async (): Promise<Livro[]> => {
    const result = await db.query('SELECT * FROM tbl_livros');
    return result.rows as Livro[];
};

export const get = async (id: number): Promise<Livro | null> => {
    const result = await db.query('SELECT * FROM tbl_livros WHERE id = $1', [id]);
    const livros = result.rows as Livro[];
    return livros.length > 0 ? livros[0] : null;
};

export const updat = async (id: number, data: Partial<Omit<Livro, 'id' | 'data_criacao' | 'updat'>>) => {
    const keys = Object.keys(data);
    if (keys.length === 0) {
        const result = await db.query(`UPDATE tbl_livros SET updat = NOW() WHERE id = $1 RETURNING *`, [id]);
        return result.rows[0];
    }

    const fields = keys.map((key, index) => `${key} = $${index + 1}`);
    fields.push('updat = NOW()');
    
    const values = Object.values(data);
    values.push(id);
    
    const result = await db.query(`UPDATE tbl_livros SET ${fields.join(', ')} WHERE id = $${values.length} RETURNING *`, values);
    return result.rows[0];
};

export const deleta = async (id: number) => {
    const result = await db.query('DELETE FROM tbl_livros WHERE id = $1 RETURNING *', [id]);
    return result.rows[0];
};
