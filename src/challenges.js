// Desafio 1
function compareTrue(a, b) {
  if (a && b) return true;
  return false;
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
  let firstWord = words[0];
  let lastWord = words[words.length - 1];
  return lastWord + ', ' + firstWord;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontos = wins * 3 + ties;
  return pontos;
}

// Desafio 6
function highestCount(numbers) {
  //Codigo referenciado do exercicio 5 - Bloco 4.4//
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
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
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
