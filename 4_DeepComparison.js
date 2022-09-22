function deepEqual(deepObj1,deepObj2){
    let result = []
    worker()
    function worker(obj1 = deepObj1,obj2 = deepObj2){
        let cloneObj1 = JSON.parse(JSON.stringify(obj1))
        let cloneObj2 = JSON.parse(JSON.stringify(obj2))
        if(Object.keys(cloneObj1).length != Object.keys(cloneObj2).length){
            result.push('false')
        }
        for (let i =0; i <= Object.keys(cloneObj1).length - 1; ++i){
            if(Object.keys(cloneObj1)[i] != Object.keys(cloneObj2)[i]){
                console.log(Object.keys(cloneObj1)[i] != Object.keys(cloneObj2)[i])
                result.push('false')
            }
        }
        for (let i=0; i<= Object.values(cloneObj1).length -1 ; ++i){
            if(typeof(Object.values(cloneObj1)[i] && Object.values(cloneObj2)[i]) === 'object'){
                deepEqual(Object.values(cloneObj1)[i],Object.values(cloneObj2)[i])
            }
            else if(Object.values(cloneObj1)[i] === Object.values(cloneObj2)[i]){
                result.push('false')
            }
            else if(Object.values(cloneObj1)[i] === Object.values(cloneObj2)[i] 
            && (i != Object.keys(cloneObj1).length - 1)){
                continue
            }
        }
    }
    return result.length ? false : true 
}

let obj = {here: {is: "an"}, object: {value: 2, irt:{last:3}}};

console.log(deepEqual(obj, obj));// → true
//console.log(deepEqual(obj, {here: 1, object: 2}));// → false
//console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: {value: 2, irt: {last:4}}})) // -> false
