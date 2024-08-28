function removerVogais(string) {
  const vogais = 'aeiouAEIOU';
  let resultado = '';
  for (let i = 0; i < string.length; i++) {
    if (!vogais.includes(string[i])) {
      resultado += string[i];
    }
  }
  return resultado;
}

const string = "Bora Bill, bora fi do Bill, bora Bill, bora mulher do Bill";
const resultado = removerVogais(string);
console.log(resultado); 