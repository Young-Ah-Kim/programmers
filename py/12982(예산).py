def solution(d, budget):
    d_list = sorted(d)
    count = 0
    for n in d_list:
        if budget >= n:
            budget = budget - n
            count += 1
    return count
