# LIVROS BD - API Backend

Este projeto é uma API RESTful desenvolvida em Node.js com TypeScript e Express para a gestão de utilizadores, livros e compras de livros. O projeto armazena seus dados em um banco de dados MySQL e conta com documentação Swagger integrada.

---

## 🛠️ Tecnologias e Dependências

- **Node.js** (versão 20.6.0 ou superior recomendada para suporte nativo a arquivos `.env`)
- **TypeScript** com **tsx** para execução em desenvolvimento sem compilação prévia
- **Express** para roteamento e servidor HTTP
- **MySQL2** com suporte a Promises para conexão com o banco de dados
- **BcryptJS** para hashing seguro de senhas
- **Cors** para permitir requisições do frontend
- **Swagger UI Express** & **Swagger JSdoc** para documentação interativa da API

---

## ⚙️ Configuração do Ambiente

O projeto utiliza variáveis de ambiente para a conexão com o banco de dados MySQL.

1. Crie um arquivo [.env](file:///c:/Users/Stiven%20Dias/Documents/Aprendendo-aprogramar/LIVROS_BD/.env) na raiz do projeto (uma cópia base já foi criada para você).
2. Configure as seguintes variáveis conforme seu ambiente local:

```ini
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=SuaSenhaAqui
DB_NAME=LIVROS
```

---

## 🚀 Como Executar o Projeto

### Pré-requisitos
1. Certifique-se de que possui o **Node.js** instalado.
2. Certifique-se de que seu servidor **MySQL** local está ativo na porta `3306` (ou inicie-o via Docker).

### Instalação de Dependências
Na raiz do diretório `LIVROS_BD`, execute:
```bash
npm install
```

### Executar em Desenvolvimento
Inicie o servidor de desenvolvimento com o recarregamento automático (watch mode):
```bash
npm run dev
```
Ao iniciar, o servidor tentará se conectar ao MySQL, criará o banco de dados `LIVROS` caso não exista, e criará/verificará as tabelas estruturais automaticamente.

O servidor estará rodando em: **`${process.env.NEXT_PUBLIC_API_URL}`**

### Usando Docker (Opcional)
Se preferir rodar o banco de dados MySQL via container Docker:
1. Certifique-se de ter o Docker Desktop em execução.
2. Na raiz do projeto, execute:
   ```bash
   docker-compose up -d
   ```
   Isso iniciará o serviço do MySQL com as credenciais padrão descritas no [Docker-compose.yml](file:///c:/Users/Stiven%20Dias/Documents/Aprendendo-aprogramar/LIVROS_BD/Docker-compose.yml).

---

## 📖 Documentação da API (Swagger)

A documentação interativa da API (Swagger UI) está configurada e pode ser acessada enquanto o servidor estiver rodando no endereço:

👉 **`${process.env.NEXT_PUBLIC_API_URL}/docs`**

Aqui você poderá testar todas as rotas diretamente do navegador.

---

## 🛣️ Rotas da API

### Utilizadores (`/api/utilizadores`)
- `GET /` - Retorna todos os utilizadores
- `GET /:id` - Retorna um utilizador pelo ID
- `POST /` - Cadastra um novo utilizador (senha é criptografada automaticamente)
- `POST /login` - Realiza a autenticação de um utilizador
- `PUT /:id` - Atualiza os dados de um utilizador
- `DELETE /:id` - Remove um utilizador

### Livros (`/api/livros`)
- `GET /` - Retorna todos os livros cadastrados
- `GET /:id` - Retorna os detalhes de um livro pelo ID
- `POST /` - Cadastra um novo livro
- `PUT /:id` - Atualiza dados de um livro cadastrado
- `DELETE /:id` - Remove um livro

### Compras (`/api/compras`)
- `GET /` - Lista todas as compras efetuadas
- `GET /:id` - Retorna detalhes de uma compra pelo ID
- `POST /` - Registra uma nova compra (relacionando utilizador e livro)
- `PUT /:id` - Atualiza informações de uma compra
- `DELETE /:id` - Cancela/remove uma compra

---

## 🗄️ Estrutura do Banco de Dados

O banco de dados contém as seguintes tabelas auto-geradas:

- **`tbl_utilizadores`**: Guarda informações de cadastro (ID, nome, email, senha criptografada, datas de registro e atualização).
- **`tbl_livros`**: Registra as obras disponíveis (título, autor, preço, descrição opcional, capa, ano, categoria, ID do utilizador que postou).
- **`tbl_compras`**: Relaciona utilizadores com os livros que eles adquiriram.
