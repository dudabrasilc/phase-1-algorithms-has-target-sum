// Write a function that takes two arguments: an array of numbers and a number as a target. The function should return true if the number passed as an argument is equal to the sum of any pair of numbers in the array. And it should return false otherwise (if any pair of numbers in the array is not equal to the target number passed as an argument)

function hasTargetSum(array, target) {
  // 1
  let result = false;
  // n
  for (const num of array) {
  // get index of current num
  // n
    let indexOfNum = array.indexOf(num)
  // get all numbers from the right of num
  // n
    let rightOfNum = array.slice(array.indexOf(num) + 1)
  // get all numbers from the left of num
  // n
    let leftOfNum = array.slice(0, indexOfNum)
  // create array of all array numbers but not the current num
  // n
    let restOfArray = rightOfNum.concat(leftOfNum);
  // make current num iterate with each number of restOfArray to find the target sum
  // n
    result = restOfArray.find(n => {
      return n + num === target
    })
  // 1
    if (typeof(result) === "number") {
      break;
  }}
  return typeof(result) === "number";
}

hasTargetSum([19, 22, 4, 6, 30], 25)





/* 
   O(n^2)
*/

/* 

*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
