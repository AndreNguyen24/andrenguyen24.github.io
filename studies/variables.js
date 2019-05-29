/*
* VARIABLES:
*
* 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables
* are named identifiers that can point to values of a particular type, like a Number, String,
* Boolean, Array, Object or another data-type.  Variables are called so because once created, we
* can CHANGE the value (and type of value) to which they point.
*
* 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our
* variable.
*
* 2. There are 2 phases of using variables: declaration and initialization (or assignment).
*/

// 1. declaration //
var myName;

/*
* At the declaration phase, the variable myName is undefined because we have NOT initialized
* it to anything
*/
console.log(myName); // prints => undefined

// 2. initialization or assignment //
myName = 'john';
console.log(myName); // prints => john

// 3. re-assignment //
myName = 'bob';
console.log(myName); // prints => bob

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
var myVariable = 1;
var myVariable = true;
myVariable = "someString";


/*
* DECLARATIONS:
*
* We can declare variables differently depending where they are available in the scope. There are three different 
* keywords we can use to declare variables.
*/

/* 1. var - When declared outside of a function it is considered global scope. 
*         - Can access variables declared with var outside of a function. 
*         - When declared inside of a function it is considered local scope. 
*/
var firstName; // using var to declare the variable called firstName
var firstName = 'Andre'; // assigned firstName to a string
function name() {
    console.log(firstName); // prints => 'Andre'
}
name();   // function executes when called 


/* 2. let - Used in a blocked scope which is a block of code that is inside curly braces {}
*         - Can be used to declare a block scope local variable. 
*         - Cannot be used outside of its block which it was declared in.
*/
let num = 10;
if (num > 5) {
    let result = true;
    console.log(result); // prints => true 
}
// console.log(result); => result is not defined 

// let can be reassigned but cannot be redeclared. 
let word = 'hi';
word = 'hello';
console.log(word); // prints => 'hello'


/* 3. const - Can only be accessed within its block of code it was declared in. 
*           - Has a CONSTant value. 
*           - Cannot be redeclared or be reassigned. 
*/
const value = 'cannot change';
value = 'wrong'; 
console.log(value); // TypeError: Assignment to constant variable


/* 
* HOISTING: 
* When function and variable declarations are declared INSIDE of a function then they are hoisted to the top of their LOCAL scope.
* When function and variable declarations are declared OUTSIDE of a function then they are hoisted to the top of their GLOBAL scope.
* Assignments are not hoisted.
*/

// Variable names are only hoisted to the top and NOT their ASSIGNMENTS.
console.log(number); // UNDEFINED because the value is not being hoisted only the variable. 
var number = 24;

// Function DECLARATIONS are only hoisted to the top and NOT EXPRESSIONS. 
addingNums(5, 5); // prints => 10 because the function's name and block are hoisted.
function addingNums(num1, num2) {
    return num1 + num2;
}