require('./scripts.js')

//Repeat: n = number action = function that takes number argument
function repeat(n,action){
    for(let i = 0; i < n; i++){
        action(i);
    }
}


function greaterThan(n){
    return m => m > n;
}

let greaterThan10 = greaterThan(10);

console.log(greaterThan10(5));

function noisy(f){
    return (...args) => {
        console.log("calling with", args);
        let result = f(...args);
        console.log("called with", args, ", returned", result);
        return result;
    }
}

noisy(Math.min)(1,2,3,4,5);

//Unless test =expression that returns boolean then = function
function unless(test, then){
    if(!test) then();
}

repeat(3, n => {
    unless(n % 2 ==1, () => console.log(n, "is even"))
});

repeat(10, n => {
    unless(n % 2 == 0, () => console.log(n));
})


//Create function that takes an array and a test function and returns a
//new array of values that pass the test

function filter(array,test){
    //Create a new array to populate and return
    let passed = [];
    //Apply the test to each element of the array, if passes add to return array
    for(let element of array){
        if(test(element)){
            passed.push(element);
        }
    }
    return passed;
}



//console.log(SCRIPTS.filter(i => i.living));

//Create a function that takes an array and creates a new array based on the
//values returned from a passed in function

function map(array,transform){
    let mapped = [];
    for(let element of array){
        mapped.push(transform(element));
    }
    return mapped;
}

//console.log(SCRIPTS.map(e => {return {name : e.name, alive : e.living}}));

//Reduce

//Array is an array, combine is a function, start is a number
function reduce(array,combine,start){

    let current = start;

    for(let element of array){
        current = combine(current,element);
    }

    return current;
}