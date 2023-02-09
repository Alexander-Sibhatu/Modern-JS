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


/* map array method 

const squareArray = number.map(function(value) {
    return value*value;
});

console.log(squareArray);

*/


/* filter array method 

const employees = [
    {id: 2, empName: "Masimo", dep: "chemistry"},
    {id: 4, empName: "Lina", dep: "mechanical"},
    {id: 6, empName: "Alex", dep: "HR"},
    {id: 12, empName: "Anisul", dep: "Logistics"},
];

let employeesInHRDep = employees.filter( e => 
    e.dep === "HR"
);

for (let emp of employeesInHRDep) {
    console.log(emp.empName);
}
*/
//--------------------------------------------------------------------


class Student {
    constructor (age, nationality) {
        this.age = age;
        this.nationality = nationality;

    }

    printInfo () {
        console.log(`age: ${this.age} nationality: ${this.nationality}`);
    }
}

const Alex = new Student(30, "Geez"); 
Alex.printInfo();


