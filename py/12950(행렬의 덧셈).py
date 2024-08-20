def solution(arr1, arr2):
    temp = []
    for i in range(len(arr1)):
        row = []
        for j in range(len(arr1[i])):
            row.append(arr1[i][j] + arr2[i][j])
        temp.append(row)
    return temp
