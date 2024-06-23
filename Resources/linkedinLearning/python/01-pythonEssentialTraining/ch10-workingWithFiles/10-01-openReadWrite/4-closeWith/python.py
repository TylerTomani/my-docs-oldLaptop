f = open('newFile.txt','w')
f.write('Line 1\n')
f.write('Line 2\n')
with open('newFile.txt','a') as f:
    f.write('Another Line\n')
    f.write('Another Line again\n')
    