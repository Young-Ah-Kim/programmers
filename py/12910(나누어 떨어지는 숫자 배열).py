def solution(arr, divisor):
    result = []
    for n in arr:
        if (n%divisor) == 0:
            result.append(n)
    if result == []:
        return [-1]
    else:
        return sorted(result)
