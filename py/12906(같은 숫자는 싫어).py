def solution(arr):
    result = []
    for n in arr:
        if result == []:
            result.append(n)
        if n != result[-1]:
            result.append(n)
    return result
