//function for sum no matter the ammount of arguments, 
//it can be an array or a simple number

console.log('----------------------- SUM FUNCTION');

function sum(...input){

    if(Array.isArray(input[0])) {
        input = [...input[0]];
    }
    return input.reduce((a,b) => a + b);
}
console.log('Sum: ', sum ([1,2,3,4]));

console.log('----------------------- AREA IF CIRCLE');
//circle.radius = 2
//circle readonly poroperty of area
//console.log(circle.area)

const circle = {
    radius: 1,
    get area() {
        return Math.PI * this.radius * this.radius;
    }
};
circle.radius = 4;
console.log(circle.area);

console.log('----------------------- error Handling');

function countOccurrences(input, searchElement) {

    if (!Array.isArray(input)) 
        throw new Error('wrong Input type');

    return input.reduce((accumulator,current) => {
        const occurence = (current === searchElement) ? 1 : 0;
        return accumulator + occurence;
    }, 0);
}

const num = [1,2,3,4,5,4,7,8,3,3];
let n = 3;

try {
    let count = countOccurrences(true, n);
    console.log(n, ' appears: ', count, 'in the array: ', num);
} catch(e) {
    console.log (e.message);
}
