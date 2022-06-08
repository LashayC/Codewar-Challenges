/* https://www.codewars.com/kata/5583090cbe83f4fd8c000051/train/javascript

Convert number to reversed array of digits
Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

Example(Input => Output):
348597 => [7,9,5,8,4,3]
0 => [0]
*/

//nonnegative number
//return an array of number reversed
//432143 => [3, 4, 1, 2, 3, 4]

function digitize(n) {
    //make a string
    //split into array
    //reverse the array
    //convert back to numbers
    let arr = String(n).split('').reverse()
    let numberArr = arr.map(num => Number(num))
    
    //console.log(numberArr)
    return numberArr
  }

  