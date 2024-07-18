// //Questão 01
// //Escreva um programa que leia um número inteiro e verifique se ele é positivo, negativo ou igual a zero.
// const numInteiro = parseInt(prompt("Digite um número inteiro: ")!);
// if (numInteiro < 0) {
//   console.log(`O número ${numInteiro} é negativo!`);
// } else if (numInteiro === 0) {
//   console.log(`O número ${numInteiro} é igual a zero!`);
// } else {
//   console.log(`O número ${numInteiro} é positivo!`);
// }

// //Questão 02
// // Crie um programa que receba a idade de uma pessoa e exiba se ela é maior de idade ou menor de idade.
// const idade = Number(prompt("Idade: "));
// if (idade < 0 && idade > 150) {
//   console.log("Digite um idade válida");
// } else if (idade < 18) {
//   console.log("A pessoa é menor de idade");
// } else {
//   console.log("A pessoa é maior de idade");
// }

// //Questão 03
// // Desenvolva um programa que leia dois números inteiros e mostre qual deles é o maior, ou se são iguais.
// const num1 = parseInt(prompt("Entre o 1º número inteiro: ")!);
// const num2 = parseInt(prompt("Entre o 2º número inteiro: ")!);
// if (num1 === num2) {
//   console.log("Os números são iguais");
// } else if (num1 > num2) {
//   console.log(`O ${num1} é maior que ${num2}`);
// } else {
//   console.log(`O ${num1} é menor que ${num2}`);
// }

// //Questão 04
// // Faça um programa que verifique se um número é par ou ímpar.
// const numero = parseInt(prompt("Entre com um número inteiro: ")!);
// if (numero % 2 === 0) {
//   console.log(`${numero} é um número par`);
// } else {
//   console.log(`${numero} é um número ímpar`);
// }

// //Questão 05
// // Elabore um programa que leia três notas de um aluno e calcule a média. Em seguida, exiba se o aluno está aprovado (média maior ou igual a 7) ou reprovado.
// let soma = 0;
// for (let i = 1 ; i <= 3 ; i++){
//   const notas = parseFloat(prompt(`Entre com a ${i}º nota: `)!);
//   if(notas < 0 || notas > 10){
//     console.log("Nota inválida! Digite uma nota entre 0 e 10.");
//   }
//   soma += notas;
// }
// const media = soma/3;
// if (media < 7) {
//   alert("Aluno(a) reprovado(a)!");
// } else {
//   alert("Aluno(a) aprovado(a)!");
// }

// //Questão 06
// // Crie um programa que receba o nome de duas pessoas e exiba qual delas possui o maior número de caracteres em seu nome.
// const nome1 = prompt("Digite o primeiro nome: "); 
// const nome2 = prompt("Digite o segundo nome: "); 
// if (nome1 === null || nome2 === null){
//   console.log("Você não digitou nenhum nome.");
// } else if (nome1.length > nome2.length) {
//  console.log(`O nome ${nome1} possui o maior número de caracteres do que ${nome2}`);
// } else {
//   console.log(`O nome ${nome2} possui o maior número de caracteres do que ${nome1}`);
// }

//Questão 07