//Questão 01
// Crie um objeto chamado "pessoa" com as propriedades "nome", "idade" e "endereço" e atribua valores a elas.
const pessoa: any = {
    nome: "Catarina",
    idade: 31,
    endereco: "Avenida Norte, 3533"
}

//Questão 02
//Acesse o valor da propriedade "nome" do objeto "pessoa".
console.log(pessoa.nome);

//Questão 03
//Adicione uma nova propriedade chamada "profissao" ao objeto pessoa e atribua um valor a ela.
pessoa.profissao = "Desenvolvedora Front-end";

//Questão 04
//Atualize o valor da propriedade "idade" do objeto pessoa para um novo valor.
pessoa.idade = 32;

//Questão 05
//Crie outro objeto chamado "animal" com as propriedades "nome", "especie" e "cor" e atribua valores a elas.
const animal: {nome: string, especie: string, cor: string} = {
    nome: "Gato",
    especie: "Felino",
    cor: "Preto"
}

//Questão 06
//Crie um objeto chamado "livro" com as propriedades "titulo", "autor" e "ano" e atribua valores a elas.
type Livro = {
    titulo?: string;
    autor: string;
    ano: number
}

const livro01: Livro = {
     titulo: "Dear John",
     autor: "Nicholas Sparks",
     ano: 2007
}

//Questão 07
//Acesse o valor da propriedade "autor" do objeto livro.
console.log("Autor(a) do livro: " + livro01.autor);

//Questão 08
//Atualize o valor da propriedade "ano" do objeto livro para um novo valor.
livro01.ano = 2008;

//Questão 09
//Exclua a propriedade "titulo" do objeto utilizando o operador "delete".
delete livro01.titulo ;

//Questão 10
//Crie um objeto chamado "carro" com as propriedades "marca", "modelo" e "ano" e atribua valores a elas. Em seguida, exiba todas as propriedades do objeto no console.
const carro = {
    marca: "Toyota",
    modelo: "Yaris",
    ano: 2022 
}
console.log(carro);

//Questão 11
//Atualize o valor da propriedade "modelo" para "undefined" do objeto "carro" e exiba todas as propriedades do objeto no console.
//carro.modelo = undefined;
console.log(carro);