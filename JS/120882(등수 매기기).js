function solution(score) {
    let avg = score.map(v => (v[0] + v[1])/2);
    let sorted = avg.slice().sort((a, b) => (b-a));
    let result = avg.map(v => sorted.indexOf(v)+1)
    return result;
}
