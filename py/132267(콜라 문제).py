def solution(a, b, n):
    get = 0
    while n >= a:
        get += (n//a) * b
        n = (n // a) * b + (n%a)
    return get
