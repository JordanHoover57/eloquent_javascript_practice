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

//Journal is an array of logs and logs are events and a boolean
//Set an empty table

function phi(table) {
    return (table[3] * table[0] - table[2] * table[1]) /
        Math.sqrt((table[2] + table[3]) *
            (table[0] + table[1]) *
            (table[1] + table[3]) *
            (table[0] + table[2]));
}

//console.log(phi([76,9,4,1]));

function tableFor(event, journal) {
    let table = [0,0,0,0];
    for(let i = 0; i < journal.length; i++){
        let entry = journal[i], index = 0;
        if(entry.events.includes(event)) index +=1;
        if(entry.squirrel) index +=2;
        table[index] += 1;
    }
    return table;
}

//console.log(tableFor("pizza",JOURNAL));

function journalEvents(journal){
    let events = [];
    for(let entry of journal){
        for(let event of entry.events){
            if (!events.includes(event)){
                events.push(event);
            }
        }//events
    }//entry
    return events;
}

//console.log(journalEvents(JOURNAL));

for(let event of journalEvents(JOURNAL)){
    console.log(event + ":", phi(tableFor(event,JOURNAL)));

}

