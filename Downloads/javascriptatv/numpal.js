function contarPalavras(frase) {
  return frase.split(' ').length;
}

const frase = "Cauã é o player 4";
const quantidadePalavras = contarPalavras(frase);
console.log(`A frase tem ${quantidadePalavras} palavras.`);