function solution(arr) {

    
    let lcm = arr[0];
    for (let i = 1; i<arr.length; i++){ 
        lcm = LCM(lcm, arr[i]);
    }
return lcm;
}


function GCD(a, b){
    while (b > 0){
        let temp = a;
        a = b;
        b = temp % b;
    }
    return a;
}

function LCM(a, b){
    return (a*b)/GCD(a, b);
}
