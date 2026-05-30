import db from '../lib/bd';
import { Utilizador } from '../types';

export const create = async (data: Omit<Utilizador, 'updat' | 'data_registo'>) => {
    const [result] = await db.query(
        'INSERT INTO tbl_utilizadores (id, nome, email, senha, updat) VALUES (?, ?, ?, ?, NOW())',
        [data.id, data.nome, data.email, data.senha]
    );
    return result;
};

export const getAll = async (): Promise<Utilizador[]> => {
    const [rows] = await db.query('SELECT * FROM tbl_utilizadores');
    return rows as Utilizador[];
};

export const get = async (id: string): Promise<Utilizador | null> => {
    const [rows] = await db.query('SELECT * FROM tbl_utilizadores WHERE id = ?', [id]);
    const utilizadores = rows as Utilizador[];
    return utilizadores.length > 0 ? utilizadores[0] : null;
};

export const updat = async (id: string, data: Partial<Omit<Utilizador, 'id' | 'data_registo' | 'updat'>>) => {
    const keys = Object.keys(data);
    if (keys.length === 0) {
        const [result] = await db.query(`UPDATE tbl_utilizadores SET updat = NOW() WHERE id = ?`, [id]);
        return result;
    }
    
    const fields = keys.map(key => `${key} = ?`);
    fields.push('updat = NOW()');
    
    const values = Object.values(data);
    values.push(id);
    
    const [result] = await db.query(`UPDATE tbl_utilizadores SET ${fields.join(', ')} WHERE id = ?`, values);
    return result;
};

export const deleta = async (id: string) => {
    const [result] = await db.query('DELETE FROM tbl_utilizadores WHERE id = ?', [id]);
    return result;
};

export const getByEmail = async (email: string): Promise<Utilizador | null> => {
    const [rows] = await db.query('SELECT * FROM tbl_utilizadores WHERE email = ?', [email]);
    const utilizadores = rows as Utilizador[];
    return utilizadores.length > 0 ? utilizadores[0] : null;
};
