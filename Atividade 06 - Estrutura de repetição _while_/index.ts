// import { calcularMaiorNota, calcularMediaNotas, calcularMenorNota, calcularSituacaoAluno } from "./functions";

// // Questão 01 e Questão 02
// // Enumere as diferenças entre os comandos "for" e "while". Descreva em quais circunstâncias os comandos "for" e "while" devem ser empregados.
// // O comando "for" é usado quando sabe quando iniciar e parar um código de repetição, também bastante utilizado para iterar listas. A estrutura do "while" é geralmente usada quando o número de iterações não é conhecido antecipadamente e depende de uma condição que pode mudar durante a execução do laço.  A escolha entre um e outro depende do problema específico que se está tentando resolver e da forma como o laço deve ser controlado.

// // Questãp 03
// // Implemente o código do slide de número 9.
// let i = 0;
// while (i < 10) {
//     console.log("Testando uma frase!")
//     i++;
// }

// //Questão 04
// // Implemente o código do slide de número 16.
// let indicador = 465484133;
// while (indicador > 10) {
//     console.log(i);
//     indicador /= 35;
// }

// //Questão 05
// // Implemente o código do slide de número 26.
// let j = 0;
// do {
//     console.log(j);
//     j++;
// } while (j < 5);

// //Questão 06
// // Escreva um programa que exiba os números de 1 a 10 em ordem crescente utilizando o while.
// let k = 1;
// do {
//     console.log(k);
//     k++;
// } while (k <= 10);

// //Questão 07
// // Crie um programa que exiba os números de 10 a 1 em ordem decrescente utilizando o while.
// let l = 10;
// while (l > 0) {
//   console.log(l);
//   l--;
// }

// //Questão 08
// // Elabore um programa que calcule a soma dos números de 1 a 100 utilizando o while.
// let soma = 0;
// let ind = 1;
// while (ind <= 100) {
//     soma += ind;
//     ind++;
// }
// console.log(`A soma dos números de 1 a 100 é: ${soma}`);

// //Questão 09
// // Faça um programa que calcule o produto dos números de 1 a 5 utilizando o while.
// let multi = 1;
// let m = 1;
// while (m <= 5) {
//     multi *= m;
//     m++;
// }
// console.log(`O produto dos números de 1 a 5 é: ${multi}`);

// //Questão 10
// // Crie um programa que exiba a tabuada do 9 utilizando o while.
// let resultado = 0;
// let n = 1;
// console.log("TABUADA DO 9")
// while (n <= 10 ) {
//     resultado = 9 * n;
//     n++;
//     console.log(`9 x ${n - 1} = ${resultado}`);
// }

// //DESAFIO
// //Crie um programa que receba n notas de alunos até o número -1 seja teclado.
// //Mostre a maior nota
// //Mostre a menor nota
// //Mostre quantas notas foram inseridas
// //Calcule a média das notas
// //Mostre quantos foram aprovados e quantos não foram aprovados (aprovado >= 7)
// let num = 0;
// let nota = 0;
// while (nota !== -1) {
//   nota = parseFloat(prompt(`Digite a ${num + 1}º nota: `)!);
//   num++;
//   if (nota >= 0 && nota <= 10) {
//     calcularMenorNota(nota);
//     calcularMaiorNota(nota);
//     calcularSituacaoAluno(nota);
//   }
// }
// calcularMediaNotas(nota);

// // Questão 11
// // Crie um programa que leia uma sequência de números inteiros do usuário e exiba o maior e o menor valor digitado. O programa deve parar de ler quando o usuário digitar o número 0 utilizando o while.
// let numInteiro;
// const numeros: number[] = [];
// while (numInteiro !== 0) {
//   numInteiro = parseInt(prompt("Informe uma sequência de números inteiros (digite 0 para sair):")!);
//   numeros.push(numInteiro);
//   if (numeros.length > 1) {
//     const maiorValor = Math.max(...numeros);
//     const menorValor = Math.min(...numeros);
//     console.log(`O maior número é ${maiorValor} e o menor número é ${menorValor}`);
//   }
// }

// //Questão 12
// // Crie um programa que leia uma sequência de números inteiros do usuário e exiba a média dos números digitados. O programa deve parar de ler quando o usuário digitar o número -1 utilizando o while.
// let numerosInt;
// let somar = 0;
// let contador = 0;
// while (numerosInt !== -1) {
//   numerosInt = parseInt(
//     prompt("Informe uma sequência de números inteiros (digite -1 para sair):")!
//   );
//   somar += numerosInt;
//   contador++;
//   const media = somar /contador;
//   console.log(`A média dos números digitados é ${media.toFixed(2)}`);
// }

// //Questão 13
//// Faça um programa que leia um número inteiro e exiba a soma dos seus dígitos elevados ao cubo utilizando o while.
// let soma = 0;
// let pergunta = prompt("Deseja fazer a operação? [S/N]: ");
// do {
//   const numero = parseInt(prompt("Informe um número inteiro: ")!);
//   soma += numero;
//   pergunta = prompt("Deseja fazer a operação? [S/N]: ");
// } while (pergunta === "S");
// let valorCubo = soma**3;
// console.log(`A soma dos dígitos elevados ao cubo: ${valorCubo.toFixed(2)}`);

//Questão 14
// Faça um programa que exiba os números ímpares de 1 a 100 utilizando o while.
