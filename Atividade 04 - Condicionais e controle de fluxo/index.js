var _a;
//Questão 01
//Escreva um programa que leia um número inteiro e verifique se ele é positivo, negativo ou igual a zero.
var numInteiro = parseInt(prompt("Digite um número inteiro: "));
if (numInteiro < 0) {
    console.log("O n\u00FAmero ".concat(numInteiro, " \u00E9 negativo!"));
}
else if (numInteiro === 0) {
    console.log("O n\u00FAmero ".concat(numInteiro, " \u00E9 igual a zero!"));
}
else {
    console.log("O n\u00FAmero ".concat(numInteiro, " \u00E9 positivo!"));
}
//Questão 02
// Crie um programa que receba a idade de uma pessoa e exiba se ela é maior de idade ou menor de idade.
var idade = Number(prompt("Idade: "));
if (idade < 0 && idade > 150) {
    console.log("Digite um idade válida");
}
else if (idade < 18) {
    console.log("A pessoa é menor de idade");
}
else {
    console.log("A pessoa é maior de idade");
}
//Questão 03
// Desenvolva um programa que leia dois números inteiros e mostre qual deles é o maior, ou se são iguais.
var num1 = parseInt(prompt("Entre o 1º número inteiro: "));
var num2 = parseInt(prompt("Entre o 2º número inteiro: "));
if (num1 === num2) {
    console.log("Os números são iguais");
}
else if (num1 > num2) {
    console.log("O ".concat(num1, " \u00E9 maior que ").concat(num2));
}
else {
    console.log("O ".concat(num1, " \u00E9 menor que ").concat(num2));
}
//Questão 04
// Faça um programa que verifique se um número é par ou ímpar.
var numero = parseInt(prompt("Entre com um número inteiro: "));
if (numero % 2 === 0) {
    console.log("".concat(numero, " \u00E9 um n\u00FAmero par"));
}
else {
    console.log("".concat(numero, " \u00E9 um n\u00FAmero \u00EDmpar"));
}
//Questão 05
// Elabore um programa que leia três notas de um aluno e calcule a média. Em seguida, exiba se o aluno está aprovado (média maior ou igual a 7) ou reprovado.
var soma = 0;
for (var i = 1; i <= 3; i++) {
    var notas = parseFloat(prompt("Entre com a ".concat(i, "\u00BA nota: ")));
    if (notas < 0 || notas > 10) {
        console.log("Nota inválida! Digite uma nota entre 0 e 10.");
    }
    soma += notas;
}
var media = soma / 3;
if (media < 7) {
    alert("Aluno(a) reprovado(a)!");
}
else {
    alert("Aluno(a) aprovado(a)!");
}
//Questão 06
// Crie um programa que receba o nome de duas pessoas e exiba qual delas possui o maior número de caracteres em seu nome.
var nome1 = prompt("Digite o primeiro nome: ");
var nome2 = prompt("Digite o segundo nome: ");
if (nome1 === null || nome2 === null) {
    console.log("Você não digitou nenhum nome.");
}
else if (nome1.length > nome2.length) {
    console.log("O nome ".concat(nome1, " possui o maior n\u00FAmero de caracteres do que ").concat(nome2));
}
else {
    console.log("O nome ".concat(nome2, " possui o maior n\u00FAmero de caracteres do que ").concat(nome1));
}
// Questão 07
// Desenvolva um programa que leia um caractere e verifique se ele é uma vogal ou uma consoante.
var caractere = prompt("Escolha 01(UM) caractere: ");
if (caractere === null) {
    console.log("A entrada foi cancelada.");
}
else if (caractere.length !== 1) {
    console.log("Digite apenas um caractere.");
}
else if (caractere.toUpperCase() === "A" ||
    caractere.toUpperCase() === "E" ||
    caractere.toUpperCase() === "I" ||
    caractere.toUpperCase() === "O" ||
    caractere.toUpperCase() === "U") {
    console.log("O caractere: '".concat(caractere, "' \u00E9 uma vogal"));
}
else {
    console.log("O caractere: '".concat(caractere, "' \u00E9 uma consoante"));
}
//Questão 08
// Faça um programa que receba três números e os imprima em ordem crescente.
var numeros = [];
for (var i = 1; i <= 3; i++) {
    var numero_1 = Number(prompt("Entre com o ".concat(i, "\u00BA n\u00FAmero inteiro: ")));
    numeros.push(numero_1);
}
numeros.sort(function (a, b) { return a - b; });
console.log(numeros);
//Questão 09
// Elabore um programa que calcule o IMC (Índice de Massa Corporal) de uma pessoa, dado o peso e a altura. Em seguida, exiba se a pessoa está abaixo do peso, com peso normal, com sobrepeso, obesa ou muito obesa.
var altura = Number(prompt("Por favor, informe a altura: "));
var peso = Number(prompt("Agora, informe o peso: "));
var IMC = peso / Math.pow(altura, 2);
if (IMC > 0 && IMC <= 18.5) {
    console.log("O IMC: ".concat(IMC.toFixed(2), ". Voc\u00EA est\u00E1 abaixo do peso!"));
}
else if (IMC > 18.5 && IMC <= 24.9) {
    console.log("O IMC: ".concat(IMC.toFixed(2), ". Voc\u00EA est\u00E1 com peso normal!"));
}
else if (IMC >= 25.0 && IMC < 29.9) {
    console.log("O IMC: ".concat(IMC.toFixed(2), ". Voc\u00EA est\u00E1 com sobrepeso!"));
}
else if (IMC >= 30.0 && IMC < 39.9) {
    console.log("O IMC: ".concat(IMC.toFixed(2), ". Voc\u00EA est\u00E1 com obesidade!"));
}
else if (IMC >= 40.0) {
    console.log("O IMC: ".concat(IMC.toFixed(2), ". Voc\u00EA est\u00E1 muito obesa!"));
}
//Questão 10
// Escreva um programa que receba um número de mês (1 a 12) e exiba o nome do mês correspondente.
var mes = parseInt(prompt("Escolha um número de 1 à 12: "));
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
var salario = parseFloat(prompt("Informe o salário R$: "));
if (salario >= 1.5) {
    var aumento = salario * 0.1;
    console.log("O aumento \u00E9 de R$ ".concat(aumento.toFixed(2)));
    var novaSalario = salario + aumento;
    console.log("O novo sal\u00E1rio \u00E9 R$ ".concat(novaSalario.toFixed(2)));
}
else {
    var aumento = salario * 0.15;
    console.log("O aumento \u00E9 de R$ ".concat(aumento.toFixed(2)));
    var novaSalario = salario + aumento;
    console.log("O novo sal\u00E1rio \u00E9 R$ ".concat(novaSalario.toFixed(2)));
}
//Questão 12
// Receba um número inteiro do usuário e verifique se ele é divisível por 3 e por 5 ao mesmo tempo, exibindo uma mensagem apropriada.
var numeroInt = parseInt(prompt("Digite um número inteiro: "));
if (numeroInt % 3 === 0 && numeroInt % 5 === 0) {
    console.log("O n\u00FAmero ".concat(numeroInt, " \u00E9 divis\u00EDvel por 3 e por 5 ao mesmo tempo"));
}
else if (numeroInt % 3 === 0 || numeroInt % 5 === 0) {
    console.log("O n\u00FAmero ".concat(numeroInt, " \u00E9 divis\u00EDvel por 3 ou 5, mas n\u00E3o ao mesmo tempo"));
}
else {
    console.log("O n\u00FAmero ".concat(numeroInt, " N\u00C3O \u00E9 divis\u00EDvel por 3 e por 5 ao mesmo tempo"));
}
//Questão 13
// Peça ao usuário que insira o dia da semana (por extenso) e, em seguida, exiba uma mensagem informando se é um dia útil ou um fim de semana.
var diaDaSemana = prompt("Digite o dia da semana(SEM o '-Feira'): ");
var diaSemana = diaDaSemana === null || diaDaSemana === void 0 ? void 0 : diaDaSemana.toLowerCase();
if (diaDaSemana !== null) {
    if (diaSemana === "domingo" || diaSemana === "sábado") {
        console.log("Fim de semana");
    }
    else if (diaSemana === "segunda" || diaSemana === "terça" || diaSemana === "quarta" || diaSemana === "quinta" || diaSemana === "sexta") {
        console.log("Dia útil");
    }
    else {
        console.log("Por favor, insira um dia da semana válido.");
    }
}
// // Questão 14
// Elabore um programa que leia um número inteiro de 1 a 5 e exiba a mensagem "Muito bom","Bom", "Regular", "Insuficiente" ou "Muito insuficiente", de acordo com o valor lido, utilizando switch/case.
var num = parseInt(prompt("Olá, Avalie nosso atendimento:\n 5-Muito bom\n 4-Bom\n 3-Regular\n 2-Insuficiente\n 1-Muito insuficiente"));
if (num === null) {
    console.log("Por favor, insira um número entre 1 e 5.");
}
var mensagem = "";
switch (num) {
    case 1:
        mensagem = "Muito insuficiente";
        console.log("Voc\u00EA avaliou nosso atendimento como: ".concat(mensagem, ". Obrigado e volte sempre!"));
        break;
    case 2:
        mensagem = "Insuficiente";
        console.log("Voc\u00EA avaliou nosso atendimento como: ".concat(mensagem, ". Obrigado e volte sempre!"));
        break;
    case 3:
        mensagem = "Regular";
        console.log("Voc\u00EA avaliou nosso atendimento como: ".concat(mensagem, ". Obrigado e volte sempre!"));
        break;
    case 4:
        mensagem = "Bom";
        console.log("Voc\u00EA avaliou nosso atendimento como: ".concat(mensagem, ". Obrigado e volte sempre!"));
        break;
    case 5:
        mensagem = "Muito bom";
        console.log("Voc\u00EA avaliou nosso atendimento como: ".concat(mensagem, ". Obrigado e volte sempre!"));
        break;
    default:
        console.log("Por favor, insira um número entre 1 e 5.");
        break;
}
//Questão 15
// Peça ao usuário que digite um número entre 1 e 7 e exiba o dia da semana correspondente (1 - Domingo, 2 - Segunda-feira, etc.).
var n = parseInt(prompt("Digite um número entre 1 e 7: "));
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
    default:
        console.log("Escolha um número entre 1 e 7.");
        break;
}
//Questão 16
// Receba um número decimal do usuário e arredonde-o para o inteiro mais próximo usando a estrutura de controle try/catch para tratar exceções.
try {
    var numeroDecimal = parseFloat(prompt("Digite um número decimal: "));
    if (isNaN(numeroDecimal)) {
        throw new Error();
    }
    var numeroInteiro = Math.round(numeroDecimal);
    console.log("O n\u00FAmero arredondado \u00E9 ".concat(numeroInteiro));
}
catch (error) {
    console.error("Por favor, insira um número decimal.");
}
//Questão 17
// Peça ao usuário que insira a sua idade e verifique se ele é um bebê (0 a 1 ano), criança (1 a 12 anos), adolescente (13 a 18 anos) ou adulto (mais de 18 anos).
var idades = parseInt(prompt("Por favor, digite sua idade: "));
if (isNaN(idades)) {
    console.error("Por favor, insira um número inteiro.");
}
else {
    if (idades >= 0 && idade <= 1) {
        console.log("Você é um bebê.");
    }
    else if (idades >= 2 && idade <= 12) {
        console.log("Você é uma criança.");
    }
    else if (idades >= 13 && idade <= 18) {
        console.log("Você é um adolescente.");
    }
    else {
        console.log("Você é um adulto.");
    }
}
//Questão 18
// Peça ao usuário que insira o seu estado civil e, usando a estrutura switch/case, exiba uma mensagem informando se é solteiro, casado, divorciado ou viúvo.
var estadoCivil = (_a = prompt("Insira o seu estado civil: ")) === null || _a === void 0 ? void 0 : _a.toLowerCase();
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
var numero1 = parseInt(prompt("Digite o primeiro número inteiro: "));
var numero2 = parseInt(prompt("Digite o segundo número inteiro: "));
if (isNaN(numero1) || isNaN(numero2)) {
    console.error("Por favor, insira dois números inteiros.");
}
else {
    var operacao = parseInt(prompt("Escolha uma operação\n 1 - Soma\n 2 - Subtração\n 3 - multiplicação\n 4 - divisão): "));
    var resultado = 0.0;
    switch (operacao) {
        case 1:
            resultado = numero1 + numero2;
            console.log("O resultado da soma \u00E9: ".concat(resultado));
            break;
        case 2:
            resultado = numero1 - numero2;
            console.log("O resultado da subtra\u00E7\u00E3o \u00E9: ".concat(resultado));
            break;
        case 3:
            resultado = numero1 * numero2;
            console.log("O resultado da multiplica\u00E7\u00E3o \u00E9: ".concat(resultado));
            break;
        case 3:
            resultado = numero1 / numero2;
            console.log("O resultado da divis\u00E3o \u00E9: ".concat(resultado));
            break;
        default:
            console.log("Por favor, insira um número de 1 a 4.");
            break;
    }
}
//Questão 20
// Desenvolva um programa que leia o nome e a idade de uma pessoa. Utilize o bloco try/catch para garantir que a idade digitada seja um valor inteiro válido.
try {
    var nome = prompt("Qual o seu nome? ");
    var age = parseInt(prompt("Agora, diga a sua idade: "));
    if (isNaN(age)) {
        throw new Error();
    }
    console.log("Ol\u00E1, ".concat(nome, "! Voc\u00EA tem ").concat(age, " anos."));
}
catch (error) {
    console.error("Por favor, insira um número inteiro válido para a idade.");
}
//Questão 21
// Crie um programa que leia um valor em metros e o converta para centímetros, milímetros e quilômetros. Utilize o bloco try/catch para tratar possíveis exceções durante os cálculos.
try {
    var metros = parseFloat(prompt("Digite o valor em metros: "));
    if (isNaN(metros)) {
        throw new Error();
    }
    var centimetros = metros * 100;
    var milimetros = centimetros * 10;
    var quilometros = metros / 1000;
    console.log("".concat(metros, " metros equivalem a:\n").concat(centimetros, " cent\u00EDmetros\n").concat(milimetros, " mil\u00EDmetros \n").concat(quilometros.toFixed(3), " quil\u00F4metros"));
}
catch (error) {
    console.log("Insira um número válido");
}
