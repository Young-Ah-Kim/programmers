def solution(array, commands):
    temp = []
    result = []
    for index in range(len(commands)):
        i, j, k = commands[index]
        slice = array[i-1:j]
        temp.append(slice)
        sort_slice = sorted(slice)
        result.append(sort_slice[k-1])
    return result
