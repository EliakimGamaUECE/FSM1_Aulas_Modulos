// IMPORTAÇÕES E INSTANCIAÇÕES
const express = require('express');
const fs = require('fs'); //  NOVO: módulo para ler/gravar arquivos
const path = require('path'); //  NOVO: para trabalhar com caminho de arquivo

const app = express();
const PORT = 3000;
app.use(express.json());


const filePath = path.join(__dirname, 'livros.json'); //  NOVO: caminho para o arquivo JSON

//  NOVO: função para ler o conteúdo do arquivo e converter para array
function lerLivros() {
    const data = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(data);
}

//  NOVO: função para salvar um array no arquivo JSON
function salvarLivros(livros) {
    fs.writeFileSync(filePath, JSON.stringify(livros, null, 2), 'utf-8');
}


// GET (LISTAR/PEGAR/MOSTRAR)
app.get("/", (req, res) => {
    const livros = lerLivros(); // ALTERADO: ler do arquivo, não da memória
    res.send(livros);
});


// POST (INSERIR)
app.post("/", (req, res) => {
    const livros = lerLivros(); //  ALTERADO: ler do arquivo
    const livro = req.body;
    livros.push(livro);
    salvarLivros(livros); //  NOVO: salvar no arquivo
    res.send("Livro adicionado com sucesso!");
});


// PUT (EDITAR)
app.put("/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const livros = lerLivros(); //  ALTERADO
    const index = livros.findIndex(livro => livro.id === id);

    if (index !== -1) {
        livros[index] = { id, ...req.body };
        salvarLivros(livros); //  NOVO
        res.send("Livro atualizado com sucesso!");
    } else {
        res.status(404).send("Livro não encontrado.");
    }
});


// DELETE (REMOVER)
app.delete("/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const livros = lerLivros(); //  ALTERADO
    const index = livros.findIndex(livro => livro.id === id);

    if (index !== -1) {
        livros.splice(index, 1);
        salvarLivros(livros); //  NOVO
        res.send("Livro deletado com sucesso!");
    } else {
        res.status(404).send("Livro não encontrado");
    }
});


// START/ INICIAÇÃO/CONFIGURAÇÃO DO SERVIDOR
app.listen(PORT, () => {
    console.log(`Seu servidor está em: http://localhost:${PORT}`);
});
