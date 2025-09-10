// IMPORTAÇÕES E INSTANCIAÇÕES
const express = require('express');
// const fs = require('fs'); // saiu (não precisamos mais do fs)
// const path = require('path'); // saiu (não precisamos mais do path)
const { PrismaClient } = require('@prisma/client'); // novo: import do Prisma

const app = express();
const PORT = 5000;
app.use(express.json());

// const filePath = path.join(__dirname, 'usuarios.json'); // saiu (não usamos mais arquivo local)
// function lerUsuarios() { ... } // saiu
// function salvarUsuarios(usuarios) { ... } // saiu

const prisma = new PrismaClient(); // novo: instância única do Prisma Client

// GET (listar todos os usuários)
app.get("/", async (req, res) => {
    try {
        // const usuarios = lerUsuarios(); // saiu
        const usuarios = await prisma.user.findMany({ orderBy: { id: 'asc' } }); //  novo
        res.json(usuarios); // (antes era res.send, mas tanto faz)
    } catch (e) {
        res.status(500).json({ error: "Erro ao buscar usuários" }); //  novo tratamento
    }
});

// POST (adicionar um novo usuário)
app.post("/", async (req, res) => {
    try {
        // const usuarios = lerUsuarios(); // saiu
        // const usuario = req.body; // saiu
        // usuarios.push(usuario); // saiu
        // salvarUsuarios(usuarios); // saiu
        // res.send("Usuário adicionado com sucesso!"); // saiu
        const novo = await prisma.user.create({ data: req.body }); // novo
        res.status(201).json(novo); // novo
    } catch (e) {
        res.status(500).json({ error: "Erro ao criar usuário" }); // novo
    }
});

// PUT (atualizar um usuário pelo ID)
app.put("/:id", async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        // const usuarios = lerUsuarios(); // saiu
        // const index = usuarios.findIndex(usuario => usuario.id === id); // saiu
        // if (index !== -1) { usuarios[index] = { id, ...req.body }; salvarUsuarios(usuarios); ... } // saiu

        const atualizado = await prisma.user.update({ // novo
            where: { id },
            data: req.body
        });
        res.json(atualizado); // novo
    } catch (e) {
        if (e.code === 'P2025') return res.status(404).json({ error: "Usuário não encontrado" }); // novo
        res.status(500).json({ error: "Erro ao atualizar usuário" }); // novo
    }
});

// DELETE (remover um usuário pelo ID)
app.delete("/:id", async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        // const usuarios = lerUsuarios(); // saiu
        // const index = usuarios.findIndex(usuario => usuario.id === id); // saiu
        // if (index !== -1) { usuarios.splice(index, 1); salvarUsuarios(usuarios); ... } // saiu

        await prisma.user.delete({ where: { id } }); // novo
        res.send("Usuário deletado com sucesso!"); // (igual ao antigo)
    } catch (e) {
        if (e.code === 'P2025') return res.status(404).send("Usuário não encontrado"); // novo
        res.status(500).json({ error: "Erro ao deletar usuário" }); // novo
    }
});

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em: http://localhost:${PORT}`);
});
