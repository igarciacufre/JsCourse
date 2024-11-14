//----------------------------EJERCICIOS
//-------------------factory Functions


console.log('-------------------------------------- factoryFunction and constructorFunction');

function setAddress(street,city,zipCode){
    return {
        street,
        city,
        zipCode
    };
}
const factoryAddress = setAddress('a', 'b', 'c');
console.log('the factory function to create Address:', factoryAddress);

function AddressConst(street,city,zipCode){
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}
const constAddress = new AddressConst('a', 'b', 'c');
console.log('the new Address object using Construction Function:', constAddress);



//-------------------Objects Are equals
console.log('-------------------------------------- Objects are equals');

let addressA = new AddressConst('a', 'b', 'c');
let addressB = new AddressConst('A', 'b', 'c');

function areEqualsAddress(addressA,addressB) {
    for (let atr in addressA) {
        if (addressA[atr] !== addressB[atr]) return false;
    }
    return true;
}

function areSame(address1,address2){
    return address1 === address2;
}

console.log('check if address are equals:',areEqualsAddress(addressA,addressB));

//-------------------Blog Post Object
console.log('-------------------------------------- Blog Post Object');

function BlogPost (title,body,author) {
    this.title = title;
    this.body = body;
    this.author = author;
    this.views = 0;
    this.comments =[];
    this.isLive = false;
}

let blog = new BlogPost ('title','body','author');
console.log('new blog: ',blog);

//-------------------Price Range Object
console.log('-------------------------------------- Price Range Object');

let priceRange = [
    {label:'$', description: 'Inexpensive', minPrice: 0, maxPrice: 10},
    {label:'$$', description: 'Moderate', minPrice: 11, maxPrice: 25},
    {label:'$$$', description: 'Expensive', minPrice: 26, maxPrice: 50},
];