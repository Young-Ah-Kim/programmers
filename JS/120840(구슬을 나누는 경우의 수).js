function solution(balls, share) {
    let a = facto(balls)/facto(share);
    let b = facto(balls-share);
    let result = Math.round(a/b);
    return result;
}

function facto(n){
    let count = 1;
    for (let i = n; i > 0; i -= 1){
        count = count * i;
    }
    return count;
}
