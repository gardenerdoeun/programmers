function solution(my_str, n) {
    var answer = [];
    let ln = Math.ceil(my_str.length/n);
    console.log(ln);
    for(let i = 0; i < ln; i++){
        answer.push(my_str.substr(i*n, n));    
    }
    
    return answer;
}