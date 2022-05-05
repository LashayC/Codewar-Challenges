function solution(str){

    let backwards = ""
    let i = str.length - 1
    while(i >= 0){
      backwards += str[i]
      i--
  }
    return backwards
  }