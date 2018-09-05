function board() {
  let countO = 0, countX = 0;
  let result = [];

  for (var i = 0; i < 3; i++) {
    result.push([]);
    for (var j = 0; j < 3; j++) {
      let random = Math.random();
      if (countO < 5 && random < 0.5) {
        countO++;
        result[i].push('o');
      } else if(countX < 5 && random > 0.5) {
        countX++;
        result[i].push('x');
      } else if(countO < 5){
        countO++;
        result[i].push('o');
      } else if(countX < 5){
        countX++;
        result[i].push('x');
      }
    //  debugger;
    }
  }
  return result;
}

console.log(board());
