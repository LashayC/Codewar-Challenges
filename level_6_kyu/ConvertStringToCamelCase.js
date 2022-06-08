// https://www.codewars.com/kata/517abf86da9663f1d2000003/train/javascript

// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

function toCamelCase(str){

    let capStr = str.split('')
  
    for(let i = 0; i<capStr.length; i++){
      if(capStr[i] === '-' || capStr[i] === '_'){
      
        capStr.splice(i,2, capStr[i+1].toUpperCase() )
        //console.log(capStr)
      }
    }
    
    return capStr.join('')
  
  }
  
