def solution(new_id):
    s1 = new_id.lower()
    s2 = ""
    for c in s1:
        if c.islower() or c.isnumeric() or c == "-" or c == "_" or c == ".":
            s2 += c
    while ".." in s2:
        s2 = s2.replace("..", ".")
    s4 = s2.strip(".")
    if s4 == "":
        s4 += "a"
    if len(s4) >= 16:
        s4 = s4[:15]
        if s4[-1] == ".":
            s4 = s4[:14]
    while len(s4) <= 2:
        s4 += (s4[-1])
    return s4
