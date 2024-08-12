def solution(a, b):
    month_list = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    month = 0
    for i in range(a-1):
        month += month_list[i]
    total_day = month + b
    day_list = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"]
    return day_list[(total_day % 7)-1]
