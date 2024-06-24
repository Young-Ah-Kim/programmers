function solution(emergency) {
    let array = emergency.slice().sort((a, b) => (b-a));
    let result = emergency.map(v => array.indexOf(v)+1);
    return result;
}
