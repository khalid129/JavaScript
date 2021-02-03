//Important Note for sysmbol:
// 1️⃣,2️⃣ => numbers
// 💯 => start new topic
// 👉 ☝️ 👇 👈 => directed toward specific direction for some note
// 💡 => must Remember
// 📔 => chunks pf code
// 🌟🌟🌟🌟🌟 => proper code or some task
// 😩 => problem with code, methods etc
// 🙋‍♂️ => Methods in Javascripts
// 🤔 => Think
// ➿➿ => Loop



// 💯 👍 👍 👍 👍 JAVASCRIPT 👍 👍 👍 👍  💯

// 1️⃣    VARIABLE IN JAVASCRIPT

// (Key) (Name) = (Value)
// ☝️ is a pattern to declare a variable a in javascript


// 👉   🔑 in javascript are Var, Const ,let
// var myName ="Khalid"
// console.log(myName);

// 2️⃣    DATA TYPE IN JAVASCRIPT

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

// 3️⃣    EXPRESSION AND OPERATION

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

// 4️⃣    ASSIGNMENT OPERATOR ( = )

// var value1 = 10;
// console.log(value1);

// 5️⃣     INCREMENT ( ++ ) DECREMENT ( -- )  OPERATOR 👇👇👇

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

// 6️⃣ COMPARISION OPERATOR ( <=,>=,<,>,!=,==) 👇👇👇

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

// 7️⃣    LOGICAL OPERATOR 👇👇👇

// 📔
// console.log(value1>0 && value2 <0);
// 👉 AND operator

// console.log(value1>=0 || value2 !=0);
// 👉 OR operator

// console.log(!(value1>=0 || value2 !=0));
// 👉 NOT Operator

// 8️⃣    STRING OPERATOR 👇👇👇

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

// 1️⃣    if else STATEMENT

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

// 2️⃣     FALSY VALUE IN JAVASCRIPT

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

// 📊      TABLE OF 8️⃣

// var table1 = 8;
// var num;
// console.log(`Table of 8`);
// for(num=1;num<=10;num++){
//     console.log(`${table1}*${num}=${table1*num}`);
// }
// console.log(`\n`);

// 📊     TABLE OF 9️⃣ 

// 🌟🌟🌟🌟🌟🌟🌟
// console.log(`Table of 9`);
// var table2 = 9;
// var num;
// for(num=1;num<=10;num++){
//     console.log(`${table2}*${num}=${table2*num}`);
// }
// console.log(`\n`);


// 📊        TABLE OF 1️⃣2️⃣

// 🌟🌟🌟🌟🌟🌟🌟
// console.log(`Table of 12`);
// var table3 = 12;
// var num;
// for(num=1;num<=10;num++){
//     console.log(`${table3}*${num}=${table3*num}`);
// }
// console.log(`\n`);

// 📊         TABLE OF 1️⃣5️⃣

// 🌟🌟🌟🌟🌟🌟🌟
// console.log(`Table of 15`);
// var table4 = 15;
// var num;
// for(num=1;num<=10;num++){
//     console.log(`${table4}*${num}=${table4*num}`);
// }


// 💯 FUNCTION IN JAVASCRIPT 💯

// 1️⃣    FUNCTION DEFINITON

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

// 2️⃣    CALLING A FUNCTION

// 💡 A javascript fucntion is execute when it is called

// console.log(sum()); // 👈 it will give undefined because function not return any thing
// sum();

// 3️⃣    FUNCTION PARAMETER

// 💡 Function Parameter are the name listed in the function definition
// 📔
// function sum(a,b){
//     var total=a+b;
//     console.log(total);
// }

// 4️⃣    FUNCTION ARGUMENT

// 💡 Function Argument are the real value passed in function calling
//   sum(10,90);
// sum()   // 👈 give NaN because expect two numbers

// 5️⃣    FUNCTION EXPRESSION

// 💡 Create a function and put it into a variable
// 👉 var funcExp = sum(10,4)

// 6️⃣    RETURN KEYWORD

// 💡 When JavaScript reaches the return statement a function would be stopped

// 🌟🌟🌟🌟🌟🌟🌟
// function sub(a,b){
//     return a-b;
// }
// var sub1 = sub(12,5)
// console.log(sub1);
// console.log(`${sub(12,5)}`);

// 7️⃣    ANONYMOUS FUNCTION

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
// 💡 it return (least) index of the search element if not found return -1
// 💡 indexOf search in forward direction 

// 📔
// var courses = ['SDA','WE','DBMS','HCI','AE','PS'];
// console.log(courses.indexOf('SDA',2));  

// 👆 .indexOf('SDA',2) 👈 2 show the index from search is start 

// Array.prototype.lastIndexOf() 🙋‍♂️
// 💡 it return last (greatest) index of the search element if not found return -1
// 💡 lastIndexof search in backward direction

// 📔
// var courses = ['SDA','WE','DBMS','HCI','AE','PS'];
// console.log(courses.lastIndexOf('SDA',2)); 

// Array.prototype.includes() 🙋‍♂️
// 💡 it check a desired string is included in array or not
// 💡 It always do forward search

// 📔
// var courses = ['SDA','WE','DBMS','HCI','SDA','AE','PS'];
// console.log(courses.includes('HCI')); 

// 💡 It return true if string found else false

// Array.prototype.find() 🙋‍♂️
// 💡 Return desired string if it found an array otherwise return undefined
// 😩 Problem is that it return only 1️⃣ element

// 🌟🌟🌟🌟🌟
// const prices = [200,300,350,400,450,500,600];
// const findPrice = prices.find((currVal)=>{
//     return currVal < 400;
// });
// console.log(findPrice);

// Another way to write it

// console.log(prices.find((curVal)=> curVal>400));

// Array.prototype.findIndex() 🙋‍♂️
// 💡 Return the index in an array if desired string is found or -1 if not found

// console.log(prices.findIndex((curVal)=> curVal > 3350));

// Array.prototype.filter() 🙋‍♂️
// 💡 Return a new array containig all elements of the calling array for which the provided filtering function return true if condition not satisfy it return empty array

// 🌟🌟🌟🌟🌟
// const prices = [200,300,350,400,450,500,600];

// const filterPrice = prices.filter((element,index)=>{
//     return element >= 1400;
// })

// console.log(filterPrice);

// 3️⃣    HOW TO SORT AND COMPARE AN ARRAY

// Array.prototype.sort() 🙋‍♂️
// 💡 sort the element of an array and return sorted array default sorting is ascending 
// 💡 It work with string properly because it convert array in string than sorted
// 😩 Problem it return incorrect result when sort a number  👇

// const month = ['March','Jun','Feb','Jan','Dec','Nov'];
// console.log(month.sort());

// const array1 = [1,10000,20,45,60]
// console.log(array1.sort());


// 4️⃣    HOW TO INSERT, ADD, REPLCAE AND DELETE FUNCTION IN AN ARRAY (CRUD)

// Array.prototype.push() 🙋‍♂️
// 💡 The push method add one or more element to the end of an array and return the new length of the arrary

// 📔
// const subject = ['English','Urdu','Maths','Science','Computer'];
// const count = subject.push('General Knowledge');  // 👉 It return new length of an array
// console.log(subject);
// console.log(count);


// Array.prototype.unshift() 🙋‍♂️
// 💡 It add at the first index of an array and change the length of an array
// const count = subject.push('Drawing','Physics','Chemistry');
// console.log(subject);
// console.log(count);

// const count = subject.unshift('GK');  // 👉 It return new length of an array 
// console.log(subject);
// console.log(count);

// 🏳️ 2nd Example

// 📔
// const myNumber = [1,2,3,5];
// const myCount = myNumber.unshift(4,6);
// console.log(myNumber, myCount); 


// Array.prototype.pop() 🙋‍♂️
// 💡 It remove the last element from an array and return that element. It also change the length of an array

// 📔
// const flower = ['Rose','Sunflower','Tulips','Orchids','Carnations'];
// console.log(flower);
// console.log(flower.pop());
// console.log(flower);


// Array.prototype.shift() 🙋‍♂️
// 💡 It remove the first element from an array and return that element. It also change the length of an array
// console.log(flower);
// console.log(flower.shift());
// console.log(flower);

// 💯 CHALANGE 💯

// Array.prototype.splice() 🙋‍♂️
// 💡 Adds or remove element from an array

// 1️⃣ Add Dec at the end of an array?
// 2️⃣ What is the return value of Splice method?
// 3️⃣ Update april to April?
// 4️⃣ Delete June from an array?

// const months = ['Jan','March','april','June','July'];

// Solution 1️⃣
// const newMonth = months.splice(months.length,0,'Dec');  // 👉 months.length is index where we add Dec
// console.log(months);

// Solution 2️⃣

// console.log(newMonth);   // 👉 It return an array contain delelted item otherwise an empty array

// Solution 3️⃣

// 🌟🌟🌟🌟🌟
// const indexOfMonth = months.indexOf('april');

// if(indexOfMonth != -1){
//     const updateMonth = months.splice(indexOfMonth,1,'April');
//     console.log(`${updateMonth} updated sucessfuly`);
// }
// else{
//     console.log('No Such Data Found!');
// }
// console.log(months);

// Solution 4️⃣

// 🌟🌟🌟🌟🌟
// const indexOfMonth = months.indexOf('June');

// if(indexOfMonth != -1){
//     const updateMonth = months.splice(indexOfMonth,1);
//     console.log(`${updateMonth} deleted sucessfuly`);
// }
// else{
//     console.log('No Such Data Found!');
// }
// console.log(months);


// 5️⃣    Map(), Reduce(), Filter

// Array.prototype.map() 🙋‍♂️
// 💡 It return a new array containing  the result of calling a function on every element in this array.
// 💡 It retur a new array without mutating the original one

// 📔
// const array1 = [1,2,3,4,5,6,7,8,9];

// let newArr = array1.map((curElem, index, arr)=>{
//     return `Index No = ${index} and value = ${curElem}`
// });
// console.log(newArr);

// 📔
// It will calculate the sqruare of the array element 👇
// let newArr = array1.map((curElem, index, arr)=>{
//     return `Square of ${curElem} is ${curElem**2}`
// });
// console.log(newArr);

// 📔
// It will calculate the sqruare root of the array element  👇
// let sqrArray = [25,36,49,64,81];
// let squareRoot = sqrArray.map((curElem, index, arr)=>{
//     return `Square root of ${curElem} = ${Math.sqrt(curElem)}`;
// });
// console.log(squareRoot);

// 📔
// It will multiply array element with 2 and return sum of those value which is greater than equal to five  👇
// let arr = [1, 2, 3, 4, 5, 6];
// let sortArr = arr.map((curElem) => curElem * 2).filter((curElem) => curElem >= 5).reduce((acumlator, curElem) => acumlator += curElem);

// console.log(sortArr);


// Reduced Method () 🙋‍♂️
// 💡 flatten an array means to conver the 3d or 2d array into a single dimensional array
// 💡 The reducer fuction take four element
// 1️⃣ Acumulator   👉 gather the values togehter
// 2️⃣ Current Value
// 3️⃣ Current index
// 4️⃣ Source Array


// 🌟🌟🌟🌟🌟
// let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let sum = arr1.reduce((acumulator, curElem) => {
//     debugger;
//     return acumulator += curElem;
// });
// console.log(sum);


// 💡 Converting 2d or 3d Array into 1d Array

// const arr1 = [['zone_1', 'zone_2'], 
//              ['zone_3', 'zone_4'], 
//              ['zone_5', 'zone_6'], 
//              ['zone_7', 'zone_8']];

// 🌟🌟🌟🌟🌟
// let flatArr1 = arr1.reduce((accum, curElem)=>{
//     debugger;
//     return accum.concat(curElem);
// });

// console.log(flatArr1);


// 💯 STRING IN JAVASCRIPT 💯

//  1️⃣   ESCAPE CHARACTER

// 💡 A javaSrcipt string is zero or more chracters written inside a quotes
// 💡 String is used for storing and manipulating a text.
// 💡 You can use single or double quotes.
// 💡 String can be created as primitives, from sting literals, or as object, using string constructor

// 📔
// let myName = 'Khalid';
// let myProfession = "Software Engineering";
// let emptyString = "";
// let newString = new String('JavaScript String');     // 👉 No need to use it

// console.log(`${myName}\n${myProfession}\n${newString}`);

// How to find the length of string
// String.prototype.length 🙋‍♂️

// 📔
// console.log(myName.length);         // 👉 It return the length of a string (Space is also treat as string)

// let mySentence = 'I am am \"Full stack \" web developer ';  //(\" is  eacape chracter for writter double quotes)
// console.log(mySentence);


//  2️⃣   FINDING A STRING IN A STRING


// String.prototype.indexOf(searchValue, [from index]) 🙋‍♂️
// 💡 It return the index of the first occurance of the specified string
// 💡 It give index number to individual letter

// 📔
// let myEducation = "I am student of software engineering at NEDUET";
// let position1 = console.log(myEducation.indexOf('student',0));
// let position2 = console.log(myEducation.lastIndexOf('student',0)); //  👈 lastIndexof is search in back ward direction


//  3️⃣   SEARCHING FOR A STRING IN A STRING


// String.prototype.search(string) 🙋‍♂️
// 💡 The search() method searches the string and return position of specified string
// 😩 It can not take the second start position as an argument like indexOf methos do so.

// 📔
// const myInfo = "I am student of software engineering at NEDUET";
// let searchData = myInfo.search('student');
// console.log(searchData);


//  4️⃣   E\XTRACTING STRING PART

// There are three method for extracting the part of the string

// 💡 slice(start, end)
// 💡 substring(start, end)
// 💡 substr(start, length)

// The Slice() Method 🙋‍♂️
// 💡 Ectract tthe part of the string and return the extracted part in dew string
// 💡 it take two argument start and edn position and end is not included
// 💡 Original string will not be changes

// 📔
// const myBioData = "I am student of software engineering at NEDUET";
// let newString1 = myBioData.slice(5,12);      // 👈 end point must given other wise give an error
// let newString2 = myBioData.slice(5,-4);  
// let newString3 = myBioData.slice(5);  
// console.log(newString1,newString2,newString3);


// 💯 CHALLANGE 💯
// Display 200 character of a string
// 🌟🌟🌟🌟🌟
// let myString = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse voluptatibus, est tempore sed reprehenderit enim sapiente eum voluptates sit alias quae, voluptatum corrupti vel totam quasi beatae dolorum eaque reiciendis?";
// let dispString = myString.slice(0,200);
// console.log(dispString);


// The substring() Method 🙋‍♂️
// 💡 It is similar to slice the difference is that substring() cannot accept negative indexs;
// 💡 If we give negative value than chracter are counted from the 0th position start index positions

// let fruit = "Apple, Banana, Mango, Grapes, Oranges";
// let newFruit = fruit.substring(0,12);
// console.log(newFruit);


// The substr() Method 🙋‍♂️
// 💡 it is similar to slice()
// 💡 difference is that the second parameter specifies the length of the exxtracted part.
// 😩you can not  negative number br=ecause it not work in normal condition 
// 💡 if will give ONLY negative so it count from the reverse direction 👇

// 📔
// let myVegatable = "Patato, Onion, Tomato, Chilli, Ladufinger, Bringle";
// let newVegatable = myVegatable.substr(7,-3);
// let newVegatable = myVegatable.substr(-7);
// console.log(newVegatable);


//  5️⃣   REPLACING A STRING CONTENT

// String.prototype.replace(searchFor, replcaeWith) 🙋‍♂️
// 💡 It replcae a specified value to an another value
// 💡 Point to be remember 
// 1️⃣    This method does not change the string and return a new string
// 2️⃣    By default it replcae only rhe first match

// 📔
// const myBioData = "I am student of software engineering at NEDUET";
// let newData = myBioData.replace('student','Student');
// console.log(newData);
// console.log( myBioData);



//  6️⃣   EXTRACTING STRING CHARACTERS

// There are 3 method for extracting string characters

// 💡 charAt(position)
// 💡 charCodeAt(position)
// 💡 Property access [ ]

// The charAt Method() 🙋‍♂️
// 💡 It return the character at a specified index position in a string

// let str = 'HELLO WORLD';
// let character = str.charAt(0);
// console.log(character);

// The charCodeAt Method() 🙋‍♂️

// find Character code of specified character

// let charCode = str.charCodeAt(0);
// console.log(charCode); 

// 💯 CHALANGE 💯
// Find chracter code of the last element

// let lastCharacter = str.length - 1;
// let charCode = str.charCodeAt(lastCharacter);
// console.log(charCode);

// The property access 🙋‍♂️  [ ]

// let str = 'HELLO WORLD';
// console.log(str[0]);




//  7️⃣   OTHER USEFUL METHOD

// 📔
// let myCourse = 'web developement';
// console.log(myCourse.toLowerCase());
// console.log(myCourse.toUpperCase());

// let str1 = "HELLO";
// let str2 = "WORLD";
// console.log(str1.concat(" ",str2));


// String.trim() 🙋‍♂️
// 💡 The trim method remove the white space from both sides
// 😩 It can not trim the space between the string

// var str = "         Hello World!        ";
// var str1 = "         Hello      World!        ";
// console.log(str.trim());
// console.log(str1.trim());


// String.Split()   🙋‍♂️
// 💡 split() convert the string into ana rray;

// let txt = "a,b,c,d,e,f";
// console.log(txt.split(" , "));


// 💯 DATE & TIME IN JAVASCRIPT 💯

// 💡 JavScript Date object represent a single moment in time in a platform independent format.
// 💡 Date object contain a number that represent milisecond since 1 Januaury 1970 UTC.

// 👉 Creating a Date object
// There are 4️⃣ way to create a new date object;

// new Date();
// new Date(year,month,day,hourse,minute,second,millisecond);
// // it take 7️⃣ argument
// new Date(millisecond);
// // we can not avoid month section
// new Date(date String)


// new Date() 🙋‍♂️
// Date object are created with the new Date() constructor

// 📔
// let curDate = new Date();
// console.log(curDate);
// console.log(curDate.toString());
// console.log(curDate.toLocaleDateString());
// console.log(curDate.toLocaleString());


// Date.now() 🙋‍♂️
// 💡 Return the numeric value corresponding to the current time the number of millisecond elapsed since January 1, 1970 00:00:00 UTC

// console.log(Date.now());


// new Date(year, month, ....) 🙋‍♂️
// 💡 Note Javascript counts month from 0 to 11 
// 💡 Year and month argument is compulsory otherwise give 1970, 1 January
// 💡 January is 0 and December is 11

// let d = new Date(2021,0,31,19,10,11,10);
// console.log(d.toLocaleString());

// new Date(dateString) 🙋‍♂️
// Cretes a new date object from adate string

// let d = new Date("January 31 2021");
// console.log(d.toLocaleString());

// 📔
// new Date(millisecond) 🙋‍♂️
// var d = new Date(86400000*2);
// console.log(d.toLocaleString());


// 👉 Date Methods

// 📔
// How to get Individual Date
// const currDate = new Date();
// console.log(currDate.toLocaleString());
// console.log(currDate.getFullYear());
// console.log(currDate.getMonth());       // 👉 0-11 Jan to Dec
// console.log(currDate.getDate());
// console.log(currDate.getDay());
// console.log(currDate.toLocaleTimeString());


// How to set Individual Date

// 📔
// const currDate = new Date();
// console.log(currDate.toLocaleString());
// console.log(currDate.setFullYear(2021));
// // SetFullYear method canoptionally set month and day
// console.log(currDate.setMonth(0));       // 👉 0-11 Jan to Dec
// console.log(currDate.setDate(31));
// console.log(currDate.toLocaleTimeString());


//  👉 TimeMethod

// const curTime = new Date();

// // How to get individual Times

// console.log(curTime.getTime());
// 💡 // It return the number of milliseconds since january 1,1970 👆

// console.log(curTime.getHours());
// 💡 // It return the hourse of a date as a (0-23)

// console.log(curTime.getMinutes());
// console.log(curTime.getSeconds());
// console.log(curTime.getMilliseconds());


// How to set individual Times

// 📔
// console.log(curTime.setTime());
// console.log(curTime.setHours(5));
// console.log(curTime.setMinutes(5));
// console.log(curTime.setSeconds(5));
// console.log(curTime.setMilliseconds(5));



// 💯 MATH OBJECT IN JAVASCRIPT 💯

// It allow you to perform mathematical task on number

// console.log(Math.PI);       // 🙋‍♂️

// Math.round(); 🙋‍♂️
// 💡 return the value of x rounded to its nearest integer

// let num = 1.5645;
// console.log(Math.round(num));

// Math.pow(); 🙋‍♂️
// 💡 Math.pow(x,y) return the value of x to the power y

// console.log(Math.pow(2,3));


// Math.sqrt(); 🙋‍♂️
// 💡 Find the square root of that number

// console.log(Math.sqrt(25));
// console.log(Math.sqrt(16));
// console.log(Math.sqrt(9));
// console.log(Math.sqrt(4));


// Math.abs(); 🙋‍♂️
// 💡 Math.abs(x) return the absolute positive value of x

// console.log(Math.abs(-345));
// console.log(Math.abs(4-6));


// Math.ceil(); 🙋‍♂️
// 💡 Math.ceil(x) returns the value of x rounded up to its nearest integer


// console.log(Math.ceil(4.5));
// console.log(Math.ceil(-99.01));

// Math.floor(); 🙋‍♂️
// 💡 Math.ceil(x) returns the value of x rounded down to its nearest integer


// console.log(Math.floor(4.5));
// console.log(Math.floor(-99.01));


// Math.min(); 🙋‍♂️
// 💡 Math.min()  can be used to find the lowest value in a list of argument

// console.log(Math.min(10,56,5.6,46,5.5999));


// Math.max(); 🙋‍♂️
// 💡 Math.min()  can be used to find the lowest value in a list of argument


// console.log(Math.max(10,56,5.6,46,5.5999));


// Math.random(); 🙋‍♂️
// 💡 Math.random() returns a random number between 0 (inclusive), and 1 (excludes)

// console.log(Math.floor(Math.random()*10));      // 👉 0 to 9


// Math.trunc; 🙋‍♂️
// 💡 The trunc() return the integer part of a number

// console.log(Math.trunc(4.5));
// console.log(Math.trunc(-99.56));
// console.log(Math.trunc(0.045656));


// 💡 if argument is a positive number, Math.trunc() is equivalent to Math.floor(), Otherwise is equivalent to Math.ceil()


// 💯 DOM IN JAVASCRIPT 💯

// 1️⃣   Window vs Document

// document.getElementById("root")

// 2️⃣   DOM vs BOM 
// 3️⃣   DOM Navigation
// 4️⃣   Searching and getting Element Reference

 