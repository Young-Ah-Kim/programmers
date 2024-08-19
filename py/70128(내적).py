def solution(a, b):
    count = 0
    for i in range(len(a)):
        count += a[i] * b[i]
    return count
