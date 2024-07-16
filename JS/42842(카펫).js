function solution(brown, yellow) {

    let total = brown + yellow;
    let num_list = facto(total);

    for (let [h, w] of num_list){
        if (w >= h){
            if ((w-2) * (h-2) === yellow){
                return [w, h];
            }
        }
    }
}



function facto(num){
    let result = [];
    for (let i = 1; i<parseInt(num**0.5)+1; i++){
        if (num% i === 0){
            result.push([i, num/i]);
        }
    }
return result;  
}
