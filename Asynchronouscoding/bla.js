function trim (str, size){
    // if(str.length <= size){
    //   return str
    // } else if(size <= 3){
    //   return str.charAt(1) + '...'
    // } else{
      return str.match(/0-size/gi) + '...'
  }
  
  
  console.log(trim("Creating kata is fun", 14))