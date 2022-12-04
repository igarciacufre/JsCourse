/*
primitive Types: String - number - boolean - null - undefined
Reference types: Arrays - objects - functions
*/


/*
OBJECTS: 
let person = {
    name: 'Ivan',
    age: 31
}; 
person.name = 'Nati';
person['age'] = 30;
console.log(person);
*/

function greet(name) {
    console.log('Hello ' + name);
}

let firstName = 'Norbert'; 
greet(firstName);