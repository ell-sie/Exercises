export function solve(s: string) {
    return Math.max(...(s.split(/[aioue]+/).map((sum)=>sum.split("").reduce((a, b)=> a + b.charCodeAt(0)-96, 0))))
  }
  console.log(solve("zodiacs"))