//IMPORTS OU INSTANCIAÇÕES
const express = require('express');  //import express from "express"
const app = express();
const port = 3000;

//DEFINIÇÃO DOS MÉTODOS
app.get('/',(req,res)=>{
    res.send("Deu certo!!!Uhuuuu")
});

//START/LIGAÇÃO/EXECUÇÃO/CONFG DO SERVIDOR
app.listen(port,()=>{
    console.log(`O servidor tá rodando em: http://localhost:${port}`)
});