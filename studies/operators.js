/*
* OPERATORS:
* 
* Operators are used to assign values to variables. We can also compare values, perform
* arithmetic operations, and more. 
*/

// 0. Assignment Operators - Used to assign and re-assign values to variables.
let pet = 'dog';   // assigned variable pet to string value of 'dog'
console.log(pet);  // prints => dog
pet = 'fish';      // re-assigned pet to string value of 'fish'
console.log(pet);  // prints => fish

// 1. Addition Assignment (+=) Adds the variable to the given value and assigns the sum. 
let addNum = 2;       // addNum assigned to value of 2
addNum += 5;          // addNum adds 5
console.log(addNum);  // prints => 7

// 2. Subtraction Assignment (-=) Subtracts the variable from the given value and assigns the difference.
let subNum = 5;       // subNum assigned to value of 5
subNum -= 2;          // subNum subtracts 2
console.log(subNum);  // prints => 3

// 3. Multiplication Assignment (*=) Multiplies the variable by the given value and assigns the product.
let multNum = 5;       // multNum assigned to value of 5
multNum *= 2;          // multNum multiplies 2
console.log(multNum);  // prints => 10

// 4. Division Assignment (/=) Divides the variable by the given value and assigns the quotient.
let divNum = 10;       // divNum assigned to value of 10
divNum /= 5;           // divNum divides by 5
console.log(divNum);   // prints => 2

// 5. Remainder Assignment (%=) Divides the variable by the given value and assigns the remainder. 
let remainNum = 20;    // remainNum assigned to value of 20
remainNum %= 3;        // 3 goes into 20 six times. 3 * 6 = 18
console.log(remainNum);// prints => 2


// 0. Arithmetic Operators - Operators that perform mathematical operations on numbers. 

// 1. Addition Operator (+) Adds values together. 
let add = 5 + 5;        // add the numbers
console.log(add);       // prints => 10

// 2. Subtraction Operator (-) Subtract values from each other.
let sub = 10 - 5;       // subtract the numbers
console.log(sub);       // prints => 5

// 3. Multiplication Operator (*) Multiply values to each other.
let mult = 2 * 10       // multiply the numbers
console.log(mult);      // prints => 20

// 4. Division Operator (/) Divide values by each other.
let div = 25 / 5        // divide the numbers
console.log(div);       // prints => 5

// 5. Remainder Operator (%) Gives the remainder of the values. 
let remain = 10 % 3;    // 3 goes into 10 three times. 3 * 3 = 9
console.log(remain);    // prints => 1


// 0. Comparison Operators - Operators which are used for testing if a statement is true or false. 

// 1. Equal (==) Tests if both values are equal to each other regardless of type.
5 == 5;                 // true
5 == '5';               // true
5 == 1;                 // false

// 2. Strict Equal (===) Tests for strict equality based on the value and type. 
6 === 6;                 // true
6 === '6';               // false
6 === 3;                 // false

// 3. Not Equal (!=) Tests if values are not equal to each other.
3 != 4;                  // true
3 != 3;                  // false
3 != '3';                // false

// 4. Strict Not Equal (!==) Tests if values are not equal based on type and value. 
2 !== 2;                 // false
2 !== '2'                // true
1 !== 2;                 // true

// 5. Greater Than (>) Tests if a value is greater than the other value.
11 > 4;                  // true
11 < 4;                  // false

// 6. Less Than (<) Tests if a value is less than the other value.
21 < 24;                 // true
21 > 24;                 // false

// 7. Greater Than or Equal (>=) Tests if a value is greater than or equal to the other value. 
13 >= 2;                 // true
13 >= 13;                // true
13 >= 15;                // false

// 8. Less Than or Equal (<=) Tests if a value is less than or equal to the other value. 
33 <= 39;                // true
33 <= 33;                // true
33 <= 31;                // false


// 0. Logical Operators - Tests the logical between variables or value.

// 1. Logical AND (&&) Tests two expressions to see if they are true or false. Both needs to be true to return true.
(6 > 5 && 2 < 9);        // true
(8 > 4 && 2 > 7);        // false

// 2. Logical OR (||) Tests two expressions to see if they are true or false. Only one needs to be true to return true.
(3 > 5 || 5 > 3);        // true
(3 > 5 || 5 < 3);        // false


// 0. Urnary Operators - Operators that takes only one condition.

// 1. ! Operator - Will test an expression and return the opposite.
!(2 === 2);              // false
!(2 === 1);              // true

/* 2. typeOf Operator - Checks the datatype and see if they are the same datatype. 
*                       Does not work on arrays and dates.
*/
typeof 'Andre';          // string
typeof 24;               // number
typeof false;            // boolean
typeof {number: 1, name: 'nguyen'};    // object
let arr = []             // array literal
Array.isArray(arr);      // true


/* 0. Ternary Operator (?) - Tests two condition.  
*                            If the first condition is true, the first expression with execute.
*                            If the second condition is true, the second expression will execute. 
*                            Similar to if-else-if statements. 
*/
(2 === 8) ? console.log('cool') : console.log('dope'); // first condition is false. prints => 'dope'
(2 === 2) ? console.log('cool') : console.log('dope'); // first condition is true. prints => 'cool'


