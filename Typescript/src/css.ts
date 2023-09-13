export function compare (a: string, b: string): string {
    let str = a + b
    let count = 0
    for(let i = 0; i < str.length; i++){
      if(str[i] === '#' || str[i]  === '.' ){
       count ++ 
      }    
    }
    
    if(a >= b){
      return a
    } else if (a.length > b.length){
      return a
    } else if(a.includes('#') && b.includes('.')){
      return a
    } else{
      return b
    }
  }

  
    console.log(compare(".class", "#id"))
    console.log(compare("div.big", ".small"))
    console.log(compare(".big", ".small"))