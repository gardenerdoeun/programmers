function solution(num, k) {
    var answer = 0;
    num = String(num);
    console.log(typeof(k));
    for(let i = 0; i<num.length; i++){
        if(Number(num[i]) === k){
            answer = i+1;
            break;
        }else {answer = -1;}
    }
    return answer;
}
