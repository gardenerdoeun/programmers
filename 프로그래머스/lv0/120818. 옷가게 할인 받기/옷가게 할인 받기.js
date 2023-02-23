function solution(price) {
    var answer = 0;
    var m = price/10000;
    switch(true){        
        case m >= 10 && m < 30:
            answer = (price*0.95);
            break;
        case m >= 30 && m < 50:
            answer = (price*0.9);
            break;
        case m >= 50:
            answer = (price*0.8);
            break;
        default:
            answer = price;
    }
        
    return Math.trunc(answer);
}