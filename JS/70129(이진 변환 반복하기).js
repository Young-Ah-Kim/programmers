function solution(s) {
    let result = [];
    let zeroCount = 0;
    let total = 0;

    while (s !== "1"){
    let temp = "";
    for (n of s){
        if (n === "0") zeroCount++;
        else{
            temp += n;
        }
    }
    s = binary(temp.length);
    total++;}
    
return [total, zeroCount];
    
}


function binary(n){
    let result = [];
    while (n> 0){
        result.push(n % 2);
        n = parseInt(n /2);
    }
return result.reverse().join("");
    
}
