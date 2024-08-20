//Questão 01
//  Crie uma variável chamada "nome" e atribua a ela uma string com seu nome. Em seguida, exiba o conteúdo da variável "nome" no terminal.
const nome: string = "Catarina";
console.log(nome);

//Questão 02
// Crie uma variável chamada "frase" e atribua a ela uma frase de sua escolha. Em seguida, exiba o comprimento da string armazenada na variável "frase".
let frase: string = "Olá Mundo!";
console.log(frase.length);

//Questão 03
//Crie uma variável chamada "palavra" e atribua a ela uma palavra qualquer. Em seguida, exiba a primeira letra da palavra armazenada na variável "palavra".
let palavra: string = "Amor";
console.log(palavra.charAt(0));

//Questão 04
// Crie uma variável chamada "frase" e atribua a ela uma frase de sua escolha. Em seguida, exiba a frase em letras maiusculas.
let frase2: string = "Lógica de Programagação";
console.log(frase2.toUpperCase());

//Questão 05
// Crie uma variável chamada "endereço" e atribua a ela um valor de sua escolha. Em seguida,sobrescreva o valor da variável para um outro endereço e verifique no terminal o valor atual da variável.
let endereco: string = "Rua da Guia, 142";
console.log(endereco);
endereco = "Avenida Norte 3533";
console.log(endereco);