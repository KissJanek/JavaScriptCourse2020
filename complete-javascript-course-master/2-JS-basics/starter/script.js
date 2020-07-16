/***************************
 * Variables and data types
 */

 /*
console.log("Hello World!!!");

var firstName = "John";
console.log(firstName);

var lastName = "Smith";
var age = 26;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = "Teacher";
console.log(job);

// var 3years = 3;
// var john/Mark = "John and Mark";
// var function = 23;
var _3years = 3;
var $John;
*/

/***************************
 * Variable mutation and type coercion
 */
/*
 var firstName = "John";
 var age = 28;

 //Type coercion
 console.log(firstName + " " + age);

 var job, isMarried;
 job = "Teacher";
 isMarried = false;

 console.log(firstName + " is a " + age + " year old " + job + ". Is he married? " + isMarried);

 //Variable mutation
age = "twenty eight";
job = "driver";

alert(firstName + " is a " + age + " year old " + job + ". Is he married? " + isMarried);

var lastName = prompt("What is his last name?");
console.log(firstName + " " + lastName);
*/

/***************************
 * Basic operators
 */
/*
 var now, yearJohn, yearMark;
 now = 2020;
 ageJohn = 28;
 ageMark = 33;

// Math operators
 yearJohn = now - ageJohn;
 yearMark = now - ageMark;

 console.log(yearJohn);
 
 console.log(now + 2);
 console.log(now * 2);
 console.log(now / 2);

// Logical operators 

var johnOlder = ageJohn > ageMark;
console.log(johnOlder);

// typeof operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof "Mark is older than John.");
var x;
console.log(typeof x);
*/

/***************************
 * Operator precedence
 */
/*
var now = 2020;
var yearJohn = 1989;
var fullAge = 18;

// Multiple operators
var isFullAge = now - yearJohn >= fullAge; //true
console.log(isFullAge);

// Grouping
var ageJohn = now - yearJohn;
var ageMark = 35;
var avarage = (ageJohn + ageMark) / 2;
console.log(avarage);

// Multiple assigments
var x, y;
x = (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 - 6 // 26
console.log(x);

// More operators
x += 2;
console.log(x);

x++; //x = x + 1; // x += 1;
console.log(x);
*/

/***************************
 * CODING CHALLENGE 1
 */

 var markMass = 80; //kg
 var markHeight = 1.8; //meters

 var johnMass = 95;
 var johnHeight = 1.95;

 var markBMI, johnBMI, markHasHigher;

 markBMI = markMass / Math.pow(markHeight,2);
 console.log(markBMI);
 johnBMI = johnMass / Math.pow(johnHeight,2);
 console.log(johnBMI);

 markHasHigher = markBMI > johnBMI;
 console.log("Is Mark's BMI higher than John's? " + markHasHigher);

 /***************************
 * If / else statements
 */