function solution(array, n) {
    var answer = 0;
    for(cnt in array){
        if(array[cnt] === n){
            answer++;
        }
    }
    return answer;
}