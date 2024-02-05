const express = require('express');
const path = require('path');
const helmet = require('helmet');
const app = express();

app.use(express.json());

// Middleware para adicionar Content Security Policy (CSP)
app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],
      fontSrc: ["'self'", 'https://cdn.jsdelivr.net'],
      scriptSrc: ["'self'", 'https://code.jquery.com', 'https://cdn.jsdelivr.net'],
    },
  })
);

// Servir arquivos estáticos da pasta 'public'
app.use(express.static(path.resolve(__dirname, '..', 'public')));

// Rota para a página home.html
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'public', 'Pages', 'home.html'));
});

// Rota para a página login.html
app.get('/login.html', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'public', 'Pages', 'login.html'));
});

// Rota para a página cadastro.html
app.get('/cadastro.html', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'public', 'Pages', 'cadastro.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});