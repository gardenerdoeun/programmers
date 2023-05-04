function solution(sides) {
    var answer = 0;
    let max = Math.max(...sides);
    let min = Math.min(...sides)
    
    for(i = 1; i <= max+min; i++ ){
        console.log(max-min<i);
        console.log(max + min > i);
        if((max - min) < i && max + min > i){  
            answer++;
        }
    }
    return answer;
}