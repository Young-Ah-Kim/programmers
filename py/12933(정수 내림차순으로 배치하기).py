def solution(n):
    temp = []
    str_n = str(n)
    for s in str_n:
        temp.append(int(s))
    n_list = sorted(temp, reverse=True)
    result = ""
    for s in n_list:
        result += str(s)
    return int(result)
