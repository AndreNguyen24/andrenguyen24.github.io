/*
* LOOPS:
* 
* Loops - Are used to execute a block of code as many times as needed.
*         Are useful when we want to run the same block of multiple times and produce a different value each time. 
*         Able to loop through objects and arrays. 
*/

/* 0. While Loops - Executes a block of code as long as the condition is true. 
*                   Must have a stopping condition or else the loop will crash the browser due to infinite loop.  
*                   Infinite loop will occur without proper incrementation. 
*/
let num = 0;            // num set to 0
while (num <= 10) {     // as long as num is less than or equal to 10
  console.log(num);     // run this code
  num++;                // incrementing by 1 until it reaches 10
}

/* let num = 0;         // num set to 0
while (num <= 10) {     // as long as num is less than or equal to 10
  console.log(num);     // run this code
}                       // without increment counter the loop will run forever causing an infinite loop.
*/

/* 1. Do / While Loops - Similar to while loops, but the code will execute at least once even if condition is false. 
*                        Must loop towards stopping condition to prevent infinite loop.
*/
let myNum = 15;          // set to 15
do {
  console.log(myNum);    // code to run 
  myNum++                // incrementation towards 10
} while (myNum <= 10)    // even though statement is false, code will run once and print 15

/* 2. For Loops - Used to loop forward or backwards over arrays.
*                 Used to run code a certain or set amount times. 
* 
*   let index = 0;              // starting condition
*   index < array.length;       // stopping condition
*   index++                     // incrementation
*/
let array = [0, 1, 2, 3];
for (let index = 0; index < array.length; index++ ) {     // looping the array forward
  console.log(array[index]);                              // prints 0 to 3
}

for (var index = array.length-1; index > -1; index--) {   // looping the array backwards
   console.log(array[index]);                             // prints 3 to 0
}

/* 3. For / In Loops - Used to loop over objects.
*                      Allows access to keys and values in object. 
*/
let colors = {
  color1: 'blue',
  color2: 'green',
  color3: 'red'
}

for (let key in colors) {         // accessing keys in 'colors' object
  console.log(colors[key]);       // using square brackets[] to log the values of the keys
}

for (let key in colors) {         // accessing keys in 'colors' object
  console.log(key);               // prints the keys
}

for (let key in colors) {
  console.log(colors.color1);     // dot notation to access specific key/value pairs 
}

for (let key in colors) {
  console.log(colors['color2']);  // bracket notation to access specific key/value pairs
}