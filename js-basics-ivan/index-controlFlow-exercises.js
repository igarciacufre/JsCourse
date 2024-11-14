//EXERCISE 1: write a function that takes two numbers and returns the maximum of both numbers

let result = biggerNumber(7, 7);

function biggerNumber(number1, number2) {
  if (number1 === number2) return "both numbers \nare equals";
  return number1 > number2 ? number1 : number2;
}

console.log(result);

console.log("-----------------");
//EXERCISE 2: Is landscape? width > height

let result2 = isLandscape(70, 50);

function isLandscape(width, height) {
  return width > height;
}

console.log(result2);

console.log("-----------------");
//EXERCISE FIZZBUZZ:
// Divisible by 3 -> Fizz
// Divisible by 5 -> Buzz
// Divisible by 3 and 5 -> FizzBuzz
// Not divisible by 3 or 5 -> input
// Not a number -> "not a number"

let output = fizzbuzz(true);
console.log(output);

function fizzbuzz(input) {
  if (typeof input !== "number") return NaN;
  if (input % 3 === 0 && input % 5 === 0) return "FizzBuzz";
  else if (input % 3 === 0) return "Fizz";
  else if (input % 5 === 0) return "Buzz";
  return input;
}

console.log("-----------------");
//EXERCISE SPEEDLIMIT
//SpeedLimit <= 74 -> OK
// Every 5km above 70 -> 1 point
// 12 points -> suspended

let speed = speedLimit(73);
console.log(speed);

function speedLimit(input) {
  const speedLimit = 70;
  const kmPerPoint = 5;

  let result = input - speedLimit;
  if (result < kmPerPoint) return "ok";
  else {
    let points = Math.floor(result / kmPerPoint);
    if (points < 12) return "Points: " + points;
    return "Licence Suspended";
  }
}

console.log("-----------------");
//Excercise SHOW NUMBERS

showNumbers(4);

function showNumbers(limit) {
  for (i = 0; i <= limit; i++) {
    let msj = i % 2 === 0 ? "EVEN" : "ODD";
    console.log(i, msj);
  }
}

console.log("-----------------");
// Exercise CountTruthy

const array = [1, 2, "action", null, 3, undefined, NaN];

console.log(CountTruthy(array));

function CountTruthy(array) {
  let truthy = 0;
  for (let e of array) {
    if (e) {
      truthy++;
    }
  }
  return truthy;
}

console.log("-----------------");
//Exercise showProperties (object)
// show all the string properties

const movie = {
  name: "a",
  directior: "b",
  rate: 4,
  year: 2022,
};

showProperties(movie);

function showProperties(movie) {
  for (let key in movie) {
    if (typeof movie[key] === "string") console.log(key, movie[key]);
  }
}

console.log("-----------------");
//Exercise sum multiplos de multi1 and multi2 (multi1 < multi2) multi2 < limit

const limit = 10;

sum(limit, 3, 5);

function sum(limit, multi1, multi2) {
  let multiplo = 0;

  if (limit > multi1) {
    for (let i = multi1; i <= limit; i++) {
      if (i % multi1 == 0) multiplo = multiplo + i;
      if (i % multi2 == 0) multiplo = multiplo + i;
    }
  }

  return console.log(multiplo);
}

console.log("-----------------");
//Exercise calculateGrade -> calculate the average of the array and return:
// F -> 1 - 59
// D -> 60 - 69
// C -> 70 - 79
// B -> 80 - 89
// A -> 90 - 100

const marks = [80, 80, 70];

calculateGrade(marks);

function calculateGrade(marks) {
  let amount = marks.length;
  let sum = 0;

  for (let mark of marks) {
    sum += mark;
  }
  let avg = sum / amount;

  if (avg < 50)
    if (avg < 70) return "F";
  if (avg < 80) return "D";
  if (avg < 90) return "C";
  if (avg < 101) return "A";
  return console.log(avg);
}

console.log("-----------------");
//Exercise showStarts  -> log the amount of starts according to the parameters, if 1 then *, if 2 then * **... and so on..

showStars(6);

function showStars(rows) {
  let stars = "";
  if (rows > 0) {
      for (let i = 0; i < rows; i++) {
        stars = stars+'*';
        console.log(stars);
      }
  }
}

console.log("-----------------");
//Exercise show primes numbers from 1 to the parameter

showPrimes(16);

function showPrimes(limit){
  for (let i = 2; i <= limit ; i++){
    if (isPrimeNumber(i)) console.log(i);
  }
}

function isPrimeNumber (number){
  for (let factor = 2; factor < number ; factor++) 
    if ( number % factor === 0) return false;
    
  return true;
}




/////////////////////////////////////////// EXCERSICES 13-11-2024

console.log("----------------- biggerNumber");
// bigger number excercise
function biggerNumber(a,b) {
  if (a == b) return a + " and " + b +" numbers are equal";
  return a > b ? a : b;
}

console.log(biggerNumber(9,9));


console.log("----------------- isLandscape");
// isLandscape? if width is bigger than height

function isLandscape (width, height) {
  return width > height;
}

console.log(isLandscape(80,30));


console.log("----------------- fizzBuzz");

/* fizzBuzz algorithm: 
 if the number is: 
 - divisible by 3 -> return Fizz 
 - divisible by 5 -> return Buzz
 - divisible by 3 and 5 -> return FizzBuzz
 - not divisible -> return same input
 - if not a number -> return "not a number"
 */

function FizzBuzz (number) {
  if (typeof number !== 'number' ) return NaN; 
  if ((number % 3) == 0 && (number % 5 == 0)) return 'FizzBuzz';
  else if ((number % 3) == 0) return 'Fizz';
  else if ((number % 5) == 0) return 'Buzz';
  else return number;
}

console.log(FizzBuzz(7));

console.log("----------------- checkSpeed");

/*check speed:
 Speed Limit: 70
 Every 5km -> 1 point 
 if gets more than 12 points  -> return: License Suspended
*/

function checkSpeed (speed) {
  const speedLimit = 70;
  const kmPerPoint = 5; 
    if (Math.floor(speed) < speedLimit + kmPerPoint) return "OK"
    let exceed = speed - 70;
    let points = Math.floor(exceed/kmPerPoint);
    if (points < 12) return "points: " + points;
    else return "License suspended";
}
console.log(checkSpeed(129));


console.log("----------------- showNumbers");

/*Show numbers: show the numbers from 0 to the number setted and show if all the numbers are odd or even
*/

function showNumbers(limit){
  let msj = "";
  for (let i = 0; i<= limit; i++){
    msj = (i % 2 == 0) ? "EVEN" : "ODD";
    console.log (i, msj);
  }
}
showNumbers(10);

console.log("----------------- countTruthy2");

/*count truthy
*/

const array2 = [0,1,2,3,'value',''];

function countTruthy2 (array2) {
  let count = 0;
  for (let value of array2) {
    if (value) count ++;
  }
  return count;
}
console.log("amount of truthy",countTruthy2 (array2));

console.log("----------------- showProperties2");

/*Show properties of an object
*/
const obj2 = {
  title: 'a',
  releaseYear: 2020,
  rating: 4.5,
  director: 'b'
};

function showProperties2 (obj2) {
  for (let prop in obj2){
    console.log(prop, obj2[prop],);
  }
  console.log(obj2.title);
}
showProperties2(obj2);