function solution(numer1, denom1, numer2, denom2) {

 
    let lcm = LCM(denom1, denom2);

    let a = lcm/denom1;

    let newN1 = numer1*a;
    let newD1 = denom1*a;

    let b = lcm/denom2;
    let newN2 = numer2*b;
    let newD2 = denom2*b;

    let finalN = newN1 + newN2;

    let gcd2 = GCD(finalN, newD1);

    return [finalN/gcd2, newD1/gcd2];
    
    
}


function GCD(a, b){
    while (a> 0){
        let c = a;
        a = b%a;
        b = c;
    }
    return b;
}

function LCM(a, b){
    let gcd = GCD(a, b);
    return a*b/gcd;
}
