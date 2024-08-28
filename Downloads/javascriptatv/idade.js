function calculoIdadeDia(idadeAnos) {
  const diasAno = 365;
  return idadeAnos * diasAno;
}

const idade = 22;
const idadeDias = calculoIdadeDia(idade);
console.log(`A idade em dias é: ${idadeDias}.`);