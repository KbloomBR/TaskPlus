function calcTriangulo(base, altura) {
  return (base * altura / 2).toFixed(2);
}

const base = 3;
const altura = 3;
const area = calcTriangulo(base, altura);
console.log(`Área do triângulo: ${area}`);