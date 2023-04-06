 // Write your algorithm here
function hasTargetSum(array, target) {
 
  for (let i=0; i<array.length; i++){
    let value=target-array[i];
  for(let j=i+1; j<array.length; j++){
   if (array[j]===value)
    return true
  }
    
  }
  return false
}


/* 
  Write the Big O time complexity of your function here
*/
// O(n * n)
/* 
  Add your pseudocode here
*/
//get array and target
//iterate through the array, find balance left after subtracting each item from target
//check if value of the balance leave, is equal to rest of the items left in the array. 

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