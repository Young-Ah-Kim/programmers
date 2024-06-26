function solution(a, b) {
    let gcd = GCD(a, b);
    if (b%gcd === 0){
        a = parseInt(a/gcd);
        b = parseInt(b/gcd);
    }
    while(b%2 === 0){
        b = parseInt(b/2);
    }
    while(b%5 === 0){
        b = parseInt(b/5);
    }
    if (b ===1){
        return 1;
    }
    else{
        return 2;
    }

}

function GCD(a, b){
    while (a>0){
        let c = a;
        a = b%a;
        b = c;
    }
    return b;
}
