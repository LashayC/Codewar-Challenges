/*
https://www.codewars.com/users/LashayC/completed_solutions


DESCRIPTION:
What is an anagram? Well, two words are anagrams of each other if they both contain the same letters. For example:

'abba' & 'baab' == true

'abba' & 'bbaa' == true

'abba' & 'abbba' == false

'abba' & 'abca' == false
Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. You should return an array of all the anagrams or an empty array if there are none. For example:

anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']

anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']

anagrams('laser', ['lazing', 'lazy',  'lacer']) => []
Note for Go
For Go: Empty string slice is expected when there are no anagrams found.

*/


//P: a string, and an array of strings. no empty strings
//R: return array of anagrams or empty array
//


function anagrams(word, words) {
  //create an array
  //split and sort word
  //loop through array, split , sort, compare, and conditionally push
  
  let anagram = []

  let origWord = word.split('').sort().join('')
  
  let orderedWords  = words.map(str => {
    return str.split('').sort().join('')
  })
  
  for(let i = 0; i < orderedWords.length; i++){
    if(origWord === orderedWords[i]){
      anagram.push(words[i])
    }
  }
  
  return anagram
  
}