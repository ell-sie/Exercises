function rangeToRoman(endRoman: string): number[] {
    // Define Roman numerals and their corresponding values
    const numerals: { [key: string]: number } = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1,
    };
  
    const result: number[] = [];
    let currentNumber = 0;
  
    while (endRoman !== '') {
      for (const numeral of Object.keys(numerals).reverse()) {
        if (endRoman.startsWith(numeral)) {
          currentNumber += numerals[numeral];
          result.push(currentNumber);
          endRoman = endRoman.slice(numeral.length);
          currentNumber = 0; // Reset currentNumber after adding it to the result
          break;
        }
      }
    }
  
    return result;
  }
  
  console.log(rangeToRoman('X')); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  console.log(rangeToRoman('IV')); // [0, 1, 2, 3]
  console.log(rangeToRoman('III')); // [0, 1, 2]
  console.log(rangeToRoman('XIX')); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]
  