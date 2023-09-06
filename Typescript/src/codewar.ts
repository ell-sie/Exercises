export function race(v1 : number, v2 : number, g : number) : [number, number, number] | null{
     if(v1 >= v2){
      return null
    } else {
      const time = g / (v2 - v1)
      const hour = Math.floor(time)
      const min = Math.floor((time - hour) * 60)
      const sec = Math.floor((((time - hour) * 60) - min) * 60)
    return [hour, min, sec]
    }
}

console.log(race( 18, 19, 59))