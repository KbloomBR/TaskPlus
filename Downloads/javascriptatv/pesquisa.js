function buscarSemelhantes(palavra, arrayDeStrings) {
  return arrayDeStrings.filter(string => string.includes(palavra));
}

const palavra = "e";
const arrayStrings = ["albuquerque é bonito", "ian acorda ian", "henrique henrique henrique"];
const resultados = buscarSemelhantes(palavra, arrayStrings);
console.log(resultados); 