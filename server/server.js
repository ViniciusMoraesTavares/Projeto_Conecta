const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());

// Servir arquivos estáticos da pasta 'public'
app.use(express.static(path.join(__dirname, '..', 'public')));

// Rota para a página home.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'Pages', 'home.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
