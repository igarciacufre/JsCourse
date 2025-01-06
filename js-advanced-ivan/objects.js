//LITERAL OBJECT
const LiteralCircle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    draw: function (){
        console.log('literal object:','draw');
    }
};
LiteralCircle.draw();

//FACTORIES FUNCTION
function createCircle (radius) {
    return {
        radius,
        draw: function () {
            console.log('factory function:','draw');
        }
    };
}
const circle = createCircle(2);
circle.draw();

//CONSTRUCTOR

function Circle (radius) {
    this.radius = radius;
    this.draw = function () {
        console.log('Constructor Function:','draw');
    };
}

const another = new Circle (1);
another.draw();