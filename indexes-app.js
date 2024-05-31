const arr = [1, 2, 1, 4, 1, 3]
let results = []

function getIndexes(arr, x) {
    const results = []

    arr.forEach((element, index) => {
        if (element === x) {
            results.push(index)
        }
    });

    return results
}

results = getIndexes(arr, 1)
console.log(results)

