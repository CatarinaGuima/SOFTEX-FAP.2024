//// Questão 01 e Questão 02
//// Enumere as diferenças entre os comandos "for" e "while". Descreva em quais circunstâncias os comandos "for" e "while" devem ser empregados.
//// O comando "for" é usado quando sabe quando iniciar e parar um código de repetição, também bastante utilizado para iterar listas. A estrutura do "while" é geralmente usada quando o número de iterações não é conhecido antecipadamente e depende de uma condição que pode mudar durante a execução do laço.  A escolha entre um e outro depende do problema específico que se está tentando resolver e da forma como o laço deve ser controlado.

//// Questãp 03
//// Implemente o código do slide de número 9.
// let i = 0;
// while (i < 10) {
//     console.log("Testando uma frase!")
//     i++;
// }

////Questão 04
// // Implemente o código do slide de número 16.
// let i = 465484133;
// while (i > 10) {
//     console.log(i);
//     i /= 35;
// }

// //Questão 05
// // Implemente o código do slide de número 26.
// let i = 0;
// do {
//     console.log(i);
//     i++;
// } while (i < 5);

// //Questão 06
// // Escreva um programa que exiba os números de 1 a 10 em ordem crescente utilizando o while.
// let i = 1;
// do {
//     console.log(i);
//     i++;
// } while (i <= 10);

// //Questão 07
// // Crie um programa que exiba os números de 10 a 1 em ordem decrescente utilizando o while.
// let i = 10;
// while (i > 0) {
//   console.log(i);
//   i--;
// }

// //Questão 08
// // Elabore um programa que calcule a soma dos números de 1 a 100 utilizando o while.
// let soma = 0;
// let i = 1;
// while (i <= 100) {
//     soma += i;
//     i++;
// }
// console.log(`A soma dos números de 1 a 100 é: ${soma}`);

// //Questão 09 
// // Faça um programa que calcule o produto dos números de 1 a 5 utilizando o while.
// let multi = 1;
// let i = 1;
// while (i <= 5) {
//     multi *= i;
//     i++;
// }
// console.log(`O produto dos números de 1 a 5 é: ${multi}`);

// //Questão 10
// // Crie um programa que exiba a tabuada do 9 utilizando o while.
// let resultado = 0;
// let i = 1;
// console.log("TABUADA DO 9")
// while (i <= 10 ) {
//     resultado = 9 * i;
//     i++;
//     console.log(`9 x ${i - 1} = ${resultado}`);
// }

// //DESAFIO
// //Crie um programa que receba n notas de alunos até o número -1 seja teclado.
// //Mostre a maior nota
// //Mostre a menor nota
// //Mostre quantas notas foram inseridas
// //Calcule a média das notas
// //Mostre quantos foram aprovados e quantos não foram aprovados (aprovado >= 7)
// let qtdNotas = 0;
// let i = 0;
// let soma = 0;
// let nota = 0;
// let menorNota = 11;
// let maiorNota = -1;
// let aprovados = 0;
// let reprovados = 0;

// while (nota !== -1) {
//   nota = parseFloat(prompt(`Digite a ${i + 1}º nota: `)!);
//   soma += nota;
//   qtdNotas++;

//   i++;
//   if (nota >= 0 && nota <= 10) {
//     if (nota < menorNota) {
//       menorNota = nota;
//     }
//     if (nota > maiorNota) {
//       maiorNota = nota;
//     }

//     if (nota >= 7) {
//       aprovados++;
//     } else {
//       reprovados++;
//     }
//   }
// }
// let mediaNotas = (soma + 1) / (qtdNotas - 1);

// console.log(`A maior nota inserida foi ${maiorNota}`);
// console.log(`A menor nota inserida foi ${menorNota}`);
// console.log(`A quantidade de notas que foram inseridas foi ${qtdNotas - 1}`);
// console.log(`A média das notas é ${mediaNotas}`);
// console.log(`Foram aprovados ${aprovados} alunos`);
// console.log(`Foram reprovados ${reprovados} alunos`);

//Questão 11
