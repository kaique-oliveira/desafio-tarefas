const express = require('express');
const router = require('./routes');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = 3001;

// Middleware para parser JSON
app.use(express.json());
app.use(cors());

app.use('/api', router);

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
