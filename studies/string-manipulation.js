/*
* STRING MANIPULATION:
*
* 0. String Manipulation Operators - Used to combine strings to produce a new string. 
*                                    Can concatenate two or more strings with + Operator.
*/
let name = 'Andre' + ' ' + 'Nguyen';    // concatentating two strings seperated with a string with a space
console.log(name);                      // prints => Andre Nguyen

let firstName = 'Andre';                        
let lastName = 'Nguyen';
let fullName = firstName + ' ' + lastName + '!';  // concatentating variables with strings 
console.log(fullName);                            // prints => Andre Nguyen!

/* 1. String Method Manipulation - Are built in functions used to alter strings.
*                                  Used to work with strings dynamically. 
*/

// string.concat() - Takes two or more strings and combine them together to produce a single string.
let word1 = 'I';
let word2 = 'love';
let word3 = 'games!';
let sentence = word1.concat(' ', word2, ' ', word3); // concatenting strings seperated with spaces
console.log(sentence);                               // prints => 'I love games!'

// string.toLowerCase() - Makes all characters in the string lower case. 
let night = 'BEDTIME..';
let midnight = night.toLowerCase();     // using method to lower case all letters
console.log(midnight);                  // prints => 'bedtime..'

// string.toUpperCase() - Makes all characters in the string upper case.
let explosion = 'boom!';
let bigExplosion = explosion.toUpperCase();     // using method to upper case all letters
console.log(bigExplosion);                      // prints => 'BOOM!'

/* string.slice() - Extracts a part of a string and returns a copy of a portion of the string.
*                   Takes two parameters: Start Position and End Position. 
*/
let hisName = 'AndreNguyen';
let nickName = hisName.slice(2, 5)     // starting at index 2 and ending at index 5
console.log(nickName);                 // prints => 'dre'

/* string.split() - Splits a given string into an array of strings that is seperated into 
*                   substrings using a seperator provided in the argument. 
*/
let str = 'This is string manipulation';
let arr = str.split(' ');       // splits string into array seperated with spaces
console.log(arr);               // [ 'This', 'is', 'string', 'manipulation' ]

let numStr = '12345';
let numArr = numStr.split('');  // seperating characters with an empty string
console.log(numArr);            // [ '1', '2', '3', '4', '5' ]
                                  
/* string.replace() - Searches the string for a specified value and replaces it 
*                     with a new chosen value and returns a new string.
*/
let hisStr = 'Good Morning Girls!'
let herStr = hisStr.replace('Girls', 'Boys');  // replacing 'Girls' for 'Boys'
console.log(herStr);                           // prints => 'Good Morning Boys!'

// string.charAt() - Returns a character with the specified index.
let letter = 'ABCDEFG';
let favLetter = letter.charAt(0);       // searches for character at index 0
console.log(favLetter);                 // prints => A