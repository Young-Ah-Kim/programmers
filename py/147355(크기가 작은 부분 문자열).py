def solution(t, p):
    result = []
    for i in range(len(t)):
        result.append(t[i:i+len(p):])
    sort_result = []
    for j in result:
        if len(j) == len(p):
            sort_result.append(j)
    count = 0
    for k in sort_result:
        if int(k) <= int(p):
            count += 1
    return count
