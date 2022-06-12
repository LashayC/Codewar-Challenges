/*
https://www.codewars.com/kata/52597aa56021e91c93000cb0/train/javascript

Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
*/

//P: array. not empty. 0s are just numbers, not strings.
//R: array returned with zeroes moved to the end.
//E: 

function moveZeros(arr) {
    //loop through array and get zeroes
    //push it to new array of zeroes
    //remove zero
    //subtract index by 1 in case zeroes back to back
    //join arrays together
    //return it
    let zeroes = []
    for (let i = 0; i < arr.length; i++){
      if(arr[i] === 0){
        zeroes.push(arr[i])
        arr.splice(i, 1)
        i--
      }
    }
     
    return arr.concat(zeroes)
  
  }