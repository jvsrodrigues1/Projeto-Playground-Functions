// Desafio 1
function compareTrue(a, b) {
  if (a && b) {
    return true;
  }
  if (a === false || b === false) {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(goTrybe) {
  return goTrybe.split(' ');
}

// Desafio 4
function concatName(words) {
  let nomesConcat = [words[words.length - 1], words[0]];
  let concatVirgula = nomesConcat.join(', ');
  return concatVirgula;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontos = wins * 3 + ties;
  return pontos;
}

// Desafio 6
function highestCount(numbers) {
  // Codigo referenciado do exercicio 5 - Bloco 4.4 //

  let numRepetido = numbers[0];
  let count = 0;
  for (let index = 0; index < numbers.length; index += 1) {
    if (numRepetido < numbers[index]) {
      numRepetido = numbers[index];
      count = 0;
    }
    if (numRepetido === numbers[index]) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // foi comentado na mentoria que um dos valores poderia estar dando um valor negativo. A solucao que encontrei foi atraves do comando math.abs referencia = https://stackoverflow.com/questions/4652104/convert-a-negative-number-to-a-positive-one-in-javascript //

  const distanciaCat1 = Math.abs(cat1 - mouse);
  const distanciaCat2 = Math.abs(cat2 - mouse);

  if (distanciaCat1 > distanciaCat2) {
    return 'cat2';
  }
  if (distanciaCat2 > distanciaCat1) {
    return 'cat1';
  }
  if (distanciaCat2 === distanciaCat1) {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(param) {
  return param.map((numero) => {
    if (numero % 3 === 0 && numero % 5 === 0) {
      return 'fizzBuzz';
    }
    if (numero % 5 === 0) {
      return 'buzz';
    }
    if (numero % 3 === 0) {
      return 'fizz';
    }
    return 'bug!';
  });
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
