require('./journal.js')
// //Chapter 4 Notes
//
// //expression vs statement
//
// //values vs properties
// /*
// A value is bound to a placeholder a binding or variable
// The value has properties. A string has a value "WhateverTheStringSays" and that value has properties
// like how long it is.
//
// dot notation vs bracket notation
//  */
//
// //Bracket vs dot notation example
// let x = "length";
// let myString = "Jordan";
//
// console.log("Calling length with dot notation: ", myString.length);
// console.log("Calling length with bracket notation: ", myString[x]);
//
// //Objects
//
// let day1 ={
//     squirrel : false,
//     events : ["work","run","pizza","touch tree"]
// };
//
// console.log(day1.squirrel);
// day1.wolf = false;
// console.log(day1.wolf);
//
//
// //Mutability
// //A binding can point to a value or a new value but the value itself does not change
// //A const binding always looks at the same object but the objects props can change
//
// const score = {v : 0, h : 0};
// score.v = 1;
// //score = {v:1,h:2};
// console.log(score)
//
// //The Journal
//
// let journal = [];
//
// //List just the property name and js will infere the values of the name from the binding passed in
// function addEntry(events,squirrel){
//     journal.push({events,squirrel});
// }
//
// addEntry(["work","dance","sleep"],false);
// addEntry(["work","eat","Sleep"]), true);


//JOURNAL EXERCISE
//Journal is an array of logs and logs are events and a boolean value
//Table is a 4 digit array representing a 2 x 2 table
//Returns the calculated correlation value
// function phi(table) {
//     return (table[3] * table[0] - table[2] * table[1]) /
//         Math.sqrt((table[2] + table[3]) *
//             (table[0] + table[1]) *
//             (table[1] + table[3]) *
//             (table[0] + table[2]));
// }
//
// function phi2([n00,n01,n10,n11]){
//     return (n11 * n00 - n10 * n01) / Math.sqrt((n10 + n11) * (n00 + n01) * (n01 + n11) * (n00 + n10));
// }
//
// //console.log(phi([76,9,4,1]));
//
// //Creates a 4 element array that represents the 2x2 table passed to phi
// function tableFor(event, journal) {
//     let table = [0,0,0,0];
//     for(let i = 0; i < journal.length; i++){
//         let entry = journal[i], index = 0;
//         if(entry.events.includes(event)) index +=1;
//         if(entry.squirrel) index +=2;
//         table[index] += 1;
//     }
//     return table;
// }
//
// //console.log(tableFor("pizza",JOURNAL));
//
// function journalEvents(journal){
//     let events = [];
//     for(let entry of journal){
//         for(let event of entry.events){
//             if (!events.includes(event)){
//                 events.push(event);
//             }
//         }//events
//     }//entry
//     return events;
// }
//
// //console.log(journalEvents(JOURNAL));
//
// for(let event of journalEvents(JOURNAL)){
//     let correlation = phi(tableFor(event,JOURNAL));
//     if(correlation > 0.1 || correlation < -0.1){
//         console.log(event + ":", correlation);
//     }
// }
//
// //Find the two largest correlations
//
// for(let entry of JOURNAL) {
//     if(entry.events.includes("peanuts") && !entry.events.includes("brushed teeth")){
//         entry.events.push("peanut teeth");
//     }
// }
// console.log("The correlation between peanuts and teethbrushing is",phi(tableFor("peanut teeth",JOURNAL)));

//JSON EXAMPLES

// let string = JSON.stringify({squirrel: false, events: ["weekend"]});
//
// console.log(string);
//
// console.log(JSON.parse(string));
//
// //CHAPTER 4 Exercises
// //Range Function
//
// function range(arg1, arg2, arg3){
//     let returnArray = [];
//     let increment = 1;
//     if(arg3 != null && arg3 != undefined){
//         increment = arg3;
//     }
//
//     if(arg3 > 0){
//         for(let i = arg1; i <= arg2; i += increment){
//             returnArray.push(i);
//         }
//     }else{
//         for(let i = arg1; i >= arg2; i += increment){
//             returnArray.push(i);
//         }
//     }
//     return returnArray;
// }
//
// function cleanRange(start, end, step = start < end ? 1 : -1){
//     let array = [];
//     if(step > 0){
//         for(let i = start; i <= end; i += step) returnArray.push(i);
//     }else{
//         for(let i = start; i >= end; i += step) returnArray.push(i);
//     }
//     return array;
// }
//
// //Sum Function
//
// function sum(inputArray){
//     let total = 0;
//     for(let input of inputArray){
//         total += input;
//     }
//     return total;
// }
//
// console.log(range(20,2,-2))
// console.log(sum([1,2,3,4,5,6,7,8,9,10]));
//
// //Reversing an Array
//
// function reverseArray(array){
//     let reversed = [];
//     for(let i = array.length-1; i >=0; i--){
//         reversed.push(array[i]);
//     }
//     return reversed;
// }
//
// console.log(reverseArray([1,2,3,4,5,6]));
//
// function reverseInPlace(array){
//     for(let i = 0; i < Math.floor(array.length/2); i++){
//         let old = array[i];
//         array[i] = array[array.length -1 -i];
//         array[array.length -1 -i] = old;
//     }
//     return array;
// }
//
// console.log(reverseInPlace([1,2,3,4,5]));

//Deep Comparison

function deepEqual(val1, val2){
    //if the values are the same value or reference value return true
    if(val1 === val2) return true;
    //if either value is null or not an object return false;
    if(val1 == null || typeof val1 != "object" || val2 == null || typeof val2 != "object") return false;
    //we know we have 2 objects so we get the array of properties
    let val1Keys = Object.keys(val1), val2Keys = Object.keys(val2);
    //if the list of properties is different the objects aren't the same
    if(val1Keys.length != val2Keys.length) return false;
    //both are objects and both have same size list of properties
    //Now we compare each property if the property is only in one list return false
    //if the property
    for(let key of val1Keys){
        if(!val2Keys.includes(key) || !deepEqual(val1[key],val2[key])) return false;
    }
    return true;
}

// == compares identity so value must be exactly the same

let object1 = {name : "jordan", val: 10};
let object2 = {name : "danica", val: 20};
let object3 = {name : "jordan", val: 10};


console.log(deepEqual(object1,object2));
console.log(deepEqual(object1,object3));
console.log(deepEqual(object3,object3));