function solution(my_string, num1, num2) {
    var answer = '';

    for(let i = 0; i<my_string.length; i++){
       if(num1 === i){
            answer += my_string[num2];   
       } else if(num2 === i){
           answer += my_string[num1];
       }else {
        answer += my_string[i];
       }
    }
    return answer;
}