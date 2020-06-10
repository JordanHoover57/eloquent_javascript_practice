/**
 * Chapter 6: Exercises
 **/

/*
Exercise 1: Vector Object
 */

class Vec{
    constructor(x,y) {
        this.x = x;
        this.y = y;
    }

    plus(vector){
        return new Vec(vector.x + this.x,vector.y + this.y);
    };

    minus(vector){
        return new Vec(vector.x - this.x, vector.y - this.y);
    };

    get length() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
}

let v = new Vec(2,3);
console.log(v.x);
console.log(v.plus({x:2,y:3}));
console.log(v.minus({x:2,y:3}));
console.log(v.length)


/*
Exercise 2: Group
 */

class Group{

    constructor(){
        this.members = [];
    }

    has(value){
        return this.members.includes(value);
    }

    add(value){
        if(!this.has(value)) this.members.push(value)
    }

    delete(value){
        /*
        let index = this.members.indexOf(value);
        if(index == 0){
            this.members.pop();
        }else {
            this.members = this.members.slice(0,index).concat(this.members.slice(index +1));
        }
        //or
         */

        this.members = this.members.filter(i => i != value);
    }

    static from(iterable){
        let group = new Group();
        for(let i of iterable){
            group.add(i);
        }
        return group;

    }

    [Symbol.iterator](){
        return new GroupIterable(this);
    }
}

let g = new Group();
g.add("jordan");
g.add("jordan2");
g.add("jordan3");
g.add("jordan");
g.delete("jordan2")
console.log(g.has("jordan3"));

let str = "There are letters that repeat";
console.log(Group.from(str));

console.log(g);

/*
Exercise 3: Make Group Iterable
 */

class GroupIterable{

    constructor(group) {
        this.group = group;
        this.index = 0;
    }

    next(){
        if(this.index >= this.group.members.length) return {done : true};

        let value = this.group.members[this.index];
        this.index++;
        return {value,done : false};

    }

}
let arr = ["jordan","tony","danica","things","stuff","things"];
let g2 = Group.from(arr);

for(let g of g2){
    console.log(g);
}