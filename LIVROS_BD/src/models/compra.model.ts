import db from '../lib/bd.js';
import { Compra } from '../types.js';

export const create = async (data: Omit<Compra, 'id' | 'data_compra' | 'updat'>) => {
    const result = await db.query(
        'INSERT INTO tbl_compras (id_utilizador, id_livro, updat) VALUES ($1, $2, NOW()) RETURNING *',
        [data.id_utilizador, data.id_livro]
    );
    return result.rows[0];
};

export const getAll = async (): Promise<Compra[]> => {
    const result = await db.query('SELECT * FROM tbl_compras');
    return result.rows as Compra[];
};

export const get = async (id: number): Promise<Compra | null> => {
    const result = await db.query('SELECT * FROM tbl_compras WHERE id = $1', [id]);
    const compras = result.rows as Compra[];
    return compras.length > 0 ? compras[0] : null;
};

export const updat = async (id: number, data: Partial<Omit<Compra, 'id' | 'data_compra' | 'updat'>>) => {
    const keys = Object.keys(data);
    if (keys.length === 0) {
        const result = await db.query(`UPDATE tbl_compras SET updat = NOW() WHERE id = $1 RETURNING *`, [id]);
        return result.rows[0];
    }

    const fields = keys.map((key, index) => `${key} = $${index + 1}`);
    fields.push('updat = NOW()');
    
    const values = Object.values(data);
    values.push(id);
    
    const result = await db.query(`UPDATE tbl_compras SET ${fields.join(', ')} WHERE id = $${values.length} RETURNING *`, values);
    return result.rows[0];
};

export const deleta = async (id: number) => {
    const result = await db.query('DELETE FROM tbl_compras WHERE id = $1 RETURNING *', [id]);
    return result.rows[0];
};
