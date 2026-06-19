import db from '../lib/bd';
import { Utilizador } from '../types';

export const create = async (data: Omit<Utilizador, 'updat' | 'data_registo'>) => {
    const result = await db.query(
        'INSERT INTO tbl_utilizadores (id, nome, email, senha, updat) VALUES ($1, $2, $3, $4, NOW()) RETURNING *',
        [data.id, data.nome, data.email, data.senha]
    );
    return result.rows[0];
};

export const getAll = async (): Promise<Utilizador[]> => {
    const result = await db.query('SELECT * FROM tbl_utilizadores');
    return result.rows as Utilizador[];
};

export const get = async (id: string): Promise<Utilizador | null> => {
    const result = await db.query('SELECT * FROM tbl_utilizadores WHERE id = $1', [id]);
    const utilizadores = result.rows as Utilizador[];
    return utilizadores.length > 0 ? utilizadores[0] : null;
};

export const updat = async (id: string, data: Partial<Omit<Utilizador, 'id' | 'data_registo' | 'updat'>>) => {
    const keys = Object.keys(data);
    if (keys.length === 0) {
        const result = await db.query(`UPDATE tbl_utilizadores SET updat = NOW() WHERE id = $1 RETURNING *`, [id]);
        return result.rows[0];
    }
    
    const fields = keys.map((key, index) => `${key} = $${index + 1}`);
    fields.push('updat = NOW()');
    
    const values = Object.values(data);
    values.push(id);
    
    const result = await db.query(`UPDATE tbl_utilizadores SET ${fields.join(', ')} WHERE id = $${values.length} RETURNING *`, values);
    return result.rows[0];
};

export const deleta = async (id: string) => {
    const result = await db.query('DELETE FROM tbl_utilizadores WHERE id = $1 RETURNING *', [id]);
    return result.rows[0];
};

export const getByEmail = async (email: string): Promise<Utilizador | null> => {
    const result = await db.query('SELECT * FROM tbl_utilizadores WHERE email = $1', [email]);
    const utilizadores = result.rows as Utilizador[];
    return utilizadores.length > 0 ? utilizadores[0] : null;
};
