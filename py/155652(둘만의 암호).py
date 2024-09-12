def solution(s, skip, index):
    alpha = "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z"
    skip_alpha = []
    for c in alpha:
        if c not in skip:
            if c != ",":
                skip_alpha.append(c)
    result = ""
    for i in range(len(s)):
        for j in range(len(skip_alpha)):
            if s[i] == skip_alpha[j]:
                result += skip_alpha[(j+index)%len(skip_alpha)]
    return result
