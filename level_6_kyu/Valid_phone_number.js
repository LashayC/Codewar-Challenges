// Write a function that accepts a string, and returns true if it is in the form of a phone number.
// Assume that any integer from 0-9 in any of the spots will produce a valid phone number.

// Only worry about the following format:
// (123) 456-7890 (don't forget the space after the close parentheses)

// Examples:

// "(123) 456-7890"  => true
// "(1111)555 2345"  => false
// "(098) 123 4567"  => false

function validPhoneNumber(phoneNumber){
    //TODO: Return whether phoneNumber is in the proper form
    //console.log(phoneNumber.charAt(9) === '-')
    if((phoneNumber.charAt(0) === '(') && (phoneNumber.charAt(4) === ')') && (phoneNumber.charAt(5) === ' ') && (phoneNumber.charAt(9) === '-') && (phoneNumber.length === 14)){
      return true
    }else{
      return false
    }
  }