function chessBoard(){
    let string = ''
    let column = 0
    for(let i=1;i<=64;i++){
        string+= !(column%2) ? (i%2)?'#':' ' : (i%2)?' ':'#' 
        if(!(i%8) && i!=64){
            console.log(string)
            string=''
            column+=1
        }
    }

}

chessBoard()