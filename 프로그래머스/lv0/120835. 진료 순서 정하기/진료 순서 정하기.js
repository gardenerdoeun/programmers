function solution(emergency) {
    var newArray = [...emergency];
      
    var answer = [];
    var temp = 0;
    //버블 정렬 사용
    for(let i = 0; i < emergency.length; i++){
        for(let j = 0; j < emergency.length - (i+1); j++ ){
            if(emergency[j] < emergency[j+1]){
                temp = emergency[j];
                emergency[j] = emergency[j+1];
                emergency[j+1] = temp;
            }
        }
    }
     console.log(newArray);
    //우선 순위 정하기    
    for(let i = 0; i < emergency.length; i++){
        
        // 원본 배열에서 해당 값의 인덱스를 찾는다
        let index = emergency.indexOf(newArray[i]);
        // 해당 index에 +1을 해준다
        answer.push(index+1);
        
    }

    return answer;
}