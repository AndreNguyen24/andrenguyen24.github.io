/*
* DATATYPES:
* 
* Datatypes represent the type of values that the code is executing. Datatypes are different types 
* of data that can be manipulated in a program. 
*
*/

/* Simple Datatypes - Are also known as Primitive data types. 
*                     They do not hold or collect other values.
*                     They can only hold one value at a time.
*                     They are immutable which means they cannot be modified. 
*                     They have no methods to manipulate values.
*                     The variables can re-assign values, but the values cannot be changed.
*
*/

/* Simple datatypes compared to Complex datatypes - Primitive datatypes have no methods to manipulate values. Complex datatypes do. 
*                                                   Primitive variable datatypes values can be re-assigned, but they cannot be altered. 
*                                                   Complex values can be changed and altered by using methods. 
*                                                   Complex datatypes can hold more than one value. 
*
*/

// Simple Datatype
let simple = 'data';                  // string is simple datatype 
console.log(simple);                  // prints => 'data'     
simple.toUpperCase();                 // cannot use method
console.log(simple);                  // prints => 'data'
simple = simple.toUpperCase();        // assignments gives the variable a new value. It is not mutated. prints => 'DATA'

// Complex Datatype
let complex = [];                     // array is complex datatype
console.log(complex);                 // prints => []
complex.push('datatype');             // using array method .push() to add a value at the end of the array
console.log(complex);                 // prints => ['datatype']


// Copy by Value
let a = 1;

let result = (val) => { 
  val = 2               
}
result(a);               // cannot mutate
console.log(a);          // prints 1

// 0. Number - Are just numbers that can be positive or negative or in decimal form. 
let posNum = 5; // positive number
let negNum = -10; // negative number
let decNum = 2.4 // decimal number

// 1. String - They are characters and elements that are inside single or double quotes.
let firstName = 'Andre'; // single quoted string
let lastName = "Nguyen"; // double quoted string
let fullName = firstName + lastName; // string concatenation
console.log(fullName); // prints => AndreNguyen

// 2. Boolean - Datatype that are True or False values.
let num1 = 5;
let num2 = 10;
num1 < num2; // prints => true
num1 > num2; // prints => false
num1 === 5; // prints => true
num1 === '5'; // prints => false

// 3. Undefined - Datatype for variables which has been declared, but has not been assigned a value. 
let random; // variable declaration
console.log(random); // prints => undefined
random = 'unknown' // variable assigned to a value
console.log(random) // prints => unknown

// 4. Null - Datatype that signifies 'no value' and is an empty value. 
let none; // variable declaration but not assigned a value
console.log(none); // prints => undefined
let something = 'meaning' // variable that's assigned a value
console.log(something); // prints => meaning
let nothing = null; // variable assigned to the value of null
console.log(nothing); // prints => null

// 5. NaN - Datatype that means Not-A-Number.
let letter = 'A';
let number = 24;
console.log(letter - number); // prints => NaN
console.log(letter * 4); // prints => NaN

// 6. Infinity and -Infinity - Datatype that represent infinity numbers
24/0; // prints => Infinity
-24/0; // prints => -Infinity


/* Complex Datatypes - Are indefinite in size.
*                      Are used as containers for data. 
*                      Are mutable which means they can be modified.
*                      Copy by reference - pass an object into a function, can change the object inside the function.
*                      Complex datatype values can be manipulated by using methods.
*                      Complex datatype key/value pairs can be altered with dot or bracket notation along with the assignment operator. 
*/

// Pass by reference 
let x = {num: 1};       // mutatation also reflected in x

let test = (val) => {
  val.num = 2;          // mutate the object
}
 test(x);
console.log(x);         // prints => {num: 2}


/* 7. Array - A container of square brackets [] that can hold datatypes.
*             Use to contain list of elements. 
*             Values inside an array starts with index of 0. 
*             We can add values in arrays using array methods like .push() and .unshift() 
*             We can take away values in arrays using methods like .pop() and .shift()
*             Access values by using bracket notation [] and placing the values' index inside the brackets. 
*/
[] // array literal
let myArr = ['food', 'toys', 100]; // array containing datatypes
myArr.length; // prints => 3 because there are 3 elements
myArr[0]; // prints 'food' because it is at 0 index. 'toys' is 1 index. 100 is 2 index
myArr.push('animals'); // adds 'animals' to the end of array
myArr.pop(); // removes last element from array
myArr.shift(); // removes first element from array
myArr.unshift('food'); // adds 'food' to the beginning of array 

/* 8. Object - A container of curly brace {} that can hold datatypes.
*              Use to store a collection of data.
*              Use to store key value pairs.
*              Add values to objects by using the object's name with dot notation or
*              brack notation to create a new property then setting it to a value using assignment operator. 
*              Can access values by using dot or bracket notation.
*/
{} // object literal
let myObj = {
    number: 1,
    name: 'Andre',
    pet: 'dog'
}
console.log(myObj['number']); // prints 1
console.log(myObj.name); // prints Andre
console.log(myObj); // prints {number: 1, name: 'Andre', pet: 'dog'}

myObj.lastName = 'nguyen'; // add a property called 'lastName' and set it to the value of 'nguyen'
console.log(myObj.lastName); // prints => nguyen

/* 9. Functions - Are basically reusable objects. 
*                 Code that does one or more actions.
*                 Take parameters and accept arguments. 
*                 When using functions, a good practice is DRY (Don't Repeat Yourself). 
*/
let add = function(num1, num2) { // function expression with two parameters
  return num1 + num2             // adding the two parameters
} 
add(5, 3);                       // calling the function with arguments


function subtract(num1, num2) { // function declaration with two parameters
  return num1 - num2            // subtracting the two parameters
} 
subtract(10, 5);                // calling the function with arguments
                       

let multiply = (num) => {return num * num}; // ES6 arrow syntax.
console.log(multiply(5));                   // prints => 25
 
let divide = (num) => num / num;           // do not need brackets or return statement when it's one line of code and return is assumed. 
console.log(divide(5)); 







