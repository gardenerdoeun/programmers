function solution(keyinput, board) {
    var answer = [];
    let board1 = (board[0]/2);
    let board2 = (board[1]/2);
    let x = 0; 
    let y = 0;
    for(let i = 0; i < keyinput.length; i++){
        switch(keyinput[i]){
                case "up":  
                    if(board2 > y+1)
                      y++;     
                break;
                case 'down':
                    if(-board2 < y-1)
                        y--;
                break;
                case 'right':
                    if(board1 > x+1)
                        x++;
                break;
                case 'left':
                    if(-board1 < x-1)
                        x--;
                break;
            }
    }

    answer = [x, y];
    return answer;
}