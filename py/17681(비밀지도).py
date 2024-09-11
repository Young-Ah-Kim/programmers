def solution(n, arr1, arr2):
    bi_arr1 = []
    for num in arr1:
        temp = ""
        while num > 0:
            temp += str(num % 2)
            num = num // 2
        bi_arr1.append(temp[::-1].zfill(n))
    bi_arr2 = []
    for num in arr2:
        temp = ""
        while num > 0:
            temp += str(num%2)
            num = num // 2
        bi_arr2.append(temp[::-1].zfill(n))
    result = []
    for i in range(len(bi_arr1)):
        temp = ""
        for j in range(len(bi_arr1[i])):
            if bi_arr1[i][j] == "1" or bi_arr2[i][j] == "1":
                temp += "#"
            else:
                temp += " "
        result.append(temp)
    return result
