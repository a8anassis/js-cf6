const products = [{title: "Milk", price: 10}, {title: "Honey", price: 13.5}, {title: "Honey", price: 9.5}]

const deepCopy = _.cloneDeep(products)
console.log(deepCopy)