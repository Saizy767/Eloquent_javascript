function fizzBuzz(){
    for(let i=0;i<=100;++i){
        if(!(i%3) && !(i%5)){
            console.log(i + ' FizzBuzz')
        }
        else if(!(i%5)){
            console.log(i + ' Buzz')
        }
        else if(!(i%3)){
            console.log(i + ' Fizz')
        }
        else{
            console.log(i)
        }
    }
}

fizzBuzz()