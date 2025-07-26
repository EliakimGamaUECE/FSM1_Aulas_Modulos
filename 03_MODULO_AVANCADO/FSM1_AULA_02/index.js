// IMPORTAÇÕES E INSTANCIAÇÕES
const express = require('express'); // import express from 'express';
const nodemon = require('nodemon');
const app = express();
const PORT = 3000;

app.use(express.json());
const livros =[];

//MÉTODOS

//MÉTODO GET
app.get("/", (req, res) => {
    res.send(livros);
});

//MÉTODO POST   -----------------------JÁ FIZ, TESTATO E APROVADO!!!
app.post("/", (req, res) => {
    const livro = req.body;
    livros.push(livro);
    res.send("Livro adicionado com sucesso!");
});

//MÉDUTO PUT
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

//DELETE
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

// START/ INICIAÇÃO/CONFIGURAÇÃO DO SERVIDOR
app.listen(PORT,()=>{
    console.log(`Seu servidor está em: http://localhost:${PORT}`)
})
