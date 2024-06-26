function solution(common) {
    let result = 0;
    if (common[1]-common[0] === common[2]-common[1]){
        result += (+common.slice(-1) + common[1]-common[0]);
    }
    else{
        let mul = +common[1] / +common[0];
        result += +common.slice(-1) * mul;
    }
    return result;
}
