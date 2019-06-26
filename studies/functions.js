/*
* FUNCTIONS:
*
* Functions - Are your bread and butter to functional programming Javascript. 
*             Are objects and reusable blocks of code that are designed to perform or execute codes.
*             A function is defined by its return statement. 
*             Must always return a value. If no return value is specified the function will return undefined. 
*             
*/

/* 0. Defining / Declaring a Function - Use the keyword 'function' followed by the function name
*                                       that is created based on what the function is suppose to do
*                                       and followed by parenthese() for the parameters
*                                       and followed by curly braces{} which is the block of code.
*/
function add(num1, num2) {            // declaring a function called 'add' with two parameters
    return num1 + num2;               // block of code that performs a code
}                                     

// Can also declare function using function expression
let multiply = function(num1, num2) { // declaring variable and assigning it to a function
num1 * num2;
} 

// Can also declare function with arrow syntax (ES6)
let divide = (num) => num / num; // instead of word 'function' it is replaced by '=>'

// 1. Executing / Calling a Function - Use the name of the function followed by parenthese() for arguments. 
add(1, 3);              // prints => 4
multiply(4, 5);         // prints => 20
divide(6, 2);           // prints => 3

/* 2. Function Parameters - Are placeholders for the data we want to pass into the block of code.
*                           Are necessary when there are values we want to work with to execute our function code.
*                           Are variables listed as a part of the function definition. 
*/
function addNum(num1, num2) {  // function addNum has two parameters num1, num2 that represent the datatype we're working with
   return num1 + num2;         // using parameters to perform what we want our code to do
}

/* 3. Function Arguments - Are values passed to the function when it is invoked. 
*                          Are necessary when we want to pass in a value to the function. 
*                          Do not need arguments to call/execute a function.
*
*/                        
addNum(2, 8);           // 2 is num1 and 8 is num2


// 4. Scope - Where variables and functions are available and accessible. 

/* Global Scope - Are the codes that are outside of the function body.
*                 Global variables are accessible to any other scopes.
*/
let name = 'andre';     // global variable outside the function
function myName() {     
  console.log(name);    // accessing global variable 'name' inside the function
}
myName();               // calling function to print 'andre'

/* Local Scope - Are the codes that are inside the function body.
*                Local variables which are declared in a function are accessible within that function.
*/
function hisName() {        // function 
  let lastName = 'nguyen';  // declared variable inside function
  return lastName;
}
hisName();                  // returns 'nguyen'
// console.log(lastName);   // cannot access local variable outside the function. Reference Error. 

/* Functions can also be declared within another function.
*  Global Scopes are also known as Parent Scopes and CANNOT access child scopes. 
*  Local Scopes are also known as Child Scopes and CAN access parent scopes. 
*/
// Child scope accessing Parent scope
function bestColor() {      // parent function 'bestColor'
  let hisColor = 'red';     // parent scope variable 'hisColor'
function worstColor() {     // child function 'worstColor'
  hisColor = 'blue';        // child scope accessed variable from parent scope
}
worstColor();
console.log(hisColor);
}
bestColor();                // prints => 'blue'

// Parent scope cannot access Child scope
function strongColor() {    // parent function 'strongColor'
function weakColor() {      // child function 'weakColor'
  let myColor = 'pink';     // variable declared in child scope
}
weakColor();
//console.log(myColor);     // 'myColor' cannot be defined outside of child scope
}
strongColor();              // Reference Error: myColor is not defined

// 5. Closures - A function that retains access to the outer scope variable even though the outer function body has closed.
function favFood(food) {
  let myFood = 'My favorite food is'; // variable declared in outer scope
  function hisFood() {              
    return myFood + ' ' + food;       // inner scope accessing outer scope's variable and parameter
  }
  return hisFood();
}
favFood('pizza!');                    // returns 'My favorite food is pizza!'