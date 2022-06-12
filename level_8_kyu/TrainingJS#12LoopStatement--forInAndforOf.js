/*
https://www.codewars.com/kata/5722b3f0bd5583cf44001000/train/javascript

Task
Coding in function giveMeFive, function accept 1 parameter:obj, it's an object.

You need to the traverse the obj, if the length of the object key equals to 5, then push the key value to the array (you need to define the array by yourself, this time I won't help you). Additionally push the value to the array as well, if the length of the value is equal to 5.

Return the five after works finished.

You should use for..in in your code, otherwise, your solution may not pass this kata. Don't learn bad habits from those lazy guys ;-)
*/


//P: object. key value pairs. strings. No empty strings. no empty objects
//R: array of keys/values w/ length of 5
//E:


function giveMeFive(obj){
    //make an array
    //loop through the keys and check length for those equal to 5, then push
    //loop through the values and check length
    //return array.
    let arrayOfFive = []
    
    for(wordKeys in obj){
      if (wordKeys.length === 5){
        arrayOfFive.push(wordKeys)
      }
      if(obj[wordKeys].length === 5){
        arrayOfFive.push(obj[wordKeys])
      }
    }
    return arrayOfFive
  }