/*
* CONTROL FLOW:
*
* Control Flow - The order that the program executes the code.
*                Runs the first line of code all the way to the last. 
*                Will execute the first line of code in which its condition is true. 
*                Conditional Statements are used to specify a block of code to be executed if the condition is true. 
*/

/* 0. If Statements - Can only have one IF Statement. 
*                     Code will only execute if the given condition evalutes to true.
*/
if (6 > 4) {                            // since 6 is greater than 4 is true
  console.log('This code executes!')    // prints => 'This code executes!'
}

/* 1. Else-if Statements - If the IF statement condition is false, the program will check the Else-if statement. 
*                          If the Else-if statement condition is true, its code will execute. 
*                          Can have as many Else-if statements as needed. 
*/
function compareNum(num) {
  if (num > 10) {              // checks if num is greater than 10
    console.log('Incorrect');  // condition is false. checks next condition
  } else if (num < 10) {       // checks if num is less than 10
    console.log('Correct');    // condition is true. code with execute
  }
}
compareNum(3);                 // function argument for parameter

/* 2. Else Statements - If the IF and Else-if statements are false, the Else statement code executes by default.
*                       Does not need a condition.
*                       Can only have one Else Statement.
*/
function compareNums(nums) {                
  if (nums >= 10) {                     // checks condition
    console.log('Incorrect');           // condition is false. checks next condition
  } else if (nums >= 10) {              // checks condition
    console.log('Wrong');               // condition is false. checks next condition
  } else {                              // does not need condition
    console.log('Default execution')    // code executes without needing a condition
  }
}
compareNums(3);

/* 3. Switch Statements - Used to execute code.
*                         Compares expression value to a case. If expression matches the case, code with execute. 
*                         Break statements are use to end cases to avoid unintentional code execution.
*/
let basketballTeam = 'New Orleans'
switch (basketballTeam) {
  case 'New York':              // false
   console.log('Knicks');       // does not execute
   break;
  case 'Miami':                 // false
   console.log('Heat');         // does not execute
   break;
  case 'Los Angeles':           // false
   console.log('Lakers');       // does not execute
   break;
  case 'Houston':               // false
   console.log('Rockets');      // does not execute
   break;
  default:
   console.log('Pelicans');       // execute by default since other cases are false
  }
