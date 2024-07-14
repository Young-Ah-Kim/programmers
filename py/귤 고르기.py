def solution(k, tangerine):
    t_dict = {}

    for n in tangerine:
        if n not in t_dict:
            t_dict[n] = 1
        elif n in t_dict:
            t_dict[n] += 1

    sorted_t = sorted(t_dict.items(), key = lambda x: -x[1])

    temp = []
    count = 0
    for key, v in sorted_t:
        count += v
        temp.append(key)
        if count >= k:
            break

    return len(temp)
