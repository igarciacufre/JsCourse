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

num3 = [1,2,3,4];
let output3 = move(num3, 0, 3);

console.log(output3);

function move (array, index, offset){
    let value = 0;
    let valueToMove;
    if (offset == 0) return array;
    if (offset > 0) { 
        if ((index + offset) >= array.length) 
            return console.error('invalid offset');
        
        for(let i = index; i< array.length; i++){
            valueToMove = array[i];
            value = array[i];
        }
    }
    else if ((index + offset) < 0) 
        return console.error('invalid offset');


}