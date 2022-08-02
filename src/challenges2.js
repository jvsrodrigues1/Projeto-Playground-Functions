// Desafio 11
function generatePhoneNumber(phones) {
  // seu código aqui
  if (phones.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  let contador = 0;
  let contNumero = 0;
  for (let index in phones) {
    let numero = phones[index];
    for (let index2 in phones) {
      if (numero === phones[index2]) {
        contNumero += 1;
      }
    }
    if (contNumero > contador) {
      contador = contNumero;
    }
    contNumero = 0;
  }
  for (let index3 = 0; index3 < phones.length; index3 += 1) {
    if (phones[index3] < 0 || phones[index3] > 9 || contador >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  return (
    '(' +
    phones[0] +
    phones[1] +
    ') ' +
    phones[2] +
    phones[3] +
    phones[4] +
    phones[5] +
    phones[6] +
    '-' +
    phones[7] +
    phones[8] +
    phones[9] +
    phones[10]
  );
}
// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  const checkLados = (lineA, lineB, lineC) =>
    lineA < lineB + lineC && lineB < lineA + lineC && lineC < lineA + lineB;

  const checkPositivos = (lineA, lineB, lineC) =>
    lineA > Math.abs(lineB - lineC) &&
    lineB > Math.abs(lineA - lineC) &&
    lineC > Math.abs(lineA - lineB);

  if (!checkLados(lineA, lineB, lineC)) return false;
  if (!checkPositivos(lineA, lineB, lineC)) return false;
  return true;
}

// Desafio 13
function hydrate(mensagem) {
  // seu código aqui
  const regex = /\d+/g;
  const matches = mensagem.match(regex);
  const soma = matches.reduce((acc, curr) => Number(acc) + Number(curr));
  if (soma === '1') return '1 copo de água';
  return `${soma} copos de água`;
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
