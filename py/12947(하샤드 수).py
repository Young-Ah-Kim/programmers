def solution(x):
    total_sum = 0
    for n in str(x):
        total_sum += int(n)
    return x % total_sum == 0
