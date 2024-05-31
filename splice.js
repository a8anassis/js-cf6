const arr = [1, 2, 3, 4, 5, 6, 7, 8]

const slice1 = arr.splice(0, 4) // returns [1, 2, 3, 4], arr -> [5, 6, 7, 8]

console.log(slice1)
console.log(arr)

arr.splice(1, 1, 20)  // [5, 20, 7, 8] -- update
console.log(arr)

arr.splice(3, 0, 40) // [5, 20, 7, 40, 8] -- insert
console.log(arr)

