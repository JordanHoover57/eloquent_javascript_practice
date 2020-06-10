/**
 Chapter 6
 **/

//Empty Object
let rabbit = {};

//a regular function that will be used as a method
function speak(line){
    console.log(`The ${this.type} rabbit says ${line}`);
}

//Creating an object and assigning it a method
let whiteRabbit = {type : "white", speak};

//Example of wrapped function having access to 'this' binding
//If the function had been declared with the keyword it does not have this vision into other scopes
function normalize(){
    console.log(this.coords.map((n) => { return n/ this.length}));
}

//Example of an Objects prototype
console.log(Object.getPrototypeOf(Math) == Object.prototype);

//How to assign a prototype and assign property values to an object instance manually
let protoHero = {
    heroType : "Super Hero",

    talk(phrase){
        console.log(`The ${this.type} hero says ${phrase}`);
    }
}//End Proto

let fireHero = Object.create(protoHero);

fireHero.type = "Fire";

fireHero.talk("let it burn");
console.log(Object.getPrototypeOf(fireHero));
//End of building object instance manually

//Constructor function to assign a value to an object instances property
//This does what line 36 does but allows us to create instances of an object instead of having to specify
//the object binding directly
function Creator(propVal){
    this.prop1 = propVal;
}

//Assign properties to the prototype object otherwise the newly created object has an empty prototype object
Creator.prototype.prop2 = "value2";

//The new keyword in front of a function turns it into a constructor function that:
//Creates an object instance of 'Creator' and assigns that reference to the 'this' binding of the constructor
//function. It also assigns the instance a prototype property. An object that derives from the Functions prototype
//property.
let c = new Creator("value1");

console.log(`Prop 1 is ${c.prop1} and prop 2 is ${c.prop2}`);
//The Prototype assigned to the object by the constructor function
console.log(Object.getPrototypeOf(c));
//The Prototype of the Creator function (constructor function)
console.log(Object.getPrototypeOf(Creator));
//The prototype property of the Constructor function
console.log(Creator.prototype);

//The class keyword binds the constructor function to the class name in this case Hero
//
class Hero {
    constructor(type) {
        this.type = type;
    }

    //By using the class keyword you add this method to the prototype. Hero is the Prototype of all instances.
    //It's kind of meta but the class is a blueprint for the objects it creates but those objects can
    //also have unique properties. But they all come with certain things based on intial specs
    speak(line){
        console.log(`This ${this.type} of hero says ${line}`);
    }
}

let arr = [1,2,3];

console.log(arr.toString());
console.log(Object.prototype.toString.call(arr));


//Create an object without a prototype -- makes it useful as a map
//in is a binary boolean operator that returns a boolean if the value is a property name of the object
console.log("toString" in Object.create(null));

class pro{
    constructor(type) {
        this.type = type;
    }

    toString(){
        console.log(`${this.type}'s are the best type of pro!`)
    }

}

let p = new pro("jim ham");
p.thingz = "thingy do";

let str = "String of letters";
let iter = str[Symbol.iterator]();


class Matrix{
    constructor(width,height,element = (x,y) => undefined) {
        this.width = width;
        this.height = height;
        this.content = [];

        for(let y = 0; y < height; y++){
            for(let x = 0; x < width; x++){
                this.content[y * width + x] = element(x,y);
            }
        }
    }

    get(x,y){
        return this.content[y * this.width + x];
    }

    set(x,y,value){
        this.content[y * this.width + x] = value;
    }
    //Use a symbol to represent the binding name of iterator
    //When called on a matrix object this will return a new iterator object with
    //a next interface and a reference to the object it was called on
    [Symbol.iterator](){
        return new MatrixIterator(this);
    }

    get size(){
        return this.content.length;
    }

}

class MatrixIterator{
    constructor(matrix) {
        this.x = 0;
        this.y = 0;
        this.matrix = matrix;
    }

    next(){
        if(this.y == this.matrix.height) return {done : true};

        let value = this.matrix.get(this.x,this.y);
        this.x++;

        if(this.x == this.matrix.width){
            this.x = 0;
            this.y++;
        }
        return {value, done : false};
    }


}

let neo = new Matrix(5,5,
    (x,y) => {return {location : {height : y, width : x}, value : `${x + y}` }});

for(let n of neo){
    console.log(n);
}

class Temperature{
    constructor(celsius) {
        this.celsius = celsius;
    }

    get fahrenheit(){
        return this.celsius * 1.8 + 32
    }

    set fahrenheit(value){
        this.celsius = (value - 32) / 1.8;
    }

    static fromFahrenheit(value){
        return new Temperature((value - 32) /1.8);
    }

}

let t = new Temperature(32);
t.fahrenheit = 32;
console.log(t.celsius);

let temp = Temperature.fromFahrenheit(32);

console.log(temp)
