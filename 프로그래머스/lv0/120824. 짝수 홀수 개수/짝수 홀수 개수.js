function solution(num_list) {
    var answer = [];
    let i = 0;
    let j = 0;
    for(a in num_list){
        if(num_list[a]%2===0){
            i++;
        }else{
            j++;
        }
    }
    answer = [i,j];
    return answer;
}