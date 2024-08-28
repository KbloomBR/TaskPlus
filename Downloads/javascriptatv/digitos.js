function filtrarNumerosPorDigitos(arr, digitos) {
  return arr.filter(numero => {
    const numeroString = numero.toString();
    return numeroString.length === digitos;
  });
}

const arr = [122213, 45, 6, 16489, 8731, 34, 56789];
const digitos = 1;
const resultado = filtrarNumerosPorDigitos(arr, digitos);
console.log(resultado); 