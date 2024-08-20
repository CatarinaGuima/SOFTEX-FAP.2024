"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var functions_1 = require("./functions");
// Questão 01 e Questão 02
// Enumere as diferenças entre os comandos "for" e "while". Descreva em quais circunstâncias os comandos "for" e "while" devem ser empregados.
// O comando "for" é usado quando sabe quando iniciar e parar um código de repetição, também bastante utilizado para iterar listas. A estrutura do "while" é geralmente usada quando o número de iterações não é conhecido antecipadamente e depende de uma condição que pode mudar durante a execução do laço.  A escolha entre um e outro depende do problema específico que se está tentando resolver e da forma como o laço deve ser controlado.
// Questãp 03
// Implemente o código do slide de número 9.
var i = 0;
while (i < 10) {
    console.log("Testando uma frase!");
    i++;
}
//Questão 04
// Implemente o código do slide de número 16.
var indicador = 465484133;
while (indicador > 10) {
    console.log(i);
    indicador /= 35;
}
//Questão 05
// Implemente o código do slide de número 26.
var j = 0;
do {
    console.log(j);
    j++;
} while (j < 5);
//Questão 06
// Escreva um programa que exiba os números de 1 a 10 em ordem crescente utilizando o while.
var k = 1;
do {
    console.log(k);
    k++;
} while (k <= 10);
//Questão 07
// Crie um programa que exiba os números de 10 a 1 em ordem decrescente utilizando o while.
var l = 10;
while (l > 0) {
    console.log(l);
    l--;
}
//Questão 08
// Elabore um programa que calcule a soma dos números de 1 a 100 utilizando o while.
var soma = 0;
var ind = 1;
while (ind <= 100) {
    soma += ind;
    ind++;
}
console.log("A soma dos n\u00FAmeros de 1 a 100 \u00E9: ".concat(soma));
//Questão 09
// Faça um programa que calcule o produto dos números de 1 a 5 utilizando o while.
var multi = 1;
var m = 1;
while (m <= 5) {
    multi *= m;
    m++;
}
console.log("O produto dos n\u00FAmeros de 1 a 5 \u00E9: ".concat(multi));
//Questão 10
// Crie um programa que exiba a tabuada do 9 utilizando o while.
var resultado = 0;
var n = 1;
console.log("TABUADA DO 9");
while (n <= 10) {
    resultado = 9 * n;
    n++;
    console.log("9 x ".concat(n - 1, " = ").concat(resultado));
}
//DESAFIO
//Crie um programa que receba n notas de alunos até o número -1 seja teclado.
//Mostre a maior nota
//Mostre a menor nota
//Mostre quantas notas foram inseridas
//Calcule a média das notas
//Mostre quantos foram aprovados e quantos não foram aprovados (aprovado >= 7)
var num = 0;
var nota = 0;
while (nota !== -1) {
    nota = parseFloat(prompt("Digite a ".concat(num + 1, "\u00BA nota: ")));
    num++;
    if (nota >= 0 && nota <= 10) {
        (0, functions_1.calcularMenorNota)(nota);
        (0, functions_1.calcularMaiorNota)(nota);
        (0, functions_1.calcularSituacaoAluno)(nota);
    }
}
(0, functions_1.calcularMediaNotas)(nota);
// Questão 11
// Crie um programa que leia uma sequência de números inteiros do usuário e exiba o maior e o menor valor digitado. O programa deve parar de ler quando o usuário digitar o número 0 utilizando o while.
var numInteiro;
var numeros = [];
while (numInteiro !== 0) {
    numInteiro = parseInt(prompt("Informe uma sequência de números inteiros (digite 0 para sair):"));
    numeros.push(numInteiro);
    if (numeros.length > 1) {
        var maiorValor = Math.max.apply(Math, numeros);
        var menorValor_1 = Math.min.apply(Math, numeros);
        console.log("O maior n\u00FAmero \u00E9 ".concat(maiorValor, " e o menor n\u00FAmero \u00E9 ").concat(menorValor_1));
    }
}
//Questão 12
// Crie um programa que leia uma sequência de números inteiros do usuário e exiba a média dos números digitados. O programa deve parar de ler quando o usuário digitar o número -1 utilizando o while.
var numerosInt;
var somar = 0;
var contador = 0;
while (numerosInt !== -1) {
    numerosInt = parseInt(prompt("Informe uma sequência de números inteiros (digite -1 para sair):"));
    somar += numerosInt;
    contador++;
    var media_1 = somar / contador;
    console.log("A m\u00E9dia dos n\u00FAmeros digitados \u00E9 ".concat(media_1.toFixed(2)));
}
//Questão 13
// Faça um programa que leia um número inteiro e exiba a soma dos seus dígitos elevados ao cubo utilizando o while.
var somaNum = 0;
var pergunta = prompt("Deseja fazer a operação? [S/N]: ");
do {
    var numero = parseInt(prompt("Informe um número inteiro: "));
    somaNum += numero;
    pergunta = prompt("Deseja fazer a operação? [S/N]: ");
} while (pergunta === "S");
var valorCubo = Math.pow(somaNum, 3);
console.log("A soma dos d\u00EDgitos elevados ao cubo: ".concat(valorCubo.toFixed(2)));
//Questão 14
// Faça um programa que exiba os números ímpares de 1 a 100 utilizando o while.
var impares = 1;
while (impares <= 100) {
    console.log(impares);
    impares += 2;
}
//Questão 15
// Desenvolva um programa que exiba todos os múltiplos de 3 no intervalo de 1 a 50 utilizando o while.
var multiplo = 3;
console.log("Todos os múltiplos de 3 no intervalo de 1 a 50:");
while (multiplo <= 50) {
    if (multiplo % 3 === 0) {
        console.log(multiplo);
    }
    multiplo++;
}
//Questão 16
// Crie um programa que leia 5 notas de alunos e exiba quantos deles foram aprovados (nota maior ou igual a 7) utilizando o while.
var cont = 0;
var aprov = 0;
var reprov = 0;
var nume = 1;
while (cont < 5) {
    var nota_1 = parseFloat(prompt("Informe a ".concat(nume, "\u00BA nota: ")));
    if (nota_1 >= 7) {
        aprov++;
    }
    else {
        reprov++;
    }
    cont++;
    nume++;
}
console.log("O n\u00FAmero de alunos aprovados s\u00E3o: ".concat(aprov, "\n O n\u00FAmero de alunos reprovados s\u00E3o: ").concat(reprov, " "));
//Questão 17
// Elabore um programa que leia uma sequência de números inteiros do usuário e determine quantos números pares foram digitados antes do primeiro número ímpar. O programa deve parar de ler quando o usuário digitar o número 0 utilizando o while.
var nInteiros = 1;
var c = 0; //contador
while (nInteiros !== 0) {
    nInteiros = parseInt(prompt("Digite um número inteiro: "));
    if (nInteiros % 2 === 0 && nInteiros !== 0) {
        c++;
    }
}
console.log("Foram digitados ".concat(c, " n\u00FAmeros pares antes de um n\u00FAmero \u00EDmpar."));
//Questão 18
// Crie um programa que leia uma sequência de números inteiros do usuário e exiba quantos números pares e quantos números ímpares foram digitados. O programa deve parar de ler quando o usuário digitar o número 0 utilizando o while.
var numerosInteiros;
var pares = 0;
var impar = 0;
while (numerosInteiros !== 0) {
    numerosInteiros = parseInt(prompt("Informe um número inteiro (digite 0 para sair):"));
    if (numerosInteiros % 2 === 0 && numerosInteiros !== 0) {
        pares++;
    }
    else if (numerosInteiros !== 0) {
        impar++;
    }
}
console.log("Quantdidade de n\u00BA pares: ".concat(pares, "\nQuantidade de n\u00BA \u00EDmpares: ").concat(impar));
//Questão 19
// Faça um programa que leia uma sequência de números inteiros do usuário e exiba quantos números são divisíveis por 2, quantos são divisíveis por 3 e quantos são divisíveis por 5. O programa deve parar de ler quando o usuário digitar o número 0 utilizando o while.
var numInt;
var divisiveis2 = 0;
var divisiveis3 = 0;
var divisiveis5 = 0;
while (numInt !== 0) {
    numInt = parseInt(prompt("Informe um número inteiro (digite 0 para sair):"));
    if (numInt % 2 === 0 && numInt !== 0) {
        divisiveis2++;
    }
    if (numInt % 3 === 0 && numInt !== 0) {
        divisiveis3++;
    }
    if (numInt % 5 === 0 && numInt !== 0) {
        divisiveis5++;
    }
}
console.log("N\u00FAmeros divis\u00EDveis por 2: ".concat(divisiveis2, "\nN\u00FAmeros divis\u00EDveis por 3: ").concat(divisiveis3, "\nN\u00FAmeros divis\u00EDveis por 5: ").concat(divisiveis5));
// // Questão 20
// // Desenvolva um programa que leia uma sequência de números inteiros do usuário e exiba a média dos números divisíveis por 3. O programa deve parar de ler quando o usuário digitar o número 0 utilizando o while.
var numberInt;
var sum = 0;
var qtd = 0;
while (numberInt !== 0) {
    numberInt = parseInt(prompt("Digite um número inteiro (digite 0 para sair):"));
    if (numberInt % 3 === 0 && numberInt !== 0) {
        sum += numberInt;
        qtd++;
    }
}
var media = sum / qtd;
console.log("A m\u00E9dia dos n\u00FAmeros divis\u00EDveis dividos por 3 \u00E9: ".concat(media));
//Questão 21
// Faça um programa que leia uma sequência de números inteiros do usuário e exiba quantos números possuem mais de três dígitos. O programa deve parar de ler quando o usuário digitar o número 0 utilizando o while.
var numerInt;
var count = 0;
while (numerInt !== 0) {
    numerInt = parseInt(prompt("Informe um número inteiro (digite 0 para sair):"));
    if (String(numerInt).length >= 3) {
        count++;
    }
}
console.log("Quantidade de n\u00FAmeros com mais de tr\u00EAs d\u00EDgitos: ".concat(count));
//Questão 22
// Desenvolva um programa que leia uma sequência de números inteiros do usuário e exiba a média dos números que estão entre 50 e 100. O programa deve parar de ler quando o usuário digitar o número 0 utilizando o while.
var numerosInteiro;
var somaNumeros = 0;
var qtdNum = 0;
while (numerosInteiro !== 0) {
    numerosInteiro = parseInt(prompt("Informe um número inteiro entre 50 e 100 (digite 0 para sair):"));
    if (numerosInteiro >= 50 && numerosInteiro <= 100 && numerosInteiro !== 0) {
        somaNumeros += numerosInteiro;
        console.log("Número adicionado com sucesso.");
        qtdNum++;
    }
}
var mediaNum = somaNumeros / qtdNum;
console.log("A m\u00E9dia dos n\u00FAmeros: ".concat(mediaNum));
// // Questão 23
// Elabore um programa que leia uma sequência de números inteiros do usuário e exiba o menor valor digitado que seja positivo e ímpar. O programa deve parar de ler quando o usuário digitar o número 0 utilizando o while.
var nInt;
var menorValor = Infinity;
while (nInt !== 0) {
    nInt = parseInt(prompt("Informe um número inteiro (digite 0 para sair):"));
    if (nInt > 0 && nInt % 2 !== 0 && nInt !== 0) {
        if (nInt < menorValor && nInt !== 0) {
            menorValor = nInt;
        }
    }
}
console.log("O menor n\u00FAmero positivo \u00EDmpar digitado foi: ".concat(menorValor));
//Questão 24
// Faça um programa que leia uma sequência de números inteiros do usuário e exiba quantos números são pares e quantos números são ímpares entre o primeiro e o último número digitado. O programa deve parar de ler quando o usuário digitar o número 0 utilizando o while.
var nuIn;
var par = 0;
var imp = 0;
while (nuIn !== 0) {
    nuIn = parseInt(prompt("Digite um número inteiro: "));
    if (nuIn % 2 == 0 && nuIn !== 0) {
        par++;
    }
    else if (nuIn !== 0) {
        imp++;
    }
}
console.log("N\u00FAmeros pares digitados: ".concat(par, "\nN\u00FAmeros \u00EDmpares digitados: ").concat(imp));
