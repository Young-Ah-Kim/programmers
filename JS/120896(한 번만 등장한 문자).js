function solution(s) {
    let a_dict = {};
    for (w of s){
        if (!(w in a_dict)){
            a_dict[w] = 1;
        }
        else{
            a_dict[w] += 1;
        }
    }
    let temp = [];
    for (let [k, v] of Object.entries(a_dict)){
        if (v === 1){
            temp.push(k);
        }
    }
    let result = temp.sort().join("");
    return result;
}
