function solution(n, k) {
    var answer = 0;
    // 내림 함수 사용
    if(n/10 > 0){
        k = k-Math.floor(n/10);
    }
    answer = (n*12000) + (k*2000)
    return answer;
}