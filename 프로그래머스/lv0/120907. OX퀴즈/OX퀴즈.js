function solution(quiz) {
    var answer = [];
    for(let i =0; i<quiz.length; i++){
        var newArr = [];
        var ans;
        newArr = quiz[i].split(" ");
        console.log(newArr);
        if(newArr[1] === "+"){
            ans = Number(newArr[0]) + Number(newArr[2]) === Number(newArr[4]) ? "O" : "X";
            answer.push(ans);       
        } else if(newArr[1] === "-"){
              ans = Number(newArr[0]) - Number(newArr[2]) === Number(newArr[4]) ? "O" : "X";
            answer.push(ans);       
        }
    }   
    return answer;
}