import sys;

def checkPrime(p): #I don't know python well enough to know if i did something wrong, but python is extremely slow at this
    i=2;
    while (i*i<=p):
        if( p % i == 0):
            return 0;
        i+=1;
    return p>1;
    
primes=0;
for i in range(2,int(sys.argv[1])): #Create an array from a range of 0 to x and then iterate over it to check for prime numbers
    primes+=checkPrime(i);

print(str(primes))