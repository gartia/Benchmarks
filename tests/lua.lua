--This language sucks don't even bother
function checkPrime(p) --Check if the number is prime by dividing down
    i=2
    while(i*i<=p)
    do 
        if((p%i==0))
        then
            return 0
        end
        i=i+1
    end
    if(p>1)
    then 
        return 1
    else
        return 0
    end
end

primes=0
numbers={}
for i=0,arg[1] do --Create an array by iterating over a table to get 0 to x
    numbers[i]=0
end

for i, _ in pairs(numbers) do --Iterate only over keys in the table to check if numbers are prime
    primes=primes+checkPrime(i)
end

print(primes)