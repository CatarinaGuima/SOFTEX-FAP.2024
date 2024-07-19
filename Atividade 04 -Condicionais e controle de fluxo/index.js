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
// // Questão 07
// // Desenvolva um programa que leia um caractere e verifique se ele é uma vogal ou uma consoante.
// const caractere = prompt("Escolha 01(UM) caractere: ");
// if (caractere === null) {
//   console.log("A entrada foi cancelada.");
// } else if (caractere.length !== 1) {
//   console.log("Digite apenas um caractere.");
// } else if (caractere.toUpperCase() === "A" || caractere.toUpperCase() === "E" || caractere.toUpperCase() === "I" || caractere.toUpperCase() === "O" || caractere.toUpperCase() === "U") {
//   console.log(`O caractere: '${caractere}' é uma vogal`);
// } else {
//   console.log(`O caractere: '${caractere}' é uma consoante`);
// }
// //Questão 08
// // Faça um programa que receba três números e os imprima em ordem crescente.
// const numeros: number [] = []
// for (let i = 1 ; i <= 3 ; i++){
//     const numero = Number(prompt(`Entre com o ${i}º número inteiro: `));
//     numeros.push(numero);
// }
// numeros.sort((a, b) => a - b);
// console.log(numeros);
// //Questão 09
// // Elabore um programa que calcule o IMC (Índice de Massa Corporal) de uma pessoa, dado o peso e a altura. Em seguida, exiba se a pessoa está abaixo do peso, com peso normal, com sobrepeso, obesa ou muito obesa.
// const altura = Number(prompt("Por favor, informe a altura: "));
// const peso = Number(prompt("Agora, informe o peso: "));
// const IMC = peso / altura ** 2;
// if (IMC > 0 && IMC <= 18.5) {
//     console.log(`O IMC: ${IMC.toFixed(2)}. Você está abaixo do peso!`);
// } else if (IMC > 18.5 && IMC <= 24.9) {
//     console.log(`O IMC: ${IMC.toFixed(2)}. Você está com peso normal!`);
// } else if (IMC >= 25.0 && IMC < 29.9) {
//     console.log(`O IMC: ${IMC.toFixed(2)}. Você está com sobrepeso!`);
// } else if (IMC >= 30.0 && IMC < 39.9) {
//     console.log(`O IMC: ${IMC.toFixed(2)}. Você está com obesidade!`);
// } else if (IMC >= 40.0) {
//     console.log(`O IMC: ${IMC.toFixed(2)}. Você está muito obesa!`);
// }
// //Questão 10
// // Escreva um programa que receba um número de mês (1 a 12) e exiba o nome do mês correspondente.
// const mes = parseInt(prompt("Escolha um número de 1 à 12: ")!);
// switch (mes) {
//   case 1:
//     console.log("Bem-vindo(a) ao mês de Janeiro");
//     break;
//   case 2:
//     console.log("Bem-vindo(a) ao mês de Fevereiro");
//     break;
//   case 3:
//     console.log("Bem-vindo(a) ao mês de Março");
//     break;
//   case 4:
//     console.log("Bem-vindo(a) ao mês de Abril");
//     break;
//   case 5:
//     console.log("Bem-vindo(a) ao mês de Maio");
//     break;
//   case 6:
//     console.log("Bem-vindo(a) ao mês de Junho");
//     break;
//   case 7:
//     console.log("Bem-vindo(a) ao mês de Julho");
//     break;
//   case 8:
//     console.log("Bem-vindo(a) ao mês de Agosto");
//     break;
//   case 9:
//     console.log("Bem-vindo(a) ao mês de Setembro");
//     break;
//   case 10:
//     console.log("Bem-vindo(a) ao mês de Outubro");
//     break;
//   case 11:
//     console.log("Bem-vindo(a) ao mês de Novembro");
//     break;
//   case 12:
//     console.log("Bem-vindo(a) ao mês de Dezembro");
//     break;
//   default:
//     console.log("Número inválido! Digite um número entre 1 e 12.");
//     break;
// }
// //Questão 11
// // Desenvolva um programa que leia o salário de um funcionário e calcule o valor do seu aumento. Para salários superiores a R$ 1.500,00, o aumento deve ser de 10%. Caso contrário, o aumento é de 15%.
// const salario = parseFloat(prompt("Informe o salário R$: ")!);
// if (salario >= 1.500) {
//     const aumento = salario * 0.10;
//     console.log(`O aumento é de R$ ${aumento.toFixed(2)}`);
//     const novaSalario = salario + aumento;
//     console.log(`O novo salário é R$ ${(novaSalario).toFixed(2)}`);
// } else {
//     const aumento = salario * 0.15;
//     console.log(`O aumento é de R$ ${aumento.toFixed(2)}`);
//     const novaSalario = salario + aumento;
//     console.log(`O novo salário é R$ ${(novaSalario).toFixed(2)}`);
// }
