function range(startNumber,endNumber){
    let array = []
    switch(startNumber < endNumber){
        case(true):
            while(startNumber <= endNumber){
                if(startNumber <= endNumber){
                    array.push(startNumber)
                    ++startNumber
                }
                else{
                    array.push(startNumber)
                    --startNumber
                }
            }
            return array
        case(false):
            while(startNumber >= endNumber){
                if(startNumber >= endNumber){
                    array.push(startNumber)
                    --startNumber
                }
                else{
                    array.push(startNumber)
                    ++startNumber
                }
            }
            return array
        default:
            return array
    }
}
function rangePlus(startNumber,endNumber,step){
    let array = []
    if(step!=0){
        switch(startNumber < endNumber){
            case(true):
                while(startNumber <= endNumber){
                    if(startNumber <= endNumber){
                        array.push(startNumber)
                        startNumber+=step
                    }
                    else{
                        array.push(startNumber)
                        startNumber-=step
                    }
                }
                return array
            case(false):
                while(startNumber >= endNumber){
                    if(startNumber >= endNumber && step>0){
                        array.push(startNumber)
                        startNumber-=step
                    }
                    else{
                        array.push(startNumber)
                        startNumber+=step
                    }
                }
                return array
            default:
                return array
        }
    }
    return console.error('Step cant be 0');
}

function sum(func){
    return func.reduce((prev, cur)=>prev+cur)
}

console.log(sum(range(1,10)))
console.log(rangePlus(5,2,-1))
console.log(range(1,10))