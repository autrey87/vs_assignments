const readline = require("readline-sync");


var num1 = +readline.question("What is your first number? ");
var num2 = +readline.question("What is your second number? ");
var calc = readline.question("What calculation would you like performed, add, mult, div, or sub? ")

function add(num1, num2){
    return num1 + num2
};

function mult(num1, num2){
    return num1 * num2
};

function div(num1, num2){
    return num1 / num2
};

function sub(num1, num2){
    return num1 - num2
};


function jsCalc(){
    console.log(num1);
    console.log(num2);
    console.log(calc);
    if(calc === "mult"){
        return mult(num1, num2);
    } else if(calc === "add"){
        return add(num1, num2)
    } else if(calc === "div"){
        return div(num1, num2)
    } else if(calc === "sub"){
        return sub(num1, num2)
    };
}

console.log(jsCalc())