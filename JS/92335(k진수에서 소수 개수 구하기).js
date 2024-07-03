function solution(n, k) {

    n = n.toString(k);
    let split_n = n.split("0");
    let count = 0;

    for (num of split_n){
        if (facto(+num)){
            count++;
        }
    }
    return count;
}

function facto(num){
    if (num === 0) return false;
    if (num === 1) return false;
    for (let i = 2; i<parseInt(num**0.5)+1; i++){
        if (num%i === 0){
            return false;}
    }
    return true;
}
