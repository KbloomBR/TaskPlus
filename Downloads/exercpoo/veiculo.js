class Veiculo {
  constructor(placa, modelo, capacidade) {
    this.placa = placa;
    this.modelo = modelo;
    this.capacidade = capacidade;
    this.passageiros = 0;
  }

  getPlaca() {
    return this.placa;
  }

  getModelo() {
    return this.modelo;
  }

  getCapacidade() {
    return this.capacidade;
  }

  getPassageiros() {
    return this.passageiros;
  }

  setPassageiros(passageiros) {
    if (passageiros > this.capacidade) {
      throw new Error(`Capacidade do veículo ultrapassada!`);
    }
    this.passageiros = passageiros;
  }

  verificarLotação() {
    return this.passageiros >= this.capacidade;
  }
}

class Onibus extends Veiculo {
  constructor(placa, modelo, capacidade, linha) {
    super(placa, modelo, capacidade);
    this.linha = linha;
  }

  getLinha() {
    return this.linha;
  }

  setLinha(linha) {
    this.linha = linha;
  }
}

class Metro extends Veiculo {
  constructor(placa, modelo, capacidade, numeroDeVagoes) {
    super(placa, modelo, capacidade);
    this.numeroDeVagoes = numeroDeVagoes;
  }

  getNumeroDeVagoes() {
    return this.numeroDeVagoes;
  }

  setNumeroDeVagoes(numeroDeVagoes) {
    this.numeroDeVagoes = numeroDeVagoes;
  }
}

class Bilhete {
  constructor(codigo, saldo) {
    this.codigo = codigo;
    this.saldo = saldo;
  }

  getCodigo() {
    return this.codigo;
  }

  getSaldo() {
    return this.saldo;
  }

  recarregarSaldo(valor) {
    this.saldo += valor;
  }

  verificarSaldo() {
    return this.saldo > 0;
  }
}

const onibus = new Onibus('ABC123', 'Scania', 50, 'Linha 1');
const metro = new Metro('XYZ456', 'Alstom', 200, 6);
const bilhete = new Bilhete('BIL123', 10);

onibus.setPassageiros(30);
metro.setPassageiros(150);

console.log(onibus.verificarLotação()); 
console.log(metro.verificarLotação()); 

bilhete.recarregarSaldo(20);
console.log(bilhete.getSaldo());

bilhete.verificarSaldo(); 