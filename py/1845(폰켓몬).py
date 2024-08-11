def solution(nums):
    set_nums = set(nums)
    choose_nums = (len(nums))//2
    return min(len(set_nums), choose_nums)
