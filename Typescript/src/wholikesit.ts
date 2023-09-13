export const likes = (a : string[]) : string => {
    if(a.length === 1){
          return `${(a[0])} likes this`
    } else if(a.length === 2){
          return `${(a[0])} and ${(a[1])} likes this`
    } else if(a.length === 3){
          return `${(a[0])}, ${(a[1])} and ${(a[2])} likes this`
    } else if(a.length > 3){
           return `${(a[0])}, ${(a[1])} and ${(a.length - 2)} others likes this`
    } else{
        return 'no one likes this'
      } 
    
    }


console.log(likes([]))
console.log(likes(["Alex", "Jacob", "Mark", "Max"]))
console.log(likes(["Peter"]))
console.log(likes(["Jacob", "Alex"]))
console.log(likes(["Max", "John", "Mark"]))