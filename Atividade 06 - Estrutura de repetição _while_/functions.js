"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calcularMenorNota = calcularMenorNota;
exports.calcularMaiorNota = calcularMaiorNota;
exports.calcularSituacaoAluno = calcularSituacaoAluno;
exports.calcularMediaNotas = calcularMediaNotas;
function calcularMenorNota(nota) {
    var menorNota = 11;
    if (nota < menorNota) {
        menorNota = nota;
    }
    return console.log("A menor nota inserida foi ".concat(menorNota));
}
function calcularMaiorNota(nota) {
    var maiorNota = -1;
    if (nota > maiorNota) {
        maiorNota = nota;
    }
    return console.log("A maior nota inserida foi ".concat(maiorNota));
}
function calcularSituacaoAluno(nota) {
    var aprovados = 0;
    var reprovados = 0;
    if (nota >= 7) {
        aprovados++;
    }
    else {
        reprovados++;
    }
    return console.log("Foram aprovados ".concat(aprovados, " alunos \n Foram reprovados ").concat(reprovados, " alunos"));
}
function calcularMediaNotas(nota) {
    var qtdNotas = 0;
    var soma = 0;
    var mediaNotas = 0;
    soma += nota;
    qtdNotas++;
    mediaNotas = (soma + 1) / (qtdNotas - 1);
    return console.log("A quantidade de notas que foram inseridas foi ".concat(qtdNotas - 1, " \n A m\u00E9dia das notas \u00E9 ").concat(mediaNotas.toFixed(2)));
}
