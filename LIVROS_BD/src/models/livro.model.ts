import db from '../lib/bd';
import { Livro } from '../types';

export const create = async (data: Omit<Livro, 'id' | 'data_criacao' | 'updat'>) => {
    const [result] = await db.query(
        'INSERT INTO tbl_livros (titulo, autor, preco, descricao, id_utilizador, updat) VALUES (?, ?, ?, ?, ?, NOW())',
        [data.titulo, data.autor, data.preco, data.descricao, data.id_utilizador]
    );
    return result;
};

export const getAll = async (): Promise<Livro[]> => {
    const [rows] = await db.query('SELECT * FROM tbl_livros');
    return rows as Livro[];
};

export const get = async (id: number): Promise<Livro | null> => {
    const [rows] = await db.query('SELECT * FROM tbl_livros WHERE id = ?', [id]);
    const livros = rows as Livro[];
    return livros.length > 0 ? livros[0] : null;
};

export const updat = async (id: number, data: Partial<Omit<Livro, 'id' | 'data_criacao' | 'updat'>>) => {
    const keys = Object.keys(data);
    if (keys.length === 0) {
        const [result] = await db.query(`UPDATE tbl_livros SET updat = NOW() WHERE id = ?`, [id]);
        return result;
    }

    const fields = keys.map(key => `${key} = ?`);
    fields.push('updat = NOW()');
    
    const values = Object.values(data);
    values.push(id);
    
    const [result] = await db.query(`UPDATE tbl_livros SET ${fields.join(', ')} WHERE id = ?`, values);
    return result;
};

export const deleta = async (id: number) => {
    const [result] = await db.query('DELETE FROM tbl_livros WHERE id = ?', [id]);
    return result;
};
