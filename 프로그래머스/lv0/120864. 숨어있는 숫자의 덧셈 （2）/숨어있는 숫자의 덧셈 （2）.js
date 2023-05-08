function solution(my_string) {
    var answer = 0;
    let arr = [];
    
    my_string = my_string.replace(/[^0-9]/g, ' ');
    arr = my_string.split(' ');

    for(let i = 0; i< arr.length; i++){
        answer += Number(arr[i]);
    }
    return answer;
}