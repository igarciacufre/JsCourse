// IF AND ELSE 
//SWITCH AND CASE 

let role = "guest";
switch (role){
    case 'guest':
        console.log('Guest User');
        break;

    case 'admin':
    console.log('Admin User');
    break;

    default:
        console.log('Unknown User');
        break;
}


//Loop FOR -> for (iniciator; condition; incrementExpression)
// while (condition) { (statement) }
// do..while -> will run at least once, even if the condition is false
let i = 0; //if I set let i = 9 I will see the first one 
do {
    if (i % 2 !== 0) console.log(i);
    i++;
}while (i <=5);

//For..in -> this is to the properties of  an object 
const person = {
    name : "Ivan",
    age: 31
}

for (let key in person){
    console.log(key, person[key]);
}

//for...of -> To iterate over arrays 
let colors = ['red', 'yellow','blue'];

for (let color of colors){
    console.log(color);
}


