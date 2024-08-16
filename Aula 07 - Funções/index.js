"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var functions_1 = require("./functions");
// //Questão 01
// // Implemente o código do slide de número 6.
// console.log("Estudar é muito bom");
// console.log("Paciência e persistência");
// console.log("Revisão é a mãe do apresizado");
// console.log("Estudar é muito bom");
// console.log("Paciência e persistência");
// console.log("Revisão é a mãe do apresizado");
// console.log("Estudar é muito bom");
// console.log("Paciência e persistência");
// console.log("Revisão é a mãe do apresizado");
// //Questão 02
// // Implemente o código do slide de número 15.
// function criarFrases() {
//     console.log("Estudar é muito bom");
//     console.log("Paciência e persistência");
//     console.log("Revisão é a mãe do apresizado");
// }
// criarFrases();
// criarFrases();
// criarFrases();
// //Questão 03
// // Implemente o código do slide de número 24.
// function soma(num1: number,num2: number) {
// console.log(num1 + num2);
//  }
// soma(10, 15);
// soma(10, 20);
// soma(30, 50);
// soma(50, 50);
// //Questão 04
// // Implemente o código do slide de número 33.
// function somar(numb1: number, numb2: number):number {
//     return numb1 + numb2;
// }
// const teste1 = somar(10,5);
// console.log(teste1); 
// const teste2 = somar(10,20) + somar(30,50);
// console.log(teste2);
// console.log(somar(50,50));
// //Questão 05
// Escreva uma função chamada "soma" que receba dois parâmetros (a e b) e retorne a soma deles.
var a = Number(prompt("Escolha um valor para [A]: "));
var b = Number(prompt("Escolha um valor para [B]: "));
var resultado = (0, functions_1.somar)(a, b);
console.log("".concat(a, " + ").concat(b, " = ").concat(resultado));
