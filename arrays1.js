const arr1 = []     // empty array
const arr2 = [1, 2, 3, 4, 5]
const arr3 = new Array(10)

console.log("arr2, position 0: ", arr2[0])

let grid = [
    [1, 2], 
    [3, 4],
    [5, 6]
]

let rows = 4
let cols = 5

let matrix = new Array(rows)
for (let i = 0; i < matrix.length; i++) {
    matrix[i] = new Array(cols)
}

for (let num of arr2) {
    console.log(num)
}

for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        console.log(matrix[i][j])
    }
}

