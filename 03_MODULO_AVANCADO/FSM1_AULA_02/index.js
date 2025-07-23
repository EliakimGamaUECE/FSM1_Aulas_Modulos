const express = require("express");
const app = express();
const PORT = 3000;

// Permite ler JSON no body das requisições
app.use(express.json());

const livros = []; // Lista de livros (armazenamento em memória)

// PEGAR (READ)
app.get("/", (req, res) => {
    res.send(livros);
});

// INSERIR (CREATE)
app.post("/", (req, res) => {
    const livro = req.body;
    livros.push(livro);
    res.send("Livro adicionado com sucesso!");
});

// EDITAR (UPDATE)
app.put("/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const index = livros.findIndex(livro => livro.id === id);

    if (index !== -1) {
        livros[index] = { id, ...req.body };
        res.send("Livro atualizado com sucesso!");
    } else {
        res.status(404).send("Livro não encontrado.");
    }
});

// DELETAR (DELETE)
app.delete("/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const index = livros.findIndex(livro => livro.id === id);

    if (index !== -1) {
        livros.splice(index, 1);
        res.send("Livro deletado com sucesso!");
    } else {
        res.status(404).send("Livro não encontra");
    }
});

// INICIALIZAÇÃO
app.listen(PORT, () => {
    console.log(`Servidor rodando em: http://localhost:${PORT}`);
});