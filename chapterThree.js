// console.log("chapter 3")
// //Declaration notation
//
// square(4);
//
// function square(x){
//     return x*x;
// }
//
// function printFarmInventory(cows,chickens){
//     let cowString = String(cows);
//     while(cowString.length < 3){
//         cowString = "0" + cowString;
//     }
//     console.log(`${cowString} cows`)
//
//     let chickenString = String(chickens);
//     while(chickenString.length < 3){
//         chickenString = "0" + chickenString;
//     }
//     console.log(`${chickenString} chickens`)
// }
//
// printFarmInventory(4,10)

//Chapter 3 Exercise 1
//Create a minimum function that takes 2 arguments and returns the minimum value

let min = (num1, num2) => {return num1 > num2 ? num2 : num1;}

console.log(min(234,504));

// Zero is even.
// One is odd.
// For any other number N, its evenness is the same as N - 2.
//Define a recursive function isEven corresponding to this description.
 function isEven(num){
    if(num == 0) return true
    else if(num == 1) return false
    else if(num < 0) return isEven(num + 2)
    else return isEven(num -2)
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-6));

//Bean Counter

function countBs(s){
    let count = 0;
    for(i = 0; i <= s.length -1;i++){
        if(s[i] === 'B') count++
    }
    return count
}

console.log(countBs('BigBadBBB'))

function countChar(str, char){
    let count = 0;
    for(i = 0; i <= str.length -1;i++){
        if(str[i] === char) count++
    }
    return count;
}

console.log(countChar('BigBadXXX','B'))
