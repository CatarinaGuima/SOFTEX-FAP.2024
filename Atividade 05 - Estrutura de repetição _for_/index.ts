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
for (let index = 0; index < 10; index++) {
   console.log("Testando uma frase");
}

// Questão 06
// Implemente o código do slide de número 26.
for (let i = 0; i < 10; i++) {
   console.log(i);
}

// Questão 07
// Implemente o código do slide de número 36.
for (let i = 0; i < 10; i++) {
   if (i == 5) {
      break;
   }
   console.log(i);
}

// Questão 08
// Implemente o código do slide de número 38.
for (let i = 0; i < 10; i++) {
  if (i == 5) {
   continue;
  }
   console.log(i);
}

// Questão 09
// Implemente o código do slide de número 44.
let nomes = ["João", "Paulo", "Pedro", "Gustavo", "Maria"]

for (let n of nomes) {
   console.log(n);
}

// Questão 10
// Faça um programa que exiba os números de 1 a 10 em ordem crescente.
for(let i = 1 ; i <= 10; i++) {
   console.log(i);
}

// Questão 11
// Crie um programa que exiba os números de 10 a 1 em ordem decrescente.
for (let i = 10; i > 0; i--) {
  console.log(i);
}

// Questão 12
// Elabore um programa que calcule a soma dos números de 1 a 100.
let soma = 0;
for (let i = 1 ; i <= 100; i++) {
 soma += i;
}
console.log(`O total da soma dos números de 1 a 100 é igual a ${soma}.`);

// Questão 13
// Desenvolva um programa que exiba todos os números pares de 1 a 50.
for (let i = 1 ; i <= 50 ; i++) {
   if (i % 2 == 0) {
      console.log(i);
   }
}

// Questão 14
// Faça um programa que calcule o produto dos números de 1 a 5.
let resultado = 1;
for (let i = 1; i <= 5; i++) {
  resultado *= i;
}
console.log(
  `O resultado da multiplicação dos números de 1 a 5 é igual a ${resultado}.`
);

// Questão 15
// Crie um programa que exiba a tabuada do 7.
console.log("TABUADA DO 7");
for (let i = 1; i <= 10; i++) {
   let multi = i * 7;
   console.log(` 7 x ${i} = ${multi}`);
}

// Questão 16
// Elabore um programa que calcule a média de 5 notas digitadas pelo usuário.
let somaNotas = 0;
for (let i = 0; i < 5; i++) {
    let nota = parseFloat(prompt("Digite a " + (i + 1) + "ª nota:")!);
    somaNotas += nota;
}
const mediaNotas = somaNotas / 5;
console.log(`A média das notas: ${mediaNotas}`);

// Questão 17
// Desenvolva um programa que exiba todos os múltiplos de 3 no intervalo de 1 a 50.
console.log("Os múltiplos de 3 no intervalo de 1 a 50 são: ");
for (let i = 1; i <= 50; i++) {
    if (i % 3 === 0) {
        console.log(i);
    }
}

// Questão 18
// Crie um programa que leia 10 números do usuário e exiba o maior e o menor valor digitado.
let numeros = [];
let numMaior = 0;
let numMenor = 0;
for (let i = 0; i < 10; i++) {
    const numero = parseFloat(prompt(`Digite o ${i + 1}º número:`)!);
    numeros.push(numero);
    if (numero > numMaior) {
        numMaior = numero;
    } else if (numero < numMenor) {
        numMenor = numero;
    }
}
console.log(`O menor valor digitado: ${numMenor}`);
console.log(`O maior valor digitado: ${numMaior}`);