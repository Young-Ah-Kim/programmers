function solution(n) {

    for (let i = n+1; i<1000000; i++){
        let countN1 = count1(n.toString(2));
        let countN2 = count1(i.toString(2));
        if (countN1 === countN2){
            return i;
        }
        
    }

}


function count1(num){
    let result = 0;
    for (n of num){
        if (n === "1") result++;
    }
    return result;
}
