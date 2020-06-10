let reg1 = /jorda*n/;

console.log(reg1.test("jordan"))

let dateTime = /\d-\d{2}-\d{4} \d:\d{2}/
console.log(dateTime.test("1-30-2003 8:45"));

let grouping = /jor(dan)+/i;
console.log(grouping.test("joRdandanDan"));
let m = grouping.exec("joRdandanDan");





