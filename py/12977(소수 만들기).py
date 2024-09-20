def solution(nums):

    def is_prime(num):
        if num < 2:
            return False
        for n in range(2, int(num**0.5)+1):
            if num % n == 0:
                return False
        return True

    temp = []
    for i in range(len(nums)):
        for j in range(i+1, len(nums)):
            for k in range(j+1, len(nums)):
                temp.append(nums[i]+nums[j]+nums[k])

    count = 0
    for n in temp:
        if is_prime(n) == True:
            count += 1
    return count
