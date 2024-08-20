export function calcularMenorNota(nota: number) {
  let menorNota = 11;
  if (nota < menorNota) {
    menorNota = nota;
  }
  return console.log(`A menor nota inserida foi ${menorNota}`);
}
export function calcularMaiorNota(nota: number) {
  let maiorNota = -1;
  if (nota > maiorNota) {
    maiorNota = nota;
  }
  return console.log(`A maior nota inserida foi ${maiorNota}`);
}
export function calcularSituacaoAluno(nota: number) {
  let aprovados = 0;
  let reprovados = 0;
  if (nota >= 7) {
    aprovados++;
  } else {
    reprovados++;
  }
  return console.log(
    `Foram aprovados ${aprovados} alunos \n Foram reprovados ${reprovados} alunos`
  );
}
export function calcularMediaNotas(nota: number) {
  let qtdNotas = 0;
  let soma = 0;
  let mediaNotas = 0;
  soma += nota;
  qtdNotas++;
  mediaNotas = (soma + 1) / (qtdNotas - 1);
  return console.log(
    `A quantidade de notas que foram inseridas foi ${
      qtdNotas - 1
    } \n A média das notas é ${mediaNotas.toFixed(2)}`
  );
}
