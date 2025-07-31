const express = require('express');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser'); //Novo
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;
const SEGREDO = 'fsm1';

app.use(bodyParser.json());

// Caminho do arquivo JSON com usuários
const filePath = path.join(__dirname, 'usuarios.json');

// Função para ler os usuários do arquivo
function lerUsuarios() {
  const data = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(data);
}

// Rota de login (gera o token se nome e senha estiverem certos)
app.post('/login', (req, res) => {
  const { nome, senha } = req.body;
  const usuarios = lerUsuarios();

  const usuario = usuarios.find(u => u.nome === nome && u.senha === senha);

  if (!usuario) {
    return res.status(401).json({ mensagem: 'Usuário ou senha incorretos' });
  }

  const token = jwt.sign({ nome: usuario.nome, perfil: usuario.perfil }, SEGREDO);
  res.json({ token });
});

// Rota que verifica o token (retorna os dados do usuário autenticado)
app.get('/check', (req, res) => {
  const auth = req.headers['authorization'];
  const token = auth && auth.split(' ')[1];

  if (!token) {
    return res.status(401).json({ mensagem: 'Token não enviado' });
  }

  try {
    const dados = jwt.verify(token, SEGREDO);
    res.json({ mensagem: 'Token válido', usuario: dados });
  } catch (err) {
    res.status(403).json({ mensagem: 'Token inválido' });
  }
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
