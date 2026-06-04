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
    // capa:            
    autor: string;
    // categaria:
    preco: number;
    // ano_lancamento
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
