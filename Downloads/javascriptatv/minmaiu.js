function contarCaractere(caractere, string) {
  let contador = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === caractere) {
      contador++;
    }
  }
  return contador;
}

const caractere = 'j';
const string = "Eu vou respeitar ela";
const quantidade = contarCaractere(caractere, string);
console.log(`A letra '${caractere}' se repete ${quantidade} vezes na string.`);