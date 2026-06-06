-- Migração: adicionar colunas capa, ano e categoria à tabela tbl_livros
-- Executar uma vez na base de dados MySQL

ALTER TABLE tbl_livros
    ADD COLUMN capa VARCHAR(500) NULL,
    ADD COLUMN ano VARCHAR(10) NULL,
    ADD COLUMN categoria VARCHAR(100) NULL;

