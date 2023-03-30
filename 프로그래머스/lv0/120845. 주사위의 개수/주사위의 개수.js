function solution(box, n) {
    var answer = 1;
    for(let i=0; i<3; i++){
         box[i] = Math.floor(box[i]/n);
        answer *=box[i];
    }
   
    return answer;
}