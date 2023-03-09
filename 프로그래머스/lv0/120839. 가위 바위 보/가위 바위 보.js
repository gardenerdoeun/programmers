function solution(rsp) {
    var answer = '';
    for(let i = 0; i < rsp.length; i++){
        
        switch(true){                
            case rsp[i] === "0":
                answer+= "5";
                break;               
            case rsp[i] === "2":
                answer+= "0";
                break;               
            case rsp[i] === "5":
                answer+= "2";
                break;                
        }
    }
    return answer;
}