function melhorDesempenho(estudantes) {
  let melhorAluno = null;
  let melhorMedia = -Infinity;

  for (const aluno in estudantes) {
    const notas = estudantes[aluno];
    const media = notas.reduce((acc, nota) => acc + nota, 0) / notas.length;

    if (media > melhorMedia) {
      melhorAluno = aluno;
      melhorMedia = media;
    }
  }

  return { nome: melhorAluno, media: melhorMedia };
}

const estudantes = {
  "Albuquerque": [8, 9, 7, 6],
  "Mc Lêncio": [9, 8, 7, 9],
  "Carlinhos": [7, 6, 5, 8]
};

const resultado = melhorDesempenho(estudantes);
console.log(resultado);