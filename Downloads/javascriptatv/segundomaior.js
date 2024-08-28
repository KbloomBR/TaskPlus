function segundoMaiorNumero(arr) {
  if (arr.length < 2) {
    throw new Error("O array deve ter pelo menos dois elementos");
  }

  let max = -Infinity;
  let secondMax = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    const numero = arr[i];
    if (numero > max) {
      secondMax = max;
      max = numero;
    } else if (numero > secondMax && numero !== max) {
      secondMax = numero;
    }
  }

  return secondMax;
}

const arr = [1124, 1352, 1387, 1234, 8374, 9192, 3875, 9692];
const resultado = segundoMaiorNumero(arr);
console.log(resultado);