// export function circleArea(radius: number): number {
//   if (radius <= 0) {
//     throw new Error('radius too small');
// }

// return parseFloat((Math.PI * (radius * radius)).toFixed(3));
     
//   }
// console.log(circleArea(68))

// export function areaOfPolygonInsideCircle(circleRadius: number, numberOfSides: number): number {
//   let s = 2*circleRadius*Math.sin(Math.PI/numberOfSides)
  
//   let area = parseFloat(((numberOfSides*(s*s)) /(4*Math.tan(Math.PI/numberOfSides))).toFixed(3))
  
//   return area 
//  }
  
//  console.log(areaOfPolygonInsideCircle(5.8, 7))

type matrix = number[][];
export function matrixAddition(a: matrix, b: matrix): matrix {
  let res:matrix = []
  for(let i = 0; i < b.length; i++){
    res[i] = []
    for(let j = 0 ; j < b[i].length; j++){

      res[i][j] = a[i][j] + b[i][j]
    }
  }
  
  return res
}

console.log(matrixAddition( [ 
  [1, 2, 3],
  [3, 2, 1],
  [1, 1, 1] ],
[ [2, 2, 1],
  [3, 2, 3],
  [1, 1, 3] ]))