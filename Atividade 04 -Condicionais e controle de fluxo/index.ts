//Questão 01
//Escreva um programa que leia um número inteiro e verifique se ele é positivo, negativo ou igual a zero.
const numInteiro = parseInt(prompt("Digite um número inteiro:")!);
if (numInteiro < 0) {
  console.log(`O número ${numInteiro} é negativo!`);
} else if (numInteiro == 0) {
  console.log(`O número ${numInteiro} é igual a zero!`);
} else {
  console.log(`O número ${numInteiro} é positivo!`);
}

//Questão 02
// Crie um programa que receba a idade de uma pessoa e exiba se ela é maior de idade ou menor de idade.
const idade = Number(prompt("Idade: "));
if (idade < 18) {
    console.log("A pessoa é menor de idade");
} else {
    console.log("A pessoa é maior de idade");
}