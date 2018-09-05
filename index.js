function tic_tac_toe() {
    let xAndO = ['X', 'O'], ticker = [0, 0], result = [];
    for (let i = 0; i < 3; i++) {
        let tempResult = [];
        for (let c = 0; c < 3; c++) {
            let randomized = Math.round(Math.random())
            tempResult.push(xAndO[randomized]);
            ticker[randomized] += 1;
            if (ticker[0] === 5) {
                xAndO[0] = 'O';
            }
            else if (ticker[1] === 5) {
                xAndO[1] = 'X';
            }
        }
        result.push(tempResult);
    }
    return result;
}


console.log(tic_tac_toe());
console.log(tic_tac_toe());
console.log(tic_tac_toe());