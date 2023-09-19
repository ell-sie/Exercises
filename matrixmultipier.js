function sumOfPositiveRoots(number) {
    if (number < 0) {
      return "Invalid input. The number must be non-negative.";
    }
  
    let sum = 0;
    let root = 1;
  
    while (root <= number) {
      sum += Math.pow(number, 1 / root);
      root++;
    }
  
    return sum;
  }
  console.log(sumOfPositiveRoots(64))