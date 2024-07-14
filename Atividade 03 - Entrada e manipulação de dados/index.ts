//Questão 01
// Implemente o código do slide de número 5.
let frase = prompt("Entre a primeira frase: ");
console.log(frase);

//Questão 02
// Implemente o código do slide de número 13.
let string = "123";
console.log(typeof Number(string));
let number = 321;
console.log(typeof String(string));

//Questão 03
// Implemente o código do slide de número 16.
let numero1 = prompt("Digite o primeiro número: ");
let numero2 = prompt("Digite o segundo número: ");
let resultado = Number(numero1) + Number(numero2);
console.log(resultado);

//Questão 04
// Implemente o código do slide de número 23.
const string1 = "Estudar";
const string2 = " é bom!";
console.log(string1 + string2);
const numero = 48;
console.log(string1 + string2 + " " + numero);

//Questão 05
// Solicite ao usuário seu nome e imprima uma mensagem de boas-vindas na tela.
let nome = prompt("Olá! Por favor, digite o seu nome: ");
if (nome == null || nome == "") {
   nome = prompt("Olá! Por favor, digite o seu nome: ");
} else {
    alert(`Seja Bem-Vindo(a) ${nome}!`);
}

//Questão 06
// Peça ao usuário que digite sua idade em texto (por exemplo, "18") e converta-a em um número
// inteiro.
const idade = prompt("Digite a sua idade: ");
const idadeConvertida = parseInt(idade!);

// Questão 07
// Receba um número inteiro do usuário e converta-o em um número decimal (float).
const numeroInteiro = parseInt(prompt("Digite um número: ")!);
const numeroFloat = parseFloat(numeroInteiro.toString());

//Questão 08
// Peça ao usuário para digitar dois números inteiros e exiba a soma deles.
const primeiroNumero = parseInt(prompt("Digite o primeiro número: ")!);
const segundoNumero = parseInt(prompt("Digite o segundo número: ")!);
const soma = primeiroNumero + segundoNumero;
console.log("A soma dos números é: " + soma);

//Questão 09
// Receba um número decimal do usuário e calcule o seu quadrado.
const numeroDecimal = parseFloat(prompt("Digite um número para calcular: ")!);
const quadro = numeroDecimal**2;
console.log(`O quadrado do número ${numeroDecimal} é : ` + quadro);

//Questão 10
// Peça ao usuário que insira o seu ano de nascimento e, em seguida, exiba a sua idade.
const anoNasc = parseInt(prompt("Digite o ano de nascimento: ")!);
const idadeAtual = 2024 - anoNasc;
alert("A idade atual é de: " + idadeAtual);

//Questão 11
// Peça ao usuário que digite seu primeiro nome e seu sobrenome separadamente. Em seguida,
// concatene-os em uma única string e exiba o nome completo.
const primeiroNome = prompt("Digite o primeiro nome: ");
const sobrenome = prompt("Digite o sobrenome: ");
const nomeCompleto = primeiroNome + " " + sobrenome;
console.log(nomeCompleto);

//Questão 12
// Solicite ao usuário uma sequência de números separados por espaço e exiba quantos números
// foram digitados.
const numeros = prompt("Digite uma sequência de números separados por espaço: ");
const qtdNumeros = numeros?.split(" ");
const numDigitados = Number(qtdNumeros?.length);
console.log("Quantidade de números digitados: " + numDigitados);

//Questão 13
// Receba o nome de um animal digitado pelo usuário e exiba uma mensagem informando qual
// animal foi digitado.
const animal = prompt("Digite o nome de um animal");
if (animal !== null && animal !== "") {
    console.log(`Você digitou: ${animal}`);
} else  {
    console.log("Tente novamente! Você não digitou um nome válido");
}

//Questão 14
// Peça ao usuário que digite o seu nome e o seu sobrenome. Em seguida, exiba o nome completo
// invertido (sobrenome, nome).
const primeiroNomeInv = prompt("Digite o primeiro nome: ");
const sobrenomeInv = prompt("Digite o sobrenome: ");
const nomeCompletoInv = sobrenomeInv + ", " + primeiroNomeInv;
console.log(nomeCompletoInv);

//Questão 15
// Receba uma string digitada pelo usuário e imprima o seu tamanho (número de caracteres).
const frase2 = prompt("Digite uma frase:");
console.log("Tamanho da frase: " + frase2?.length);

///Questão 16
// Solicite ao usuário um número inteiro e exiba se ele é par ou ímpar.
const numInteiro = parseInt(prompt("Digite um número inteiro: ")!);
if (numInteiro % 2 === 0){
    console.log("O número é par");
} else {
    console.log("O número é ímpar");
}

//Questão 17
// Receba um número inteiro digitado pelo usuário e verifique se ele é positivo ou negativo.
const numeroInt = parseInt(prompt("Digite um número inteiro: ")!);
if (numeroInt >= 0) {
 console.log(`O ${numeroInt} é positivo!`);
} else {
    console.log(`O ${numeroInt} é negativo!`);
}

//Questão 18
// Peça ao usuário que insira dois números e exiba o maior deles.
const num1 = Number(prompt("Digite o primeiro número"));
const num2 = Number(prompt("Digite o segundo número"));
if (num1 > num2) {
    console.log(`O maior número é: ${num1}`);
} else {
    console.log(`O maior número é: ${num2}`);
}

//Questão 19
// Receba a altura e o peso de uma pessoa digitados pelo usuário. Em seguida, calcule o seu índice de massa corporal (IMC) utilizando a fórmula: IMC = peso / (altura * altura) e exiba o resultado.
const altura = Number(prompt("Por favor, informe a altura: "));
const peso = Number(prompt("Agora, informe o peso: "));
const IMC = peso/altura**2;
console.log(`O IMC: ${IMC.toFixed(2)}`);

//Questão 20
// Peça ao usuário que digite o seu nome e verifique se ele contém mais de 5 caracteres.
const nomeTamanho = prompt("Abençoado(a) diga aí o seu nome: ");
if (nomeTamanho !== null && nomeTamanho.length < 5) {
  console.log(`Olá, ${nomeTamanho}! Seu nome possui menos de 5 caracteres.`);
} else if (nomeTamanho !== null && nomeTamanho.length === 5) {
  console.log(`Olá, ${nomeTamanho}! Seu nome possui 5 caracteres.`);
} else if (nomeTamanho !== null) {
  console.log(`Olá, ${nomeTamanho}! Seu nome possui mais de 5 caracteres.`);
}

//Questão 21