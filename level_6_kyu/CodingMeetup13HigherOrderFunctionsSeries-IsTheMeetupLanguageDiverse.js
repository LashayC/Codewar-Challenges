/*
https://www.codewars.com/kata/58381907f8ac48ae070000de/train/javascript

You will be given an array of objects representing data about developers who have signed up to attend the next web development meetup that you are organising. Three programming languages will be represented: Python, Ruby and JavaScript.

Your task is to return either:

true if the number of meetup participants representing any of the three programming languages is ** at most 2 times higher than the number of developers representing any of the remaining programming languages**; or
false otherwise.
For example, given the following input array:

var list1 = [
  { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'Python' },
  { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'Ruby' },
  { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 43, language: 'Ruby' },
  { firstName: 'Hanna', lastName: 'L.', country: 'Hungary', continent: 'Europe', age: 95, language: 'JavaScript' },
  { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 18, language: 'JavaScript' },
  { firstName: 'Joao', lastName: 'D.', country: 'Portugal', continent: 'Europe', age: 25, language: 'JavaScript' }
];
your function should return false as the number of JavaScript developers (3) is 3 times higher than the number of Python developers (1). It can't be more than 2 times higher to be regarded as language-diverse.

Notes:

The strings representing all three programming languages will always be formatted in the same way (e.g. 'JavaScript' will always be formatted with upper-case 'J' and 'S'.
The input array will always be valid and formatted as in the example above.
Each of the 3 programming languages will always be represented.




This kata is part of the Coding Meetup series which includes a number of short and easy to follow katas which have been designed to allow mastering the use of higher-order functions. In JavaScript this includes methods like: forEach, filter, map, reduce, some, every, find, findIndex. Other approaches to solving the katas are of course possible.
*/

//array of objects, w/ devs and their coding languages
//Return boolean. True if one of the of languages is, at the most, 2x higher than the remaining. Else false
//[{name: 'Dan', lang: 'JS'},{name: 'joe', lang: 'JS'},{name: 'bo', lang: 'ruby'}, {name: 'ko', lang: 'python'},{name: 'to', lang: 'python'},] true
//[{name: 'Dan', lang: 'JS'},{name: 'joe', lang: 'JS'},{name: 'bo', lang: 'ruby'}, {name: 'ko', lang: 'python'},{name: 'to', lang: 'python'},{name: 'to', lang: 'python'}] false
//Empty objects? Empty strings?


function isLanguageDiverse(list) {
    //make variables for each language
    //loop through the array of objects
    //push the langruage and number of times its' in list to variable
    //Compare the max to 2x the min value.
  
    
    let python = 0 
    let ruby = 0 
    let javascript = 0
   
                         
    for(let i = 0; i < list.length; i++){
      if(list[i]['language'] === 'Python'){
        python ++
      }else if(list[i]['language'] === 'Ruby'){
         ruby ++
      }else if(list[i]['language'] === 'JavaScript'){
        javascript ++
      }
      
    }
  
    if(Math.max(python,ruby,javascript) <= 2 * Math.min(python,ruby,javascript)){
      return true
    }else{
      return false
    }
  }
  
  