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
const publicPath = path.resolve(__dirname, '..', 'public');
app.use(express.static(publicPath));

// Rota para a página home.html
app.get('/', (req, res) => {
  res.sendFile(path.resolve(publicPath, 'Pages', 'home.html'));
});

// Rota para a página login.html
app.get('/login.html', (req, res) => {
  res.sendFile(path.resolve(publicPath, 'Pages', 'login.html'));
});

// Rota para a página cadastro.html
app.get('/cadastro.html', (req, res) => {
  res.sendFile(path.resolve(publicPath, 'Pages', 'cadastro.html'));
});

// Rota para a página cursos.html
app.get('/cursos.html', (req, res) => {
  res.sendFile(path.resolve(publicPath, 'Pages', 'cursos.html'));
});

// Rota para a página instituicoes.html
app.get('/instituicoes.html', (req, res) => {
  res.sendFile(path.resolve(publicPath, 'Pages', 'instituicoes.html'));
});

// Rota para a página perfil.html
app.get('/perfil.html', (req, res) => {
  res.sendFile(path.resolve(publicPath, 'Pages', 'perfil.html'));
});

// Rota para a página configuracao.html
app.get('/configuracao.html', (req, res) => {
  res.sendFile(path.resolve(publicPath, 'Pages', 'configuracao.html'));
});

// Rota para a página cadastrar-cursos.html
app.get('/cadastrar-cursos.html', (req, res) => {
  res.sendFile(path.resolve(publicPath, 'Pages', 'cadastrar-cursos.html'));
});

// Rota para a página editar-cursos.html
app.get('/editar-cursos.html', (req, res) => {
  res.sendFile(path.resolve(publicPath, 'Pages', 'editar-cursos.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});