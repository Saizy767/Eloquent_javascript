function loop(number, test, update, body){
    if(test(number)){
        body(number)
        loop(update(number),test,update,body)
    }
}



loop(3, n => n > 0, n => n - 1, console.log) // 3 2 1