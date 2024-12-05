//function declaration: 
function walk() {   
    console.log('walk');
}

//Anonymous Function Expression
let run = function() {
    console.log('run');
};
//Named function expression
let move = function moving() {
    console.log('moving');
};
walk();
run();
move();


//ARGUMENTS: Are all the parameters that exists when calling a function.
console.log('----------------------- ARGUMENTS OF A FUNCTION')
function showArguments(a, b, c){
    console.log(arguments);

}
showArguments(1,2,3);

console.log('----------------------- Create a function that sum all the arguments/parameters in the function');
function sum () {
    let total = 0;
    for (let elem of arguments)
        total += elem;
    return total;
}
console.log(sum(4,5,10));

//Another way to write the same function, with the rest operator: 

function sum(...args){
    return args.reduce((a,b) => a + b);
}
console.log(sum(2,4,6,8));


//We can split also the parameters, lets say that we buy products and we have a 10 % discount, how can I get the total:
console.log('----------------------- Function to get the total with a discount');
function discount(discount, ...prices){
    let total = prices.reduce((a,b) => a+b);
    return total * (1-discount);
}
console.log(discount(0.1, 10,20,20));