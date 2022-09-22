 import SCRIPTS from './sctiprs.js'

function dominantDirection(word){
    let array = []
    let resultArray = []
    let directionArray = ['ltr','rtl','ttd']

    for (let i = 0; i <word.length; ++i){
        array.push(characterScript(word[i].codePointAt()))
    }
    for(let i = 0; i < directionArray.length;++i){
        resultArray.push(countBy(array, n => n === directionArray[i]))
    }
    return countMaxDirection(resultArray,directionArray)
}

function countMaxDirection(arrayOfResult,arrayOfExp){
    let maxValue = 0 
    let current 
    for (let i = 0; i < arrayOfResult.length; ++i){
        for (let j = 0; j < arrayOfResult[i].length; ++j){
            if (arrayOfResult[i][j].name == true && arrayOfResult[i][j].count > maxValue){
                maxValue = arrayOfResult[i][j].count
                current = arrayOfExp[i]
            }
        }
    }
    return current
}

function countBy(items,groupName){
    let counts = []
    for (let item of items) {
        let name = groupName(item);
        let known = counts.findIndex(c => c.name === name);
        if (known === -1) {
          counts.push({name, count: 1});
        } else {
          counts[known].count++;
        }
      }
      return counts;
}

function characterScript(code) {
    for (let script of SCRIPTS) {
      if (script.ranges.some(([from, to]) => {
        return code >= from && code < to;
      })) {
        return script.direction;
      }
    }
    return null;
}
console.log(dominantDirection("Hello!"));
// → ltr
console.log(dominantDirection("Hey, مساء الخير"));
// → rtl