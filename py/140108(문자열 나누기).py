def solution(s): 
    count = 0
    x_count = 0
    y_count = 0
    while s:
        x = s[0]
        for i in range(len(s)):
            if s[i] == x:
                x_count += 1
            else:
                y_count += 1
            if x_count == y_count:
                count += 1
                s = s[i+1:]
                break
        else:
            count += 1
            break
    return count
