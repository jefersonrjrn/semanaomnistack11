const express = require('express');
const cors = require('cors');
const { errors } = require('celebrate');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json()); // transforma o formato json do body para um objeto javascript
app.use(routes);
app.use(errors());

/**
 *  Rota / Recurso
 * 
 */

/**
 *  Métodos HTTP:
 * 
 * GET: Buscar uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar um informação no back-end
 * DELETE: Deletar uma informação do back-end
 */

/**
 * Tipos de parâmetros:
 * 
 * Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
 * Route Params: Parâmetros utilizados para identificar recursos
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos 
 * 
 */

/**
 * SQL: MySQL, SQLite, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB, etc   * 
 */

/** 
 * Driver: SELECT * FROM users
 * Query Builder: table ('users').select('*').where()
 */ 



module.exports = app;