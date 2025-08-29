
const express = require("express");
const app = express();

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const cors = require("cors");
app.use(cors());
app.use(express.json());

const PORT = 3000;

// Util: converte param id para número e valida
function parseId(idStr) {
  const id = Number(idStr);
  if (!Number.isInteger(id) || id <= 0) {
    const err = new Error("ID inválido");
    err.status = 400;
    throw err;
  }
  return id;
}

/* =========================
   USERS (CRUD BÁSICO)
========================= */

// Listar todos os usuários
app.get("/users", async (req, res) => {
  try {
    const users = await prisma.user.findMany({
      select: { id: true, name: true, email: true, createdAt: true },
      orderBy: { id: "asc" },
    });
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar usuários" });
  }
});

// Buscar um usuário por ID
app.get("/users/:id", async (req, res) => {
  try {
    const id = parseId(req.params.id);
    const user = await prisma.user.findUnique({
      where: { id },
      select: { id: true, name: true, email: true, createdAt: true },
    });
    if (!user) return res.status(404).json({ error: "Usuário não encontrado" });
    res.json(user);
  } catch (error) {
    res.status(error.status || 500).json({ error: error.message || "Erro ao buscar usuário" });
  }
});

// Criar usuário
app.post("/users", async (req, res) => {
  try {
    const { name, email } = req.body;
    if (!name || !email) {
      return res.status(400).json({ error: "Campos obrigatórios: name, email" });
    }
    const newUser = await prisma.user.create({ data: { name, email } });
    res.status(201).json(newUser);
  } catch (error) {
    if (error.code === "P2002") {
      // unique constraint (email)
      return res.status(409).json({ error: "E-mail já cadastrado" });
    }
    res.status(500).json({ error: "Erro ao criar usuário" });
  }
});

// Atualizar usuário (parcial)
app.patch("/users/:id", async (req, res) => {
  try {
    const id = parseId(req.params.id);
    const { name, email } = req.body;

    const data = {};
    if (name !== undefined) data.name = name;
    if (email !== undefined) data.email = email;

    const updated = await prisma.user.update({
      where: { id },
      data,
      select: { id: true, name: true, email: true, createdAt: true },
    });

    res.json(updated);
  } catch (error) {
    if (error.code === "P2025") {
      return res.status(404).json({ error: "Usuário não encontrado" });
    }
    if (error.code === "P2002") {
      return res.status(409).json({ error: "E-mail já cadastrado" });
    }
    res.status(500).json({ error: "Erro ao atualizar usuário" });
  }
});

// Deletar usuário
app.delete("/users/:id", async (req, res) => {
  try {
    const id = parseId(req.params.id);
    const exists = await prisma.user.findUnique({ where: { id } });
    if (!exists) return res.status(404).json({ error: "Usuário não encontrado" });

    await prisma.user.delete({ where: { id } });
    res.json({ message: "Usuário excluído com sucesso" });
  } catch (error) {
    res.status(error.status || 500).json({ error: error.message || "Erro ao excluir usuário" });
  }
});

/* =========================
   START
========================= */
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});

