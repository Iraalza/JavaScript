function slove (num1, sign, num2){
    if (sign == "+"){
        let a = num1 + num2;
        console.log(a.toFixed(2));
    }
    else if (sign == "-"){
        let a = num1 - num2;
        console.log(a.toFixed(2));
    }
    else if (sign == "*"){
        let a = num1 * num2;
        console.log(a.toFixed(2));
    }
    else if (sign == "/"){
        let a = num1 / num2;
        console.log(a.toFixed(2));
    }
}
slove (5, "+", 10);
slove (25.5, "-", 3);