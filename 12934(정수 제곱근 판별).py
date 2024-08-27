def solution(n):
    mul = int(n**0.5)
    if mul * mul == n:
        return (mul+1)**2
    else: 
        return -1
