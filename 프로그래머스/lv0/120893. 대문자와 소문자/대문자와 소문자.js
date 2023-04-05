function solution(my_string) {
    var answer = '';
    for(let i = 0; i<my_string.length; i++){
        if(my_string[i].charCodeAt() > 90){
            answer += my_string[i].toUpperCase();
        }else{
            answer += my_string[i].toLowerCase();
        }
    }
    return answer;
}