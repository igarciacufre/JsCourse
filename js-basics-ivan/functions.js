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

console.log('----------------------- Getters and setters');

const person = {
    firstName: 'Ivan',
    lastName: 'Garcia',

    get fullName() {
        return '${person.firstName} ${person.lastName}' 
    },
    set fullName (value) {
        if (typeof value !== 'string')
            throw new Error ('Value is not String');

        const fullName = value.split(' ');
        if (fullName.length != 2)
            throw new Error('Enter First and Last Name');
        this.firstName = fullName[0];
        this.lastName = fullName[1];
    }
};
try {
    person.fullName= 'John Smith';
}
catch (e){
    alert(e);
}
console.log(person);

//THIS keyword: and how to use it:

//method -> Obj
//function -> global (window, global)


console.log('----------------------- This method:');
//we want to show the title, in each tag.
//this is not very recommended.
const video = {
    title: 'a',
    tags: ['a','b','c'],
    showTags() {
        this.tags.forEach(function(tag){
            console.log(this.title, tag);
        }, this); //the parameter "this" here, let me use the "this" to mention the title that is from the function.
    }
}

video.showTags();

//call method
console.log('----------------------- Different ways to change the value of THIS:');


function playVideo(){
    console.log(this);
}
//playVideo(); //window Object
console.log('---- Call method:');
playVideo.call({ name: 'call: Ivan'});
console.log('---- Apply method:');
playVideo.apply({ name: 'apply: Ivan'});
console.log('---- Bind: method:');
playVideo.bind({ name: 'Bind: Ivan'})();



console.log('----------------------- Using the arrow method, we can reach the same value:');
const videoArrow = {
    title: 'a',
    tags: ['a','b','c'],
    showTags() {
        this.tags.forEach(tag => {
            console.log(this.title, tag);
        });
    }
}
videoArrow.showTags();