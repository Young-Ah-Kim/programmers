function solution(n) {
    let result = [];
    for (let i = 0; i<n+1; i++){
        if (n%i === 0 && i*i !== 0){
            result.push(i)
        }
    }
return result
}

