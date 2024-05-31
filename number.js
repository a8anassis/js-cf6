let num1 = 10               // number type
let num2 = new Number(15)   // Object type
let num3 = Number("17")     // Type coercion from string -> number
let num4 = Number("AUEB")   // num4 -> NaN

console.log("num1: ", num1)
console.log("num2: ", num2)
console.log("num3: ", num3)
console.log("num4: ", num4)

console.log("Min: " + Number.MIN_VALUE)
console.log("Max: " + Number.MAX_VALUE)

console.log("12 is integer: ", Number.isInteger(12))
console.log("3/aueb is NaN: ", Number.isNaN(3/"AUEB"))

console.log("Div positive by zero: ", (12/0))
console.log("Div negative by zero: ", (-12/0))

console.log("10/3 = ", (10/3).toFixed(2))


