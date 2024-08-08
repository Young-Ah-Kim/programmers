def solution(s):
    split_s = s.split(" ")
    temp = []
    for i in range(len(split_s)):
        row = ""
        for j in range(len(split_s[i])):
            if j % 2 == 0:
                row += (split_s[i][j].upper())
            else:
                row += (split_s[i][j].lower())
        temp.append(row)
    final = ' '.join(temp)
    return final
