function solution(age) {
    var answer = '';
    var realAge = ['a','b','c','d','e','f','g','h','i','j'];
    age = String(age);
    
    for(let i = 0; i<age.length; i++){
        answer+= realAge[age[i]];
    }
    return answer;
}