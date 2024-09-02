const express = require('express');
const router = require('./routes');
const cors = require('cors');

const app = express();
const port = 3001;

// Middleware para parser JSON
app.use(express.json());
app.use(cors());

app.use('/api', router);
// Rota de exemplo
app.get('/', (req, res) => {
  res.json({ message: 'API UP' });
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
