"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.add = void 0;
/////enums
var fuel;
(function (fuel) {
    fuel["petrol"] = "rs280";
    fuel["diesel"] = "rs 300";
})(fuel || (fuel = {}));
console.log(fuel.diesel);
////array ki type
let studentinfo = ["  maira", 123, true];
let [fname, rollno, onsite] = studentinfo; ////array destructuring     
console.log(fname, rollno, onsite);
///tuples/// array m data type dyte hn or dusry array me define kryge////sequencial data bolty hn ise 
let stu = ["maira", 1234, true];
console.log(stu[1]);
////nested array in tupleset stu:[string,number,boolean] = ["maira",1234,true]
let student;
student = [["maira", 123, true], ["sherry", 1234, false], ["ani", 12345, true]];
console.log(student[1]);
//////modules
function add(a, b) {
    return a + b;
}
exports.add = add;
///narrowing ye type console karya is se pata chlta h k ye knse type h
let age;
age = 24.00000;
if (typeof age == "number") { ///////ye comma m hi likhyge 
    console.log("this is number");
}
else {
    console.log("this is string");
}
///narrowing ye type console karya is se pata chlta h k ye knse type h
let age1;
age1 = 24.00000;
if (typeof age == "number") {
    console.log(age1.toFixed(2) /////is se ye 24.00 print kryga qk fixed k bd hmne 2 likha hai 
    );
}
else {
    console.log("this is string");
}
///task is se age me 5 plus hojayge
let age2;
age2 = 25.2546738277;
if (typeof age2 == "number") {
    console.log(age2.toFixed(2), age2 + 5);
}
else {
    console.log("ssss");
} ////////math .random smjhna h
let agg;
agg = 23.000;
if (typeof age == "number") {
    console.log(Math.round(agg));
}
else {
    console.log("yes");
}
///////type any    ye sb jaga use hoti h is type me error nh ata q k any k mtlb kch bh hota h but bed treka h ye
let sname = "ali";
sname = 78;
sname = ["hello"];
sname = () => true;
////unknown bh any ki trha hai bs frq itna hai k any m error nh dyga agr neche vriabl m string kryge  
let val;
let val1 = val; ////ok hai mtlb val barabr hai val1 k 
//new unknown////
/*let vel:unknown
let tname:string = vel*/ ////error qk unknown typ h or hm khud type string dy rh hn
////error hi la k dyga iske typ never  hoge
/*function _Error():never {
    throw new Error
}
_Error()*/
/////rest operators ... k bd name dyge iske typ hmesha array hoge isme jtne bh argument dyge ye error nh dyga
function wallet(colour, ...aurgs) {
    console.log(colour, ...aurgs);
}
wallet("red", "nic", "currency", "atm");
