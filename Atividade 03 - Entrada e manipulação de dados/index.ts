// //Questão 01
// // Implemente o código do slide de número 5.
// let frase = prompt("Entre a primeira frase: ");
// console.log(frase);

// //Questão 02
// // Implemente o código do slide de número 13.
// let string = "123";
// console.log(typeof Number(string));
// let number = 321;
// console.log(typeof String(string));

// //Questão 03
// // Implemente o código do slide de número 16.
// let numero1 = prompt("Digite o primeiro número: ");
// let numero2 = prompt("Digite o segundo número: ");
// let resultado = Number(numero1) + Number(numero2);
// console.log(resultado);

// //Questão 04
// // Implemente o código do slide de número 23.
// const string1 = "Estudar";
// const string2 = " é bom!";
// console.log(string1 + string2);
// const numero = 48;
// console.log(string1 + string2 + " " + numero);

// //Questão 05
// // Solicite ao usuário seu nome e imprima uma mensagem de boas-vindas na tela.
// let nome = prompt("Olá! Por favor, digite o seu nome: ");
// if (nome == null || nome == "") {
//   nome = prompt("Olá! Por favor, digite o seu nome: ");
// } else {
//   alert(`Seja Bem-Vindo(a) ${nome}!`);
// }

// //Questão 06
// // Peça ao usuário que digite sua idade em texto (por exemplo, "18") e converta-a em um número
// // inteiro.
// const idade = prompt("Digite a sua idade: ");
// const idadeConvertida = parseInt(idade!);

// // Questão 07
// // Receba um número inteiro do usuário e converta-o em um número decimal (float).
// const numeroInteiro = parseInt(prompt("Digite um número: ")!);
// const numeroFloat = parseFloat(numeroInteiro.toString());

// //Questão 08
// // Peça ao usuário para digitar dois números inteiros e exiba a soma deles.
// const primeiroNumero = parseInt(prompt("Digite o primeiro número: ")!);
// const segundoNumero = parseInt(prompt("Digite o segundo número: ")!);
// const soma = primeiroNumero + segundoNumero;
// console.log("A soma dos números é: " + soma);

// //Questão 09
// // Receba um número decimal do usuário e calcule o seu quadrado.
// const numeroDecimal = parseFloat(prompt("Digite um número para calcular: ")!);
// const quadro = numeroDecimal ** 2;
// console.log(`O quadrado do número ${numeroDecimal} é : ` + quadro);

// //Questão 10
// // Peça ao usuário que insira o seu ano de nascimento e, em seguida, exiba a sua idade.
// const anoNasc = parseInt(prompt("Digite o ano de nascimento: ")!);
// const idadeAtual = 2024 - anoNasc;
// alert("A idade atual é de: " + idadeAtual);

// //Questão 11
// // Peça ao usuário que digite seu primeiro nome e seu sobrenome separadamente. Em seguida,
// // concatene-os em uma única string e exiba o nome completo.
// const primeiroNome = prompt("Digite o primeiro nome: ");
// const sobrenome = prompt("Digite o sobrenome: ");
// const nomeCompleto = primeiroNome + " " + sobrenome;
// console.log(nomeCompleto);

// //Questão 12
// // Solicite ao usuário uma sequência de números separados por espaço e exiba quantos números
// // foram digitados.
// const numeros = prompt(
//   "Digite uma sequência de números separados por espaço: "
// );
// const qtdNumeros = numeros?.split(" ");
// const numDigitados = Number(qtdNumeros?.length);
// console.log("Quantidade de números digitados: " + numDigitados);

// //Questão 13
// // Receba o nome de um animal digitado pelo usuário e exiba uma mensagem informando qual
// // animal foi digitado.
// const animal = prompt("Digite o nome de um animal");
// if (animal !== null && animal !== "") {
//   console.log(`Você digitou: ${animal}`);
// } else {
//   console.log("Tente novamente! Você não digitou um nome válido");
// }

// //Questão 14
// // Peça ao usuário que digite o seu nome e o seu sobrenome. Em seguida, exiba o nome completo
// // invertido (sobrenome, nome).
// const primeiroNomeInv = prompt("Digite o primeiro nome: ");
// const sobrenomeInv = prompt("Digite o sobrenome: ");
// const nomeCompletoInv = sobrenomeInv + ", " + primeiroNomeInv;
// console.log(nomeCompletoInv);

// //Questão 15
// // Receba uma string digitada pelo usuário e imprima o seu tamanho (número de caracteres).
// const frase2 = prompt("Digite uma frase:");
// console.log("Tamanho da frase: " + frase2?.length);

// ///Questão 16
// // Solicite ao usuário um número inteiro e exiba se ele é par ou ímpar.
// const numInteiro = parseInt(prompt("Digite um número inteiro: ")!);
// if (numInteiro % 2 === 0) {
//   console.log("O número é par");
// } else {
//   console.log("O número é ímpar");
// }

// //Questão 17
// // Receba um número inteiro digitado pelo usuário e verifique se ele é positivo ou negativo.
// const numeroInt = parseInt(prompt("Digite um número inteiro: ")!);
// if (numeroInt >= 0) {
//   console.log(`O ${numeroInt} é positivo!`);
// } else {
//   console.log(`O ${numeroInt} é negativo!`);
// }

// //Questão 18
// // Peça ao usuário que insira dois números e exiba o maior deles.
// const num1 = Number(prompt("Digite o primeiro número"));
// const num2 = Number(prompt("Digite o segundo número"));
// if (num1 > num2) {
//   console.log(`O maior número é: ${num1}`);
// } else {
//   console.log(`O maior número é: ${num2}`);
// }

// //Questão 19
// // Receba a altura e o peso de uma pessoa digitados pelo usuário. Em seguida, calcule o seu índice de massa corporal (IMC) utilizando a fórmula: IMC = peso / (altura * altura) e exiba o resultado.
// const altura = Number(prompt("Por favor, informe a altura: "));
// const peso = Number(prompt("Agora, informe o peso: "));
// const IMC = peso / altura ** 2;
// console.log(`O IMC: ${IMC.toFixed(2)}`);

// //Questão 20
// // Peça ao usuário que digite o seu nome e verifique se ele contém mais de 5 caracteres.
// const nomeTamanho = prompt("Abençoado(a) diga aí o seu nome: ");
// if (nomeTamanho !== null && nomeTamanho.length < 5) {
//   console.log(`Olá, ${nomeTamanho}! Seu nome possui menos de 5 caracteres.`);
// } else if (nomeTamanho !== null && nomeTamanho.length === 5) {
//   console.log(`Olá, ${nomeTamanho}! Seu nome possui 5 caracteres.`);
// } else if (nomeTamanho !== null) {
//   console.log(`Olá, ${nomeTamanho}! Seu nome possui mais de 5 caracteres.`);
// }

// //Questão 21
// // Solicite ao usuário que insira o seu estado civil e exiba uma mensagem apropriada (por exemplo: "Você é casado(a)", "Você é solteiro(a)", etc.).
// const estadoCivil = prompt("Digite o seu estado civil: ");
// if (estadoCivil !== null && estadoCivil !== "") {
//   console.log(`Você é no momento presente ${estadoCivil}`);
// } else {
//   console.log("Você não digitou um estado civil válido :(");
// }

// //Questão 22
// // Receba a base e a altura de um retângulo digitados pelo usuário. Em seguida, calcule a sua área e exiba o resultado.
// const base = Number(prompt("Informe o valor da base do retângulo: "));
// const alturaRet = Number(prompt("Informe o valor da altura do retãngulo: "));
// const areaRetangulo = base * alturaRet;
// console.log(`A área do retângulo é: ${areaRetangulo.toFixed(2)}`);

// //Questão 23
// // Peça ao usuário que digite a sua cidade e verifique se ela começa com a letra "S" (ou outra letra de sua escolha).
// const cidade = prompt("Por favor, digite a sua cidade: ")?.toUpperCase();
// if (cidade?.charAt(0) === "S"){
//     console.log(`A sua cidade: ${cidade}, começa com a letra "S".`);
// } else {
//     console.log(`A sua cidade: ${cidade}, não começa com a letra "S".`);
// }

// //Questão 24
// // Solicite ao usuário que insira dois números decimais e calcule o resto da divisão entre eles.
// const num1Dec = parseFloat(prompt("Digite o primeiro número decimal: ")!);
// const num2Dec = parseFloat(prompt("Digite o segundo número decimal: ")!);
// const restoDivisao = num1Dec % num2Dec;
// console.log(`O resto da divisão entre ${num1Dec} e ${num2Dec} é: ${restoDivisao.toFixed(2)}`);

// //Questão 25
// // Solicite ao usuário um número decimal e converta-o em um número inteiro.
// const decimal = parseFloat(prompt("Escolha um número decimal: ")!);
// const inteiro = parseInt(decimal.toString());
// console.log(`O número decimal ${decimal} convertido para um número inteiro é: ${inteiro}`);

// //Questão 26
// // Receba uma string contendo um número inteiro e some 10 a esse número, convertendo-o novamente para uma string antes de exibi-lo.
// const numeroString = prompt("Digite um número inteiro: ");
// const numeInteiro = parseInt(numeroString!);
// const numeroIncrementado = numeInteiro + 10;
// const numeroStringIncrementado = numeroIncrementado.toString();
// console.log(`O número incrementado é: ${numeroStringIncrementado}`);

// //Questão 27
// // Solicite ao usuário que digite uma data no formato "dd/mm/aaaa" e extraia o dia, o mês e o ano separadamente, convertendo-os em números inteiros.
// const data = prompt("Digite uma data dd/mm/aaaa: ");
// const diaMesAno = data?.split("/");
// const diaInt = parseInt(diaMesAno![0]);
// const mesInt = parseInt(diaMesAno![1]);
// const anoInt = parseInt(diaMesAno![2]);
// console.log(`Dia: ${diaInt}, Mês: ${mesInt}, Ano: ${anoInt}`);

// //Questão 28
// // Receba o nome de uma cidade do usuário e concatene-o com o nome do estado para formar uma mensagem completa, como "Você mora em [cidade], [estado].".
// const city = prompt("Digite o nome da cidade: ");
// const estado = prompt("Digite o nome do estado: ");
// const cidadeEstado = `Você mora em ${city}, ${estado}.`;
// console.log(cidadeEstado);

// //Questão 29
// // Solicite ao usuário que insira seu ano de nascimento e concatene-o com uma mensagem de boas-vindas, como "Bem-vindo ao nosso programa, nascido em [ano de nascimento]!".
// const anoNascimento = prompt("Diga o seu ano de nascimento: ");
// console.log(`Bem-vindo(a) ao nosso programa, nascido(a) em ${anoNascimento}!.`);

// //Questão 30
// // Receba um número inteiro e uma string do usuário. Em seguida, concatene-os em uma única string, separando-os com um espaço.
// const numeroIn = parseInt(prompt("Entre um número inteiro: ")!);
// const stringFrase =  prompt("Entre um string: ");
// const concatenacao = numeroIn + " " + stringFrase;
// console.log(concatenacao);

// //Questão 31
// // Receba o nome de um produto digitado pelo usuário e concatene-o com o preço do produto adicionando o símbolo de moeda da sua escolha.
// const produto = prompt("Informe o nome do produto: ");
// const valorProduto = parseFloat(prompt("Informe o valor do produto")!);
// const informacoesProduto = produto + ": R$ " + valorProduto.toFixed(2);
// console.log(informacoesProduto);

// //Questão 32
// // Receba um número inteiro do usuário e concatene-o com uma mensagem, informando o dobro desse número.
// const nInteiro = parseInt(prompt("Escolha um número inteiro: ")!);
// const dobroNum = nInteiro * 2;
// const mensagem = `O dobro do número inteiro ${nInteiro} é igual a ${dobroNum}`;
// console.log(mensagem);

// //Questão 33
// // Receba uma string contendo um endereço de e-mail e concatene-a com uma mensagem de agradecimento personalizada.
// const email = prompt("Qual o e-mail? ");
// const agradecimento = `Olá! Seja bem-vindo(a) ao nosso sistema. O seu e-mail: ${email}, está cadastrado no banco de dados.`;
// console.log(agradecimento);

// //Questão 34
// // Receba dois números inteiros do usuário e exiba a soma, a diferença, o produto e o quociente (divisão inteira) entre eles.
// const numer1 = parseInt(prompt("Digite o primeiro número inteiro: ")!);
// const numer2 = parseInt(prompt("Digite o segundo número inteiro: ")!);
// const somar = numer1 + numer2;
// const diferenca = numer1 - numer2;
// const multiplicacao = numer1 * numer2;
// const quociente = numer1 / numer2;
// const tabela =
//   `Soma: ${somar} \n` +
//   `Diferença: ${diferenca} \n` +
//   `Produto: ${multiplicacao} \n` +
//   `Quociente: ${quociente.toFixed(0)}`;
// console.log(tabela);

// //Questão 35
// // Peça ao usuário para digitar a base e a altura de um triângulo. Em seguida, calcule e exiba a área do triângulo.
// const baseTriangulo = Number(prompt("Informe a base do triângulo: "));
// const alturaTriangulo = Number(prompt("Informe a altura do triângulo: "));
// const areaRetangulo = (baseTriangulo * alturaTriangulo) / 2;
// console.log(`A área do triângulo = ${areaRetangulo.toFixed(2)}`);

// //Questão 36
// // Receba o raio de uma circunferência digitado pelo usuário e calcule o seu perímetro (2 * π * raio).
// const raio = Number(prompt("Digite o raio da circunferência: "));
// const PI = 3.14;
// const perimetro = 2 * PI * raio;
// console.log(`O perímetro é ${perimetro.toFixed(2)}`);





