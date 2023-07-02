// Construct a function makeIterator() that takes in an array and return an iterator to iterate over it.

// Sample code base:
// var nums = [1,2,3]
// var iter = makeIterator(nums)
// iter.next() // {value:1, done: false}
// iter.next() // {value:2, done:false}
// iter.next() // {value:3, done: false}
// iter.next() // {value: undefined, done : false}

function makeIterator(nums) {
	let iterator = nums[Symbol.iterator]();
  return iterator;
}
