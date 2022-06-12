/*
https://www.codewars.com/kata/525f50e3b73515a6db000b83/train/javascript

Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

Example
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
The returned format must be correct in order to complete this challenge.
Don't forget the space after the closing parentheses!
*/

//P: 10 integers. 0-9
//R: Phone number
//E: 


function createPhoneNumber(numbers){
    //create a variable for number
    //splice array with (),' ', -
    //join array.
    //make it a string
    numbers.splice(0,0, '(')
    numbers.splice(4,0, ')')
    numbers.splice(5, 0, ' ')
    numbers.splice(9,0, '-')
   
  //(215) 555-555
    
    return numbers.join('').toString()
    
  }