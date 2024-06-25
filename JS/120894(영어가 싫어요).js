function solution(numbers) {
    const n_list = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    for (let i = 0; i<10; i++){
        numbers = numbers.split(n_list[i]).join(i);
    }
return +numbers;
}
