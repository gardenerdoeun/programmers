function solution(n) {
    var answer = 1;
    var i = 1;
    while(true){
        if(answer === n){
            break;
        }else if(answer > n){
            i= i-1;
            break;
        }
        else{
            i++;
            answer *= i;
            console.log(i);    
        }
        
    }
    return i;
}
