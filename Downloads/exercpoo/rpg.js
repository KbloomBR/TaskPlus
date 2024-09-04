class Personagem {
  constructor(nome, pontosDeVida, forca) {
    this.nome = nome;
    this.pontosDeVida = pontosDeVida;
    this.forca = forca;
    this.experiencia = 0;
    this.nivel = 1;
  }

  getNome() {
    return this.nome;
  }

  getPontosDeVida() {
    return this.pontosDeVida;
  }

  getForca() {
    return this.forca;
  }

  getExperiencia() {
    return this.experiencia;
  }

  getNivel() {
    return this.nivel;
  }

  setForca(forca) {
    this.forca = forca;
  }

  setPontosDeVida(pontosDeVida) {
    this.pontosDeVida = pontosDeVida;
  }

  atacar(personagem) {
    throw new Error("Method 'atacar' must be implemented.");
  }

  defender(dano) {
    throw new Error("Method 'defender' must be implemented.");
  }

  subirDeNivel() {
    this.nivel++;
    this.pontosDeVida += 10;
    this.forca += 2;
  }

  ganharExperiencia(experiencia) {
    this.experiencia += experiencia;
    if (this.experiencia >= this.nivel * 100) {
      this.subirDeNivel();
    }
  }
}

class Guerreiro extends Personagem {
  constructor(nome, pontosDeVida, forca) {
    super(nome, pontosDeVida, forca);
  }

  atacar(personagem) {
    const dano = this.forca * 2;
    personagem.defender(dano);
  }

  defender(dano) {
    this.pontosDeVida -= dano;
    if (this.pontosDeVida <= 0) {
      console.log(`${this.nome} foi derrotado!`);
    }
  }
}

class Mago extends Personagem {
  constructor(nome, pontosDeVida, forca) {
    super(nome, pontosDeVida, forca);
  }

  atacar(personagem) {
    const dano = this.forca * 3;
    personagem.defender(dano);
  }

  defender(dano) {
    this.pontosDeVida -= dano;
    if (this.pontosDeVida <= 0) {
      console.log(`${this.nome} foi derrotado!`);
    }
  }

  lancarFeitico(personagem) {
    const dano = this.forca * 4;
    personagem.defender(dano);
  }
}

class Item {
  constructor(nome, tipo, valor) {
    this.nome = nome;
    this.tipo = tipo;
    this.valor = valor;
  }

  usar(personagem) {
    if (this.tipo === 'arma') {
      personagem.setForca(personagem.getForca() + this.valor);
    } else if (this.tipo === 'pocao') {
      personagem.setPontosDeVida(personagem.getPontosDeVida() + this.valor);
    }
  }
}

class Batalha {
  constructor(personagem1, personagem2) {
    this.personagem1 = personagem1;
    this.personagem2 = personagem2;
  }

  iniciarBatalha() {
    while (this.personagem1.getPontosDeVida() > 0 && this.personagem2.getPontosDeVida() > 0) {
      this.personagem1.atacar(this.personagem2);
      if (this.personagem2.getPontosDeVida() <= 0) break;
      this.personagem2.atacar(this.personagem1);
    }
  }
}

const guerreiro = new Guerreiro('Guerreiro', 100, 10);
const mago = new Mago('Mago', 80, 12);
const pocao = new Item('Pocao de Vida', 'pocao', 20);

pocao.usar(guerreiro);
pocao.usar(mago);

const batalha = new Batalha(guerreiro, mago);
batalha.iniciarBatalha();