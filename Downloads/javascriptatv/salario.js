function calculoSalario(salario) {
  const diasTrabalho = 30;
  return salario * diasTrabalho;
}

const horasTrabalho = 147;
const salarioCalc = calculoSalario(horasTrabalho);
console.log(`O salário é igual a R$${salarioCalc}.`);
