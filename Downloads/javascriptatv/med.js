function calcMedia(numeros) {
  if (numeros.length === 0) {
    return 0;
  }
  return numeros.reduce((soma, numero) => soma + numero, 0) / numeros.length;
}

const numeros = [1, 3, 5, 6, 7];
const media = calcMedia(numeros);
console.log(`Média: ${media.toFixed(2)}`);