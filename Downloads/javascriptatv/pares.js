function pegarPares(arr) {
  return arr.filter((num) => num % 2 === 0);
}

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 14, 16, 18, 20];
const resultado = pegarPares(numeros);
console.log(resultado);
