function repeatStr (n, s) {
    let repeat = ""
    while(n > 0){
      repeat += s
      n--
    }
    return repeat;
  }