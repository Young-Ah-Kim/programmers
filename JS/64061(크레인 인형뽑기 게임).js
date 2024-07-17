function solution(board, moves) {
   let temp = [];
    let count = 0;
    for (move of moves){
         for (let j = 0; j <board[0].length; j++){
             if (board[j][move-1] !== 0){
                 let doll = board[j][move-1];
                 temp.push(doll);
                 board[j][move-1] = 0;
                 if (+temp.slice(-2, -1) === +temp.slice(-1)){
                    temp.pop();
                    temp.pop();
                 count += 2;}
                 break
             }    
        }
}
 
return count;
}
