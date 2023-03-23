function solution(balls, share) {
    var answer = 0;
    
    answer = Math.round(factorial(balls) / (factorial(balls-share) * factorial(share)));
    
    return answer;
} 

//재귀함수 사용
function factorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}

