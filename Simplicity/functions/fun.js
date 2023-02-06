//Array methods

//Array of objects

/*const numberArray = [
    {
        id: 1
        name: "Anisul";
        
    }
]*/

const number = [1, 2, 3, 4, 5, 6];
const squareNumber = [];

number.forEach(function(value) {
    squareNumber.push(value * value);
});

console.log(squareNumber);