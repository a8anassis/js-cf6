const arr = [1, 2, 3, 4, 5]

let i = arr.length - 1

while (i) {
    if (arr[i] === 5) {
        arr.splice(i, 1)
    }
    i--
}

console.log(arr)