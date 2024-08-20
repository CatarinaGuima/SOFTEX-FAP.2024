var _a;
//Questão 01
// Implemente o código do slide de número 5.
var frase = prompt("Entre a primeira frase: ");
console.log(frase);
//Questão 02
// Implemente o código do slide de número 13.
var string = "123";
console.log(typeof Number(string));
var number = 321;
console.log(typeof String(string));
//Questão 03
// Implemente o código do slide de número 16.
var numero1 = prompt("Digite o primeiro número: ");
var numero2 = prompt("Digite o segundo número: ");
var resultado = Number(numero1) + Number(numero2);
console.log(resultado);
//Questão 04
// Implemente o código do slide de número 23.
var string1 = "Estudar";
var string2 = " é bom!";
console.log(string1 + string2);
var numero = 48;
console.log(string1 + string2 + " " + numero);
//Questão 05
// Solicite ao usuário seu nome e imprima uma mensagem de boas-vindas na tela.
var nome = prompt("Olá! Por favor, digite o seu nome: ");
if (nome == null || nome == "") {
    nome = prompt("Olá! Por favor, digite o seu nome: ");
}
else {
    alert("Seja Bem-Vindo(a) ".concat(nome, "!"));
}
//Questão 06
// Peça ao usuário que digite sua idade em texto (por exemplo, "18") e converta-a em um número
// inteiro.
var idade = prompt("Digite a sua idade: ");
var idadeConvertida = parseInt(idade);
// Questão 07
// Receba um número inteiro do usuário e converta-o em um número decimal (float).
var numeroInteiro = parseInt(prompt("Digite um número: "));
var numeroFloat = parseFloat(numeroInteiro.toString());
//Questão 08
// Peça ao usuário para digitar dois números inteiros e exiba a soma deles.
var primeiroNumero = parseInt(prompt("Digite o primeiro número: "));
var segundoNumero = parseInt(prompt("Digite o segundo número: "));
var soma = primeiroNumero + segundoNumero;
console.log("A soma dos números é: " + soma);
//Questão 09
// Receba um número decimal do usuário e calcule o seu quadrado.
var numeroDecimal = parseFloat(prompt("Digite um número para calcular: "));
var quadro = Math.pow(numeroDecimal, 2);
console.log("O quadrado do n\u00FAmero ".concat(numeroDecimal, " \u00E9 : ") + quadro);
//Questão 10
// Peça ao usuário que insira o seu ano de nascimento e, em seguida, exiba a sua idade.
var anoNasc = parseInt(prompt("Digite o ano de nascimento: "));
var idadeAtual = 2024 - anoNasc;
alert("A idade atual é de: " + idadeAtual);
//Questão 11
// Peça ao usuário que digite seu primeiro nome e seu sobrenome separadamente. Em seguida,
// concatene-os em uma única string e exiba o nome completo.
var primeiroNome = prompt("Digite o primeiro nome: ");
var sobrenome = prompt("Digite o sobrenome: ");
var nomeCompleto = primeiroNome + " " + sobrenome;
console.log(nomeCompleto);
//Questão 12
// Solicite ao usuário uma sequência de números separados por espaço e exiba quantos números
// foram digitados.
var numeros = prompt("Digite uma sequência de números separados por espaço: ");
var qtdNumeros = numeros === null || numeros === void 0 ? void 0 : numeros.split(" ");
var numDigitados = Number(qtdNumeros === null || qtdNumeros === void 0 ? void 0 : qtdNumeros.length);
console.log("Quantidade de números digitados: " + numDigitados);
//Questão 13
// Receba o nome de um animal digitado pelo usuário e exiba uma mensagem informando qual
// animal foi digitado.
var animal = prompt("Digite o nome de um animal");
if (animal !== null && animal !== "") {
    console.log("Voc\u00EA digitou: ".concat(animal));
}
else {
    console.log("Tente novamente! Você não digitou um nome válido");
}
//Questão 14
// Peça ao usuário que digite o seu nome e o seu sobrenome. Em seguida, exiba o nome completo
// invertido (sobrenome, nome).
var primeiroNomeInv = prompt("Digite o primeiro nome: ");
var sobrenomeInv = prompt("Digite o sobrenome: ");
var nomeCompletoInv = sobrenomeInv + ", " + primeiroNomeInv;
console.log(nomeCompletoInv);
//Questão 15
// Receba uma string digitada pelo usuário e imprima o seu tamanho (número de caracteres).
var frase2 = prompt("Digite uma frase:");
console.log("Tamanho da frase: " + (frase2 === null || frase2 === void 0 ? void 0 : frase2.length));
///Questão 16
// Solicite ao usuário um número inteiro e exiba se ele é par ou ímpar.
var numInteiro = parseInt(prompt("Digite um número inteiro: "));
if (numInteiro % 2 === 0) {
    console.log("O número é par");
}
else {
    console.log("O número é ímpar");
}
//Questão 17
// Receba um número inteiro digitado pelo usuário e verifique se ele é positivo ou negativo.
var numeroInt = parseInt(prompt("Digite um número inteiro: "));
if (numeroInt >= 0) {
    console.log("O ".concat(numeroInt, " \u00E9 positivo!"));
}
else {
    console.log("O ".concat(numeroInt, " \u00E9 negativo!"));
}
//Questão 18
// Peça ao usuário que insira dois números e exiba o maior deles.
var num1 = Number(prompt("Digite o primeiro número"));
var num2 = Number(prompt("Digite o segundo número"));
if (num1 > num2) {
    console.log("O maior n\u00FAmero \u00E9: ".concat(num1));
}
else {
    console.log("O maior n\u00FAmero \u00E9: ".concat(num2));
}
//Questão 19
// Receba a altura e o peso de uma pessoa digitados pelo usuário. Em seguida, calcule o seu índice de massa corporal (IMC) utilizando a fórmula: IMC = peso / (altura * altura) e exiba o resultado.
var altura = Number(prompt("Por favor, informe a altura: "));
var peso = Number(prompt("Agora, informe o peso: "));
var IMC = peso / Math.pow(altura, 2);
console.log("O IMC: ".concat(IMC.toFixed(2)));
//Questão 20
// Peça ao usuário que digite o seu nome e verifique se ele contém mais de 5 caracteres.
var nomeTamanho = prompt("Abençoado(a) diga aí o seu nome: ");
if (nomeTamanho !== null && nomeTamanho.length < 5) {
    console.log("Ol\u00E1, ".concat(nomeTamanho, "! Seu nome possui menos de 5 caracteres."));
}
else if (nomeTamanho !== null && nomeTamanho.length === 5) {
    console.log("Ol\u00E1, ".concat(nomeTamanho, "! Seu nome possui 5 caracteres."));
}
else if (nomeTamanho !== null) {
    console.log("Ol\u00E1, ".concat(nomeTamanho, "! Seu nome possui mais de 5 caracteres."));
}
//Questão 21
// Solicite ao usuário que insira o seu estado civil e exiba uma mensagem apropriada (por exemplo: "Você é casado(a)", "Você é solteiro(a)", etc.).
var estadoCivil = prompt("Digite o seu estado civil: ");
if (estadoCivil !== null && estadoCivil !== "") {
    console.log("Voc\u00EA \u00E9 no momento presente ".concat(estadoCivil));
}
else {
    console.log("Você não digitou um estado civil válido :(");
}
//Questão 22
// Receba a base e a altura de um retângulo digitados pelo usuário. Em seguida, calcule a sua área e exiba o resultado.
var base = Number(prompt("Informe o valor da base do retângulo: "));
var alturaRet = Number(prompt("Informe o valor da altura do retãngulo: "));
var areaRetangulo = base * alturaRet;
console.log("A \u00E1rea do ret\u00E2ngulo \u00E9: ".concat(areaRetangulo.toFixed(2)));
//Questão 23
// Peça ao usuário que digite a sua cidade e verifique se ela começa com a letra "S" (ou outra letra de sua escolha).
var cidade = (_a = prompt("Por favor, digite a sua cidade: ")) === null || _a === void 0 ? void 0 : _a.toUpperCase();
if ((cidade === null || cidade === void 0 ? void 0 : cidade.charAt(0)) === "S") {
    console.log("A sua cidade: ".concat(cidade, ", come\u00E7a com a letra \"S\"."));
}
else {
    console.log("A sua cidade: ".concat(cidade, ", n\u00E3o come\u00E7a com a letra \"S\"."));
}
//Questão 24
// Solicite ao usuário que insira dois números decimais e calcule o resto da divisão entre eles.
var num1Dec = parseFloat(prompt("Digite o primeiro número decimal: "));
var num2Dec = parseFloat(prompt("Digite o segundo número decimal: "));
var restoDivisao = num1Dec % num2Dec;
console.log("O resto da divis\u00E3o entre ".concat(num1Dec, " e ").concat(num2Dec, " \u00E9: ").concat(restoDivisao.toFixed(2)));
//Questão 25
// Solicite ao usuário um número decimal e converta-o em um número inteiro.
var decimal = parseFloat(prompt("Escolha um número decimal: "));
var inteiro = parseInt(decimal.toString());
console.log("O n\u00FAmero decimal ".concat(decimal, " convertido para um n\u00FAmero inteiro \u00E9: ").concat(inteiro));
//Questão 26
// Receba uma string contendo um número inteiro e some 10 a esse número, convertendo-o novamente para uma string antes de exibi-lo.
var numeroString = prompt("Digite um número inteiro: ");
var numeInteiro = parseInt(numeroString);
var numeroIncrementado = numeInteiro + 10;
var numeroStringIncrementado = numeroIncrementado.toString();
console.log("O n\u00FAmero incrementado \u00E9: ".concat(numeroStringIncrementado));
//Questão 27
// Solicite ao usuário que digite uma data no formato "dd/mm/aaaa" e extraia o dia, o mês e o ano separadamente, convertendo-os em números inteiros.
var data = prompt("Digite uma data dd/mm/aaaa: ");
var diaMesAno = data === null || data === void 0 ? void 0 : data.split("/");
var diaInt = parseInt(diaMesAno[0]);
var mesInt = parseInt(diaMesAno[1]);
var anoInt = parseInt(diaMesAno[2]);
console.log("Dia: ".concat(diaInt, ", M\u00EAs: ").concat(mesInt, ", Ano: ").concat(anoInt));
//Questão 28
// Receba o nome de uma cidade do usuário e concatene-o com o nome do estado para formar uma mensagem completa, como "Você mora em [cidade], [estado].".
var city = prompt("Digite o nome da cidade: ");
var estado = prompt("Digite o nome do estado: ");
var cidadeEstado = "Voc\u00EA mora em ".concat(city, ", ").concat(estado, ".");
console.log(cidadeEstado);
//Questão 29
// Solicite ao usuário que insira seu ano de nascimento e concatene-o com uma mensagem de boas-vindas, como "Bem-vindo ao nosso programa, nascido em [ano de nascimento]!".
var anoNascimento = prompt("Diga o seu ano de nascimento: ");
console.log("Bem-vindo(a) ao nosso programa, nascido(a) em ".concat(anoNascimento, "!."));
//Questão 30
// Receba um número inteiro e uma string do usuário. Em seguida, concatene-os em uma única string, separando-os com um espaço.
var numeroIn = parseInt(prompt("Entre um número inteiro: "));
var stringFrase = prompt("Entre um string: ");
var concatenacao = numeroIn + " " + stringFrase;
console.log(concatenacao);
//Questão 31
// Receba o nome de um produto digitado pelo usuário e concatene-o com o preço do produto adicionando o símbolo de moeda da sua escolha.
var produto = prompt("Informe o nome do produto: ");
var valorProduto = parseFloat(prompt("Informe o valor do produto"));
var informacoesProduto = produto + ": R$ " + valorProduto.toFixed(2);
console.log(informacoesProduto);
//Questão 32
// Receba um número inteiro do usuário e concatene-o com uma mensagem, informando o dobro desse número.
var nInteiro = parseInt(prompt("Escolha um número inteiro: "));
var dobroNum = nInteiro * 2;
var mensagem = "O dobro do n\u00FAmero inteiro ".concat(nInteiro, " \u00E9 igual a ").concat(dobroNum);
console.log(mensagem);
//Questão 33
// Receba uma string contendo um endereço de e-mail e concatene-a com uma mensagem de agradecimento personalizada.
var email = prompt("Qual o e-mail? ");
var agradecimento = "Ol\u00E1! Seja bem-vindo(a) ao nosso sistema. O seu e-mail: ".concat(email, ", est\u00E1 cadastrado no banco de dados.");
console.log(agradecimento);
//Questão 34
// Receba dois números inteiros do usuário e exiba a soma, a diferença, o produto e o quociente (divisão inteira) entre eles.
var numer1 = parseInt(prompt("Digite o primeiro número inteiro: "));
var numer2 = parseInt(prompt("Digite o segundo número inteiro: "));
var somar = numer1 + numer2;
var diferenca = numer1 - numer2;
var multiplicacao = numer1 * numer2;
var quociente = numer1 / numer2;
var tabela = "Soma: ".concat(somar, " \n") +
    "Diferen\u00E7a: ".concat(diferenca, " \n") +
    "Produto: ".concat(multiplicacao, " \n") +
    "Quociente: ".concat(quociente.toFixed(0));
console.log(tabela);
//Questão 35
// Peça ao usuário para digitar a base e a altura de um triângulo. Em seguida, calcule e exiba a área do triângulo.
var baseTriangulo = Number(prompt("Informe a base do triângulo: "));
var alturaTriangulo = Number(prompt("Informe a altura do triângulo: "));
var areaRtangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log("A \u00E1rea do tri\u00E2ngulo = ".concat(areaRtangulo.toFixed(2)));
//Questão 36
// Receba o raio de uma circunferência digitado pelo usuário e calcule o seu perímetro (2 * π * raio).
var raio = Number(prompt("Digite o raio da circunferência: "));
var PI = 3.14;
var perimetro = 2 * PI * raio;
console.log("O per\u00EDmetro \u00E9 ".concat(perimetro.toFixed(2)));
//Questão 37
// Receba a base e a altura de um retângulo digitados pelo usuário. Em seguida, calcule e exiba o perímetro do retângulo.
var baseRetangulo = Number(prompt("Informe a base do Retângulo: "));
var alturaRetangulo = Number(prompt("Informe a altura do Retângulo: "));
var perimetroRetangulo = 2 * (baseRetangulo + alturaRetangulo);
console.log("Per\u00EDmetro do ret\u00E2ngulo: ".concat(perimetroRetangulo));
//Questão 38
// Solicite ao usuário que insira três números decimais. Em seguida, calcule e exiba a média aritmética desses números.
var somaNum = 0;
for (var i = 1; i <= 3; i++) {
    var numero_1 = parseFloat(prompt("Digite o ".concat(i, "\u00BA n\u00FAmero decimal: ")));
    somaNum += numero_1;
}
var media = somaNum / 3;
console.log("A m\u00E9dia Aritm\u00E9trica dos n\u00FAmeros: ".concat(media.toFixed(2)));
//Questão 39
// Peça ao usuário para digitar a sua idade e, em seguida, informe quantos meses e quantos dias ele já viveu (considerando um ano com 365 dias).
var idadeAgora = parseInt(prompt("Digite a sua idade atual: "));
var idadeMeses = idadeAgora * 12;
var idadeDias = idadeAgora * 365;
console.log("Voc\u00EA j\u00E1 viveu ".concat(idadeMeses, " meses e ").concat(idadeDias, " dias."));
//Questão 40
// Receba um valor em reais e a cotação do dólar digitados pelo usuário. Em seguida, converta o valor para dólares e exiba o resultado.
var valorEmReais = parseFloat(prompt("Informe o valor em reais R$: "));
var cotacaoDolar = parseFloat(prompt("Informe a cotação do dólar: "));
var valorEmDolar = valorEmReais / cotacaoDolar;
console.log("O valor convertido \u00E9 US$: ".concat(valorEmDolar.toFixed(2), " d\u00F3lares"));
//Questão 41
// Solicite ao usuário para digitar um número decimal e arredonde-o para o inteiro mais próximo.
var numberDec = parseFloat(prompt("Escolha um número decimal: "));
var numberInt = Math.round(numberDec);
console.log(numberInt);
//Questão 42
// Receba três números inteiros digitados pelo usuário e exiba o resultado da operação (n1 + n2) *n3.
var somaN = 0;
for (var i = 1; i <= 2; i++) {
    var n = parseInt(prompt("Digite o ".concat(i, "\u00BA n\u00FAmero inteiro: ")));
    somaN += n;
}
var n3 = parseInt(prompt("Digite o 3\u00BA n\u00FAmero inteiro: "));
var resposta = (somaN) * n3;
console.log("Resultado: ".concat(resposta));
//Questão 43
// Peça ao usuário que digite uma temperatura em graus Celsius e a converta para Fahrenheit usando a fórmula: Fahrenheit = (Celsius * 9/5) + 32.
var celsius = parseFloat(prompt("Digite a temperatura em Celsius: "));
var fahrenheit = (celsius * 9 / 5) + 32;
console.log("A temperatura em Fahrenheit \u00E9: ".concat(fahrenheit.toFixed(2), " \u00BAF"));
