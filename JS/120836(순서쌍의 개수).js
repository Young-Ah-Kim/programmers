function solution(n) {
    let count = 0;

    const root = parseInt(n**0.5)
    for (let i = 0; i<root+1; i++){
        if (n % i === 0 && i*i !== n){
            count += 2
        }
        else if (n % i === 0 && i*i === n){
            count += 1
        }
        
    }
return count
}
