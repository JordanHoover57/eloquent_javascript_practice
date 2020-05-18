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

/** Chapter 6 Exercises **/

/*
Write a class Vec that represents a vector in two-dimensional space. It takes
x and y parameters (numbers), which it should save to properties of the same
name.
Give the Vec prototype two methods, plus and minus, that take another
vector as a parameter and return a new vector that has the sum or difference
of the two vectors’ (this and the parameter) x and y values.
Add a getter property length to the prototype that computes the length of
the vector—that is, the distance of the point (x, y) from the origin (0, 0).
 */

class Vec{
    constructor(x,y) {
        this.x = x;
        this.y = y;
    }

    plus(vec){
        return new Vec(this.x + vec.x, this.y + vec.y);
    }
    minus(vec){
        return new Vec(this.x - vec.x, this.y - vec.y);
    }

    get length(){
        return Math.sqrt(this.x * this.x + this.y * this.y)
    }
}

/*
Write a class called Group (since Set is already taken). Like Set, it has add,
    delete, and has methods. Its constructor creates an empty group, add adds
a value to the group (but only if it isn’t already a member), delete removes
its argument from the group (if it was a member), and has returns a Boolean
value indicating whether its argument is a member of the group.
    Use the === operator, or something equivalent such as indexOf, to determine
whether two values are the same.
    Give the class a static from method that takes an iterable object as argument
and creates a group that contains all the values produced by iterating over it.

 */

class Group{
    constructor() {
        this.members = [];
    }

    add(element){
        if(!this.has(element)){
            this.members.push(element);
        }
    }

    delete(element){
        if(this.has(element)){
           this.members = this.members.filter(e => e != element);
        }

    }

    has(element){
        for(let i = 0; i < this.members.length; i++){
            if(this.members[i] === element){
                return true;
            }
        }
        return false;
    }

    static from(iter){
        let g = new Group();
        iter.forEach(e => g.add(e));

        return g;
    }
}

/*
If you used an array to represent the group’s members, don’t just return the
iterator created by calling the Symbol.iterator method on the array. That
would work, but it defeats the purpose of this exercise.
It is okay if your iterator behaves strangely when the group is modified during
iteration.
 */

class GroupIterator{

    constructor(group) {
        this.members = [];
        this.group = group;
    }


}

/*
Can you think of a way to call hasOwnProperty on an object that has its own property by that name?
 */

//Creates a method that can be shared by all rabits that use this prototype
let protoRabbit = {
    speak(input){
        console.log(`The object says ${input}`);
    }
}

//Creates an object with the new proto type allowing us to share the method with all rabbits
let killerRabbit = Object.create(protoRabbit);
killerRabbit.type = "killer";
killerRabbit.speak("Ahhh");

/*
The below is the constructor function or at least what a constructor function does. It sets
the prototype of the object and then populates values for properties
 */

function makeRabbit(type){
    let rabbit = Object.create(protoRabbit);
    rabbit.type = type;
    return rabbit;
}

/*
We can simplify even more by using the new key word
 */

function Rabbit(type){
    this.type = type;
}

Rabbit.prototype.speak = function(line){
    console.log(`The ${this.type} rabbit says ${line}`);
}

Rabbit.prototype.hop = function(){
    console.log(`The ${this.type} rabbit has hopped`);
}

let strangeRabbit = new Rabbit('strange');
strangeRabbit.speak("blah blah");

console.log(Object.getPrototypeOf(Rabbit) == Function.prototype);
console.log(Object.getPrototypeOf(strangeRabbit) == Rabbit.prototype);

/*
Or we can use the class key word and abstract even further
 */

class Rabbit{
    constructor(type) {
        this.type = type;
    }

    speak(line){
        console.log(`The ${this.type} says ${line}`)
    }
}


