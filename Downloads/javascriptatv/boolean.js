function valoriza(value) {
  if (typeof value === "boolean") {
    return !value;
  } else if (typeof value === "number") {
    return -value;
  } else {
    return `booleano ou número eram esperados, mas o parâmetro é do tipo ${typeof value}`;
  }
}

console.log(valoriza(-24)); 
