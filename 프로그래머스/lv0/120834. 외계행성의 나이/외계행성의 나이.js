function solution(age) {
    var answer = '';
    var RealAge = ['a','b','c','d','e','f','g','h','i','j'];
    age = String(age);
    
    for(let i = 0; i<age.length; i++){
        
        for(let j = 0; j < RealAge.length; j++){
            if(Number(age[i]) === j){
                answer+= RealAge[j];
            }
        }
    }
    return answer;
}