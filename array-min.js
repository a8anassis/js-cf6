const arr = [7, 4, 9, 2, 14]

let minVal = Math.min(...arr)
let maxVal = Math.max(...arr)
let minPos = arr.indexOf(minVal)
let maxPos = arr.indexOf(maxVal)

console.log(`Min value: ${minVal}, Min Position: ${minPos}`)
console.log(`Max value: ${maxVal}, Max Position: ${maxPos}`)
