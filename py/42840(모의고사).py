def solution(answers):
    one = [1,2,3,4,5]
    two = [2, 1, 2, 3, 2, 4, 2, 5]
    three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]

    grade_dict = {1: 0, 2:0, 3:0}
    
    for i in range(len(answers)):
        if answers[i] == one[i%5]:
            grade_dict[1] += 1
        if answers[i] == two[i%8]:
            grade_dict[2] += 1
        if answers[i] == three[i%10]:
            grade_dict[3] += 1

    max_v = max(grade_dict.values())
    result = [key for key, value in grade_dict.items() if value == max_v]
    return sorted(result)
