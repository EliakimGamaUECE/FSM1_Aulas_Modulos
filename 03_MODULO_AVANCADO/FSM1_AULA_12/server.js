const express = require("express");
const { PrismaClient } = require("@prisma/client"); //código novo

const app = express();
const prisma = new PrismaClient(); //código novo
app.use(express.json());

const PORT = 3000;

function parseId(idStr) {
  const id = Number(idStr);
  if (!Number.isInteger(id) || id <= 0) {
    const err = new Error("ID inválido");
    err.status = 400;
    throw err;
  }
  return id;
}

// GET /users
app.get("/users", async (req, res) => {
  try {
    const users = await prisma.user.findMany({ orderBy: { id: "asc" } });
    res.json(users);
  } catch {
    res.status(500).json({ error: "Erro ao buscar usuários" });
  }
});

// GET /users/:id
app.get("/users/:id", async (req, res) => {
  try {
    const id = parseId(req.params.id);
    const user = await prisma.user.findUnique({ where: { id } });
    if (!user) return res.status(404).json({ error: "Usuário não encontrado" });
    res.json(user);
  } catch (error) {
    res.status(error.status || 500).json({ error: error.message || "Erro ao buscar usuário" });
  }
});

// POST /users
app.post("/users", async (req, res) => {
  try {
    const { name, email } = req.body;
    if (!name || !email) return res.status(400).json({ error: "Campos obrigatórios: name, email" });
    const newUser = await prisma.user.create({ data: { name, email } });
    res.status(201).json(newUser);
  } catch (error) {
    if (error.code === "P2002") return res.status(409).json({ error: "E-mail já cadastrado" });
    res.status(500).json({ error: "Erro ao criar usuário" });
  }
});

// PATCH /users/:id
app.patch("/users/:id", async (req, res) => {
  try {
    const id = parseId(req.params.id);
    const data = {};
    if (req.body.name !== undefined) data.name = req.body.name;
    if (req.body.email !== undefined) data.email = req.body.email;

    const updated = await prisma.user.update({ where: { id }, data });
    res.json(updated);
  } catch (error) {
    if (error.code === "P2025") return res.status(404).json({ error: "Usuário não encontrado" });
    if (error.code === "P2002") return res.status(409).json({ error: "E-mail já cadastrado" });
    res.status(500).json({ error: "Erro ao atualizar usuário" });
  }
});

// DELETE /users/:id
app.delete("/users/:id", async (req, res) => {
  try {
    const id = parseId(req.params.id);
    await prisma.user.delete({ where: { id } });
    res.json({ message: "Usuário excluído com sucesso" });
  } catch (error) {
    if (error.code === "P2025") return res.status(404).json({ error: "Usuário não encontrado" });
    res.status(error.status || 500).json({ error: error.message || "Erro ao excluir usuário" });
  }
});

app.listen(PORT, () => {
  console.log(`API em http://localhost:${PORT}`);
});
