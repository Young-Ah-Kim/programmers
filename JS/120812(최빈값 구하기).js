function solution(array) {
    let n_dict = {};
    for (let n of array){
        if (!(n in n_dict)){
            n_dict[n] = 1;
        }
        else{
            n_dict[n] += 1;
        }
    }
    let freN = 0;
    let freNs = [];
    for (let [k, v] of Object.entries(n_dict)){
        if (v > freN){
            freN = v;
            freNs = [k];
        }
        else if (v === freN){
            freNs.push(k);
        }
    }
    if (freNs.length > 1){
        return -1;
    }
    else{
        return Number(freNs[0]);
    }
}
