def solution(ingredient):
    stack = []
    count = 0
    for n in ingredient:
        stack.append(n)
        if stack[-4:] == [1,2,3,1]:
            count += 1
            del(stack[-4:])
    return count


