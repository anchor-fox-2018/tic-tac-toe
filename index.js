function tictactoe(){
    let num = 3;
    let output = [];
    let xo = 'xo' 
    for(let i = 0; i < num; i++){
        let column = [];
        for(let j = 0; j < num; j++){
            if(j < 2){
                column.push(xo.charAt(Math.floor(Math.random() * xo.length)));
            } else {
                if(column[0] == 'o' && column[1] == 'o' ) {
                    column.push('x');
                } else if (column[0] == 'x' && column[1] == 'x' ) {
                    column.push('o');                
                }  else {
                    column.push(xo.charAt(Math.floor(Math.random() * xo.length)));                    
                }
            }
        }
        output.push(column);
    } 
    return output;
}

console.log(tictactoe());
