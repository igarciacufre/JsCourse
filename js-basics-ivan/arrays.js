const numbers1 = [3,4];

console.log('--------------ADD');

//add in the end
numbers1.push(5,6);


//add in the beggining
numbers1.unshift(1,2);

//add in specific possition
numbers1.splice(2,0,'a','b');

console.log(numbers1);

console.log('--------------REMOVE');
//removing an element:
//remove from the end: 
let last = numbers1.pop();  //we put it in a variable because we can get the variable we removed
console.log(numbers1);
console.log(last);


//remove from the beginning
let first = numbers1.shift(); //we put it in a variable because we can get the variable we removed
console.log(numbers1);
console.log(first);

//remove in an specific possition:
const numbers2 = [1,2,3,4];
numbers2.splice(2,1); //we want to remove from the possition 2, only 1 number.
console.log(numbers2);

console.log('--------------FIND');

//finding (primitive) element 
const numbers = [1,2,3,4,1,4];

//indexOf: find the position of an element in an array: -1 if doesn't exists - if there are more than 1 element, will return the first one
console.log(numbers.indexOf('a')); //that will return -1
console.log(numbers.indexOf(1)); //that will return 0

//is possible to add a second parameter to check to search the value from a possition: 
console.log(numbers.indexOf(2,2)); //this will return the possition from the second possition or -1 if doesn't exists

//lastIndexOf: to find the last value of the element. 
console.log(numbers.lastIndexOf(1)); // that will return 4                

//includes: find if a value exists: 
let exists = numbers.includes(1);
console.log(exists);

console.log('--------------FIND REFFERENCE TYPES');
//FINDING REFERENCE TYPES
const courses = [
    { id: 1, name: 'a'},
    { id: 2, name: 'b'},
    { id: 3, name: 'c'},
];

//find: we need to create a function, that will return the first element that match that criteria or undefined if doesn't exists

//if we want to find the name: b

let course = courses.find(function(course){
    return course.name === 'b';
});

console.log(course);

//if we want to find the possition we is findIndex: 

let coursePos = courses.findIndex(function(course){
    return course.name === 'b';
});

console.log(coursePos);

//Arrow function: is only to help make the code clearer. we will do the same as before but with different notation

let courseWArrow = courses.find(course => course.name === 'c');

console.log(courseWArrow);


console.log('--------------EMPTYING AN ARRAY');
//emptying an array.
let num = [1,2,3,4,5];
console.log('before:',num);
//solution 1: declare it again, but empty: 
num = [];

//Solution 2: using the splice for delete, and in the number of element, choose the length:
let num1 = [1,2,3,4,5];
num1.splice(0, num1.length);
console.log('after: ',num1);


// Solution 3: With a loop´, that it will delete the last value using: num.pop()  ---NOT RECOMMENDED
let num2 = [1,2,3,4,5];
while(num2.length >0)
    num2.pop();


console.log('--------------CONCAT ARRAY');

let one = [1,2,3];
let two = [4,5,6];

let combined = one.concat(two);
console.log('array one and two: ', combined);

console.log('--------------SLICE ARRAY:');

console.log('--------------SLICE the same array starting at 2 and finished at 4');

let slice = combined.slice(2,4);
console.log('slice the same array starting at 2 and finished at 4:',slice);

//we can also slice from the beginning until the end: 
let slicedFrom2 = combined.slice(2);
console.log(slicedFrom2);

console.log('--------------SPREAD ARRAY: is an advanced but clearer way to combine the arrays');
//an example of concat: 

let spread = [...one,...two];
console.log('new array combining one and two, using spread: ', spread);

//it is also easy to concat or to add things in the middle: 
spread = [...one,'a','b',...two];
console.log(spread);


//------------iteration in Array: forEach: 
console.log('--------------Iteration using foreach');

num = [1,2,3,4,5];
num.forEach(number => {
    console.log(number);
});

//Joining Arrays. it will return a string with the separator chosen in the parameter

console.log('--------------Join arrays. ');
let joined = num.join(',');
console.log('String returned using "," as separator:', joined);

//from string to an array:

let message = 'This is my first message';
let parts = message.split(' '); 
let string = parts.join('-');
console.log('string: ',message,' / array using split: ',parts, '/ string using join from the new array: ', string);


//SORT AN ARRAY: sort method
console.log('--------------Sort array  with numbers or string');

num = [3,6,8,2];
console.log('unsorted array: ', num);
let sorted = num.sort();
console.log('Sorted: ', sorted);
let reversed = num.reverse();
console.log('Reversed: ', reversed);


console.log('--------------Sort array  with objects');

let study = [
    { id: 1, name: 'Node.js'},
    { id: 2, name: 'JavaScript'},
    { id: 3, name: 'Angular'}
];

study.sort(function (a,b) {
    // a < b => -1
    // a > b => 1
    // a === b => 0

    let nameA = a.name.toUpperCase();
    let nameB = b.name.toUpperCase()
    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0; 
});
 
console.log(study);

//-------------------- EVERY and SUM
console.log('--------------EVERY and SOME');

num = [3,6,-8,2];

let allPositive = num.every(number => number >= 0);

console.log('every: Function all possitives: ', allPositive);

let atleastNegative = num.some(number => number < 0);
console.log('some: Function at least one is negative: ', atleastNegative);

//-------------------- filtered: will return a new Array with only the values that pass the condition

let onlyPositives = num.filter (value => value >= 0);
console.log('array: ', num, '/ array filtered with only possitives: ', onlyPositives);

//-------------------- MAP Method: we can go through all the array and change the values:

num2 = [1,-1,2,3,4];

let positives = num2.filter(number => number >= 0);

let items = positives.map(n => '<li>' + n + '</li>');
console.log('array: ', positives);
console.log('we will change the value of the array to show them in a list: ', items);

const html = '<ul>'+ items.join('') + '</ul>';
console.log(html);


//if we want to retutn objects we can do it in a way of doing chaining:

let objs = num2
    .filter(n => n >= 0)
    .map(n => ({ id: n}));

console.log('array with objects from the num array only with positive numbers: ', objs);


//reduce value
console.log('--------------REDUCE FUNCTION');

num2 = [1,-1,2,3,4];

let sum = num2.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);

console.log('SUM all the values of the array using function reduce: ', sum);