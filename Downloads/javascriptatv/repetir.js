function repetirBlabla(elemento, repeticoes) {
  if (repeticoes <= 0) {
    return [];
  }

  let resultado = [];

  for (let i = 0; i < repeticoes; i++) {
    resultado.push(elemento);
  }

  return resultado;
}

console.log(repetirBlabla(12, 7));
