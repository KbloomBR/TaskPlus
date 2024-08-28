function sorteio(numero) {
  const numeroSorteado = Math.floor(Math.random() * 100) + 1;
  if (numero === numeroSorteado) {
    return `Parabéns! O número sorteado foi o ${numeroSorteado}.`;
  } else {
    return `Que pena! O número sorteado foi o ${numeroSorteado}.`;
  }
}

const numero = 12;
const resultado = sorteio(numero);
console.log(resultado);