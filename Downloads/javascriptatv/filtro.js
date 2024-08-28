function filtroNumeros(arr) {
  return arr.filter((elemento) => typeof elemento === "number");
}

const elementos = [1, "teste", 3, true, 5, null, 7, "8", 9];
const numeros = filtroNumeros(elementos);
console.log(numeros);
