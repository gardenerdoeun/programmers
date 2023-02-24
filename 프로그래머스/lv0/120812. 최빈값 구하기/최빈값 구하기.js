function solution(array) {
    var answer = 0;
    
    // 중복값 제거 set함수
    const list = [...new Set(array)];
    
    // 중복값 갯수 찾기
    answer = list.map((n) => array.filter((num) => num === n).length);
    
    // 중복 갯수가 많은 배열의 자릿수 찾기
    const len = answer.indexOf(Math.max(...answer));
    
    const mul = answer.filter((n) => n === Math.max(...answer)).length;
    
    return mul === 1 ? list[len] : -1;
}