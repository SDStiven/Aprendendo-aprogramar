import express, { type Request, type Response } from "express";
import swaggerUi from 'swagger-ui-express';
import swaggerJsDoc from 'swagger-jsdoc';
import cors from 'cors';
import utilizadorRoutes from './src/routes/utilizador.routes.js';
import livroRoutes from './src/routes/livro.routes.js';
import compraRoutes from './src/routes/compra.routes.js';
import { inicializarBancoDeDados } from './src/lib/bd.js';

const app = express(); // cria a aplicação
app.use(express.json()); // para interpretar o corpo das requisições como JSON

// Configura o CORS para permitir pedidos do frontend
app.use(cors());
 

const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'LIVROS BD API',
      version: '1.0.0',
      description: 'API para gestão de livros, utilizadores e compras',
    },
    servers: [
      {
        url: `${process.env.NEXT_PUBLIC_API_URL}`,
      },
    ],
  },
  apis: ['./src/docs/**/*.yaml'],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use('/api/utilizadores', utilizadorRoutes);
app.use('/api/livros', livroRoutes);
app.use('/api/compras', compraRoutes);

const PORT = Number(process.env.PORT) || 8080;

// inicia o servidor na porta 8080
app.listen(PORT, async () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
  await inicializarBancoDeDados();
});