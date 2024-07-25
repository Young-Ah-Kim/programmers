def solution(s, n):
    temp = ""
    for i in range(len(s)):
        c = s[i]
        if c.isupper():
            temp += chr(((ord(c)-ord('A')+n)%26)+ord('A'))
        elif c.islower():
            temp += chr(((ord(c)-ord('a')+n)%26)+ord('a'))
        else:
            temp += c
    return temp
