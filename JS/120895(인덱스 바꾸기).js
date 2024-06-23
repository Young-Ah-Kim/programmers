function solution(my_string, num1, num2) {
    let split_s = my_string.split("");
    [split_s[num1], split_s[num2]] = [split_s[num2], split_s[num1]];
    return split_s.join("");
}
