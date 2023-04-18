function solution(array, n) {
    var answer = array[0];
    
    for (let i = 1; i < array.length; i++) {
        let current = array[i];
        // answer의 가까움 절대 값으로 구함
        let answerAbs = Math.abs(n-answer);
        // current의 가까움 절대 값으로 구함
        let currentAbs = Math.abs(n - current);
        // current가 더 가까우면 answer = current
        if(answerAbs > currentAbs){
            answer = current;
        } else if(answerAbs === currentAbs && answer > current){
            answer = current;
        }
        // 가까움이 같고 current가 더 작으면 answer = current
    }
    return answer;
}