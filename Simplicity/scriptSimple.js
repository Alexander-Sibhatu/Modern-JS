let fruits = []
fruits = ["Banana", "Kiwi", "Orange", "Apple"]
//console.log(fruits[0]);

//console.log(fruits.length);


//console.log(fruits[fruits.length-1]);

/*let added = fruits.push("Lemon");
console.log(fruits);*/

/*let type = typeof fruits;
console.log(type);*/

/*fruits[2] = "Grape"
console.log(fruits);*/

/*let x = fruits.splice(1, 2);
console.log(x);*/

/*let arrange = fruits.sort();
console.log(arrange);*/

/*  --------------------------------------------------------------------------------  */

/*
const d = new Date();
console.log(d);

console.log(d.getFullYear());
console.log(d.getMonth());
*/

/* ---------------------------------------------------------------------*/

function product(title, description, category, price) {
    this.title = title;
    this.description = description;
    this.category = category;
    this.price = price;

    this.display = function() {
        console.log(`Title: ${this.title}`);
        console.log(`Description: ${this.description}`);
        console.log(`Category: ${this.category}`);
        console.log(`Price: ${this.price}`);
        
    };
}
    const product1 = new product("iphone", "phone", "electronic", 1200);

    product1.display();

