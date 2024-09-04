class Professor {
  constructor(nome, departamento, titulacao) {
    this.nome = nome;
    this.departamento = departamento;
    this.titulacao = titulacao;
  }

  getNome() {
    return this.nome;
  }

  getDepartamento() {
    return this.departamento;
  }

  getTitulacao() {
    return this.titulacao;
  }

  setNome(nome) {
    this.nome = nome;
  }

  setDepartamento(departamento) {
    this.departamento = departamento;
  }

  setTitulacao(titulacao) {
    this.titulacao = titulacao;
  }

  getInfo() {
    return {
      Nome: this.nome,
      Departamento: this.departamento,
      Titulação: this.titulacao
    };
  }
}

const professor = new Professor('João Silva', 'Ciência da Computação', 'Doutor');

console.log(professor.getInfo());
