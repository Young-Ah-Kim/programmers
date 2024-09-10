def solution(a, b):
    # 가운데 숫자는 c
    c = 0
    for n in range(min(a, b)+1, max(a,b)):
        c += n
    if a == b:
        return a
    return a+b+c
