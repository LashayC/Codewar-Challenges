// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

function removeChar(str){
    //You got this!
     //pop method for the end
     //shift method
     let sec = str.length -1
     let cut = str.slice(1, sec)
     return cut
   };
   
   // console.log('candy')//'and'
   // console.log('bag')//'a'
   // console.log('star')//'ta'