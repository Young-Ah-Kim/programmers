def solution(k, score):
    fame = []
    result = []
    for s in score:
        if len(fame) != k:
            fame.append(s)
        else:
            if s > min(fame):
                fame.append(s)
                fame.remove(min(fame))
        result.append(min(fame))
    return result
