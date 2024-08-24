def solution(s):
    char_dict = {}
    result = []
    for i in range(len(s)):
        if s[i] not in char_dict:
            char_dict[s[i]] = i
            result.append(-1)
        elif s[i] in char_dict:
            result.append(i-char_dict[s[i]])
            char_dict[s[i]] = i
    return result
