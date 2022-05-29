// summation(2) -> 3
// 1 + 2

// summation(8) -> 36
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8

var summation = function (num) {
    // Code here
    let sum = 0
    for(let i = 0; i <= num; i++){
      sum += i
    }
    return sum
  }