function solution(my_string) {
    var answer = '';
    my_string = my_string.toLowerCase().split('');
    
    answer = my_string.sort().join('');
    return answer;
}