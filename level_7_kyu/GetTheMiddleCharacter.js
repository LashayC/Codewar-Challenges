/*
https://www.codewars.com/kata/56747fd5cb988479af000028/train/javascript

You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

#Examples:

Kata.getMiddle("test") should return "es"

Kata.getMiddle("testing") should return "t"

Kata.getMiddle("middle") should return "dd"

Kata.getMiddle("A") should return "A"
#Input

A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.

#Output

The middle character(s) of the word represented as a string.

*/

//P: A string. no spaces/special characters. 
//R: odd, middle character returned in string. Even, return the middle two
//E: 'cat' returns// 'a' | 'blue' returns// 'lu'


function getMiddle(s){
    //odd strings, divide length by 2 to get the index and round down then up
    //even strings, divide length by 2 and sub 1, then get second value by adding 1
    //return variable with new string.
    let middleStr = ''
    if(s.length % 2 === 0){
      let div = s.length/2
      middleStr = s.slice(div-1, div+1)
    }else{
      let div = s.length/2
      middleStr = s.slice(Math.floor(div), Math.ceil(div))
    }
    return middleStr
  }