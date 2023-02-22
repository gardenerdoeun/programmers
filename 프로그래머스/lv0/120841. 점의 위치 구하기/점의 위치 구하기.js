function solution(dot) {
    var answer = 0;
    switch(true){
        case dot[0,0] > 0:
            if(dot[0,1] > 0){
                answer = 1;
            }else{
                answer = 4;
            }
            break;
        case dot[0,0] < 0:
            if(dot[0,1] > 0){
                answer = 2;
            }else{
                answer = 3;
            }
    }
    return answer;
}