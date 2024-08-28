function numeroRange(number, min, max, inclusive = false) {
  if (inclusive) {
    return number >= min && number <= max;
  } else {
    return number > min && number < max;
  }
}

console.log(numeroRange(7, 6, 8)); 