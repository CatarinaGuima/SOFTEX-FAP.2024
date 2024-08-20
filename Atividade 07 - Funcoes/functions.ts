//Questão 02
export function criarFrases() {
  console.log("Estudar é muito bom");
  console.log("Paciência e persistência");
  console.log("Revisão é a mãe do aprendizado");
}

//Questão 03
export function soma(num1: number, num2: number) {
  console.log(num1 + num2);
}

//Questão 04
export function somar(numb1: number, numb2: number): number {
  return numb1 + numb2;
}

//Questão 05
export function somarAB(a: number, b: number) {
  const soma = a + b;
  return soma;
}

//Questão 06
export function isPar(nInteiro: number) {
  if (nInteiro % 2 === 0) {
    return true;
  }
  return false;
}

//Questão 07
export function media(soma: number) {
  let mediaNotas = soma / 3;
  return mediaNotas;
}

//Questão 08
export function imc(peso: number, altura: number) {
  const imc = peso / altura ** 2;
  return imc;
}

//Questão 09
export function calcularDesconto(preco: number, percentual: number): number {
  const valorDesconto = preco * (percentual / 100);
  return valorDesconto;
}

//Questão 10
export function calcularImpostoRenda(salarioBruto: number) {
  if (salarioBruto <= 1903.98) {
    return 0.0;
  } else if (salarioBruto <= 2826.65) {
    return (salarioBruto * 0.075).toFixed(2);
  } else if (salarioBruto <= 3751.05) {
    return (salarioBruto * 0.15).toFixed(2);
  } else if (salarioBruto <= 4664.68) {
    return (salarioBruto * 0.225).toFixed(2);
  } else if (salarioBruto > 4664.68) {
    return (salarioBruto * 0.275).toFixed(2);
  }
}

//Questão 11
export function calcularMediaArredondada(listaNumeros: number[]): number {
  let somarNum = 0;
  for (let i = 0; i < listaNumeros.length; i++) {
    somarNum += listaNumeros[i];
  }
  const mediaArredondada = Math.round(somarNum / listaNumeros.length);
  return mediaArredondada;
}

//Questão 12
export function contarDigitosParesImpares(num: number) {
  let digitosPares = 0;
  let digitosImpares = 0;
  const digitos = num.toString().split("").map(Number); // Obtém os dígitos como números
  digitos.forEach((digito) => {
    if (digito % 2 === 0) {
      digitosPares++;
    } else {
      digitosImpares++;
    }
  });
  return { digitosPares, digitosImpares };
}

//Questão 13
interface Aluno {
  nome: string;
  nota: number;
}
export function calcularMediaAlunos(listaAlunos: Aluno[]): number {
  let somaNotas = 0;
  for (let i = 0; i < listaAlunos.length; i++) {
    somaNotas += listaAlunos[i].nota;
  }
  const mediaNotas = somaNotas / listaAlunos.length;
  return mediaNotas;
}

//Questão 14
export function calcularIdade(anoNasc: number) {
  const idadeAtual = 2024 - anoNasc;
  return idadeAtual;
}

//Questão 15
export function gerarTabuada(numero: number) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
  }
}

//Questão 16
export function advinheNumero() {
  const numeroSorteado = Math.floor(Math.random() * 100) + 1; //// Math.random() * 100 gera um número entre 0 e 99.999. Math.floor() arredonda esse número para um inteiro entre 0 e 99. + 1 ajusta o valor para estar no intervalo de 1 a 100.
  let numeroTentativas = 0;
  let numeroUsuario: number;
  do {
    numeroUsuario = parseInt(
      prompt("Adivinhe o número secreto (entre 1 e 100):")!
    );
    numeroTentativas++;

    if (numeroUsuario < numeroSorteado) {
      alert("O número é maior!");
    } else if (numeroUsuario > numeroSorteado) {
      alert("O número é menor!");
    } else {
      alert(
        `Parabéns! Você acertou o número ${numeroSorteado} em ${numeroTentativas} tentativas.`
      );
    }
  } while (numeroUsuario !== numeroSorteado);
}

//Questão 17
interface Pessoa {
  nome: string;
  idade: number;
  endereco: {
    rua: string;
    numero: number;
  };
}
export function verificarPropriedade(
  objeto: Pessoa,
  propriedade: string
): boolean {
  // Verifica se a propriedade está no objeto principal ou em `endereco`
  if (propriedade in objeto) {
    return true;
  } else if (propriedade in objeto.endereco) {
    return true;
  }
  return false;
}

//Questão 18
export function calcularPrecoProduto(
  custo: number,
  margemLucro: number,
  frete: number
): number {
  const precoVenda = custo + (custo * margemLucro) / 100 + frete;
  return precoVenda;
}

//Questão 19
export function maiorPalavra(frase: string) {
  const palavras = frase.split(" ");
  let maiorPalavra = "";
  for (const palavra of palavras) {
    if (palavra.length > maiorPalavra.length) {
      maiorPalavra = palavra;
    }
  }
  return maiorPalavra;
}

//Questão 20
let listaStrings: string[][] = [];
export function imprimirListaStrings(fraseString: string) {
  fraseString = prompt("Digite uma frase: ") ?? "";
  if (fraseString !== "") {
    const fraseSeparada = fraseString.split(" ");
    listaStrings.push(fraseSeparada);
  }
  // Imprimir todos os elementos da lista de strings
  for (let i = 0; i < listaStrings.length; i++) {
    console.log("**********");
    for (let j = 0; j < listaStrings[i].length; j++) {
      console.log(`* ${listaStrings[i][j]} *`);
    }
    console.log("**********");
  }
}

//Questão 21
export function tamanhoMaior5(arrayStrings: string[]): string[] {
  let continuar = "S";
  while (continuar === "S") {
    const palavra = prompt("Digite uma palavra: ");
    if (palavra !== null && palavra.length > 5) {
      arrayStrings.push(palavra);
    }
    continuar =
      prompt("Deseja adicionar outra palavra? [S/N]: ")?.toUpperCase() ?? "N";
  }
  return arrayStrings;
}

//Questão 22
interface Livro {
  titulo: string;
  autor: string;
  ano: number;
}
export function informacoesLivros() {
  const livros: Livro[] = [];
  const autorConsulta = prompt(
    "Informe o nome do autor(a) que deseja consultar: "
  );
  const livrosDoAutor = livros.filter((livro) => livro.autor === autorConsulta);
  if (livrosDoAutor.length > 0) {
    console.log(`Livros do(a) autor(a) ${autorConsulta} encontrados:`);
    livrosDoAutor.forEach((livro) => {
      console.log(`Título: ${livro.titulo}, Ano: ${livro.ano}`);
    });
  } else {
    console.log("Nenhum livro encontrado para o autor informado.");
  }
}

//Questão 23
interface Pessoal {
  nome: string;
  idade: number;
}
export function nomePessoaMaisVelha(pessoas: Pessoal[]): string {
  let maisVelhaPessoa: Pessoal = pessoas[0];
  for (const pessoa of pessoas) {
    if (pessoa.idade > maisVelhaPessoa.idade) {
      maisVelhaPessoa = pessoa;
    }
  }
  return maisVelhaPessoa.nome;
}

//Questão 24
interface Carro {
  marca: string;
  modelo: string;
  cor: string;
  ano: number;
}
export function InformacoesCarros(carros: Carro[]) {
  const carrosFabricadosDepoisDoAno = carros.filter(
    (carro) => carro.ano > 2020
  );
  if (carrosFabricadosDepoisDoAno.length > 0) {
    console.log(`Carros fabricados após o ano de 2020: `);
    carrosFabricadosDepoisDoAno.forEach((carro) => {
      console.log(
        `Marca: ${carro.marca}, Modelo: ${carro.modelo}, Carro: ${carro.cor} ,Ano: ${carro.ano}`
      );
    });
  } else {
    console.log("Nenhum carro foi fabricado após o ano informado.");
  }
}

//Questão 25
export function inverterString(): string {
  const str = prompt("Escolha uma palavra para inverter: ") ?? "";
  const stringInvertida = str.split("").reverse().join("");
  return `${str} invertida = ${stringInvertida}`;
}
