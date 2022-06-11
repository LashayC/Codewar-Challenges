// https://www.codewars.com/kata/514b92a657cdc65150000006/train/javascript

// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

// Note: If the number is a multiple of both 3 and 5, only count it once.

// Courtesy of projecteuler.net (Problem 1)




//P: natural numbers
//R: return a numbedr
//E: 1, 2, 3, 5// 8
//E: 5,2,2,9// 18
//P: loop counting up to number
//conditional to check 3/5
//concatenate value to a variable.
//return variable
function solution(number){
    let sum = 0
    for(let i=0; i<number; i++){
      if(i < 0){
        return
      }else if ((i % 5 === 0) ||( i % 3 === 0)){
        sum += i
      }
    }
    return sum
  }