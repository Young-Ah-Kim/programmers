function solution(n) {
    let result = [];
    for (let i = 2; i<parseInt(n**0.5)+1; i++){
        while (n%i === 0){
            n = parseInt(n / i);
            result.push(i);
        }
    }
    if (n > 1){
        result.push(n);
    }
    let answer = [...new Set(result)];
    return answer;
}
