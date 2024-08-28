function repetirSinal(num) {
  if (num <= 0) {
    return "";
  }

  return "+".repeat(num);
}

console.log(repetirSinal(12)); 
