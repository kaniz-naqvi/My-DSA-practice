/****************************Day 6*******************************/
/*****Question 01******/
//Write a recursive function to calculate the power of a number (e.g., pow(2, 3) = 8).

function calculatePowerRecursive(number, power) {
  //base case
  if (power === 0) return 1;
  ///recursive case
  return number * calculatePowerRecursive(number, power - 1);
}
console.log(calculatePowerRecursive(2, 5)); // output: 32

/*****Question 02******/
//Write an iterative function to calculate the power of a number.
function calculatePowerIterative(number, power) {
  let numberMultiple = 1;
  for (let i = 0; i < power; i++) {
    numberMultiple *= number;
  }
  return numberMultiple;
}
console.log(calculatePowerIterative(2, 5)); // output: 32
