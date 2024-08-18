// import { somarAB } from "./functions";

//Questão 01
// Implemente o código do slide de número 6.
console.log("Estudar é muito bom");
console.log("Paciência e persistência");
console.log("Revisão é a mãe do aprendizado");

console.log("Estudar é muito bom");
console.log("Paciência e persistência");
console.log("Revisão é a mãe do aprendizado");

console.log("Estudar é muito bom");
console.log("Paciência e persistência");
console.log("Revisão é a mãe do aprendizado");

//Questão 02
// Implemente o código do slide de número 15.
function criarFrases() {
    console.log("Estudar é muito bom");
    console.log("Paciência e persistência");
    console.log("Revisão é a mãe do aprendizado");
}
criarFrases();
criarFrases();
criarFrases();

//Questão 03
// Implemente o código do slide de número 24.
function soma(num1: number,num2: number) {
console.log(num1 + num2);
 }
soma(10, 15);
soma(10, 20);
soma(30, 50);
soma(50, 50);

//Questão 04
// Implemente o código do slide de número 33.
function somar(numb1: number, numb2: number):number {
    return numb1 + numb2;
}
const teste1 = somar(10,5);
console.log(teste1);

const teste2 = somar(10,20) + somar(30,50);
console.log(teste2);

console.log(somar(50,50));

//Questão 05
// Escreva uma função chamada "soma" que receba dois parâmetros (a e b) e retorne a soma deles.
const a = Number(prompt("Escolha um valor para [A]: "));
const b = Number(prompt("Escolha um valor para [B]: "));
function somarAB(a: number, b: number) {
    const soma = a + b;
    return soma;
  }
const resultado = somarAB(a,b);
console.log(`${a} + ${b} = ${resultado}`);

//Questão 06
// Crie uma função chamada "isPar" que receba um número inteiro como parâmetro e retorne "true" se o número for par ou "false" caso contrário.
const nInteiro = parseInt(prompt("Digite um número inteiro: ")!);
function isPar(nInteiro: number) {
    if (nInteiro % 2 === 0) {
        return true;
    }
    return false;
}
console.log(isPar(nInteiro));

//Questão 07
// Elabore uma função chamada "media" que receba três notas como parâmetros e retorne a média aritmética delas.
let i = 1;
let somaNotas = 0;
function media(soma: number) {
  let mediaNotas = soma / 3;
  return mediaNotas;
}
while (i <= 3) {
  const notas = parseFloat(prompt("Digite a " + i + "º nota: ")!);
  if (notas >= 0 && notas <= 10) {
    somaNotas += notas;
    i++;
  } else {
    console.log("Por favor, insira um número válido.");
  }
}
console.log(`A média das três notas é: ${media(somaNotas)}`);

// //Questão 08
// Elabore uma função chamada "imc" que receba o peso (em kg) e a altura (em metros) de uma pessoa e retorne o índice de massa corporal (IMC) dela.
const peso = Number(prompt("Informe o seu peso: "))
const altura = parseFloat(prompt("Informe a sua altura: ")!);
function imc(peso: number, altura: number) {
    const imc = peso / (altura ** 2);
    return imc;
}
console.log(`IMC: ${imc(peso,altura).toFixed(2)}`);

//Questão 09
// Elabore uma função chamada "calcularDesconto" que receba o valor de um produto e o percentual de desconto como parâmetros e retorne o valor com o desconto aplicado.
const preco = Number(prompt("Informe o preço do produto: "));
const percentual = parseInt(prompt("Informe o percentual(%) de desconto: ")!);
function calcularDesconto (preco: number, percentual: number): number {
    const valorDesconto =  preco*(percentual/100);
    return valorDesconto;
}
const valorDoDesconto = calcularDesconto(preco, percentual);
const precoComDesconto = preco - valorDoDesconto;
console.log(`Preço do desconto: R$ ${valorDoDesconto}`);
console.log(`Preço final com desconto: R$ ${precoComDesconto}`);

//Questão 10
// Elabore uma função chamada "calcularImpostoRenda" que receba o salário bruto de uma pessoa como parâmetro e retorne o valor do imposto de renda a ser pago, considerando as seguintes faixas de renda:
// a. Até R$ 1.903,98: isento
// b. De R$ 1.903,99 até R$ 2.826,65: alíquota de 7,5%
// c. De R$ 2 .826,66 até R$ 3.751,05: alíquota de 15%
// d. De R$ 3.751,06 até R$ 4.664,68: alíquota de 22,5%
// e. Acima de R$ 4.664,68: alíquota de 27,5%
const salarioBruto = parseFloat(prompt("Informe o seu salário bruto: ")!);
function calcularImpostoRenda(salarioBruto: number) {
    if (salarioBruto <= 1903.98) {
        return 0.00;
    } else if (salarioBruto <= 2826.65) {
        return (salarioBruto*0.075).toFixed(2);
    } else if (salarioBruto <= 3751.05) {
        return (salarioBruto*0.15).toFixed(2);
    } else if (salarioBruto <= 4664.68) {
        return (salarioBruto* 0.225).toFixed(2);
    } else if (salarioBruto > 4664.68) {
        return (salarioBruto*0.275).toFixed(2);
    }
}
console.log(`Valor do imposto de renda a ser pago: ${calcularImpostoRenda(salarioBruto)}`);

// Questão 11
// Faça uma função chamada "calcularMediaArredondada" que receba uma lista de números como parâmetro e retorne a média aritmética desses números, arredondada para o inteiro mais próximo.
const listaNumeros: number[] = [];
let numeros = 0;
while (numeros !== -1) {
  numeros = Number(prompt("Digite um número [Aperte -1 para sair]:"));
  if (numeros !== -1) {
    listaNumeros.push(numeros);
  }
}
function calcularMediaArredondada(listaNumeros: number[]): number {
  let somarNum = 0;
  for (let i = 0; i < listaNumeros.length; i++) {
    somarNum += listaNumeros[i];
  }
  const mediaArredondada = Math.round(somarNum / listaNumeros.length);
  return mediaArredondada;
}
console.log(
  `A média aritmética desses números, arredondada para o inteiro mais próximo: ${calcularMediaArredondada(
    listaNumeros
  )}`
);

//Questão 12
// Desenvolva uma função chamada "contarDigitosParesImpares" que receba um número inteiro como parâmetro e retorne a quantidade de dígitos pares e a quantidade de dígitos ímpares presentes nesse número.
let digitosPares = 0;
let digitosImpares = 0;
const num = parseInt(prompt("Informe um número inteiro: ")!);
function contarDigitosParesImpares(num: number) {
  const digitos = num.toString().split("").map(Number);  // Obtém os dígitos como números
  digitos.forEach((digito) => {
    if (digito % 2 === 0) {
      digitosPares++;
    } else {
      digitosImpares++;
    }
  });
}
contarDigitosParesImpares(num);
console.log(
  `Quantidade de dígitos pares: ${digitosPares}\nQuantidade de dígitos ímpares: ${digitosImpares}`
);

//Questão 13
// Crie uma função chamada "calcularMediaAlunos" que receba uma lista de alunos, onde cada aluno é representado por um objeto com os atributos "nome" e "nota". A função deve calcular e retornar a média das notas de todos os alunos.
// Define o tipo para os objetos Aluno
type Aluno = {
  nome: string;
  nota: number;
};
const listaAlunos: Aluno[] = [];
let pergunta: string;
do {
  const nomeAluno = prompt("Informe o nome do aluno(a): ")!;
  const notaAluno = parseFloat(prompt("Informe a nota do aluno(a): ")!);
  const aluno: Aluno = { nome: nomeAluno, nota: notaAluno };
  listaAlunos.push(aluno);
  pergunta = prompt("Deseja adicionar mais alunos? [S/N]: ")!.toUpperCase(); 
} while (pergunta === "S");

function calcularMediaAlunos(listaAlunos: Aluno[]): number {
  let somaNotas = 0;
  for (let i = 0; i < listaAlunos.length; i++) {
    somaNotas += listaAlunos[i].nota;
  }
  const mediaNotas = somaNotas / listaAlunos.length;
  return mediaNotas;
}
console.log(`Média das notas dos alunos: ${calcularMediaAlunos(listaAlunos).toFixed(2)}`);

//Questão 14
// Crie uma função chamada "calcularIdade" que receba o ano de "nascimento" de uma pessoa como parâmetro e retorne a idade atual.
const anoNasc = parseInt(prompt("Informe o ano de nascimento: ")!);
function calcularIdade(anoNasc: number){
  const idadeAtual = 2024 - anoNasc;
  return idadeAtual;
}
console.log(`A idade atual é: ${calcularIdade(anoNasc)}`);

//Questão 15
// Crie uma função chamada "gerarTabuada" que receba um "número" como parâmetro e exiba a tabuada desse número de 1 a 10 no console.
const numero = parseInt(prompt("Escolha um número para a tabuada: ")!);
console.log(`TABUADA DO ${numero}:`);

function gerarTabuada(numero: number) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
  }
}
gerarTabuada(numero);  

// Questão 16
// Escreva uma função chamada "advinheNumero" que gera aleatoriamente um número inteiro entre 1 e 100. Em seguida, permita que o usuário insira tentativas para adivinhar o número. A função deve dar dicas ao usuário se o número correto é maior ou menor do que a tentativa. Quando o usuário acertar, exiba uma mensagem de parabéns e informe a quantidade de tentativas utilizadas.


