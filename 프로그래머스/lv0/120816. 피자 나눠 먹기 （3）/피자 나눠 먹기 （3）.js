function solution(slice, n) {
    var answer = 0;
    for(let i = 1; i<= n; i++){
        if((i*slice) / n >= 1){
            return answer = i;
        }
    }
    return answer;
}