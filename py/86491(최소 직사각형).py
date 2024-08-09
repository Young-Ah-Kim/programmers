def solution(sizes):
    max_w = 0
    max_h = 0
    for i in range(len(sizes)):
        w, h = sizes[i]
        if h > w:
            h, w = w, h
        if w > max_w:
            max_w = w
        if h > max_h:
            max_h = h
    return max_w * max_h
