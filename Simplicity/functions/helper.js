export class Student {
    constructor (name, age, nationality) {
        this.name = name;
        this.age = age;
        this.nationality = nationality;

    }

    printInfo () {
        console.log(`name: ${this.name} \nage: ${this.age} \nnationality: ${this.nationality}`);
    }
}