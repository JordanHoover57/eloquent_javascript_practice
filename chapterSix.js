/**
 *Chapter 6
 **/

/**
 * Encapsulation
 **/

function speak(line){
    console.log(`The ${this.type} rabbit says '${line}'`);
}
//This refers to itself. This object is
let whiteRabbit = {type: "white", speak};

// whiteRabbit.speak("get it");

function normalize(){
    console.log(this.coords.map(n => n / this.length));
}

 let obj = {coords : [0,2,3], length : 5};

// normalize.call(obj);

/**
 ProtoTypes
 All objects have a prototype which is just another object with additional properties.
 **/

let empty = {};

console.log(empty.toString());

console.log(Object.getPrototypeOf({}) == Object.prototype)

//Creating a specific prototype

let protoRabbit = {
    speak(line) {
        console.log(`The ${this.type} rabbit says '${line}'`);
    }
};

let killerRabbit = Object.create(protoRabbit);

killerRabbit.type = "killer";

killerRabbit.speak("Skreeechhh");

console.log(Object.getPrototypeOf(killerRabbit) == protoRabbit);

/**
 * Classes
 */

//Prototypes will define properties shared by objects
//Objects will also have their own properties

//Constructor function that sets the type of rabbit and the prototype
function makeRabbit(type){
    let rabbit = Object.create(protoRabbit);
    rabbit.type = type;
    return rabbit;
}


function Rabbit(type){
    this.type = type;
}

Rabbit.prototype.speak = function(line){
    console.log(`The ${this.type} rabbit says '${line}`);
}

let weirdRabbit = new Rabbit("weird");

console.log(Object.getPrototypeOf(weirdRabbit) == Rabbit.prototype);

weirdRabbit.speak("balksdjfa;lkdjf");
