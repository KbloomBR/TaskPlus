function maiorIgual(num1, num2) {
    if (num1 > num2){
        console.log("O número é maior")
    } if(num1 < num2){
        console.log("O número é menor")
    } if(num1 = num2){
        console.log("O número é igual")
    }

    return num1 >= num2;
}

console.log(maiorIgual(3, 3));