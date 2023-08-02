function addLength(str) {
//start-here
//make tha array
  let inputStrings = str.split(' ') ;
//iterate through each word in the array
  return inputStrings.map ( (inputString) =>`${inputString} ${inputString.length}`);
}
const inputString = "";
const arr = addLength(inputString);
console.log(arr);
