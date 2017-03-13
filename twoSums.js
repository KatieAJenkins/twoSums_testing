'use strict';
// Two Sum: Write a function that takes an array of integers and a target integer.

//It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in an array like so: [index1, index2].

// input: [1, 2, 3, 4, 5, 6, 7], 13 // output: [5,6]

const array = [1, 2, 3, 4, 5, 6, 7];

const target = 13;

function twoSums (array, target){
  for(var i = 0; i < array.length; i++){
    for(var j = i + 1; j < array.length; j++){
      if( array[i] + array[j] === target){
        console.log(array[i]);
        console.log([i,j]);
        return [i,j];
      }
    }
  }
  return "no indices equal target";
}

twoSums(array, target);

module.exports = twoSums;
