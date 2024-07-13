function solution(elements) {

    let arr = elements.concat(elements);
    let temp = [];

    for (let i = 0; i<elements.length; i++){
        let sum = 0;
        for (let j = 0; j < elements.length; j++){
            sum += arr[i+j];
            temp.push(sum);
        }
        
    }

    let result = [...new Set(temp)];
    return result.length;

}

