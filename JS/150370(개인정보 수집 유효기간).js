function solution(today, terms, privacies) {
    const termdict = {};
    
    for (term of terms){
    let split_t = term.split(" ");
    if (!(split_t[0] in termdict)){
        termdict[split_t[0]] = split_t[1] * 28;
    }
    }

    let result = [];
    for (let i = 0; i<privacies.length; i++){
        let privacy = privacies[i];
        let split_p = privacy.split(" ");
        let valid_date = day(split_p[0]) + termdict[split_p[1]];
        if (valid_date <= day(today)){
            result.push(i+1);
        }
    }
return result;
}


function day(date){
    let date1 = date.split(".");
    return (+date1[0]*12*28) + (+date1[1]*28) + (+date1[2]);
}
