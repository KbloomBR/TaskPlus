class Disciplina {
  constructor(nome, codigo, cargaHoraria) {
    this.nome = nome;
    this.codigo = codigo;
    this.cargaHoraria = cargaHoraria;
  }

  getNome() {
    return this.nome;
  }

  getCodigo() {
    return this.codigo;
  }

  getCargaHoraria() {
    return this.cargaHoraria;
  }

  setNome(nome) {
    this.nome = nome;
  }

  setCodigo(codigo) {
    this.codigo = codigo;
  }

  setCargaHoraria(cargaHoraria) {
    this.cargaHoraria = cargaHoraria;
  }

  getInfo() {
    return {
      Nome: this.nome,
      Código: this.codigo,
      CargaHorária: this.cargaHoraria
    };
  }
}

const disciplina = new Disciplina('Modelagem 3D Blender', '13LEND6', 120);

console.log(disciplina.getInfo());
