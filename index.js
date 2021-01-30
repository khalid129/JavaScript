// 🙋‍♂️
// 👍 👍 👍 👍 JavaScript 👍 👍 👍 👍  💯
// 1️⃣    Variable in JavaScript
// (Key) (Name) = (Value)
// ☝️ is a pattern to declare a variable a in javascript


// 👉   🔑 in javascript are Var, Const ,let
// var myName ="Khalid"
// console.log(myName);

// 2️⃣    Data type in JavaScript

// 🔢
// var value1 = 2;
// var value2 = 10.5;
// var value3 = true;
// var value4 = null;  // 👉 (It give data type object which is a bug)
// var value5;
// var myName = "Khalid";

// 📰 👇👇👇👇👇👇
// console.log(typeof(value1));
// console.log(typeof(value2));
// console.log(typeof(value3));
// console.log(typeof(value4));
// console.log(typeof(value5));
// console.log(typeof(myName));

// 🔺 NULL Vs Undefined 🔺
// 💡 A variable is declare but not assign a value is called an undefined variable
// 💡 A variable is daclare and assigned a value Null to it so it called Null variable

// Refrence ☝️
// var value1 = null;
// console.log(value1);

// Reference ☝️
// var value2 ;
// console.log(value2);

// 3️⃣    Expression and Operation

// 💡 Expression is combination of Operand and an Operation

// 🤔
// console.log(10+ "20"); 
// 👉 When a Number and a string is Add so Console concatenate it no an Add;

// 🤔
// console.log("Muhammad "+"Khalid");
// 👉 when two string are add so it would be concetenate

// 🤔
// console.log("20"-10);
// 👉 When a Number string and a number would be subtract so it would be subtract which is a bugs in javascript

// 🤔
// console.log("Khalid"-10);
// console.log("Muhammad "-"Khalid");
// 👉 When a string and number or a string and string would be subtracted so it would be give a NaN which is Not a Number

// 💡 Use of NaN
// 💡 NaN is global property of a Variable

// 🔒🔐🔐🔒
// var myName = "khalid";
// var myPhoneNumber = 1234567890;

// 🌟🌟🌟🌟🌟

// if(isNaN(myPhoneNumber)){
//     console.log("please enter a number");
// }
// else{
//     console.log("You enter a valid number");
// }

// 4️⃣    Assignment Operator ( = )

// var value1 = 10;
// console.log(value1);

// 5️⃣     Increment ( ++ ) Decerement ( -- )  Operator 👇👇👇

// 📔
// var num = 5;
// console.log(num++);
// Post Increment ☝️
// console.log(num);

// 📔
// var num =5; 
// console.log(++num);
// Pre Incremnet ☝️
// console.log(num);

// 📔
// var num = 5 ;
// console.log(num--);
// Post Decrement ☝️
// console.log(num);

// 📔
// var num = 5;
// console.log(--num);
// Pre Decrement ☝️
// console.log(num);

// 6️⃣ Comparision Operator ( <=,>=,<,>,!=,==) 👇👇👇

// var value1 = 10;
// var value2 = -10;

// 📔
// console.log(value1==value2);
// Equality Operator ☝️

// 📔
// console.log(value1>value2);
// Greater than operator ☝️

// 📔
// console.log(value1<value2);
// Less than operator ☝️

// 📔
// console.log(value1<=value2);
// Less than equalto Operator ☝️

// 📔
// console.log(value1>=value2);
// Greater than equalto operator ☝️

// 📔
// console.log(value1!=value2);
// Not Equalto operator ☝️

// 7️⃣    Logical Operator 👇👇👇

// 📔
// console.log(value1>0 && value2 <0);
// 👉 AND operator

// console.log(value1>=0 || value2 !=0);
// 👉 OR operator

// console.log(!(value1>=0 || value2 !=0));
// 👉 NOT Operator

// 8️⃣    String Operator 👇👇👇

// 👉 The concetenation operator is ( + ) which concetenate two string value and return  a single string
 
// 🌟🌟🌟🌟🌟
// var myFirstName = "Muhammad ";
// var myLastName = "Khalid";
// console.log(myFirstName+myLastName);
// console.log(`My Name is ${myFirstName+myLastName}`);

// 🤩🤩🤩🤩 CHALANGE 🤩🤩🤩🤩

// 💡 console.log(3**3);  //3*3*3
// 💡 Double * mean it act as a exponential it called exponentiation operator

// 🌟🌟🌟🌟🌟
// console.log(10**-1);  /*It will give negative power*/

// 📑 SWAP TWO NUMBER

// 🌟🌟🌟🌟🌟
// var a =10;
// var b =5;
// var temp ;
// console.log("Value of a and b before swap is ",a,b);
// // Output a=5 b=10
// temp = a;
// a = b;
// b = temp;
// console.log("Value of a and b after swap is ",a,b);

// 😃😃     SWAP A VARIABLE WITHOUT A 3RD VARIABLE   👇👇👇

//  a = a+b;   
//  a=15 ☝️
//  b = a-b;  
//  b=10 ☝️
//  a = a-b; 
//  a=5 ☝️
// console.log("Value of a and b after swap is ",a,b);

// ⏱ 💯 DIFFERENCE BETWEEN ( == ) & (===) ⏱️ 💯 

// var num1 = 5;       // 👈 Number
// var num2 = '5';     // 👈 String
// console.log(num1==num2);
// 💡 Double = ( == ) check value only not a data type;

// 🌟🌟🌟🌟🌟🌟🌟
// console.log(num1===num2);
// 💡 Triple = (===) check value and datatyoe as well;


// 💯 CONTROL STATEMENT AND LOOP STATEMENT 💯

// 1️⃣    If Else Statement 
// 💡 If statement execute the statement when it its condition is true 
// 💡 If statement is false so Else statement would be execute

// 🌟🌟🌟🌟🌟🌟🌟
// var tmr = 'rain';
// if (tmr=='rain'){
//     console.log("Use Raincoat because it is rain");
// }
// else{
//     console.log('No need to use a Raincoat');
// }

// 🌟🌟🌟🌟🌟🌟🌟
// Leap Year
// A year which is Exactly divisible by 4 and Not Exactly Divisible by 100  
// var leapYear = 2100
// debugger;
// if (leapYear % 4 ===0){
//     if(leapYear % 100 ===0){
//         if(leapYear % 400 ===0){
//             console.log(`The Year ${leapYear} is a leap year`);
//         }
//         else{
//             console.log(`The Year ${leapYear} is a not leap year`);
//         }
//     }
//     else{
//         console.log(`The Year ${leapYear} is a leap year`);
//     }
// }
// else{
//     console.log(`The year ${LeapYear} is not a leap year`);
// }

// 2️⃣     Falsy Values in JavaScript 
// 💡💡 0, "", undefined, null, NaN these are falsy value 💡💡

// 🌟🌟🌟🌟🌟🌟🌟
// if(score = 0){ //if(0,undefined,null,"",NaN)
//     console.log('We loss the match');
// }
// If wala part console nh karwaega Q k score me 0 assign h or ye false h
// else{
//     console.log('We won the match');
// } 

// 3️⃣    CONDITIONAL TERNARY OPERATOR
// 💡 Conditional ternory operator take three operands
// 💡 variablename = (Condition)?(Value1):(Value2)

// 🌟🌟🌟🌟🌟🌟🌟
// var age = 18
// debugger;
// console.log((age>18)?"You can vote":"You can not voted"); 
// var turn = (age=18)?(console.log('you can vote')):(console.log('you can not vote'));
// console.log(turn);

// 4️⃣    SWITCH STATEMENT

// 🌟🌟🌟🌟🌟🌟🌟
// Area of Circle
// var l=2, b=3, r=4, PI = 3.142;
// var area = 'square';
// if(area=='circle'){
//     console.log(`An area of the circle is ${(PI*r**2).toFixed(2)}`);
// }
// else if(area=='triangle'){
//     console.log(`An area of tht triangle is ${(l*b)/2}`);
// }
// else if(area=='rectangle'){
//     console.log(`An area of the rectangle is ${l*b}`);
// }
// else{
//     console.log('Enter a valid data');
// }

// 🌟🌟🌟🌟🌟🌟🌟
// var l = 2, b = 3, r = 4, PI = 3.142;
// var area = 'rectangle';
// switch (area) {
//     case 'circle': {
//         console.log(`An area of the circle is ${(PI * r ** 2).toFixed(2)}`);
//         break;
//     }
//     case 'triangle':{
//         console.log(`An area of tht triangle is ${(l*b)/2}`);
//         break;
//     }
//     case 'rectangle':{
//         console.log(`An area of the rectangle is ${l*b}`);
//         break;
//     }
//     default:{
//         console.log('Enter a valid data');
//     }
// }

// 💡 Break use to terminate the current loop, switch, label
// 💡 statement transfer program control to the statement. 

// 5️⃣ WHILE LOOP ➿➿

// 💡 While loop execute a specified statemnet as long as condition is true

// 🌟🌟🌟🌟🌟🌟🌟
// var num = 20;
// while(num<=10){             // 👈 This is a block scope
//     console.log(`${num}`);
//     num++;
// }
// console.log(`While is not running`);

// var num =1;
// do{
//     debugger;
//     console.log(`${num}`);
//     num++;
// }
// while(num<=10)

// 🌟🌟🌟🌟🌟🌟🌟
// 👉 Difference between While and Do While ?
// 💡 do While loop is running atleast one time when condition is not true

// 6️⃣    FOR LOOP   ➿➿
// For(Initializer;Conditionl:Iterator){
//     ➡️ Loop Block Code to be Execute
// }

// 🌟🌟🌟🌟🌟🌟🌟
// var num=0;
// for(num;num<=10;num++){
//     console.log(`Value is ${num}`);
// }
// console.log(`For loop not execute`); 


// 💯 MATHEMATICAL TABLE OF NUMBER 💯

// 📊      Table of 8️⃣

// var table1 = 8;
// var num;
// console.log(`Table of 8`);
// for(num=1;num<=10;num++){
//     console.log(`${table1}*${num}=${table1*num}`);
// }
// console.log(`\n`);

// 📊     Table of 9️⃣ 

// 🌟🌟🌟🌟🌟🌟🌟
// console.log(`Table of 9`);
// var table2 = 9;
// var num;
// for(num=1;num<=10;num++){
//     console.log(`${table2}*${num}=${table2*num}`);
// }
// console.log(`\n`);


// 📊        Table of 1️⃣2️⃣

// 🌟🌟🌟🌟🌟🌟🌟
// console.log(`Table of 12`);
// var table3 = 12;
// var num;
// for(num=1;num<=10;num++){
//     console.log(`${table3}*${num}=${table3*num}`);
// }
// console.log(`\n`);

// 📊         Table of 1️⃣5️⃣

// 🌟🌟🌟🌟🌟🌟🌟
// console.log(`Table of 15`);
// var table4 = 15;
// var num;
// for(num=1;num<=10;num++){
//     console.log(`${table4}*${num}=${table4*num}`);
// }


// 💯 FUNCTION IN JAVASCRIPT 💯

// 1️⃣    Function Definition
// 👉 Function is a block of code design to perform a particular task
// 💡 Before used a function we have to define it show 👇
// 💡 FuncationName (){
//      Function Body or Statement
//      }

// 🌟🌟🌟🌟🌟🌟🌟
// function sum(){
//     var a = 10, b = 20;
//     var total=a+b;
//     console.log(total);
// }

// 2️⃣    Calling a Function
// 💡 A javascript fucntion is execute when it is called

// console.log(sum()); // 👈 it will give undefined because function not return any thing
// sum();

// 3️⃣    Function Parameter
// 💡 Function Parameter are the name listed in the function definition
// 📔
// function sum(a,b){
//     var total=a+b;
//     console.log(total);
// }

// 4️⃣    Function Argument
// 💡 Function Argument are the real value passed in function calling
//   sum(10,90);
// sum()   // 👈 give NaN because expect two numbers

// 5️⃣    Function Expression 
// 💡 Create a function and put it into a variable
// 👉 var funcExp = sum(10,4)

// 6️⃣    Return Keyword
// 💡 When JavaScript reaches the return statement a function would be stopped

// 🌟🌟🌟🌟🌟🌟🌟
// function sub(a,b){
//     return a-b;
// }
// var sub1 = sub(12,5)
// console.log(sub1);
// console.log(`${sub(12,5)}`);

// 7️⃣    Anonumous Keyword
// 💡 Those fuction whose has no name
//  Anonymous Function Expression 👇 
// {var funcExp = function(a,b){
//     return a+b;
// }}

// 👉 Anonymous Function {function(a,b){return a+b;}}

// 🌟🌟🌟🌟🌟🌟🌟
// var funcExp = function(a,b){
//     return a+b;
// }
// var sum = funcExp(10,5)
// console.log(`The sum of a and b is ${sum}`);

// 👨‍🚀👨‍🚀👨‍🚀 📔 🌟🌟🌟🌟🌟🌟🌟 📔 👨‍🚀👨‍🚀👨‍🚀

// 🙋‍♂️ ECMA Script Past to Future
// 🙋‍♂️ 2015 feature of ECMA Script change javaScript called ES6
// 🙋‍♂️ Now ECMA6-ECMA11 from 2015-2020

// 💯   ECMA Script ES6     💯

// 1️⃣    LET AND CONST AND VAR

// var 👉 Function Scope
// let and const 👉 Block Scope

// 💡 var, let => we can change the value 
// 💡 const => we can not change the value when it assigned at one time

// 📔
// var Name = "Software";
// console.log(Name);

// 📔
// Name = "Engineer"
// console.log(Name);

// 📔
// let Name = "Software";
// console.log(Name);

// 📔
// Name = "Engineer"
// console.log(Name);

// 📔
// const Name = "Software";
// console.log(Name);

// 📔
// Name = "Engineer"
// console.log(Name);

// 💡 if we declare a variable with var so it can call any where in the function scope where it is defined
// see the example 👇

// 🌟🌟🌟🌟🌟
// function biodata() {
//     var myFirstName = "Muhammad";
//     if (true) {
//         var myLastName = "Khalid";
//         console.log(`inner ${myFirstName}`);
//         console.log(`inner ${myLastName}`);
//     }
//     console.log(`Outer ${myLastName}`);
// }
// biodata();

// 💡 if we declare variable with let so it only be acces in the block scope
// see the example 👇

// 🌟🌟🌟🌟🌟
// function biodata() {
//     let myFirstName = "Muhammad";
//     if (true) {
//         let myLastName = "Khalid";
//         console.log(`inner ${myFirstName}`);
//         console.log(`inner ${myLastName}`);
//     }
//     console.log(`Outer ${myLastName}`);
// }
// biodata();


// 2️⃣    TEMPLATE STRING (TEMPLATE LITERALS)

// 🌟🌟🌟🌟🌟
// for(let num=1;num<=10;num++){
//     let table =12;
//     console.log(`${table} * ${num} = ${table*num}`);
// }
 
// 3️⃣    DEFAULT PARAMETER
// 💡 Default function Parameter allow a Parameter to be initilaized with a defults value if no value or undefined value is passed

// function mul(a,b=5){    // 👈 b=5 is a default value of b
//     return a*b;
// }
// console.log(mul(3));

// 4️⃣    DESTRUCTING


// 5️⃣    OBJECT PROPERTIES
// 6️⃣    ARROW FUNCTION

// 👻 TRADITIONAL WAY OF FUNCTION 👇

// 🌟🌟🌟🌟🌟
// console.log(sum()); 
// function sum(){
//     let a =5, b=6;
//     let sum = a+b;
//     return `The sum of a and b is ${sum}`;
// }

// 💡 How we convert into Fat Arrow Function
// 💡 In => function you can not call a function before define
//  see 👇
// console.log(sum());

// 🌟🌟🌟🌟🌟
// const sum = () =>{
//     let a = 2, b= 5;
//     return `The sum of a and b is ${(a=5)+(b=6)}`;
// }
// console.log(sum());

// 😃 if your function has only one line code 
// 👇 so you can written as 👇

// 📔
// const sum = () =>`The sum of a and b is ${(a=5)+(b=6)}`;
// console.log(sum());

// 7️⃣    REST OPERATORS
// 8️⃣    SPREAD OPERATORS

// 💯   ARRAYS IN JAVASCRIPT    💯

// 💡 when we use var, we can stored only one value at a time
// 👇👇👇👇
// var course1 = 'SDA';
// var course2 = 'WE';
// var course3 = 'DBMS';

// 😃 when we want to store mutiple values in one variable so we have to use an array
// 💡 In Javascript, we have an Array class, and 
// 💡 array are the prototype of this class
// 💡 in javascript we can add different data type in one array
// 💡 First Element in an array Called lower index/lower Boundary
// 💡 Last Element in an array Called upper index/upper Boundary
// 💡 Array element assign an indexes, it start from (0 to Array.lenght-1)

// Example 🏳️

// var courses = ['SDA','WE','DBMS','HCI','AE','PS'];
// var course = new Array;
// course = ['SDA','WE','DBMS'];

// 1️⃣    TRAVERSAL OF AN ARRAY

// It mean navigate through an array

// 📔
// var courses = ['SDA','WE','DBMS','HCI','AE','PS'];
// console.log(courses[1]);

// 😃 If we wnat to check length of elements of an array
// console.log(courses.length);

// 💡 Lenght start from 1️⃣ while index start from 0️⃣

// 👉 Find last element of an array
// 📔
// console.log(courses[courses.length - 1]);

// 💯 NAVIGATE AN ARRAY WITH LOOP 💯

// var courses = ['SDA','WE','DBMS','HCI','AE','PS'];

// 👉 Traditional Way to navigate an Array 

// for (let i=0 ;i<courses.length;i++){
//     console.log(courses[i]);
// }

// After ES6 we have for...in ➿ ➡️ for...of ➿

//  💡 When we use 👉 for...in loop ➿ it return indexes of and Array

// 👉 you can use any 🔑word rather than index see in 👇

// var courses = ['SDA','WE','DBMS','HCI','AE','PS'];
// for(let index in courses){  
//     console.log(index);
// }

// 💡 When we use 👉 for...of loop ➿ it return elements of and Array

// 👉 you can use any 🔑word rather than elements see in 👇

// 📔
// var courses = ['SDA','WE','DBMS','HCI','AE','PS'];
// for(let elements of courses){
//     console.log(elements); }

// For Each ➿ 
// 🙋‍♂️ when we use forEach loop it calls a function for each element in an array
// 👉 In forEach ➿ it return index,elements and array as well 
// 😩 You Can not use break statement in forEach ➿
// var courses = ['SDA','WE','DBMS','HCI','AE','PS'];

// 💡 Traditional way of fuction

// 📔
// courses.forEach(function (element, index, array ){
//     console.log(`${index} index contain ${element} in courses array ${array}`);
// });

// 💡 by fat => function
// 😩 you can not use (this) argument if you use so go with Traditional function ☝️

// 📔
// courses.forEach((element, index, array)=>{
//     `${index} index contain ${element} in courses array ${array}`
// })

// 2️⃣    SEARCHING AND FILTER IN AN ARRAY 😃

// Array.prototype.indexOf() 🙋‍♂️
// it return (least) index of the search element if not found return -1
// indexOf search in forward direction 

// var courses = ['SDA','WE','DBMS','HCI','AE','PS'];
// console.log(courses.indexOf('SDA',2));  

// 👆 .indexOf('SDA',2) 👈 2 show the index from search is start 

// Array.prototype.lastIndexOf() 🙋‍♂️
// it return last (greatest) index of the search element if not found return -1
// lastIndexof search in backward direction

// var courses = ['SDA','WE','DBMS','HCI','AE','PS'];
// console.log(courses.lastIndexOf('SDA',2)); 

// Array.prototype.includes() 🙋‍♂️
// it check a desired string is included in array or not
// It always do forward search

// var courses = ['SDA','WE','DBMS','HCI','SDA','AE','PS'];
// console.log(courses.includes('HCI')); 

// It return true if string found else false

// Array.prototype.find() 🙋‍♂️
// Return desired string if it found an array otherwise return undefined
// 😩 Problem is that it return only 1️⃣ element

// const prices = [200,300,350,400,450,500,600];
// const findPrice = prices.find((currVal)=>{
//     return currVal < 400;
// });
// console.log(findPrice);

// Another way to write it

// console.log(prices.find((curVal)=> curVal>400));

// Array.prototype.findIndex() 🙋‍♂️
// Return the index in an array if desired string is found or -1 if not found

// console.log(prices.findIndex((curVal)=> curVal > 3350));

// Array.prototype.filter() 🙋‍♂️
// Return a new array containig all elements of the calling array for which the provided filtering function return true if condition not satisfy it return empty array

// const prices = [200,300,350,400,450,500,600];

// const filterPrice = prices.filter((element,index)=>{
//     return element >= 1400;
// })

// console.log(filterPrice);


// Array.prototype.sort() 🙋‍♂️
// sort the element of an array and return sorted array default sorting is ascending 
// It work with string properly because it convert array in string than sorted
// 😩 Problem it return incorrect result when sort a number

// const month = ['March','Jun','Feb','Jan','Dec','Nov'];
// console.log(month.sort());

// const array1 = [1,10000,20,45,60]
// console.log(array1.sort());





// 3️⃣    HOW TO SORT AND COMPARE AN ARRAY
// 4️⃣    HOW TO INSERT, ADD, REPLCAE AND DELETE FUNCTION IN AN ARRAY (CRUD)
// 5️⃣    Map(), Reduce(), Filter


