let map = {one: true, two: true, hasOwnProperty: true};

map.hasOwnProperty = function(el){
    for (let i = 0; i< Object.keys(map).length; ++i){
            if(el == Object.keys(map)[i]){
                return Object.values(map)[i]
            }
    }
}

console.log(map.hasOwnProperty("one"));// → true
