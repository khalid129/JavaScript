// 👍 👍 👍 👍 JavaScript 👍 👍 👍 👍  💯
// 1️⃣
// Variable in JavaScript
// (Key) (Name) = (Value)
// This is a pattern to declare a variable a in javascript
// 😏
// key in javascript are Var, Const ,let
// var myName ="Khalid"
// console.log(myName);

// 2️⃣
// Data type in JavaScript
// 🔢
// var value1 = 2;
// var value2 = 10.5;
// var value3 = true;
// var value4 = null;  /*(It give data type object which is a bug)*/
// var value5;
// var myName = "Khalid";
// 📰
// console.log(typeof(value1));
// console.log(typeof(value2));
// console.log(typeof(value3));
// console.log(typeof(value4));
// console.log(typeof(value5));
// console.log(typeof(myName));
// 🔺
// NULL Vs Undefined
// 🔺
// A variable is declare but not assign a value is called an undefined variable
// A variable is daclare and assigned a value Null to it so it called Null variable

// var value1 = null;
// console.log(value1);

// var value2 ;
// console.log(value2);

// 3️⃣
// Expression and Operation

// Expression is combination of Operand and an Operation
// 💁‍♂️
// console.log(10+ "20"); 
// When a Number and a string is Add so Console concatenate it no an Add;
// 💁‍♂️
// console.log("Muhammad "+"Khalid");
// when two string are add so it would be concetenate
// 💁‍♂️
// console.log("20"-10);
// When a Number string and a number would be subtract so it would be subtract which is a bugs in javascript
// 💁‍♂️
// console.log("Khalid"-10);
// console.log("Muhammad "-"Khalid");
// When a string and number or a string and string would be subtracted so it would be give a NaN which is Not a Number
// 🔐
// Use of NaN
// NaN is global property of a Variable
// 🔒
// var myName = "khalid";
// var myPhoneNumber = 1234567890;

// if(isNaN(myPhoneNumber)){
//     console.log("please enter a number");
// }
// else{
//     console.log("You enter a valid number");
// }

// 4️⃣ 
// Assignment Operator ( = )

// var value1 = 10;
// console.log(value1);

// 5️⃣
// Increment ( ++ ) Decerement ( -- )  Operator

// var num = 5;
// console.log(num++);
// Post Increment
// console.log(num);

// var num =5; 
// console.log(++num);
// Pre Incremnet
// console.log(num);

// var num = 5 ;
// console.log(num--);
// Post Decrement
// console.log(num);

// var num = 5;
// console.log(--num);
// Pre Decrement 
// console.log(num);

// 6️⃣
// Comparision Operator ( <=,>=,<,>,!=,==)

// var value1 = 10;
// var value2 = -10;

// console.log(value1==value2);
// Equality Operator

// console.log(value1>value2);
// Greater than operator

// console.log(value1<value2);
// Less than operator

// console.log(value1<=value2);
// Less than equalto Operator

// console.log(value1>=value2);
// Greater than equalto operator

// console.log(value1!=value2);
// Not Equalto operator

// 7️⃣
// Logical Operator

// console.log(value1>0 && value2 <0);
// AND operator

// console.log(value1>=0 || value2 !=0);
// OR operator

// console.log(!(value1>=0 || value2 !=0));
// NOT Operator

// 8️⃣
// String Operator

// The concetenation operator is ( + ) which concetenate two string value and return  a single string

// var myFirstName = "Muhammad ";
// var myLastName = "Khalid";
// console.log(myFirstName+myLastName);
// console.log(`My Name is ${myFirstName+myLastName}`);

// 🤩🤩🤩🤩 Chalange 🤩🤩🤩🤩

// console.log(3**3);  //3*3*3
// Double * mean it act as a exponential it called exponentiation operator

// console.log(10**-1);  /*It will give negative power*/

// Swap Two Number

// var a =10;
// var b =5;
// var temp ;

// console.log("Value of a and b before swap is ",a,b);
// // Output a=5 b=10
// temp = a;
// a = b;
// b = temp;
// console.log("Value of a and b after swap is ",a,b);

// a = a+b;   //a=15
// b = a-b;  //b=10
// a = a-b; //a=5
// console.log("Value of a and b after swap is ",a,b);

// ⏱️ ⏱️ ⏱️ Difference between ( == ) and (===) ⏱️ ⏱️ ⏱️ 

// var num1 = 5;       //Number
// var num2 = '5';     //String
// console.log(num1==num2);
// Double = ( == ) check value only not a data type;

// console.log(num1===num2);
// Triple = check value and datatyoe as well;


// CONTROL STATEMENT AND LOOP STATEMENT

// 1️⃣
// If Else Statement 
// If statement execute the statement when it its condition is true 
// If statement is false so Else statement would be execute

// var tmr = 'rain';
// if (tmr=='rain'){
//     console.log("Use Raincoat because it is rain");
// }
// else{
//     console.log('No need to use a Raincoat');
// }

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

// 2️⃣
// Falsy Values in JavaScript 
// 0, "", undefined, null, NaN these are falsy value 

// if(score = 0){ //if(0,undefined,null,"",NaN)
//     console.log('We loss the match');
// }
// If wala part console nh karwaega Q k score me 0 assign h or ye false h
// else{
//     console.log('We won the match');
// } 

// 3️⃣
// CONDITIONAL TERNARY OPERATOR
// Conditional ternory operator take three operands
// variablename = (Condition)?(Value1):(Value2)

// var age = 18
// debugger;
// console.log((age>18)?"You can vote":"You can not voted"); 
// var turn = (age=18)?(console.log('you can vote')):(console.log('you can not vote'));
// console.log(turn);

// 4️⃣
// SWITCH STATEMENT

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

// Break use to terminate the current loop, switch, label
// statement transfer program control to the statement. 

// 5️⃣
// WHILE LOOP

//  While loop execute a specified statemnet as long as condition is true

// var num = 20;
// while(num<=10){             //This is a block scope
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

// Difference between While and Do While
// do While loop is running atleast one time when condition is not true

// 6️⃣
// FOR LOOP
// For(Initializer;ConditionlIterator){
//     Loop Block Code to be Execute
// }
// var num=0;
// for(num;num<=10;num++){
//     console.log(`Value is ${num}`);
// }
// console.log(`For loop not execute`); 

// MATHEMATICAL TABLE OF NUMBER

// Table of 8

// var table1 = 8;
// var num;
// console.log(`Table of 8`);
// for(num=1;num<=10;num++){
//     console.log(`${table1}*${num}=${table1*num}`);
// }
// console.log(`\n`);

// // Table of 9
// console.log(`Table of 9`);
// var table2 = 9;
// var num;
// for(num=1;num<=10;num++){
//     console.log(`${table2}*${num}=${table2*num}`);
// }
// console.log(`\n`);

// // Table of 12
// console.log(`Table of 12`);
// var table3 = 12;
// var num;
// for(num=1;num<=10;num++){
//     console.log(`${table3}*${num}=${table3*num}`);
// }
// console.log(`\n`);

// // Table of 15
// console.log(`Table of 15`);
// var table4 = 15;
// var num;
// for(num=1;num<=10;num++){
//     console.log(`${table4}*${num}=${table4*num}`);
// }


// FUNCTION IN JAVASCRIPT

// 1️⃣ Function Definition
// Function is a block of code design to perform a particular task
// Before used a function we have to define it
// FuncationName (){
    // Function Body or Statement
// }

// function sum(){
//     var a = 10, b = 20;
//     var total=a+b;
//     console.log(total);
// }

// 2️⃣Calling a Function
// A javascript fucntion is execute when it is called

// console.log(sum()); //it will give undefined because function not return any thing
// sum();

// 3️⃣Function Parameter
// Function Parameter are the name listed in the function definition
// function sum(a,b){
//     var total=a+b;
//     console.log(total);
// }

// 4️⃣Function Argument
// Function Argument are the real value passed in function calling
// sum(10,90);
// sum()   //NaN because expect two numbers

// 5️⃣Function Expression 
// 🤔 Create a function and put it into a variable
// var funcExp = sum(10,4)

// 6️⃣Return Keyword
// When JavaScript reaches the return statement a function would be stopped

// function sub(a,b){
//     return a-b;
// }
// var sub1 = sub(12,5)
// console.log(sub1);
// console.log(`${sub(12,5)}`);

// 7️⃣Anonumous Keyword
// Those fuction whose has no name
// Anonymous Function Expression {var funcExp = function(a,b){
//     return a+b;
// }}

// Anonymous Function {function(a,b){return a+b;}}

// var funcExp = function(a,b){
//     return a+b;
// }
// var sum = funcExp(10,5)
// console.log(`The sum of a and b is ${sum}`);

// ECMA Script
