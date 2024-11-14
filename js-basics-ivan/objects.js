//Object-oriented Programing (OOP)
const circle = {
    radious: 1,
    location: {
        x: 1,
        y: 1
    },
    isVisible: true,
    draw: function() {
        console.log('draw');
    }
};


//Factory Functions: this produce objects
//  I am going to create a function that create the object of the circle similar to the like the one before
function createCircle(radius) {
    return {
        radius, // is the same as: radius: radius,
        draw: function () {
            console.log('draw function call');
        }
    };
}

const circleFactory1 = createCircle(1);
console.log(circleFactory1);

const circleFactory2 = createCircle(2);
console.log(circleFactory2);


//Constructor Function: this create a new object.
//For Constructor Functions we use Pascal Notation: ThisIsPascalNotation (first letter in Capital)

function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log('draw function');
    }
}

const circleConstructor = new Circle(1);
console.log(circleConstructor);

//--------------------------------------------------------------------------

console.log('--------------------------------------')
//Objects are Dynamic, meaning that we can edit, delete or create new functions or properties.
//for example:

const house = {
    radius: 1
};

//create new property and function to the object:
house.color = 'grey';
house.build = function () {};

//delete the property and function:
delete house.color;
delete house.build;

console.log(house);

console.log('for function in house: ');
for (let key in house){
    console.log(key, house[key]);
}
console.log('--------------------------------------');


//-------------------------------------
//Refer to a Reference type: 
let x = {value: 10};
let y = x;

x.value = 20;

//NOTE:     PRIMITIVES are copied by their value 
//          Objects are copied by their reference

let obj = {value: 10}

function increase (obj){
    obj.value ++;
}
increase(obj);
console.log(obj); //that will show 11



//----------------------------EJERCICIOS
//-------------------addressObject

console.log('-------------------------------------- addressObject');

const address2 = {
    street: 'calle 123',
    city: 'ciudad lala',
    zipCode: 20394
}

function showAddress2 (address2) {
    for (let value in address2) {
        console.log(value,address2[value]);
    }
}
showAddress2(address2);

