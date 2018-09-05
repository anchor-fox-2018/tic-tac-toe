function generateXO(rowLength, colLength) {
    const charList = "XO"
    let xoCount = rowLength * colLength;
    let result = "";
    let xCount = 0;
    let yCount = 0;
    let x = Math.ceil(xoCount / 2)
    let y = Math.floor(xoCount / 2)
    while (xCount !== x && result.length < xoCount) {
        let tmp = charList.charAt(Math.random() * 2);
        if (tmp === 'X' && xCount < x) {
            result = result + tmp;
            xCount++;
        }
        if (tmp === 'O' && yCount < y) {
            result = result + tmp;
            yCount++;
        }
    }
    while (yCount !== y && result.length < xoCount) {
        let tmp = charList.charAt(Math.random() * 2);
        if (tmp === 'X' && xCount < x) {
            result = result + tmp;
            xCount++;
        }
        if (tmp === 'O' && yCount < y) {
            result = result + tmp;
            yCount++;
        }
    }
    return result;
}

function ticTacToe(rowLength, colLength) {
    let row = [];
    let res = generateXO(rowLength, colLength).split("");
    for (let i = 0; i < rowLength; i++) {
        let col = [];
        for (let j = 0; j < colLength; j++) {
            col.push(res.shift());
        }
        row.push(col);
    }
    return row;
}

console.log(ticTacToe(3, 3))
