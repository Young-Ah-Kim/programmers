def solution(price, money, count):
    ride_count = 1
    fee = 0
    while count > 0:
        fee += price * ride_count
        ride_count += 1
        count -= 1
    if money > fee:
        return 0
    else:
        return fee - money
