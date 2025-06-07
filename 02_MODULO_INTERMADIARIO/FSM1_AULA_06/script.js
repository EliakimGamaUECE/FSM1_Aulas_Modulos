//********ARMAZENAMENTO LOCAL********

//INSERIR 1 ELEMENTO

// localStorage.setItem("Nome0","Ryan")
// localStorage.setItem("Nome1","Gabriel")
// localStorage.setItem("Nome2","Otavio")
// localStorage.setItem("Nome3","Keyla")

//PEGAR 1 ELEMENTO

// document.writeln(localStorage.getItem(5))

// localStorage.clear()
// document.writeln(localStorage.key(4))

//APAGAR 1 ELEMENTO

// localStorage.removeItem("nome")

//LIMPAR O LOCAL STORAGE

// localStorage.clear()

//INSERIR VÁRIOS ELEMENTOS
// let nome = ["maça","banana","laranja","goiaba","limão","jaca"]

// for(let i = 0;i < nome.length;i++){
//     localStorage.setItem(`nome: ${i}`,nome[i])
// }

// let preco = [4,7,10,8,9,9]

// for(let i = 0;i < preco.length;i++){
//     localStorage.setItem(`Preço: ${i}`,preco[i])
// }

// let categoria = ["verde","amarelo","azul","cinza","preto","laranja"]

// for(let i = 0;i < categoria.length;i++){
//     localStorage.setItem(`Categoria: ${i}`,categoria[i])
// }


// let frutas = ["maça","banana","laranja","goiaba","limão","jaca"]

// for(let i = 0;i < frutas.length;i++){
//     document.writeln(frutas[i])
// }

//pula fora do FOR




//PEGAR VÁRIOS ELEMENTOS

// for(let i = 0;i < frutas.length;i++){
//     document.writeln(localStorage.getItem(i))
// }


//********MÉTODOS EM JS********

// let frutas = ["maça","banana","laranja","goiaba","limão","jaca"]

//INSERIR UM ELEMENTO NO ARRAY

// frutas.push("abacaxi")
// console.log(frutas)

//ITERAR SOBRE OS ELEMENTOS OPERANDO SOBRE CADA 1

//função da forma GRANDE
// const mult_2 = (n => n * 2)
// let num = [4,7,10,8,9,9]
// let num_mult = num.map(mult_2)
// console.log(num_mult)

//função da forma MEDIA
// let num = [4,7,10,8,9,9]
// let num_mult = num.map(n => n * 3)
// console.log(num_mult)

//função da forma ENXUTA
// let num = [4,7,10,8,9,9].map(n => n * 5)
// console.log(num)

