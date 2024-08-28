def solution(n, m, section):
    last_paint = 0
    count = 0
    for i in section:
        if i > last_paint:
            count += 1
            last_paint = (i+m) -1
    return count
