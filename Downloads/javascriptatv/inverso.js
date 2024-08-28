function inverterObj(obj) {
  const newObj = {};
  Object.keys(obj).forEach(key => {
    newObj[obj[key]] = key;
  });
  return newObj;
}

const obj = { albuquerque: "lindo", ian: "acorda", gustavo: "lombrado"};
const newObj = inverterObj(obj);
console.log(newObj); 