console.log('--------------arraytFromRange: return the array with the values from min to max');
const numbers = arraytFromRange(1, 8);

console.log(numbers);

function arraytFromRange(min,max){
    let output = [];
    for (let i = min ; i<=max; i++) 
        output.push(i);

    return output;
}
console.log('--------------includes: create a function that return if a value exists or not');

const num = [1,2,3,4,5];

console.log('exists value: 7: ',includes(num,7));

function includes(array, searchElement) {
   // return array.indexOf(searchElement) >-1;
   for (let elem of array)
    if (elem === searchElement) return true;
   return false;
}

console.log('--------------except: create a function that return array without the values in the second array');

const num2 = [1,2,3,4,5,1,2,5];
const exclu = [1,5]

console.log('array: ', num2, 'excluded: ', exclu);
const output = except (num2, exclu);
console.log('new array: ',output);

function except(array, excluded) {
    const output = [];
    for (let elem of array)
        if (!excluded.includes(elem))
            output.push(elem);
    
    return output;
}

console.log('--------------move: create a function to move an element from array');

num3 = [1,2,3,4,5,6,7,8];
let output3 = move(num3, 2, 5);

console.log(output3);

function move (array, index, offset){
    const output = [...array];
    const position = index + offset;
    
    if (position >= array.length || position < 0 ){
        console.error('Invalid offset');
        return;
    }
    const elem = output.splice(index,1)[0];
    output.splice(position,0,elem);
    return output;
}

console.log('--------------count Occurrences: count the amount of numbers');

num3 = [1,2,3,4,5,4,7,8,3,3];
let n = 9;

let count = countOccurrences(num3, n);
console.log(n, ' appears: ', count, 'in the array: ', num3);

function countOccurrences(array, searchElement) {
    // const output = array;
    // let count = 0;
    // for (let elem of output)
    //   if (elem === searchElement)
    //    count++;
    // return count;

    return array.reduce((accumulator,current) => {
        const occurence = (current === searchElement) ? 1 : 0;
        return accumulator + occurence;
    }, 0);    
}

console.log('--------------getMax value');

num3 = [1,2,9,4,5,11];

const max = getMax(num3);
console.log('The MAX value from the array is: ', max);

function getMax(array){
    if (array.length === 0) return undefined;
    // let max = array[0];
    // for (let elem of array)
    //     if (elem > max) 
    //         max = elem;
    // return max;

    return array.reduce((accumulator, current) => current > accumulator ? current : accumulator);
}

console.log('--------------MOVIES');

const movies = [
    { title: 'a', year: 2018, rating: 4.5},
    { title: 'b', year: 2018, rating: 4.7},
    { title: 'c', year: 2018, rating: 3},
    { title: 'd', year: 2017, rating: 4.8},
];

// all movies in 2018 with rating > 4
// Sorte them by their rating, descending order
// Pick the title


console.log('The greater movies are: ',greatestMovies(movies));

function greatestMovies (array) {
    let filtered = array.filter(m => m.year === 2018 && m.rating > 4)
    let sorted = filtered.sort((a, b) => a.rating - b.rating).reverse();
    return sorted.map(m =>m.title);

}