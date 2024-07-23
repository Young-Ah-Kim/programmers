def solution(k, m, score):
    n_score = sorted(score, reverse=True)
    temp = []
    row = []
    for n in n_score:
        row.append(n)
        if len(row) == m:
            temp.append(row)
            row = []
    total_sum = 0
    for i in temp:
        total_sum += min(i) * m
    return total_sum
