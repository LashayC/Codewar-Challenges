/*
https://www.codewars.com/kata/5722fd3ab7162a3a4500031f/train/javascript

Task
Coding in function whatNumberIsIt. function accept 1 parameter:n. it's a number.

To judge the number n. If n is one of the above five constants, return one of these string:

"Input number is Number.MAX_VALUE"
"Input number is Number.MIN_VALUE"
"Input number is Number.NaN"
"Input number is Number.NEGATIVE_INFINITY"
"Input number is Number.POSITIVE_INFINITY"
Other values should return "Input number is xxx". xxx means this number.

For example:

whatNumberIsIt(1/0) should return "Input number is Number.POSITIVE_INFINITY"
whatNumberIsIt(100) should return "Input number is 100"
What you need to think about is how to judge it correctly and effectively and don't forget isNaN().
*/

function whatNumberIsIt(n){
    //coding here
    let numberValue = 0
    
    if(n === Number.MAX_VALUE){
      numberValue = 'Number.MAX_VALUE'
    }else if(n === Number.MIN_VALUE){
      numberValue = 'Number.MIN_VALUE'
    }else if(isNaN(n)){
      numberValue = 'Number.NaN'
    }else if(n === Number.POSITIVE_INFINITY){
      numberValue = 'Number.POSITIVE_INFINITY'
    }else if(n === Number.NEGATIVE_INFINITY){
      numberValue = 'Number.NEGATIVE_INFINITY'
    }else{
      numberValue = n
    }
    
    return `Input number is ${numberValue}`
    
  }