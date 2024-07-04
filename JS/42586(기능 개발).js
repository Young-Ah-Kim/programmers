function solution(progresses, speeds) {

    let temp = [];
    for (let i = 0; i<progresses.length; i++){
        let count = 0;
        while (progresses[i] < 100){
        progresses[i] += speeds[i];
        count += 1;
        }
    temp.push(count);
    }

    let result = [];
    let maxDay = temp[0];

    let count = 1;
    for (let j = 1; j<temp.length; j++){ 
        if (temp[j] <= maxDay){
            count++;
        }
        else{
            result.push(count);
            count = 1;
            maxDay = temp[j];
        }
    }
    result.push(count);

return result;
}
