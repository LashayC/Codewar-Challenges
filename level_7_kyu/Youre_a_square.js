// Task
// Given an integral number, determine if it's a square number:

// In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.

// The tests will always use some integral number, so don't worry about that in dynamic typed languages.

// Examples
// -1  =>  false
//  0  =>  true
//  3  =>  false
//  4  =>  true
// 25  =>  true
// 26  =>  false

var isSquare = function(n){
    let square = 0
    
    if(n < 0){
      return false
    }
    if(n ===1){
      return true
    }
    
    for(let i = 0; i <= n; i++){
      square *= square
      if(square === n){
        return true
      }else if(square !== n && i < n){
        square = i
      }else{
         return false
      }
    }
  }