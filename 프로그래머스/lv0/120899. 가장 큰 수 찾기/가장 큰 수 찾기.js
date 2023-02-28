function solution(array) {
    var answer = [];
    var i = 0;
    i = Math.max(...array);
    answer.push(i);
    
    answer.push(array.indexOf(i));
    
    return answer;
}