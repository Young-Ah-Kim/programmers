function solution(n, numlist) {
    let result = [];
    for (num of numlist){
        if (num% n === 0){
            result.push(num);
        }
    }
return result;
}
