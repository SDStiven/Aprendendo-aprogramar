export interface Utilizador {
    id: string;
    nome: string;
    email: string;
    senha: string;
    updat: Date;
    data_registo: Date;
}

export interface Livro {
    id: number;
    titulo: string;
    autor: string;
    preco: number;
    descricao?: string | null;
    id_utilizador?: string | null;
    data_criacao: Date;
    updat: Date;
}

export interface Compra {
    id: number;
    id_utilizador?: string | null;
    id_livro?: number | null;
    data_compra: Date;
    updat: Date;
}
