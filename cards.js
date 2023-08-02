let count = 0;

function cc(card) {
  // Only change code below this line
  if (card === 2 || card === 3 || card === 4 || card === 5 || card === 6) {
    count++;
  } else if (card === 10 || card === 'J' || card === 'Q' || card === 'K' || card === 'A') {
    count--;
  }

  return count > 0 ? count + " Bet" : count + " Hold";
  // Only change code above this line
}

console.log(cc(2));   // 1 Bet
console.log(cc(3));   // 2 Bet
console.log(cc(7));   // 2 Bet (count remains unchanged)
console.log(cc('K')); // 1 Bet
console.log(cc('A')); // 0 Hold
