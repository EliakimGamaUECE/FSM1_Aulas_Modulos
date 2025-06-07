//Função tradicional

// function mult(x,y){
//   let s = x * y
//   return s
// }

// function mult(x,y){
//   return x * y
// }

// function sub(x,y){
//   return x - y
// }

// function soma(x,y){
//  return x + y
// }

// let vamo_var = soma()
// document.writeln(soma(5,1952))


// function ola(nome){
//  return alert(`Seja bem vindo! ${nome}`)
// }
// ola("Eliakim")


//VLAD e Mauricio
// function ehTriangulo(a, b, c) {
//   return a + b > c && a + c > b && b + c > a;
// }

// function tipoTriangulo(a, b, c) {
//   if (!ehTriangulo(a, b, c)) {
//     return "Erro: Os valores informados não formam um triângulo.";
//   }

//   if (a === b && b === c) {
//     return "Triângulo Equilátero";
//   } else if (a === b || a === c || b === c) {
//     return "Triângulo Isósceles";
//   } else {
//     return "Triângulo Escaleno";
//   }
// }

// // Exemplo: valores fixos
// const lado1 = 3;
// const lado2 = 4;
// const lado3 = 5;

// document.writeln(tipoTriangulo(lado1, lado2, lado3));


//LOHAN E ANA
// let lado_1 = parseFloat(prompt("Digite o primeiro lado do triângulo:"));
// let lado_2 = parseFloat(prompt("Digite o segundo lado do triângulo:"));
// let lado_3 = parseFloat(prompt("Digite o terceiro lado do triângulo:"));


// function triangulo_valido(lado_1,lado_2,lado_3){
//     if ((lado_1 + lado_2 > lado_3) &&
//         (lado_1 + lado_3 > lado_2) &&
//         (lado_2 + lado_3 > lado_1)) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }

// function tipo_triangulo(lado_1,lado_2,lado_3){
//     if (lado_1 === lado_2 == lado_3) {
//         return "Equilátero";
//     }
//     else if (lado_1 === lado_2  || lado_1 === lado_3 || lado_2 === lado_3) {
//         return "Isósceles";
//     }
//     else {
//         return "Escaleno";
//     }}

// document.writeln("seu triangulo é: " + tipo_triangulo(lado_1,lado_2,lado_3));

//Arrow Functions

const mult = (x,y) => x * y

let a = 5
let b = 5

document.writeln(mult(a,b))

