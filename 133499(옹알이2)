def solution(babbling):
    word_list = ["aya", "ye", "woo", "ma"]
    count = 0
    for c in babbling:
        for w in word_list:
            if w in c:
                if w*2 not in c:
                    c = c.replace(w, " ")
        if c.strip() == "":
            count += 1
    return count
