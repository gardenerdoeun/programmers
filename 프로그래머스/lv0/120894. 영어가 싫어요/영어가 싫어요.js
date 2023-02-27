function solution(numbers) {
//    numbers.replace(/one/g, '1');// /one/g를 쓰면 one인 문자를 모두 바꿔줌 string.replaceAll(); 과 동일
    const numbersArray = [ "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    
    for(let i = 0; i < numbersArray.length; i++){
       numbers = numbers.replaceAll(numbersArray[i], i);
    }
    
    return parseInt(numbers);
}