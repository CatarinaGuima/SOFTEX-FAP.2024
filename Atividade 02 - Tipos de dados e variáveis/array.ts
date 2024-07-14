//Questão 01
//Crie um array vazio chamado "numeros".
const numeros: number[] = [];

//Questão 02
//Adicione os números 1, 2, 3 e 4 ao array "numeros".
numeros.push(1,2,3,4);

//Questão 03
//Acesse o valor do segundo elemento do array "numeros".
console.log(numeros[1]);

//Questão 04
//Atualize o valor do terceiro elemento do array "numeros" para 10.
numeros[2] = 10;

//Questão 05
//Remova o último elemento do array "numeros" utilizando a função ".pop".
numeros.pop();

//Questão 06
//Verifique o comprimento do array "numeros".
console.log(numeros.length);

//Questão 07
//Crie um novo array chamado "frutas" contendo as strings "maçã", "banana" e "laranja".
const frutas: string[] = ["maçã", "banana", "laranja"];

//Questão 08
//Acesse o valor do primeiro elemento do array frutas.
console.log(frutas[0]);

//Questão 09
//Adicione a string "uva" ao final do array frutas utilizando a função ".push".
frutas.push("uva");

//Questão 10
//Crie um objeto chamado "aluno" com as propriedades "nome" e "idade" e atribua valores a elas. Em seguida, crie um array chamado "alunos" e adicione o objeto "aluno" a esse array.
type Aluno = {
    nome: string;
    idade: number;
}
const aluno01: Aluno = {
    nome: "Catarina",
    idade: 31
}
const alunos: Aluno[] = [];
alunos.push(aluno01);

//Questão 11
// Acesse o valor da propriedade "nome" do primeiro elemento do array "alunos".
console.log(alunos[0].nome);

//Questão 12
//Adicione mais três objetos do tipo "aluno" ao array "alunos".
const  aluno02: Aluno = {
    nome: "Pedro",
    idade: 28
}
const aluno03: Aluno = {
    nome: "Maria",
    idade: 20
}
const aluno04: Aluno = {
    nome: "José",
    idade: 25
}
alunos.push(aluno02);
alunos.push(aluno03);
alunos.push(aluno04);
console.log(alunos);

//Questão 13
//Crie um array chamando "produtos" contendo 10 produtos de supermercado. Em seguida, exiba no terminal apenas os produtos que ficaram em posições pares.
const produtos: string[] = ["Arroz", "Feijão", "Macarrão", "Óleo", "Azeite", "Leite", "Pão", "Açúcar", "Café", "Ovos"];
for (let i = 0 ; i < produtos.length ; i++) {
    if (i % 2 == 1 ) {
        console.log(produtos[i]);
    }
}