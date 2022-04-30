function century(year) {
    // Finish this :)
    if(year % 100 === 0){
      return year/100
    }else{
    return Math.ceil(year/100)
  }
    }