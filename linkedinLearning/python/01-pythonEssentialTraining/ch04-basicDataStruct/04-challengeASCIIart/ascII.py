def encodeString(strVal):
    encodeStr = []
    prevChar = strVal[0]
    count = 0
    for char in strVal:
        if char != prevChar:
            encodeStr.append((prevChar, count))
            count = 0
        prevChar = char
        count = count + 1
    encodeStr.append((prevChar,count))
    return encodeStr

ecode = encodeString('AAABBBBCC')
print(ecode)

def decodeString(encodeString):
    decodeStr = ''
    for item in encodeString:
        decodeStr = decodeStr + item[0] * item[1]
    return decodeStr

dcode = decodeString(ecode)
print(dcode)
                