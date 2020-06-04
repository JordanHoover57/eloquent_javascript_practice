/*
Chapter 3 - Functions - Notes and Exercises
 */

/*
Exercise 1: Minimum
Write a function 'min' that takes two arguments and returns the smaller of the two values.
 */

function min(a,b){
   return (a < b) ? a : b;
}

console.log(min(4,8));
console.log(min(-4,10));
console.log(min(-4,-7));

/*
Exercise 2: Recursion
Write a recursive function to determine whether a number is even or odd only argument will be
whole positive number and it must return a boolean.
 */


function isEven(num){
    if(num == 0) return true;
    else if(num == 1) return false;
    //Convert a negative into a positive
    else if(num < 0) return isEven(-num);
    else return isEven(num - 2);
}

console.log(isEven(-4));
console.log(isEven(33));

/*
Exercise 3: Bean Counting
Write a function to count the number of 'B's' in a string
 */

function countChars(str, character){
    let count = 0;
    for(let i = 0; i < str.length -1; i++){
        if(str[i] == character){
            count++;
        }
    }
    return count;
}


console.log(countChars("Brad Better Be Back","a"));