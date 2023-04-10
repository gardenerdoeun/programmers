function solution(my_string) {
    var answer = 0;
    var tmpArr = my_string.split(" ");
    var operator = "+";

    for(let i=0; i<tmpArr.length; i++){

        if(isNaN(Number(tmpArr[i]))){
            operator = tmpArr[i];   
        } else {
            operator == "+" ? answer += parseInt(tmpArr[i]) : answer -= parseInt(tmpArr[i]);
        }
    }

    return answer;
}