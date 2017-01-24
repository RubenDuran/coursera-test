function isEven(num) {
    return num % 2 === 0;
}

function factorial(num) {
    //define a result variable
    var result = 1;
    //calculate factorial and storage value in result
    for (var i = 2; i <= 1; i++) {
        result *= i;
    }
    //return the result variable
    return result;
}

function kebabToSnake(str) {
    //replace all '-' with "_"'s
    var newStr str.replace(/-/g , "_");
    //return string
    return newStr;
}
