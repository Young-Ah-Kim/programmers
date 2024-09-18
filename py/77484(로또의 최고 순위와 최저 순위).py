def solution(lottos, win_nums):
    count = 0
    original_count = 0
    max_count = 0
    result = []
    # 0이 다 맞았을 때의 처리
    for n in lottos:
        if n == 0:
            max_count += 1
    # 원래 맞는 값 카운트
    temp = []
    for n in lottos:
        if n in win_nums:
            original_count += 1
    # 0이 다 맞을 때의 처리
    count = original_count + max_count
    for _ in range(1):
        if count == 6:
            result.append(1)
        elif count == 5:
            result.append(2)
        elif count == 4:
            result.append(3)
        elif count == 3:
            result.append(4)
        elif count == 2:
            result.append(5)
        else:
            result.append(6)
    for _ in range(1):
        if original_count == 6:
            result.append(1)
        elif original_count == 5:
            result.append(2)
        elif original_count == 4:
            result.append(3)
        elif original_count == 3:
            result.append(4)
        elif original_count == 2:
            result.append(5)
        elif original_count == 1 or original_count == 0:
            result.append(6)
    return result
