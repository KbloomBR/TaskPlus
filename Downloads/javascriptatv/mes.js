function nomeMeses(numeroMeses) {
  const meses = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];

  if (numeroMeses < 1 || numeroMeses > 12) {
    throw new Error("Mês inválido. Deve ser entre 1 e 12.");
  }

  return meses[numeroMeses - 1];
}


console.log(`Esse mês é ${nomeMeses(5)}.`); 