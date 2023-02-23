function solution(my_string, letter) {
    var answer = '';
    for(let i = 0; i < my_string.length; i++){
        answer += my_string[i].replace(letter, '');    
    }
    
    return answer;
}