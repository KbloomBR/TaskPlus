function somaArray(arr) {
  return arr.reduce((a, b) => a + b, 0);
}

const numeros = [3, 6, 12, 2, 62];
const soma = somaArray(numeros);
console.log(soma); 