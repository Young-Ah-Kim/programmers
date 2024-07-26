def solution(N, stages):

    p_dict = {}

    for p in stages:
        p_dict[p] = p_dict.get(p, 0) + 1

    total_player = len(stages)

    failure_rate = []
    failure = 0
    for s in range(1, N+1):
        if total_player > 0:
            no_clear = p_dict.get(s, 0)
            failure = no_clear/total_player
        else:
            failure = 0
        failure_rate.append((s, failure))
        total_player = total_player - no_clear

    return [s for s, v in sorted(failure_rate, key=lambda x: (-x[1], x[0]))]
