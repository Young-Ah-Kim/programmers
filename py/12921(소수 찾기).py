def solution(n):

    def is_prime(number):
        if number < 2:
            return False
        for n in range(2, int(number**0.5)+1):
            if number % n == 0:
                return False
        return True

    count = 0
    for num in range(1, n+1):
        if is_prime(num) == True:
            count += 1

    return count
