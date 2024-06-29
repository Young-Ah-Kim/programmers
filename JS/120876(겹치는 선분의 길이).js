function solution(lines) {
    let overap = 0;
    for (let i = -100; i<100; i++){
        let count = 0;
        for (let j = 0; j<lines.length; j++){
            let x = lines[j][0];
            let y = lines[j][1];
        if (x <= i && i < y){
            count ++;
        }
    }
        if (count > 1){
            overap++;
        }
    }
return overap;
}
