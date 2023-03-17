function solution(my_string) {
    var answer = '';
    var gather = ['a','e','i','o','u'];
    
    for(let i = 0; i < my_string.length; i++){
        switch(true){
              case  my_string[i] === 'a':
              case  my_string[i] === 'e':
              case  my_string[i] === 'i':
              case  my_string[i] === 'o':
              case  my_string[i] === 'u':
                answer += '';
                break;
                default :
                answer += my_string[i];
        }
    }
    return answer;
}