let s1 = "Athens Uni of Econ and Bus"

let subStrWhole = s1.substring(0)
let subStr = s1.substring(0, 6)
let sliced = s1.slice(0, 6)

let alphaUpper = s1.charAt(0)
let indexOfU = s1.indexOf("U")
let lastIndexOfs = s1.lastIndexOf("s")

let sUpdated = s1.replace("Uni", "University")
let upperS = s1.toUpperCase()
let lowerS = s1.toLowerCase()

let s2 = "Athens Uni of Econ and Bus"
if (s1.toUpperCase() === s2.toUpperCase()) {
    console.log("Strings are equal")
} else {
    console.log("Strings not equal")
}

let s3 = "  Coding   "
let trimmed = s3.trim()
// ES2019
// trimStart()
// trimEnd()

// Concat
let s4 = s1 + s2
let s5 = s1.concat(s2)
