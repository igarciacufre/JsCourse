/*
TYPE OF OPERATORS:
    - Arithmetic
    - Assigments
    - Comparison
    - Equality
    - Ternary
    - Logical Non-booleans
    - Bitwise

    */

    //Arithmetic

    let x = 10;
    let y = 3;

    let aditional = x+y;
    let minus = x - y;
    let multip = x * y;
    let div = x / y;
    let rest = x % y
    let exp = x ** y;

    //incremental: 
    let incremental = ++x //return 11
    

    //Assigment Operator

    x = x + 5;
    x += 5;

    x = x * 3 
    x *= 3

    // Equality operator

//Strict equality (Type + value)
console.log(1 === 1); //true
console.log('1' === 1); //false
console.log(true === 1); //true

//Loose Equality  (value)
console.log(1 == 1); //true
console.log('1' == 1); //true
console.log(true == 1); //true


//TERNARY Operator

/* If a customer has more than 100 points they are GOLD customers, otherwise, they are SILVER customers */

let points = 110;
let type = points > 100 ? 'gold' : 'silver';

console.log(type);

// LOGICAL OPERATORS: AND (&&) OR (||) NOT (!)
    //it can be used in a variable
    let highIncome = true;
    let goodCredit = true;
    let eligibleForLoan = highIncome && goodCredit;
    
    console.log("Eligible for loan: " + eligibleForLoan);

    let refuseLoan = !eligibleForLoan;

//Logical Operators with NON-BOOLEAN
let userColor = 'blue';
let defaultColor = 'red';
let actualColor = userColor || defaultColor;
console.log(actualColor); // blue

let userColorEmpty = undefined; //falsy
let defaultColor2 = 'red';
actualColor = userColorEmpty || defaultColor2;
console.log(actualColor); //red


//excercise: you have two variables a and b -> Need to swap the values of the variables
let a = 'red';
let b = 'blue';
let temp = a;
a = b;
b = temp;
