// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer

function squareDigits(num){
    //turn into string
    //turn into array
    //iterate through to square num
    //join
    //convert to a number
    let arrayNum = String(num).split('')
    
    let sqNum = []
    
    for (let i = 0; i < arrayNum.length; i++){
      sqNum.push(Math.pow(arrayNum[i], 2))
    }
    
    let result = Number(sqNum.join(''))
  
    
    return result
    
  }
  
  