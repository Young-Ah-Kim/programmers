def solution(number, limit, power):

    def factor(num):
        count = 0
        for i in range(1, int(num**0.5)+1):
            if i * i ==num:
                count += 1
            elif num % i == 0:
                count += 2
        return count

    total_sum = 0
    for n in range(1, number+1):
        count = factor(n)
        if count > limit:
            total_sum += power
        else:
            total_sum += count
    return total_sum
