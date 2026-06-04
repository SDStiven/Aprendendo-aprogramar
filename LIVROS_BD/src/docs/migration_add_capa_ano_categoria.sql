-- Migração: adicionar colunas capa, ano e categoria à tabela tbl_livros
-- Executar uma vez na base de dados MySQL

ALTER TABLE tbl_livros
    ADD COLUMN IF NOT EXISTS capa VARCHAR(500) NULL,
    ADD COLUMN IF NOT EXISTS ano VARCHAR(10) NULL,
    ADD COLUMN IF NOT EXISTS categoria VARCHAR(100) NULL;

