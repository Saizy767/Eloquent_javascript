function isEven(number){
    switch (typeof(number) === 'number'){
        case(true):
            if(number < 0){
                isEven(-number)
            }
            else if(number === 1){
                console.log('false')
            }
            else if(number === 0){
                console.log('true')
            }
            else{
                isEven(number-2)
            }
            break
        case(false):
            console.log('Argument not a number')
            break
    }
}

isEven(75)
isEven(50)
isEven(-1) 