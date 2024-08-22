def solution(absolutes, signs):
    actual_number = []
    for i in range(len(absolutes)):
        if signs[i]:
            actual_number.append(absolutes[i])
        else:
            actual_number.append(-(absolutes[i]))
    sum = 0
    for n in actual_number:
        sum += n
    return sum
