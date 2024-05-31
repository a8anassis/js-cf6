let s1 = "AUEB1"
let s2 = new String("AUEB2")
let s3 = String(3)
let s4 = 'AUEB'
let s5 = `AUEB`
let s6 = "This is \
\
an exampe of \
a template literal, first intoduced in JS \
with version ES6"

let s7 = `This is 

an exampe of
a template literal, first intoduced in JS
with version ES6`


const aueb = "AUEB"
// aueb = "AUEB other" will raise error

let myAueb = "Athens Uni of Econ and Bus"

let outStr = ""
for (let letter of myAueb) {
    outStr += letter
}
console.log(outStr)
