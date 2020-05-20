require('./scripts.js')

/**
Higher Order Functions
 */

function repeat(n,action){
    for(let i = 0; i < n; i++){
        action(i);
    }
}

// repeat(5,console.log);

let labels = [];
repeat(5, i => {
    labels.push(`Unit ${i + 1}`);
});

// console.log(labels);

//returns a function
function greaterThan(n){
    return m => m > n;
}

//Bind the anonymous function value with n = 10 to greaterThanTen
let greaterThanTen = greaterThan(10);

//Calling the binding and passing in 'm'
// console.log(greaterThanTen(5));
// console.log(greaterThanTen(11));

function noisy(f){
    return (...args) => {
        console.log("calling with", args);
        let result = f(...args);
        console.log("called with", args, ", returned", result);
        return result;
    };
}

let meth = noisy(Math.min);

// console.log(meth(1,3,5));
// console.log(noisy(Math.min)(11,4,9))


function unless(test,then){
    if(!test) then();
}

// console.log(repeat(3, n => {
//     unless(n % 2 ==1, () => {
//         console.log(n, "is even");
//     });
// }))

/**
 * Filtering of Arrays
 * Filter creates a new array from the passed in array of elements that pass the boolean test
 */

//Find the scripts in the data set that are still being used

function filter(array,test){
    let passed = [];
    //Loop through array and if it passes the test add to passed
    for(let element of array){
        if(test(element)){
            passed.push(element);
        }
    }
    return passed;
}

function testy(element){
    return element.living;
}

// console.log(filter(SCRIPTS,e => e.living));
// console.log(filter(SCRIPTS,testy));
//console.log(SCRIPTS.filter(s => s.direction == "ttb"));

/**
 * Mapping Transforming
 * Transforms the elements of an array based on transformer and creates a new array of the transformed values
 */

function map(array,transformer){
    let mapped = [];
    for(let element of array){
        mapped.push(transformer(element));
    }
    return mapped;
}

// console.log(map(SCRIPTS,e => {return e.name;}))

//console.log(SCRIPTS.filter(s => s.direction == "ttb").map(e => {return e.name;}));

/**
 * Reduce
 * Used to summarize
 */

function reduce(array, combine, start){
    let current = start;
    for(let element of array){
        current = combine(current,element);
    }
    return current;
}

// console.log(reduce([1,2,3,4],(a,b) => a + b, 100));
// console.log([1,2,3,4].reduce((a,b) => a + b));

//If you don't specify a starting value for a or count in this instance
//Then it will default to the first value of the array
//count is essentially wha tyou return
function characterCount(script){
    //a single scripts ranges array
    return script.ranges.reduce((count, [from,to]) => {
        return count + (to - from);
    }, 0);
}

// console.log(SCRIPTS.reduce((a,b) => {
//     return characterCount(a) < characterCount(b) ? b : a;
// }));


function combine(count,[from,to]){
    return count + (to - from);
}

/**
 * Strings and Character Codes
 */
//what script a code comes from
function characterScript(code){
    for(let script of SCRIPTS){
        if(script.ranges.some(([from,to]) => {
            return code >= from && code < to;
        })) {
            return script;
        }
    }
    return null;
}

//console.log(characterScript(121));

function countBy(items, groupName){
    let counts = [];
    for(let item of items){
        let name = groupName(item);
        let known = counts.findIndex(c => c.name == name);
        if(known == -1){
            counts.push({name, count: 1});
        }else{
            counts[known].count++;
        }
    }
    return counts;
}

//console.log(countBy([1,2,3,4,5], n => n>2));

function textScripts(text){
    let scripts = countBy(text, char =>{
        let script = characterScript(char.codePointAt(0));
        return script ? script.name : "none";
    }).filter(({name}) => name != "none");

    let total = scripts.reduce((n, {count}) => n + count, 0);
    if(total ==0) return "No Scripts found";

    return scripts.map(({name, count}) => {
        return `${Math.round(count * 100/ total)}% ${name}`;
    }).join(", ");
}

console.log(textScripts('String'));


/**
 *Exercises Chapter 5
 */

/**
 *Flattening
 */
//Data to test
let arrayOfArrays = [[1,2,3],[4,5,6],[7,8,9],[10,11]]
let arrayOfArrays2 = [["jordan","is"],["listening","to","a"],["new","album"]];

//Function to pass to reduce
let concat = (a,b) => a.concat(b);

// console.log(arrayOfArrays.reduce(concat));
// console.log(arrayOfArrays2.reduce(concat));

/**
 * Your Own Loop
 */

function loop(start, test, update, body){
    for(let value = start; test(value); value = update(value)){
        body(value);
    }
}

// loop(3, n => n > 0, n => n - 1, console.log);
// loop(10,n => n > 0, n => n -1, console.log);

/**
 * Everything
 */

function every(array, predicate){
    for(let element of array){
        if(!predicate(element)){
            return false;
        }
    }
    return true;
}

let a = [2,4,6,8,10];
let s = ["string","string","string"];

let pred = n => n % 2 == 0;
let preds = n => n.length == 6;

console.log(every(a,pred));
console.log(every(s,preds));

function everyTwo(array, predicate){
    return !array.some(element => !predicate(element));
}

console.log(everyTwo(a,pred))

/**
 * Dominant Writing Direction
 */



