require('./scripts.js')

//Script is an object returns a number representing total
function characterCount(script){
    return script.ranges.reduce((count,[from,to]) => count + (to - from),0);
}

//returns the average of a number array
function average(array){
    return array.reduce((a,b) => a + b)/array.length;
}

//code = number value returns an object containing that code
function characterScript(code){
    for(let script of SCRIPTS){
        if(script.ranges.some(([from,to]) => {
            return code >= from && code < to;
        })){
            return script;
        }//end of if
    }//end of for loop
    return null;
}
//items is an array and groupname is a function that returns a single value to name groups
function countBy(items, groupName){
    //array of objects
    let counts = [];
    for(let item of items){
        //pass each value of passed in array to the passed in function
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
//Text is just a string
function textScripts(text) {
    //scripts will be an object that holds
    let scripts = countBy(text, char => {
        let script = characterScript(char.codePointAt(0));
        return script ? script.name : "none";
    }).filter(s => s.name != "none");

    let total = scripts.reduce((n, {count}) => n + count, 0);
    if (total == 0) return "No scripts found";

    //The map function returns an array and the join turns it into a sting
    return scripts.map(({name, count}) => {
        return `${Math.round(count * 100 / total)}% ${name}`;
    }).join(", ");

}

let x = textScripts('英国的狗说"woof", 俄罗斯的狗说"тяв"');

/*
Chapter 5: Exercises
 */

/*
Flattening
 */

let arr = [[1,2,3],[4,5,6],[7,8,9]];


console.log(arr.reduce((a,b) =>  a.concat(b)))

/*
Loop
 */

function loop(value,test,update,body){
    for(let i = value; test(i);i = update(i)){
        body(i);
    }
}

loop(1,i => i <= 10,i => i + 1,console.log);

/*
Everything
 */

function every(array,test){
    let counter = 0;
    for(let element of array){
        if(test(element)) counter++;
    }
    return counter == array.length;
}

function every2(array,test){
    //If the test submitted to some only returns true if something fails.
    //If nothing fails everything passed the test
    //This returns false so we switch it
    return !array.some(e => !test(e));
}

console.log(every2([2,7,6,8,10],(i) => i % 2 == 0));

/*
Dominant Writing Direction
 */

//input = string
//return a string value representing the dominant writing style of the script
//Each script has a property that states direction

//Text will be SCRIPTS array
function whichDirection(text){
        //scripts will contain {name: script name, count: occurances of script} as array
    let scripts = countBy(text,char => {
        let script = characterScript(char.codePointAt(0));
        return script ? script.direction : "none";
    })

    return scripts.reduce((a,b) => {return a.count > b.count ? a : b }).name;

}

console.log(whichDirection('英国的狗说"woof", 俄罗斯的狗说"тяв"'));
console.log(whichDirection("Hey, مساء الخير"));


