function countBs(string){
    let counter = 0;
    let findingLetter = 'B'
    for(let i = 0; i <= string.length;++i){
        if(string[i]===findingLetter){
            ++counter
        }
    }
    return counter
}

function countChar(string, findingLetter){
    let counter = 0;
    for(let i = 0; i <= string.length;++i){
        if(string[i]===findingLetter){
            ++counter
        }
    }
    return counter
}

console.log(countBs('BBC'))
console.log(countChar("kakkerlak", "k"))