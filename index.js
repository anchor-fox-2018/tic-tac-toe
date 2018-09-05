function ticTacToe(){
    let xo = ["X", "X", "X", "X", "X", "O", "O", "O", "O"];
    let hasil = [];
    for(let i = 0; i < xo.length;i++) {
        let acak = Math.floor(Math.random() * (i + 1));
        let penampung = xo[i];
        xo[i] = xo[acak];
        xo[acak] = penampung;
        //console.log(i,'=m=',acak)
    }
    let idx = xo.length-1
    for(let i = 0;i < 3;i++){
        let isi = [];
        for(let j = 0;j < 3;j++){
            isi.push(xo[idx]);
            idx--
        }
        hasil.push(isi)
    }

      return hasil;
 }
// //var nested_array = [[1,2],[1,2],[1,2]]
 console.log(ticTacToe())