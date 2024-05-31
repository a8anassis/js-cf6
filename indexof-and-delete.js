const arr = [1, 2, 3, 4, 5]

let positionToDelete = arr.indexOf(5)
arr.splice(positionToDelete, 1)

console.log(arr)