function solution(i, j, k) {
    let count = 0;
    let temp = "";
    for (let n = i; n<j+1; n++){
        temp += (String(n))
    }
    for (s of temp){
    if (String(k) === s){
        count += 1
    } 
        }
return count;
}


