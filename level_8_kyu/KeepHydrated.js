// https://www.codewars.com/kata/582cb0224e56e068d800003c/train/javascript

// Nathan loves cycling.

// Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

// You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

// For example:

// time = 3 ----> litres = 1

// time = 6.7---> litres = 3

// time = 11.8--> litres = 5

function litres(time) {
    //multiply the time by 0.5l
    //round down to smallest value
    let water = time * 0.5
    
  //   console.log('water',water)
  //   console.log(Math.floor(water))
    
    return Math.floor(water);
  }