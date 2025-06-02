
//ESTRUTURA DE CONDIÇÃO (if, else)

// let nota = 6
// let media = 6

// if(nota>media){
//     document.writeln(`Aluno aprovado!!! Sua nota foi ${nota}`)
// }
// else if (nota<media){
//     document.writeln(`Vai para rere!!`)
// }

// else{
//     document.writeln(`Vai fazer a prova de reposição nota`)
// }


//ESTRUTURA DE REPETIÇÃO (for)

// for(let i=0;i<=5;i++){
//     document.writeln(`Escrevendo o número ${i}<br>`)
// }

// for(let i = 10;i>=0;i--){
//     document.writeln(`contagem ${i}<br>`)
// }
// document.writeln(`FOGUETE LANÇADO!!!`)


//ESTRUTURA DE CONTROLE (while, do while)

// let i = 10
// while(i<10){
//     document.writeln(`Imprimindo o número ${i}<br>`)
//      i++
// }

// do{
//     document.writeln(`Imprimindo o número ${i}<br>`)
//     i++
// }
// while(i<10)

//LEO
// let soma = 0;

// for (let i = 1; i <= 100; i++) {
//     soma += i;
// }

// console.log("A soma dos números de 1 até 100 é:", soma);

//CHAGAS
// const numerosSomados = 100
// let soma = 0
// for (let i = 1; i <= numerosSomados; i++) {
//     soma += i
// }
// console.log(soma);

// OTAVIO 1.2
// let soma = 0;
// let operacao = 0;
// for (i = 0; i <= 100; i++){
//     operacao = `${soma} + ${i} = ${soma + i}<br>`;
//     document.writeln(operacao);   
//     soma += i;
// }

//Alisson
// let Somado = 0;
// let i= 1;
// do {
//         Somado = Somado + i
//         i++
// }
// while(i<=100);

// document.writeln(`A soma dos números ${Somado}`);


// ARRAYS

// var frutas = ["Maçã", "Banana", "Laranja", "Uva", "Abacaxi"]
// document.writeln(frutas[0])

// document.writeln(frutas.length)

//Alisson
// var comidas = ["arroz", "feijão", "macarrão", "ovo", "carne", "frango", "alface", "farofa", "cuscuz", "soja"]

// for(let a=0;a < comidas.length;a++){
//       document.writeln(comidas[a]);
// }

//LEO E GUILHERME
// let produtos = [
//   { nome: "Lápis", preco: 1.50, categoria: "Papelaria" },
//   { nome: "Caderno", preco: 12.00, categoria: "Papelaria" },
//   { nome: "Mouse", preco: 45.00, categoria: "Informática" },
//   { nome: "Teclado", preco: 70.00, categoria: "Informática" },
//   { nome: "Caneta", preco: 2.00, categoria: "Papelaria" },
//   { nome: "Monitor", preco: 500.00, categoria: "Informática" },
//   { nome: "Borracha", preco: 1.00, categoria: "Papelaria" },
//   { nome: "Impressora", preco: 350.00, categoria: "Informática" },
//   { nome: "Cadeira", preco: 150.00, categoria: "Móveis" },
//   { nome: "Mesa", preco: 300.00, categoria: "Móveis" },
//   { nome: "Estante", preco: 250.00, categoria: "Móveis" }
// ];

// console.log("Produtos da categoria 'Móveis':");

// for (let i = 0; i < produtos.length; i++) {
//   if (produtos[i].categoria === "Móveis") {
//     console.log(`Nome: ${produtos[i].nome}, Preço: R$ ${produtos[i].preco.toFixed(2)}`);
//   }
// }

//SHAYANE E OTAVIO
// let produtos = [
//   { nome: "Lápis", preco: 1.50, categoria: "Papelaria" },
//   { nome: "Caderno", preco: 12.00, categoria: "Papelaria" },
//   { nome: "Mouse", preco: 45.00, categoria: "Informática" },
//   { nome: "Teclado", preco: 70.00, categoria: "Informática" },
//   { nome: "Caneta", preco: 2.00, categoria: "Papelaria" },
//   { nome: "Monitor", preco: 500.00, categoria: "Informática" },
//   { nome: "Borracha", preco: 1.00, categoria: "Papelaria" },
//   { nome: "Impressora", preco: 350.00, categoria: "Informática" },
//   { nome: "Cadeira", preco: 150.00, categoria: "Móveis" },
//   { nome: "Mesa", preco: 300.00, categoria: "Móveis" },
//   { nome: "Estante", preco: 250.00, categoria: "Móveis" }
// ];
// for(let i = 0; i < produtos.length; i++){
//     if (produtos[i].categoria === "Móveis"){
//         document.writeln(`Nome: ${produtos[i].nome} | Preço: R$ ${produtos[i].preco.toFixed(2)}<br>`);
//     }
// }


//DIEMES CHAGAS
let produtos = [
    { nome: "Lápis", preco: 1.50, categoria: "Papelaria" },
    { nome: "Caderno", preco: 12.00, categoria: "Papelaria" },
    { nome: "Mouse", preco: 45.00, categoria: "Informática" },
    { nome: "Teclado", preco: 70.00, categoria: "Informática" },
    { nome: "Caneta", preco: 2.00, categoria: "Papelaria" },
    { nome: "Monitor", preco: 500.00, categoria: "Informática" },
    { nome: "Borracha", preco: 1.00, categoria: "Papelaria" },
    { nome: "Impressora", preco: 350.00, categoria: "Informática" },
    { nome: "Cadeira", preco: 150.00, categoria: "Móveis" },
    { nome: "Mesa", preco: 300.00, categoria: "Móveis" },
    { nome: "Estante", preco: 250.00, categoria: "Móveis" }
  ];
  
  let totalMoveis = 0;
  
  for (let produto of produtos) {
    if (produto.categoria === "Móveis") {
      totalMoveis += produto.preco;
    }
  }
  
  console.log("O total da categoria Móveis é: R$ " + totalMoveis.toFixed(2));