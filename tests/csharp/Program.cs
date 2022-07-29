using System;
using System.Linq;

namespace csharp
{
    class Benchmark
    {
        static void Main(string[] args)
        {
            int checkPrime(int p) //Check if number is prime by dividing down
            {
                for (int i = 2; i * i <= p; i++)
                    if ((p % i == 0))
                        return 0;
                return (p > 1) ? 1 : 0;
            }

            int primes = 0;
            //Create an array by enumerating a rangethen from 0 to x then iterate over it to check if the numbers are prime
            foreach (int i in Enumerable.Range(0, Int32.Parse(args[0]) ).ToArray())
                primes += checkPrime(i);
            
            Console.WriteLine(primes.ToString());
        }
    }
}