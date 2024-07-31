// Questão 01
// Descreva para que serve o comando "for".
// É uma estrutura de repetição que otimiza o código e deixa-o mais enxuto e direto. Permite que um certo trecho de programa seja executado um determinado número de vezes. Também é usado para repetir um bloco de código envolvido por chaves. O comando "for" é essencial para automatizar tarefas repetitivas e iterar sobre elementos de uma coleção (como listas, arrays, strings, etc.).
// Questão 02
// Como o comando "for" define o início de uma repetição?
// Para iniciar a repetiçao no comando "for" tem que criar uma variável e inicializá-la com o número que deseja começara a operação. O comando "for" define o início de uma repetição estabelecendo um ponto de partida e uma condição que determina quando a repetição deve começar. Envolve a definição de uma variável de controle e um intervalo ou conjunto de elementos sobre os quais iterar.
// Questão 03
// Como o comando "for" determina o fim da execução?
// O comando "for" determina o fim da execução com uma condição, enquanto essa for verdadeira o código continua a ser executado e se for falsa, ou seja, a codição é satisfeita então o código sai do "for" e continua o código após o laço de repetição.
// Questão 04
// Como ocorre a alteração do valor em cada repetição dentro da estrutura de repetição "for"?
// A cada repetição do loop, a condição é testada; se é verdadeira ( true ), o bloco de comandos, e o incremento são executados. Quando a condição se torna falsa ( false ), o loop termina. A alteração do valor em cada repetição dentro da estrutura de repetição for é geralmente feita através de um incremento ou atualização da variável de controle. Esta alteração ocorre no final de cada iteração, antes de voltar a testar a condição de término para decidir se o loop deve continuar ou parar.
// Questão 05
// Implemente o código do slide de número 18.
for (var index = 0; index < 10; index++) {
    console.log("Testando uma frase");
}
// Questão 06
// Implemente o código do slide de número 26.
for (var i = 0; i < 10; i++) {
    console.log(i);
}
// Questão 07
// Implemente o código do slide de número 36.
for (var i = 0; i < 10; i++) {
    if (i == 5) {
        break;
    }
    console.log(i);
}
// Questão 08
// Implemente o código do slide de número 38.
for (var i = 0; i < 10; i++) {
    if (i == 5) {
        continue;
    }
    console.log(i);
}
// Questão 09
// Implemente o código do slide de número 44.
var nomes = ["João", "Paulo", "Pedro", "Gustavo", "Maria"];
for (var _i = 0, nomes_1 = nomes; _i < nomes_1.length; _i++) {
    var n = nomes_1[_i];
    console.log(n);
}
// Questão 10
// Faça um programa que exiba os números de 1 a 10 em ordem crescente.
for (var i = 1; i <= 10; i++) {
    console.log(i);
}
// Questão 11
// Crie um programa que exiba os números de 10 a 1 em ordem decrescente.
for (var i = 10; i > 0; i--) {
    console.log(i);
}
// Questão 12
// Elabore um programa que calcule a soma dos números de 1 a 100.
var soma = 0;
for (var i = 1; i <= 100; i++) {
    soma += i;
}
console.log("O total da soma dos n\u00FAmeros de 1 a 100 \u00E9 igual a ".concat(soma, "."));
// Questão 13
// Desenvolva um programa que exiba todos os números pares de 1 a 50.
for (var i = 1; i <= 50; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}
// Questão 14
// Faça um programa que calcule o produto dos números de 1 a 5.
var resultado = 1;
for (var i = 1; i <= 5; i++) {
    resultado *= i;
}
console.log("O resultado da multiplica\u00E7\u00E3o dos n\u00FAmeros de 1 a 5 \u00E9 igual a ".concat(resultado, "."));
// Questão 15
// Crie um programa que exiba a tabuada do 7.
console.log("TABUADA DO 7");
for (var i = 1; i <= 10; i++) {
    var multi = i * 7;
    console.log(" 7 x ".concat(i, " = ").concat(multi));
}
// Questão 16
// Elabore um programa que calcule a média de 5 notas digitadas pelo usuário.
var somaNotas = 0;
for (var i = 0; i < 5; i++) {
    var nota = parseFloat(prompt("Digite a " + (i + 1) + "ª nota:"));
    somaNotas += nota;
}
var mediaNotas = somaNotas / 5;
console.log("A m\u00E9dia das notas: ".concat(mediaNotas));
// Questão 17
// Desenvolva um programa que exiba todos os múltiplos de 3 no intervalo de 1 a 50.
console.log("Os múltiplos de 3 no intervalo de 1 a 50 são: ");
for (var i = 1; i <= 50; i++) {
    if (i % 3 === 0) {
        console.log(i);
    }
}
// Questão 18
// Crie um programa que leia 10 números do usuário e exiba o maior e o menor valor digitado.
var numeros = [];
var numMaior = 0;
var numMenor = 0;
for (var i = 0; i < 10; i++) {
    var numero = parseFloat(prompt("Digite o ".concat(i + 1, "\u00BA n\u00FAmero:")));
    numeros.push(numero);
    if (numero > numMaior) {
        numMaior = numero;
    }
    else if (numero < numMenor) {
        numMenor = numero;
    }
}
console.log("O menor valor digitado: ".concat(numMenor));
console.log("O maior valor digitado: ".concat(numMaior));
// Questão 19
// Faça um programa que exiba os números ímpares de 1 a 100.
console.log("Os números ímpares de 1 a 100 são: ");
for (var i = 1; i <= 100; i++) {
    if (i % 2 == 1) {
        console.log(i);
    }
}
// Questão 20
// Crie um programa que leia 5 notas de alunos e exiba quantos deles foram aprovados (nota maior ou igual a 7).
var aprovado = 0;
for (var i = 0; i < 5; i++) {
    var notas = parseFloat(prompt("Digite a " + (i + 1) + "ª nota:"));
    if (notas >= 7) {
        aprovado++;
    }
}
console.log("A quantidade de aprovados s\u00E3o: ".concat(aprovado));
// Questão 21
// Faça um programa que exiba a soma dos dígitos de um número inteiro fornecido pelo usuário.
var numInteiro = parseInt(prompt("Digite um número inteiro: "));
var somaDigitos = 0;
var numString = numInteiro.toString();
for (var i = 0; i < numString.length; i++) {
    //cada dígito do número inteiro
    somaDigitos += Number(numString[i]);
}
console.log("A soma dos d\u00EDgitos do n\u00FAmero inteiro informado \u00E9 ".concat(somaDigitos));
// Questão 22
// Elabore um programa que leia um número inteiro e exiba todos os seus divisores.
var numInt = parseInt(prompt("Digite um número inteiro: "));
console.log("Divisores do número " + numInt + ":");
for (var i = 1; i <= numInt; i++) {
    if (numInt % i === 0) {
        console.log(i);
    }
}
// Questão 23
// Desenvolva um programa que calcule a média de altura de 5 pessoas.
var somaAlturas = 0;
for (var i = 1; i <= 5; i++) {
    var altura = parseFloat(prompt("Informe a ".concat(i, "\u00AA altura: ")));
    somaAlturas += altura;
}
var mediaAlturas = somaAlturas / 5;
console.log("A m\u00E9dia das alturas \u00E9 ".concat(mediaAlturas.toFixed(2), " cm."));
// Questão 24
// Faça um programa que exiba os números de 1 a 100, substituindo os múltiplos de 3 pela palavra "Fizz" e os múltiplos de 5 pela palavra "Buzz". Para os números que são múltiplos de ambos, utilize a palavra "FizzBuzz".
for (var i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    }
    else if (i % 3 === 0) {
        console.log("Fizz");
    }
    else if (i % 5 === 0) {
        console.log("Buzz");
    }
    else {
        console.log(i);
    }
}
// Questão 25
// Elabore um programa que leia um número inteiro e exiba a soma dos dígitos pares desse número.
var numeroInteiro = parseInt(prompt("Digite um número inteiro: "));
var somaDigitosPares = 0;
var numeroString = numeroInteiro.toString();
for (var i = 0; i < numeroString.length; i++) {
    var digito = Number(numeroString[i]);
    if (digito % 2 === 0) {
        somaDigitosPares += digito;
    }
}
console.log("A soma dos d\u00EDgitos pares do n\u00FAmero inteiro informado \u00E9 ".concat(somaDigitosPares));
// Questão 26
// Faça um programa que leia um número inteiro e exiba o número invertido. Por exemplo, se o número lido for 123, o programa deve exibir 321.
var numeroInt = parseInt(prompt("Escolha um número inteiro: "));
var numeroStr = numeroInt.toString();
var numInversoStr = numeroStr.split('').reverse().join('');
var numInverso = parseInt(numInversoStr);
console.log("O n\u00FAmero invertido \u00E9: ".concat(numInverso));
