import express, { type Request, type Response } from "express";
import swaggerUi from 'swagger-ui-express';
import swaggerJsDoc from 'swagger-jsdoc';
import cors from 'cors';
import utilizadorRoutes from './src/routes/utilizador.routes.js';
import livroRoutes from './src/routes/livro.routes.js';
import compraRoutes from './src/routes/compra.routes.js';

const app = express(); // cria a aplicação
app.use(express.json()); // para interpretar o corpo das requisições como JSON

// Configura o CORS para permitir pedidos do frontend
app.use(cors());
 


// const graphqlServer = new ApolloServer({
//   typeDefs,
//   resolvers
// })

// await graphqlServer.start()

// app.use("/graphql",
//   expressMiddleware(graphqlServer, {
//     context: async ({ req }) => ({
//       token: req.headers.authorization
//     })
//   })
// )

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
        url: 'http://localhost:8080',
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


// inicia o servidor na porta 3000
app.listen(8080, () => {
  console.log("Servidor rodando em http://localhost:8080");
});