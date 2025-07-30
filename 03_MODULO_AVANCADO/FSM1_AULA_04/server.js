// IMPORTAÇÕES E INSTANCIAÇÕES
const express = require('express');
const fs = require('fs'); //Novo import
const path = require('path');

const app = express();
const PORT = 4000;
app.use(express.json());

const filePath = path.join(__dirname, 'usuarios.json'); // Aponto o caminho para arquivo

// Função para ler o conteúdo do arquivo e converter para array
function lerUsuarios() {
    const data = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(data);
}

// Função para salvar um array no arquivo JSON
function salvarUsuarios(usuarios) {
    fs.writeFileSync(filePath, JSON.stringify(usuarios, null, 2), 'utf-8');
}

// GET (listar todos os usuários)
app.get("/", (req, res) => {
    const usuarios = lerUsuarios();
    res.send(usuarios);
});

// POST (adicionar um novo usuário)
app.post("/", (req, res) => {
    const usuarios = lerUsuarios();
    const usuario = req.body;
    usuarios.push(usuario);
    salvarUsuarios(usuarios);
    res.send("Usuário adicionado com sucesso!");
});

// PUT (atualizar um usuário pelo ID)
app.put("/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const usuarios = lerUsuarios();
    const index = usuarios.findIndex(usuario => usuario.id === id);

    if (index !== -1) {
        usuarios[index] = { id, ...req.body };
        salvarUsuarios(usuarios);
        res.send("Usuário atualizado com sucesso!");
    } else {
        res.status(404).send("Usuário não encontrado.");
    }
});

// DELETE (remover um usuário pelo ID)
app.delete("/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const usuarios = lerUsuarios();
    const index = usuarios.findIndex(usuario => usuario.id === id);

    if (index !== -1) {
        usuarios.splice(index, 1);
        salvarUsuarios(usuarios);
        res.send("Usuário deletado com sucesso!");
    } else {
        res.status(404).send("Usuário não encontrado");
    }
});

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em: http://localhost:${PORT}`);
});
