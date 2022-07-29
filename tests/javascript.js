//Checks if the number is prime by dividing down
function checkPrime(p) {
  for (let i = 2; i * i <= p; i++) if (p % i == 0) return 0;
  return p > 1;
}

let primes = 0;

//Create an array of integers from 0 to x, then iterate it for prime numbers
for (let i of new Array(parseInt(process.argv[2])).keys())
  primes += checkPrime(i);

console.log(primes);
