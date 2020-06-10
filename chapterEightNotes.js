//Using this in a function that is NOT a method
//This will refer to the global bindings object
//the new keyword assigns the instnace of the object
//to the this binding. by using use strict it will catch this missing new

function Person(name){this.name = name};

let jordan = Person("J-biggly");

console.log(name)

/**
 * Example of try catch block
 *
 */

class InputError extends Error {};

function promptDirection(question){
    let result = "jg";
    if(result.toLowerCase() == "left") return "L";
    if(result.toLowerCase() == "right") return "R";
    throw new InputError("Invalid direction: " + result);
}

//Look() doesn't handle the exception at all. The try block does that.
function look(){
    if(promptDirection("Which way?") == "L"){
        return "a house";
    }else{
        return "two angry bears";
    }
}

try{
    console.log("you see", look());
}catch(error){
    console.log("Something went wrong: " + error.stack);
}

/**
 * Cleaning Up after Exceptions
 */
//By ignoring the error binding we get the same message for all exceptions thrown a bad input but
//Below its the mispelling of a function name that is causing the error by assigned undefined to dir
for (;;) {
    try {
        let dir = promptDirection("Where?"); // ← typo!
        console.log("You chose ", dir);
        break;
    } catch (e) {
        if(e instanceof InputError){
            console.log("Not a valid direction. Try again.");
        }else{
            throw e;
        }

    }
}



