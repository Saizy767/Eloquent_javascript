resultArray = []
function flattening(array){
    return [].concat(...array)
}

console.log(flattening([[1, 2, 3], [4, 5], [6]])) // → [1, 2, 3, 4, 5, 6]