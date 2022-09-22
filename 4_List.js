let list = {
    value: 1,
    rest: {
      value: 2,
      rest: {
        value: 3,
        rest: null
      }
    },
  };

function arrayToList(array){
    let copyList = JSON.parse(JSON.stringify(list))
    let usefulList = copyList
    let i = 0
    while(array.length-1 >= i && usefulList){
        if(!(array[i+1])){
            usefulList.rest = null
        }
        usefulList.value = array[i]
        usefulList = usefulList.rest
        ++i
    }

    return copyList
}

function listToArray(list){
    arrayValue=[]
    while(list && list.value){
        arrayValue.push(list.value)
        list=list.rest
    }

    return arrayValue
}

function prepend(value, rest){
    let list = {
        value:value,
        rest:rest
    }
    return list
}

function nth(list, index){
    let currentIndex = 0
    while(list && list.value){
        if(currentIndex === index){
            return list.value
        }
        ++currentIndex
        list=list.rest

    }
}

console.log(arrayToList([10,20])); // → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10,20,30]))); // → [10, 20, 30]
console.log(prepend(10, prepend(20, null))); // → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1)); // → 20