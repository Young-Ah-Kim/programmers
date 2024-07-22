def solution(participant, completion):
    part_dict = {}
    for name in participant:
        if name not in part_dict:
            part_dict[name] = 1
        else:
            part_dict[name] += 1
    for name in completion:
        part_dict[name] -= 1
    result = ""
    for k, v in part_dict.items():
        if v > 0:
            result += (k)
    return result
