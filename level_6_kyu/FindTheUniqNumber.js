/*
https://www.codewars.com/kata/585d7d5adb20cf33cb000235/train/javascript

There is an array with some numbers. All numbers are equal except for one. Try to find it!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
It’s guaranteed that array contains at least 3 numbers.

The tests contain some very huge arrays, so think about performance.

This is the first kata in series:

Find the unique number (this kata)
Find the unique string
Find The Unique
*/

//P: array of values, with one different value. No empty arrays
//R: the value that appears once
//

function findUniq(arr) {
    //create an object
    //loop through array and add elements to object
    //increment eachproperty if repeated
    //create array from object prop anv values
    //find lowest value and return its prop
    
    let uniqObject = {}
    
    for(const num of arr){
      if(uniqObject.hasOwnProperty(num)){
        uniqObject[num] += 1
      }else{
        uniqObject[num] = 1
      }
    }
  
    let uniqNumArray = Object.keys(uniqObject)
    let uniqValueArray = Object.values(uniqObject)
    
  //   Math.min(...uniqValueArray)
    
    return Number(uniqNumArray[uniqValueArray.indexOf(1)])
  
  }
  