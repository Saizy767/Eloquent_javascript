function reverseArray(array) {
    result = [];
    for (let item of array) {
      result.unshift(item);
    }
    return result;
  }

function reverseArrayPlus(array){
    let cloneArray=[]
    for(let i=array.length-1;i>=0;i--){
        cloneArray.push(array[i])
    }
    return cloneArray
}

let arrayValue = [1, 2, 3, 4, 5];
console.log(reverseArray(["A", "B", "C"]));
console.log(reverseArrayPlus(arrayValue))