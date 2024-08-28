function objetoParaArray(obj) {
  return Object.entries(obj);
}

const meuObjeto = {
  "nome: Albuquerque":
  "idade: 1412"
};

const resultado = objetoParaArray(meuObjeto);

console.log(resultado);
resultado.forEach((par) => console.log(par));

console.table(resultado);


//tive que usar chat gpt, tentei por uns 20 minutos e nao pegava!
