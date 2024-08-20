// import { somarAB } from "./functions";
var _a, _b, _c, _d;
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
function soma(num1, num2) {
    console.log(num1 + num2);
}
soma(10, 15);
soma(10, 20);
soma(30, 50);
soma(50, 50);
//Questão 04
// Implemente o código do slide de número 33.
function somar(numb1, numb2) {
    return numb1 + numb2;
}
var teste1 = somar(10, 5);
console.log(teste1);
var teste2 = somar(10, 20) + somar(30, 50);
console.log(teste2);
console.log(somar(50, 50));
//Questão 05
// Escreva uma função chamada "soma" que receba dois parâmetros (a e b) e retorne a soma deles.
var a = Number(prompt("Escolha um valor para [A]: "));
var b = Number(prompt("Escolha um valor para [B]: "));
function somarAB(a, b) {
    var soma = a + b;
    return soma;
}
var resultado = somarAB(a, b);
console.log("".concat(a, " + ").concat(b, " = ").concat(resultado));
//Questão 06
// Crie uma função chamada "isPar" que receba um número inteiro como parâmetro e retorne "true" se o número for par ou "false" caso contrário.
var nInteiro = parseInt(prompt("Digite um número inteiro: "));
function isPar(nInteiro) {
    if (nInteiro % 2 === 0) {
        return true;
    }
    return false;
}
console.log(isPar(nInteiro));
//Questão 07
// Elabore uma função chamada "media" que receba três notas como parâmetros e retorne a média aritmética delas.
var i = 1;
var somaNotas = 0;
function media(soma) {
    var mediaNotas = soma / 3;
    return mediaNotas;
}
while (i <= 3) {
    var notas = parseFloat(prompt("Digite a " + i + "º nota: "));
    if (notas >= 0 && notas <= 10) {
        somaNotas += notas;
        i++;
    }
    else {
        console.log("Por favor, insira um número válido.");
    }
}
console.log("A m\u00E9dia das tr\u00EAs notas \u00E9: ".concat(media(somaNotas).toFixed(2)));
// //Questão 08
// Elabore uma função chamada "imc" que receba o peso (em kg) e a altura (em metros) de uma pessoa e retorne o índice de massa corporal (IMC) dela.
var peso = Number(prompt("Informe o seu peso: "));
var altura = parseFloat(prompt("Informe a sua altura: "));
function imc(peso, altura) {
    var imc = peso / Math.pow(altura, 2);
    return imc;
}
console.log("IMC: ".concat(imc(peso, altura).toFixed(2)));
//Questão 09
// Elabore uma função chamada "calcularDesconto" que receba o valor de um produto e o percentual de desconto como parâmetros e retorne o valor com o desconto aplicado.
var preco = Number(prompt("Informe o preço do produto: "));
var percentual = parseInt(prompt("Informe o percentual(%) de desconto: "));
function calcularDesconto(preco, percentual) {
    var valorDesconto = preco * (percentual / 100);
    return valorDesconto;
}
var valorDoDesconto = calcularDesconto(preco, percentual);
var precoComDesconto = preco - valorDoDesconto;
console.log("Pre\u00E7o do desconto: R$ ".concat(valorDoDesconto));
console.log("Pre\u00E7o final com desconto: R$ ".concat(precoComDesconto));
//Questão 10
// Elabore uma função chamada "calcularImpostoRenda" que receba o salário bruto de uma pessoa como parâmetro e retorne o valor do imposto de renda a ser pago, considerando as seguintes faixas de renda:
// a. Até R$ 1.903,98: isento
// b. De R$ 1.903,99 até R$ 2.826,65: alíquota de 7,5%
// c. De R$ 2 .826,66 até R$ 3.751,05: alíquota de 15%
// d. De R$ 3.751,06 até R$ 4.664,68: alíquota de 22,5%
// e. Acima de R$ 4.664,68: alíquota de 27,5%
var salarioBruto = parseFloat(prompt("Informe o seu salário bruto: "));
function calcularImpostoRenda(salarioBruto) {
    if (salarioBruto <= 1903.98) {
        return 0.0;
    }
    else if (salarioBruto <= 2826.65) {
        return (salarioBruto * 0.075).toFixed(2);
    }
    else if (salarioBruto <= 3751.05) {
        return (salarioBruto * 0.15).toFixed(2);
    }
    else if (salarioBruto <= 4664.68) {
        return (salarioBruto * 0.225).toFixed(2);
    }
    else if (salarioBruto > 4664.68) {
        return (salarioBruto * 0.275).toFixed(2);
    }
}
console.log("Valor do imposto de renda a ser pago: ".concat(calcularImpostoRenda(salarioBruto)));
// Questão 11
// Faça uma função chamada "calcularMediaArredondada" que receba uma lista de números como parâmetro e retorne a média aritmética desses números, arredondada para o inteiro mais próximo.
var listaNumeros = [];
var numeros = 0;
while (numeros !== -1) {
    numeros = Number(prompt("Digite um número [Aperte -1 para sair]:"));
    if (numeros !== -1) {
        listaNumeros.push(numeros);
    }
}
function calcularMediaArredondada(listaNumeros) {
    var somarNum = 0;
    for (var i_1 = 0; i_1 < listaNumeros.length; i_1++) {
        somarNum += listaNumeros[i_1];
    }
    var mediaArredondada = Math.round(somarNum / listaNumeros.length);
    return mediaArredondada;
}
console.log("A m\u00E9dia aritm\u00E9tica desses n\u00FAmeros, arredondada para o inteiro mais pr\u00F3ximo: ".concat(calcularMediaArredondada(listaNumeros)));
//Questão 12
// Desenvolva uma função chamada "contarDigitosParesImpares" que receba um número inteiro como parâmetro e retorne a quantidade de dígitos pares e a quantidade de dígitos ímpares presentes nesse número.
var digitosPares = 0;
var digitosImpares = 0;
var num = parseInt(prompt("Informe um número inteiro: "));
function contarDigitosParesImpares(num) {
    var digitos = num.toString().split("").map(Number); // Obtém os dígitos como números
    digitos.forEach(function (digito) {
        if (digito % 2 === 0) {
            digitosPares++;
        }
        else {
            digitosImpares++;
        }
    });
}
contarDigitosParesImpares(num);
console.log("Quantidade de d\u00EDgitos pares: ".concat(digitosPares, "\nQuantidade de d\u00EDgitos \u00EDmpares: ").concat(digitosImpares));
var listaAlunos = [];
var pergunta;
do {
    var nomeAluno = prompt("Informe o nome do aluno(a): ");
    var notaAluno = parseFloat(prompt("Informe a nota do aluno(a): "));
    var aluno = { nome: nomeAluno, nota: notaAluno };
    listaAlunos.push(aluno);
    pergunta = prompt("Deseja adicionar mais alunos? [S/N]: ").toUpperCase();
} while (pergunta === "S");
function calcularMediaAlunos(listaAlunos) {
    var somaNotas = 0;
    for (var i_2 = 0; i_2 < listaAlunos.length; i_2++) {
        somaNotas += listaAlunos[i_2].nota;
    }
    var mediaNotas = somaNotas / listaAlunos.length;
    return mediaNotas;
}
console.log("M\u00E9dia das notas dos alunos: ".concat(calcularMediaAlunos(listaAlunos).toFixed(2)));
//Questão 14
// Crie uma função chamada "calcularIdade" que receba o ano de "nascimento" de uma pessoa como parâmetro e retorne a idade atual.
var anoNasc = parseInt(prompt("Informe o ano de nascimento: "));
function calcularIdade(anoNasc) {
    var idadeAtual = 2024 - anoNasc;
    return idadeAtual;
}
console.log("A idade atual \u00E9: ".concat(calcularIdade(anoNasc)));
//Questão 15
// Crie uma função chamada "gerarTabuada" que receba um "número" como parâmetro e exiba a tabuada desse número de 1 a 10 no console.
var numero = parseInt(prompt("Escolha um número para a tabuada: "));
console.log("TABUADA DO ".concat(numero, ":"));
function gerarTabuada(numero) {
    for (var i_3 = 1; i_3 <= 10; i_3++) {
        console.log("".concat(numero, " x ").concat(i_3, " = ").concat(numero * i_3));
    }
}
gerarTabuada(numero);
// Questão 16
// Escreva uma função chamada "advinheNumero" que gera aleatoriamente um número inteiro entre 1 e 100. Em seguida, permita que o usuário insira tentativas para adivinhar o número. A função deve dar dicas ao usuário se o número correto é maior ou menor do que a tentativa. Quando o usuário acertar, exiba uma mensagem de parabéns e informe a quantidade de tentativas utilizadas.
function advinheNumero() {
    var numeroSorteado = Math.floor(Math.random() * 100) + 1; //// Math.random() * 100 gera um número entre 0 e 99.999. Math.floor() arredonda esse número para um inteiro entre 0 e 99. + 1 ajusta o valor para estar no intervalo de 1 a 100.
    var numeroTentativas = 0;
    var numeroUsuario;
    do {
        numeroUsuario = parseInt(prompt("Adivinhe o número secreto (entre 1 e 100):"));
        numeroTentativas++;
        if (numeroUsuario < numeroSorteado) {
            alert("O número é maior!");
        }
        else if (numeroUsuario > numeroSorteado) {
            alert("O número é menor!");
        }
        else {
            alert("Parab\u00E9ns! Voc\u00EA acertou o n\u00FAmero ".concat(numeroSorteado, " em ").concat(numeroTentativas, " tentativas."));
        }
    } while (numeroUsuario !== numeroSorteado);
}
// Executa a função para iniciar o jogo de advinhar número
advinheNumero();
var objeto = {
    nome: "John Doe",
    idade: 30,
    endereco: {
        rua: "Rua dos Bobos",
        numero: 123,
    },
};
function verificarPropriedade(objeto, propriedade) {
    // Verifica se a propriedade está no objeto principal ou em `endereco`
    if (propriedade in objeto) {
        return true;
    }
    else if (propriedade in objeto.endereco) {
        return true;
    }
    return false;
}
var propriedade = prompt("Informe a propriedade do objeto que deseja consultar(Ex: nome): ");
if (propriedade !== null) {
    var resultado_1 = verificarPropriedade(objeto, propriedade);
    console.log("A propriedade \"".concat(propriedade, "\" existe no objeto? ").concat(resultado_1));
}
//Questão 18
// Faça uma função chamada "calcularPrecoProduto" que receba o "valor de custo" de um produto, a "margem de lucro" desejada (em percentual) e o "valor do frete" como parâmetros. A função deve calcular e retornar o preço de venda do produto, considerando que o preço de venda é igual ao custo acrescido da margem de lucro e do valor do frete.
var custo;
var margemLucro;
var frete;
function calcularPrecoProduto(custo, margemLucro, frete) {
    var precoVenda = custo + (custo * margemLucro) / 100 + frete;
    return precoVenda;
}
custo = parseFloat(prompt("Informe o valor de custo do produto: "));
margemLucro = parseInt(prompt("Informe a margem de lucro (em percentual): "));
frete = parseFloat(prompt("Informe o valor do frete: "));
console.log("Pre\u00E7o da venda do produto R$: ".concat(calcularPrecoProduto(custo, margemLucro, frete).toFixed(2)));
// Questão 19
// Escreva uma função que aceite uma string como parâmetro e encontre a palavra mais longa dentro da string. String de exemplo: 'Tutorial de desenvolvimento da web'. Resultado esperado:'Desenvolvimento'.
var frase = "";
function maiorPalavra(frase) {
    var palavras = frase.split(" ");
    var maiorPalavra = "";
    for (var _i = 0, palavras_1 = palavras; _i < palavras_1.length; _i++) {
        var palavra = palavras_1[_i];
        if (palavra.length > maiorPalavra.length) {
            maiorPalavra = palavra;
        }
    }
    return maiorPalavra;
}
if (frase !== null) {
    frase = prompt("Informe uma frase: ");
}
console.log("A palavra mais longa digitada foi: ".concat(maiorPalavra(frase)));
//Questão 20
// Escreva uma função que pegue uma lista de strings e as imprima, uma por linha, em um quadro retangular. Por exemplo, a lista ["Hello", "World", "in", "a", "frame"] é impressa como:
// *********
// * Hello *
// * World *
// * in *
// * a *
// * frame *
// *********
var listaStrings = [];
var fraseString = "";
function imprimirListaStrings(fraseString) {
    var _a;
    fraseString = (_a = prompt("Digite uma frase: ")) !== null && _a !== void 0 ? _a : "";
    if (fraseString !== "") {
        var fraseSeparada = fraseString.split(" ");
        listaStrings.push(fraseSeparada);
    }
    // Imprimir todos os elementos da lista de strings
    for (var i_4 = 0; i_4 < listaStrings.length; i_4++) {
        console.log("**********");
        for (var j = 0; j < listaStrings[i_4].length; j++) {
            console.log("* ".concat(listaStrings[i_4][j], " *"));
        }
        console.log("**********");
    }
}
imprimirListaStrings(fraseString);
//Questão 21
// Crie uma função que receba um array de strings e retorne um novo array contendo apenas as strings que têm mais de 5 caracteres.
var arrayStrings = [];
function tamanhoMaior5(arrayStrings) {
    var _a, _b;
    var continuar = "S";
    while (continuar === "S") {
        var palavra = prompt("Digite uma palavra: ");
        if (palavra !== null && palavra.length > 5) {
            arrayStrings.push(palavra);
        }
        continuar =
            (_b = (_a = prompt("Deseja adicionar outra palavra? [S/N]: ")) === null || _a === void 0 ? void 0 : _a.toUpperCase()) !== null && _b !== void 0 ? _b : "N";
    }
    return arrayStrings;
}
tamanhoMaior5(arrayStrings);
console.log("Palavras que t\u00EAm mais de 5 caracteres: \n");
console.log(arrayStrings);
var livros = [];
var continuar = "S";
function informacoesLivros() {
    var autorConsulta = prompt("Informe o nome do autor(a) que deseja consultar: ");
    var livrosDoAutor = livros.filter(function (livro) { return livro.autor === autorConsulta; });
    if (livrosDoAutor.length > 0) {
        console.log("Livros do(a) autor(a) ".concat(autorConsulta, " encontrados:"));
        livrosDoAutor.forEach(function (livro) {
            console.log("T\u00EDtulo: ".concat(livro.titulo, ", Ano: ").concat(livro.ano));
        });
    }
    else {
        console.log("Nenhum livro encontrado para o autor informado.");
    }
}
while (continuar === "S") {
    var titulo = prompt("Informe o título do livro: ");
    if (titulo !== null) {
        var autor = prompt("Informe o nome do autor(a): ");
        var ano = parseInt(prompt("Informe o ano de publicação: "));
        var novoLivro = { titulo: titulo, autor: autor, ano: ano };
        livros.push(novoLivro);
    }
    console.log("Livro adicionado com sucesso!");
    continuar = prompt("Deseja adicionar outro livro? (S/N): ").toUpperCase();
}
informacoesLivros();
var cont = "S";
var pessoas = [];
function nomePessoaMaisVelha(pessoas) {
    var maisVelhaPessoa = pessoas[0];
    for (var _i = 0, pessoas_1 = pessoas; _i < pessoas_1.length; _i++) {
        var pessoa = pessoas_1[_i];
        if (pessoa.idade > maisVelhaPessoa.idade) {
            maisVelhaPessoa = pessoa;
        }
    }
    return maisVelhaPessoa.nome;
}
while (cont === "S") {
    var nome = prompt("Informe o nome da pessoa: ");
    if (nome) {
        var idade = parseInt(prompt("Informe a idade da pessoa: "));
        var novaPessoa = { nome: nome, idade: idade };
        pessoas.push(novaPessoa);
    }
    console.log("Pessoa adicionada com sucesso!");
    cont = (_b = (_a = prompt("Deseja adicionar outra pessoa? [S/N]: ")) === null || _a === void 0 ? void 0 : _a.toUpperCase()) !== null && _b !== void 0 ? _b : "N";
}
var nomeMaisVelha = nomePessoaMaisVelha(pessoas);
console.log("A pessoa mais velha \u00E9: ".concat(nomeMaisVelha));
var seguir = "S";
var carros = [];
function InformacoesCarros(carros) {
    var carrosFabricadosDepoisDoAno = carros.filter(function (carro) { return carro.ano > 2020; });
    if (carrosFabricadosDepoisDoAno.length > 0) {
        console.log("Carros fabricados ap\u00F3s o ano de 2020: ");
        carrosFabricadosDepoisDoAno.forEach(function (carro) {
            console.log("Marca: ".concat(carro.marca, ", Modelo: ").concat(carro.modelo, ", Carro: ").concat(carro.cor, " ,Ano: ").concat(carro.ano));
        });
    }
    else {
        console.log("Nenhum carro foi fabricado após o ano informado.");
    }
}
while (seguir === "S") {
    var marca = prompt("Informe a marca do carro: ");
    var modelo = prompt("Informe a modelo do carro: ");
    var cor = prompt("Informe a cor do carro: ");
    var ano = parseInt(prompt("Informe o ano do carro: "));
    if (marca && modelo && cor) {
        var novoCarro = { marca: marca, modelo: modelo, cor: cor, ano: ano };
        carros.push(novoCarro);
    }
    console.log("Carro adicionado com sucesso!");
    seguir = (_d = (_c = prompt("Deseja adicionar outro carro? [S/N]: ")) === null || _c === void 0 ? void 0 : _c.toUpperCase()) !== null && _d !== void 0 ? _d : "N";
}
InformacoesCarros(carros);
//Questão 25
// Crie uma função chamada "inverterString" que recebe uma string como argumento e retorna a string invertida. Por exemplo, para a entrada "hello", a função deve retornar "olleh".
function inverterString() {
    var _a;
    var str = (_a = prompt("Escolha uma palavra para inverter: ")) !== null && _a !== void 0 ? _a : "";
    var stringInvertida = str.split("").reverse().join("");
    return "".concat(str, " invertida = ").concat(stringInvertida);
}
console.log(inverterString());
