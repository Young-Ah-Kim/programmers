function solution(X, Y) {
    const ndict = {};

    for (n of X){
        ndict[n] = (ndict[n] || 0) +1; 
    }

    let result = "";
    for (n of Y){
        if (!(ndict[n])){
            continue;
        }
        else{
            result += n;
            ndict[n] -= 1;
        }
    }

    
    if (result === ""){
        return "-1";
    }
    if (+result === 0){
        return "0";
    }
    return [...result]
    .map(num => +num)
    .sort((a, b) => (b-a))
    .join("");

}
