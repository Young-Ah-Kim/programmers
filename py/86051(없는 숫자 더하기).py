def solution(numbers):
    number_list = [1,2,3,4,5,6,7,8,9,0]
    sum = 0
    for n in number_list:
        if n not in numbers:
            sum += n
    return sum
