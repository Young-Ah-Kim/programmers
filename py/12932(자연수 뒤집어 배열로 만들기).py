def solution(n):
    str_n = str(n)
    result = []
    for i in str_n[::-1]:
        result.append(int(i))
    return result
