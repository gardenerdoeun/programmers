function solution(hp) {
    var answer = 0;
    
    if(hp % 5 >= 0){
        answer += Math.floor(hp / 5);
        hp = Math.ceil(hp % 5);
    }  
    if(hp % 3 >= 0){
        answer += Math.floor(hp / 3);
        hp = Math.ceil(hp % 3);
    } 
    answer += hp;                    

    return answer;
}