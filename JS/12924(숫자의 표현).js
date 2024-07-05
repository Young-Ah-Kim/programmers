function solution(n) {

    let total = 0;
    for (let i = 1; i<=n; i++){
        let sum = 0;
        for (let j = i; j<=n; j++){
            sum += j;
            if (sum === n){
                total++;
                }
             else if (sum > n){
                break;
             }
            }
        }
    return total;
}

