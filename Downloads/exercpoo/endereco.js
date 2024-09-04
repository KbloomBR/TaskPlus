class Endereco {
  constructor(rua, numero, complemento, bairro, cidade, estado, cep) {
    this.rua = rua;
    this.numero = numero;
    this.complemento = complemento;
    this.bairro = bairro;
    this.cidade = cidade;
    this.estado = estado;
    this.cep = cep;
  }

  getRua() {
    return this.rua;
  }

  getNumero() {
    return this.numero;
  }

  getComplemento() {
    return this.complemento;
  }

  getBairro() {
    return this.bairro;
  }

  getCidade() {
    return this.cidade;
  }

  getEstado() {
    return this.estado;
  }

  getCep() {
    return this.cep;
  }

  setRua(rua) {
    this.rua = rua;
  }

  setNumero(numero) {
    this.numero = numero;
  }

  setComplemento(complemento) {
    this.complemento = complemento;
  }

  setBairro(bairro) {
    this.bairro = bairro;
  }

  setCidade(cidade) {
    this.cidade = cidade;
  }

  setEstado(estado) {
    this.estado = estado;
  }

  setCep(cep) {
    this.cep = cep;
  }

  getInfo() {
    return {
      Rua: this.rua,
      Número: this.numero,
      Complemento: this.complemento,
      Bairro: this.bairro,
      Cidade: this.cidade,
      Estado: this.estado,
      CEP: this.cep
    };
  }
}

const endereco = new Endereco('Rua Boca no Birimbas', 69420, 'Apt 202', 'Centro', 'São Paulo', 'SP', '69402-420');

console.log(endereco.getInfo());
