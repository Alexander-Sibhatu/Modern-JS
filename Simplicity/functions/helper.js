export class Student {
    constructor (age, nationality) {
        this.age = age;
        this.nationality = nationality;

    }

    printInfo () {
        console.log(`age: ${this.age} nationality: ${this.nationality}`);
    }
}