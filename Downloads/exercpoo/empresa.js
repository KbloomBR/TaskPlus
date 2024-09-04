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

  getInfo() {
    return `${this.rua}, ${this.numero} ${this.complemento ? `, ${this.complemento}` : ''}, ${this.bairro}, ${this.cidade} - ${this.estado}, ${this.cep}`;
  }
}

class Empresa {
  constructor(nome, cnpj) {
    this.nome = nome;
    this.cnpj = cnpj;
    this.endereco = null;
    this.dataDeCriacao = null;
  }

  getNome() {
    return this.nome;
  }

  getCnpj() {
    return this.cnpj;
  }

  getEndereco() {
    return this.endereco;
  }

  getDataDeCriacao() {
    return this.dataDeCriacao;
  }

  setNome(nome) {
    this.nome = nome;
  }

  setCnpj(cnpj) {
    this.cnpj = cnpj;
  }

  setEndereco(endereco) {
    if (endereco instanceof Endereco) {
      this.endereco = endereco;
    } else {
      throw new Error('Endereço deve ser uma instância de Endereco');
    }
  }

  setDataDeCriacao(dataDeCriacao) {
    if (dataDeCriacao instanceof Date) {
      this.dataDeCriacao = dataDeCriacao;
    } else {
      throw new Error('Data de criação deve ser uma instância de Date');
    }
  }

  getInfo() {
    return {
      Nome: this.nome,
      CNPJ: this.cnpj,
      Endereço: this.endereco ? this.endereco.getInfo() : null,
      'Data de Criação': this.dataDeCriacao ? this.dataDeCriacao.toLocaleDateString() : null
    };
  }
}

const endereco = new Endereco('Rua dos Pinheiros', 123, 'Apto 101', 'Centro', 'São Paulo', 'SP', '01310-000');
const dataDeCriacao = new Date('2020-01-01T00:00:00.000Z');

const empresa = new Empresa('Minha Empresa', '12345678901234');
empresa.setEndereco(endereco);
empresa.setDataDeCriacao(dataDeCriacao);

console.log(empresa.getInfo());