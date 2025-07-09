let calculator = (digit1, digit2, oper) => {
    if (oper === "+"){return digit1+digit2;}
    else if (oper === "-"){return digit1-digit2;}
    else if (oper === "/"){return digit1/digit2;}
    else if (oper === "*"){return digit1*digit2;}
    else if (oper === "%"){return digit1%digit2;}
}
let validator = (digit1, digit2, oper) => {
    if (isNaN(digit1) || isNaN(digit2)){
        console.log("Did not enter valid digits");
        return;
    }else if( oper === "+" || oper === "-" || oper === "/" || oper === "*" || oper === "%"){
        let ans = calculator(digit1,digit2,oper);
        console.log("The value is found to be "+ans.toFixed(2));
    }else{
       console.log("Did not enter valid operator");
        return; 
    }
}
let digitOne = Number(prompt("Emter first Digit"));
let digitTwo = Number(prompt("Emter second Digit"));
let operator = prompt("Enter the operator").trim();

validator(digitOne,digitTwo,operator);