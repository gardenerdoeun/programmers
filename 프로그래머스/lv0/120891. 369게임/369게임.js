function solution(order) {
    var answer = 0;
    var str = String(order);
    for(let i = 0; i < str.length; i++){
        console.log(str[i]);
        if(str[i] > 0 && str[i] %3 === 0){
            answer++;
        }
    }
    return answer;
}