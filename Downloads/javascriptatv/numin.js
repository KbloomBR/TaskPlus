function encontrarMenorNumero(numeros) {
  return Math.min(...numeros);
}

const numeros = [7, 4, 12, 0, -2, 105];
const menorNumero = encontrarMenorNumero(numeros);
console.log(`O menor número é ${menorNumero}`);