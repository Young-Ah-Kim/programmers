def solution(phone_number):
    last_num = phone_number[len(phone_number)-4:len(phone_number)+1]
    star = ""
    for _ in range(len(phone_number)-4):
        star += "*"
    return star + last_num
