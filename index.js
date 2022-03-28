
// It should run the callback on each of the array elements. 
// The function does not return anything.
// calls the callback with the element, index, and original array
function forEach(arr, callback) {
  for(let i = 0; i < arr.length; i++) {
    // Run callback on each of the array elements
    callback(arr[i], i, arr)
  }
  
}
// The function returns a new array. 
// The callback function should be called on each element of 
// the array and the result of each call should be stored in the new array.
function map(arr, callback) {
  newArr = []
  for(let i = 0; i < arr.length; i++) {
    newArr[newArr.length] = callback(arr[i])
    // Below also works
    // newArr.push(callback(arr[i]))
  }
  return newArr
}
// The function should return a new array. The new array should 
// only have elements from the original array that return true 
// when called with the given callback.
function filter(arr, callback) {
  newArr = []
  for(let i = 0; i < arr.length; i++) {
    if(callback(arr[i]) === true) {
      // newArr[newArr.length] = arr[i] 
      newArr.push(arr[i])
    }
  }
  return newArr
}
// The function should return a boolean. It should return true if the callback 
// returns true when called with each of the elements in the array and false otherwise.
// 1) returns true when the callback returns true for all elements
// 2) returns false when the callback doesn't return true for all elements
function every(arr, callback) {
  for(let i = 0; i < arr.length; i++) {
    // If any of array elements return false
    if (callback(arr[i]) === false) {
      return false
    }
  }
  return true
}
// It should return true if the callback returns true for at least one 
// element in the array and false otherwise.
// 1) returns true when the callback returns true for at least one element
// 2) returns false when the callback doesn't return true for any elements
function some(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i]) === true) {
      return true
    }
  }
  return false
}
// 1) returns true if the callback returns true for the majority of elements
// 2) returns false if the callback doesn't return true for the majority of elements 
function majority(arr, callback) {
  let counterTrue = 0
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i]) === true) {
      counterTrue += 1
    }
  } 
  if (counterTrue > (arr.length/2)) {
    return true
  }
  return false
}
// 1) returns a function
// 2) returns the correct result by calling the callback
// 3) called the callback only once
// 4) returns the saved result on subsequent calls
function once(callback) {

  return callback
  // return function() {
  //   return callback
  // }

}

// returns an object
// group array items together based on the callback return value
function groupBy(arr, callback) {
  const obj = {}

  //object[callback] = input

  return obj
}

// returns an object
// object has original array elements as keys and the result of the callback as values
function arrayToObject() {

}

module.exports = { 
  forEach, 
  map, 
  filter, 
  every, 
  some, 
  majority,
  once,
  groupBy,
  arrayToObject,
};
