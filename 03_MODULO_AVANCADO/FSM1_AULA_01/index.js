// IMPORTAÇÕES E INSTANCIAÇÕES
const express = require('express'); // import express from 'express';
const app = express();
const PORT = 3000;

//MÉTODOS
app.get('/',(res)=>{
    res.send('Deu tudo certo!!Uhuuuu!!!!!')
})

// START/ INICIAÇÃO/CONFIGURAÇÃO DO SERVIDOR
app.listen(PORT,()=>{
    console.log(`Seu servidor está em: http://localhost:${PORT}`)
})
