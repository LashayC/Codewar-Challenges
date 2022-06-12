/*
https://www.codewars.com/kata/57216d4bcdd71175d6000560/train/javascript

Coding in function padIt, function accept 2 parameters:

str, it's a string representing the string to pad, we need pad some "*" at leftside or rightside of str
n, it's a number, how many times to pad the string.
Behaviour
You need to write a loop statement within the function that loops n times. Each time through the loop it will add one * to str, alternating on which side it is padded: the first time will add a * to the left side of str, the second time will add a * to the right side, and so on.

Finally, return the padded string.
*/


//P: string with a single character, num > 0
//R: String padded on both sides. 
//E: 

function padIt(str,n){
    //while loop
    //when iterator is odd add to left and even adds to right
    //return str
    
    let padStr = str
    
    let i = 1
    while(i <= n){
      i++
      if (i % 2 ===  0 ){
        padStr = "*" + padStr
      }else{
        padStr = padStr + "*"
      }
    }
    
  return padStr
  }