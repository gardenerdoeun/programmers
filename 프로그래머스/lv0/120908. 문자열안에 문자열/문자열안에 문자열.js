function solution(str1, str2) {
    var answer = 0;
    if(str1.search(str2)>= 0){
        answer = 1;
    }else {answer = 2;};
    
    console.log(str1.search(str2));
    return answer;
}