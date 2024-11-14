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

