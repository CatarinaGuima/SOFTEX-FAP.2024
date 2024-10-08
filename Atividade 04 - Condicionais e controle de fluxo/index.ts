//Questão 01
//Escreva um programa que leia um número inteiro e verifique se ele é positivo, negativo ou igual a zero.
const numInteiro = parseInt(prompt("Digite um número inteiro: ")!);
if (numInteiro < 0) {
  console.log(`O número ${numInteiro} é negativo!`);
} else if (numInteiro === 0) {
  console.log(`O número ${numInteiro} é igual a zero!`);
} else {
  console.log(`O número ${numInteiro} é positivo!`);
}

//Questão 02
// Crie um programa que receba a idade de uma pessoa e exiba se ela é maior de idade ou menor de idade.
const idade = Number(prompt("Idade: "));
if (idade < 0 && idade > 150) {
  console.log("Digite um idade válida");
} else if (idade < 18) {
  console.log("A pessoa é menor de idade");
} else {
  console.log("A pessoa é maior de idade");
}

//Questão 03
// Desenvolva um programa que leia dois números inteiros e mostre qual deles é o maior, ou se são iguais.
const num1 = parseInt(prompt("Entre o 1º número inteiro: ")!);
const num2 = parseInt(prompt("Entre o 2º número inteiro: ")!);
if (num1 === num2) {
  console.log("Os números são iguais");
} else if (num1 > num2) {
  console.log(`O ${num1} é maior que ${num2}`);
} else {
  console.log(`O ${num1} é menor que ${num2}`);
}

//Questão 04
// Faça um programa que verifique se um número é par ou ímpar.
const numero = parseInt(prompt("Entre com um número inteiro: ")!);
if (numero % 2 === 0) {
  console.log(`${numero} é um número par`);
} else {
  console.log(`${numero} é um número ímpar`);
}

//Questão 05
// Elabore um programa que leia três notas de um aluno e calcule a média. Em seguida, exiba se o aluno está aprovado (média maior ou igual a 7) ou reprovado.
let soma = 0;
for (let i = 1; i <= 3; i++) {
  const notas = parseFloat(prompt(`Entre com a ${i}º nota: `)!);
  if (notas < 0 || notas > 10) {
    console.log("Nota inválida! Digite uma nota entre 0 e 10.");
  }
  soma += notas;
}
const media = soma / 3;
if (media < 7) {
  alert("Aluno(a) reprovado(a)!");
} else {
  alert("Aluno(a) aprovado(a)!");
}

//Questão 06
// Crie um programa que receba o nome de duas pessoas e exiba qual delas possui o maior número de caracteres em seu nome.
const nome1 = prompt("Digite o primeiro nome: ");
const nome2 = prompt("Digite o segundo nome: ");
if (nome1 === null || nome2 === null) {
  console.log("Você não digitou nenhum nome.");
} else if (nome1.length > nome2.length) {
  console.log(
    `O nome ${nome1} possui o maior número de caracteres do que ${nome2}`
  );
} else {
  console.log(
    `O nome ${nome2} possui o maior número de caracteres do que ${nome1}`
  );
}

// Questão 07
// Desenvolva um programa que leia um caractere e verifique se ele é uma vogal ou uma consoante.
const caractere = prompt("Escolha 01(UM) caractere: ");
if (caractere === null) {
  console.log("A entrada foi cancelada.");
} else if (caractere.length !== 1) {
  console.log("Digite apenas um caractere.");
} else if (
  caractere.toUpperCase() === "A" ||
  caractere.toUpperCase() === "E" ||
  caractere.toUpperCase() === "I" ||
  caractere.toUpperCase() === "O" ||
  caractere.toUpperCase() === "U"
) {
  console.log(`O caractere: '${caractere}' é uma vogal`);
} else {
  console.log(`O caractere: '${caractere}' é uma consoante`);
}

//Questão 08
// Faça um programa que receba três números e os imprima em ordem crescente.
const numeros: number[] = [];
for (let i = 1; i <= 3; i++) {
  const numero = Number(prompt(`Entre com o ${i}º número inteiro: `));
  numeros.push(numero);
}
numeros.sort((a, b) => a - b);
console.log(numeros);

//Questão 09
// Elabore um programa que calcule o IMC (Índice de Massa Corporal) de uma pessoa, dado o peso e a altura. Em seguida, exiba se a pessoa está abaixo do peso, com peso normal, com sobrepeso, obesa ou muito obesa.
const altura = Number(prompt("Por favor, informe a altura: "));
const peso = Number(prompt("Agora, informe o peso: "));
const IMC = peso / altura ** 2;
if (IMC > 0 && IMC <= 18.5) {
  console.log(`O IMC: ${IMC.toFixed(2)}. Você está abaixo do peso!`);
} else if (IMC > 18.5 && IMC <= 24.9) {
  console.log(`O IMC: ${IMC.toFixed(2)}. Você está com peso normal!`);
} else if (IMC >= 25.0 && IMC < 29.9) {
  console.log(`O IMC: ${IMC.toFixed(2)}. Você está com sobrepeso!`);
} else if (IMC >= 30.0 && IMC < 39.9) {
  console.log(`O IMC: ${IMC.toFixed(2)}. Você está com obesidade!`);
} else if (IMC >= 40.0) {
  console.log(`O IMC: ${IMC.toFixed(2)}. Você está muito obesa!`);
}

//Questão 10
// Escreva um programa que receba um número de mês (1 a 12) e exiba o nome do mês correspondente.
const mes = parseInt(prompt("Escolha um número de 1 à 12: ")!);
switch (mes) {
  case 1:
    console.log("Bem-vindo(a) ao mês de Janeiro");
    break;
  case 2:
    console.log("Bem-vindo(a) ao mês de Fevereiro");
    break;
  case 3:
    console.log("Bem-vindo(a) ao mês de Março");
    break;
  case 4:
    console.log("Bem-vindo(a) ao mês de Abril");
    break;
  case 5:
    console.log("Bem-vindo(a) ao mês de Maio");
    break;
  case 6:
    console.log("Bem-vindo(a) ao mês de Junho");
    break;
  case 7:
    console.log("Bem-vindo(a) ao mês de Julho");
    break;
  case 8:
    console.log("Bem-vindo(a) ao mês de Agosto");
    break;
  case 9:
    console.log("Bem-vindo(a) ao mês de Setembro");
    break;
  case 10:
    console.log("Bem-vindo(a) ao mês de Outubro");
    break;
  case 11:
    console.log("Bem-vindo(a) ao mês de Novembro");
    break;
  case 12:
    console.log("Bem-vindo(a) ao mês de Dezembro");
    break;
  default:
    console.log("Número inválido! Digite um número entre 1 e 12.");
    break;
}

//Questão 11
// Desenvolva um programa que leia o salário de um funcionário e calcule o valor do seu aumento. Para salários superiores a R$ 1.500,00, o aumento deve ser de 10%. Caso contrário, o aumento é de 15%.
const salario = parseFloat(prompt("Informe o salário R$: ")!);
if (salario >= 1.5) {
  const aumento = salario * 0.1;
  console.log(`O aumento é de R$ ${aumento.toFixed(2)}`);
  const novaSalario = salario + aumento;
  console.log(`O novo salário é R$ ${novaSalario.toFixed(2)}`);
} else {
  const aumento = salario * 0.15;
  console.log(`O aumento é de R$ ${aumento.toFixed(2)}`);
  const novaSalario = salario + aumento;
  console.log(`O novo salário é R$ ${novaSalario.toFixed(2)}`);
}

//Questão 12
// Receba um número inteiro do usuário e verifique se ele é divisível por 3 e por 5 ao mesmo tempo, exibindo uma mensagem apropriada.
const numeroInt = parseInt(prompt("Digite um número inteiro: ")!);
if (numeroInt % 3 === 0 && numeroInt % 5 === 0) {
  console.log(`O número ${numeroInt} é divisível por 3 e por 5 ao mesmo tempo`);
} else if (numeroInt % 3 === 0 || numeroInt % 5 === 0) {
  console.log(
    `O número ${numeroInt} é divisível por 3 ou 5, mas não ao mesmo tempo`
  );
} else {
  console.log(
    `O número ${numeroInt} NÃO é divisível por 3 e por 5 ao mesmo tempo`
  );
}

//Questão 13
// Peça ao usuário que insira o dia da semana (por extenso) e, em seguida, exiba uma mensagem informando se é um dia útil ou um fim de semana.
const diaDaSemana = prompt("Digite o dia da semana(SEM o '-Feira'): ");
const diaSemana = diaDaSemana?.toLowerCase();
if (diaDaSemana !== null) {
  if (diaSemana === "domingo" || diaSemana === "sábado" ) {
    console.log("Fim de semana");
  } else if (diaSemana === "segunda" || diaSemana === "terça" || diaSemana === "quarta" || diaSemana === "quinta" || diaSemana === "sexta"){
    console.log("Dia útil");
  } else {
    console.log("Por favor, insira um dia da semana válido.");
  }
}

// // Questão 14
// Elabore um programa que leia um número inteiro de 1 a 5 e exiba a mensagem "Muito bom","Bom", "Regular", "Insuficiente" ou "Muito insuficiente", de acordo com o valor lido, utilizando switch/case.
const num = parseInt(prompt("Olá, Avalie nosso atendimento:\n 5-Muito bom\n 4-Bom\n 3-Regular\n 2-Insuficiente\n 1-Muito insuficiente")!);
if (num === null) {
  console.log("Por favor, insira um número entre 1 e 5.");
}
let mensagem = "";
switch (num) {
  case 1:
    mensagem = "Muito insuficiente";
    console.log(`Você avaliou nosso atendimento como: ${mensagem}. Obrigado e volte sempre!`);
    break;
  case 2:
    mensagem = "Insuficiente";
    console.log(`Você avaliou nosso atendimento como: ${mensagem}. Obrigado e volte sempre!`);
    break;
  case 3:
    mensagem = "Regular";
    console.log(`Você avaliou nosso atendimento como: ${mensagem}. Obrigado e volte sempre!`);
    break;
  case 4:
    mensagem = "Bom";
    console.log(`Você avaliou nosso atendimento como: ${mensagem}. Obrigado e volte sempre!`);
    break;
  case 5:
    mensagem = "Muito bom";
    console.log(`Você avaliou nosso atendimento como: ${mensagem}. Obrigado e volte sempre!`);
    break;
  default: console.log("Por favor, insira um número entre 1 e 5.");
    break;
}

//Questão 15
// Peça ao usuário que digite um número entre 1 e 7 e exiba o dia da semana correspondente (1 - Domingo, 2 - Segunda-feira, etc.).
const n = parseInt(prompt("Digite um número entre 1 e 7: ")!);
switch (n) {
  case 1:
    console.log("Hoje é Domingo :D");
    break;
  case 2:
    console.log("Hoje é Segunda-feira :D");
    break;
  case 3:
    console.log("Hoje é Terça-feira :D");
    break;
  case 4:
    console.log("Hoje é Quarta-feira :D");
    break;
  case 5:
    console.log("Hoje é Quinta-feira :D");
    break;
  case 6:
    console.log("Hoje é Sexta-feira :D");
    break;
  case 7:
    console.log("Hoje é Sábado :D");
    break;
  default: console.log("Escolha um número entre 1 e 7.");
    break;
}

//Questão 16
// Receba um número decimal do usuário e arredonde-o para o inteiro mais próximo usando a estrutura de controle try/catch para tratar exceções.
try {
  const numeroDecimal = parseFloat(prompt("Digite um número decimal: ")!);
  if (isNaN(numeroDecimal)) {
    throw new Error();
  }
  const numeroInteiro = Math.round(numeroDecimal);
  console.log(`O número arredondado é ${numeroInteiro}`);
} catch (error) {
  console.error("Por favor, insira um número decimal.");
}

//Questão 17
// Peça ao usuário que insira a sua idade e verifique se ele é um bebê (0 a 1 ano), criança (1 a 12 anos), adolescente (13 a 18 anos) ou adulto (mais de 18 anos).
const idades = parseInt(prompt("Por favor, digite sua idade: ")!);
if (isNaN(idades)) {
  console.error("Por favor, insira um número inteiro.");
} else {
  if (idades >= 0 && idade <= 1) {
    console.log("Você é um bebê.");
  } else if (idades >= 2 && idade <= 12) {
    console.log("Você é uma criança.");
  } else if (idades >= 13 && idade <= 18) {
    console.log("Você é um adolescente.");
  } else {
    console.log("Você é um adulto.");
  }
}

//Questão 18
// Peça ao usuário que insira o seu estado civil e, usando a estrutura switch/case, exiba uma mensagem informando se é solteiro, casado, divorciado ou viúvo.
const estadoCivil = prompt("Insira o seu estado civil: ")?.toLowerCase();
switch (estadoCivil) {
  case "solteiro":
    console.log("Você está Solteiro(a)");
    break;
  case "casado":
    console.log("Você está Casado(a)");
    break;
  case "divorciado":
    console.log("Você está Divorciado(a)");
    break;
  case "viúvo":
    console.log("Você está Viúvo(a)");
    break;
  default:
    console.log("Por favor, insira um estado civil válido.");
    break;
}

//Questão 19
// Solicite ao usuário dois números inteiros e, usando a estrutura switch/case, exiba o resultado da operação escolhida pelo usuário (1 - soma, 2 - subtração, 3 - multiplicação, 4 - divisão).
const numero1 = parseInt(prompt("Digite o primeiro número inteiro: ")!);
const numero2 = parseInt(prompt("Digite o segundo número inteiro: ")!);
if (isNaN(numero1) || isNaN(numero2)) {
  console.error("Por favor, insira dois números inteiros.");
} else {
  const operacao = parseInt(prompt("Escolha uma operação\n 1 - Soma\n 2 - Subtração\n 3 - multiplicação\n 4 - divisão): ")!);
  let resultado = 0.0;
  switch (operacao) {
    case 1:
      resultado = numero1 + numero2;
      console.log(`O resultado da soma é: ${resultado}`);
      break;
    case 2:
      resultado = numero1 - numero2;
      console.log(`O resultado da subtração é: ${resultado}`);
      break;
    case 3:
      resultado = numero1 * numero2;
      console.log(`O resultado da multiplicação é: ${resultado}`);
      break;
    case 3:
      resultado = numero1 / numero2;
      console.log(`O resultado da divisão é: ${resultado}`);
      break;
    default:
      console.log("Por favor, insira um número de 1 a 4.");
      break;
  }
}

//Questão 20
// Desenvolva um programa que leia o nome e a idade de uma pessoa. Utilize o bloco try/catch para garantir que a idade digitada seja um valor inteiro válido.
try {
  const nome = prompt("Qual o seu nome? ");
  const age = parseInt(prompt("Agora, diga a sua idade: ")!);
  if (isNaN(age)) {
    throw new Error();
  }
  console.log(`Olá, ${nome}! Você tem ${age} anos.`);
} catch (error) {
  console.error("Por favor, insira um número inteiro válido para a idade.");
}

//Questão 21
// Crie um programa que leia um valor em metros e o converta para centímetros, milímetros e quilômetros. Utilize o bloco try/catch para tratar possíveis exceções durante os cálculos.
try {
  const metros = parseFloat(prompt("Digite o valor em metros: ")!);
  if (isNaN(metros)) {
    throw new Error();
  }
  const centimetros = metros * 100;
  const milimetros = centimetros * 10;
  const quilometros = metros / 1000;
  console.log(`${metros} metros equivalem a:\n${centimetros} centímetros\n${milimetros} milímetros \n${quilometros.toFixed(3)} quilômetros`);
} catch (error) {
  console.log("Insira um número válido");
}
