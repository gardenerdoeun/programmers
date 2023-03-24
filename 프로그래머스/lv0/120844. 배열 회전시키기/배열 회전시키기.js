function solution(numbers, direction) {
    var answer = [];
    
    for(let i = 0; i < numbers.length; i++){
        if(direction === 'left'){
            if(i === numbers.length-1){
                answer.push(numbers[0]);
            }else{
                answer.push(numbers[i+1]);   
            }
        }else if(direction === 'right'){
            if(i === 0){
                answer.push(numbers[numbers.length-1]);
            }else{
                answer.push(numbers[i-1]);   
            }
        }
    }
    return answer;
}