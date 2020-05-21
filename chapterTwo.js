/*
Chapter 2 Exercise Solutions
 */

//Loop a Triangle - Write a program that calls console.log (7) times outputting a # as a pyramid

for(let str = "#"; str.length <= 7; str = str + "#"){
    console.log(str);
};

/*
Explanation:
Using the for loop we create a string binding that will grasp a new value
after each loop. As long as the string is under 7 characters in length the loop
will continue to output to console.
 */

//Fizz Buzz - Print all numbers 1 - 100 to screen, If divisible by 3 - Fizz 5 - Buzz 3 and 5 -FizzBuzz

for(let i = 1; i <= 100; i++){
    let output = "";
    if(i % 3 == 0) output += "Fizz";
    if(i % 5 == 0) output += "Buzz";
    console.log(output || i);
}

/*
Explanation:
Each loop through we set output to null. We update output if divisible by 3 or 5 or 3 and 5.
If it's divisible by 3 output is Fizz, it's not divisible by 5 so we output Fizz
If it's divisible by both we append Buzz to Fizz and output.
If it's not divisible by any of these numbers we do a comparison and output the value returned
from the logical expression.
 */

//Chessboard - Create an 8 by 8 grid using #

let dimension = 12;
let output = "";

for(let i = 0; i < dimension; i++){
    for(let j = 0; j < dimension; j++){
        if((j + i) % 2 == 0){
            output += " ";
        }else{
            output += "#"
        }
    }
    output += "\n";
}

console.log(output);

/*
Explanation:
The first loop determines the length of the row and when a new line will be added.
The nested loop looks at each location in the row and if its even gets a space odd a character
It will build x number of rows with x number of elements per row.
The first loop uses it's counter to essentially act as the row counter and the second loop is
the character counter. First time through we are on row 0 index 0 then row 0 index 1 etc...
 */