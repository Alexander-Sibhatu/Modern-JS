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

/* forEach array Method

number.forEach(function(value) {
    squareNumber.push(value * value);
});

console.log(squareNumber);
*/


/* map array method */

const squareArray = number.map(function(value) {
    return value*value;
});

console.log(squareArray);


