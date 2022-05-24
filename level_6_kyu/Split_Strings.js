// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

function solution(str){
    if (str === ''){
      return []
    }
    
    let bits = str.split('')
    if (bits.length % 2 !== 0){
      bits.push('_')
    }
    
    for(let i = 2; i < bits.length; i += 3){
      bits.splice(i, 0, ' ')
    }
   
    return bits.join('').split(' ')
  }
  