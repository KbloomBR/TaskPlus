class Aluno {
  constructor(nome, matricula, curso) {
    this.nome = nome;
    this.matricula = matricula;
    this.curso = curso;
  }

  getNome() {
    return this.nome;
  }

  getMatricula() {
    return this.matricula;
  }

  getCurso() {
    return this.curso;
  }

  setNome(nome) {
    this.nome = nome;
  }

  setMatricula(matricula) {
    this.matricula = matricula;
  }

  setCurso(curso) {
    this.curso = curso;
  }
}

const aluno = new Aluno('Douglas', 757859, 'Jogador de LOL');

console.log(`Nome: ${aluno.getNome()}, Matricula: ${aluno.getMatricula()}, Curso: ${aluno.getCurso()}`);