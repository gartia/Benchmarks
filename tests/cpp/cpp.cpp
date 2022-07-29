#include <iostream>
#include <numeric>
#include <vector>
using namespace std; //Please don't do this, this isn't safe it's only used to make the code more readable on the test

int checkPrime(int p) { //Checks if the number is prime by dividing down
    for (int i = 2; i * i <= p; i++)
        if ((p % i == 0))
            return 0;
    return (p > 1) ? 1 : 0;
}

int main(int argc, char* argv[]) { //Create a vector of integers from 0 to x, then iterate it for prime numbers
    int primes = 0;
    vector<int> numbers(strtol(argv[1], NULL, 0));
    iota(begin(numbers), end(numbers), 0);

    for (int& i : numbers)
        primes += checkPrime(i);
    
    cout << primes;
}