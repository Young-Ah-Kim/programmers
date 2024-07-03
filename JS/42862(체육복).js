function solution(n, lost, reserve) {

    let realLost = lost.filter(l => !reserve.includes(l));
    let realReserve = reserve.filter(r => !lost.includes(r));

    realLost.sort((a, b) => (a-b));
    realReserve.sort((a,b) => (a-b));

    let answer = n - realLost.length;

    for (l of realLost){
        if (realReserve.includes(l-1)){
            answer++;
            realReserve.splice(realReserve.indexOf(l-1), 1);
        }
        else if (realReserve.includes(l+1)){
            answer++;
            realReserve.splice(realReserve.indexOf(l+1), 1);
        }
    }
return answer;
}
