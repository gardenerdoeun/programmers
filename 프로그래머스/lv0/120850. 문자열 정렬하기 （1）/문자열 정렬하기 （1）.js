function solution(my_string) {
    var answer = [];
    var temp = [];
    for(let i = 0; i< my_string.length; i++){
        if(my_string[i] >= 0 ){
            answer.push(parseInt(my_string[i]));
        }
    }
    
    for(let i = 0; i<answer.length; i++){
        for(let j =0; j < answer.length - (i+1); j++){
            if (answer[j] > answer[j+1]) {
                // 자리교환
                temp = answer[j+1];
                answer[j+1] = answer[j];
                answer[j] = temp;
            }
        }
    }
    
    return answer;
}