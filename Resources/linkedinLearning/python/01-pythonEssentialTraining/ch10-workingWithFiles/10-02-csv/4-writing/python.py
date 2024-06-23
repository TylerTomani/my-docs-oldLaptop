import csv
with open('../10_02_us.csv','r') as f:
    data = list(csv.DictReader(f, delimiter='\t'))
primes = []
for n in range(2,99999):
    for factor in range(2,int(n**0.5)):
        if n % factor == 0:
            break
    else:
        primes.append(n)
data = [row for row in data if int(row['postal code']) in primes and row['state code'] == 'MA']
print(len(data))

with open('primeEstate.csv','w') as f:
    writer = csv.writer(f)
    for row in data:
        writer.writerow([row['place name'], row['county']])
                
