def solution(n, words):
    check_list = []
    fail = []

    for i, w in enumerate(words):
        if check_list:
            if w[0] != check_list[-1][-1]:
                fail.append(i)
                break
        if w not in check_list:
            check_list.append(w)
        elif w in check_list:
            fail.append(i)
            break
    if fail == []:
        return [0, 0]
    result = []
    result.append((i%n)+1)
    result.append((i//n)+1)

    return result
