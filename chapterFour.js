/*
Chapter 4 - Data Structures Objects and Arrays - Notes and Exercises
 */

//Holds objects {events : [], squirrel : boolean}
let journal = require('./journal.js');

//events = [string] squirrel = boolean
function addEntry(events, squirrel){
    journal.push({events,squirrel});
}

//table = [] with length of 4 containing values of type number
//Destructure the [] parameter
function phi([n00,n01,n10,n11]){
    return ((n11 * n00) - (n10 * n01))/
        Math.sqrt((n01 + n11) * (n00 + n01) * (n01 + n11) * (n00 + n01));
}



//event = string journal = [{event : boolean}]
function tableFor(event, journal){
    let table = [0,0,0,0];
    for(let i = 0; i < journal.length; i++){
        let entry = journal[i], index = 0;
        if(entry.events.includes(event)) index += 1;
        if(entry.squirrel) index +=2;
        table[index] += 1;

    }
    return table;
}
//Need list of all events to give to tableFor
//Need to loop through that list and create tables with a label
//Need to feed that list of tables with labels to a new method that will compute
//a value and put it with the same label

function journalEvents(journal){
    let events = [];

    for(let entry of journal){
        for(let event of entry.events){
            if(!events.includes(event)) events.push(event);
        }
    }

    return events;
}
//Start of program
//Tells us the strongest correlations in the journal
for(let event of journalEvents(JOURNAL)){
    let correlation = phi(tableFor(event,JOURNAL));
    if(correlation > 0.1 || correlation < - 0.1) console.log(event,correlation);
}

//Test a theory
//Not brushing your teeth and eating peanuts seems to be the strongest correlations
//Add a new entry 'peanut teeth' to days you eat peanuts but don't brush your teeth

for(let entry of JOURNAL){
    if(entry.events.includes('peanuts') && !entry.events.includes('brushed teeth'))
        entry.events.push('peanut teeth');
}

console.log(phi(tableFor('peanut teeth',JOURNAL)));

/*
Chapter 4 Exercises
 */

/*
Exercise 1: The Sum of a Range
 */

function range(start, end, increment = start < end ? 1 : -1){
    let numbers = [];
    if(increment > 0) {
        for (let i = start; i <= end; i += increment) numbers.push(i);
    }else{
        for (let i = start; i >= end; i += increment) numbers.push(i);
    }
    return numbers;
}

function sum(array){
    let total = 0;
    for(let num of array){
        total += num;
    }
    return total;
}

console.log(range(34,1,-2));

/*
Exercise 2: Reversing an Array
 */

function reverse(array){
    let arr = [];
    for(let i = array.length -1; i >=0; i--){
        arr.push(array[i]);
    }
    return arr;
}

function reverseArrayInPlace(array){
    for(let i = 0; i < Math.floor(array.length/2); i++){
        let prev = array[i];
        array[i] = array[(array.length - 1) - i];
        array[(array.length -1) - i] = prev;
    }
    return array;
}

console.log(reverseArrayInPlace([1,2,3,5,6,7,3]))

/*
Exercise 3: A List
 */

let list1 = {
    value : 1,
    rest : {
        value : 2,
        rest : {
            value : 3,
            rest : null
        }
    }
};

function arrayToList(array){
    let list = null;
    for(let i = array.length -1; i >= 0; i--){
        list = {value : array[i], rest : list};
    }
    return list;
}

console.log(arrayToList([1,2,3]))

function listToArray(list){
    let array = [];
    for(let node = list; node; node = node.rest){
        array.push(node.value);
    }
    return array;
}
console.log(listToArray(list1))

/*
Exercise 4: Deep Comparison
 */


function deep(a,b){
    if(a === b) return true;
    if(a == null || typeof a != "object" ||
        b == null || typeof b != "object") return false;

    //gives me an array of the keys for each allowing me to use includes
    let objAKeys = Object.keys(a), objBKeys = Object.keys(b);

    if(objAKeys.length != objBKeys.length) return false;

    for(let key of objAKeys){
        if (!objBKeys.includes(key) || !deep(a[key],b[key])) return false;
    }

    return true;

}

let obj = {value : 1, stuff :2};
let obj2 = {value : 1, stuff : 2};

console.log(deep(2,2));
console.log(deep(obj,obj2));