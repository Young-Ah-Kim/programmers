def solution(name, yearning, photo):
    y_dict = {}
    for i in range(len(name)):
        if name[i] not in y_dict:
            y_dict[name[i]] = yearning[i]
    result = []
    for i in range(len(photo)):
        count = 0
        for j in range(len(photo[i])):
            if photo[i][j] in y_dict:
                count += y_dict[photo[i][j]]
        result.append(count)
    return result
