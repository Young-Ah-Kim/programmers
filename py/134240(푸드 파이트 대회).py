def solution(food):
    result = ""
    for i in range(1, len(food)):
        for _ in range((food[i]//2)):
            result += str(i)
    result += "0"
    part = ""
    for j in result[::-1]:
        part += j
    p_part = part[1:]
    result += p_part
    return result
