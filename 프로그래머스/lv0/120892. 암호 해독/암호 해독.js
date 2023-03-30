function solution(cipher, code) {
    var answer = '';
    var a = code-1;
    for(let i =code-1; i<cipher.length; i+=code){
        answer+=cipher[i];
    }
    return answer;
}