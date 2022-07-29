import java.util.stream.IntStream;

import static java.lang.Integer.parseInt;

public class javabench {
    public static Integer checkPrime(Integer p) { //Checks if the number is prime by dividing down
        for (Integer i = 2; i*i<=p;i++)
            if((p%i==0))
                return 0;
        return p>1 ? 1 : 0;
    }
    public static void main(String[] args){ // Create an array from 0 to x using a stream then iterate over it to check for prime numbers
        Integer primes=0;
        for (Integer i : IntStream.range(0, parseInt(args[0])).toArray())
            primes+=checkPrime(i);

        System.out.println(primes);
    }
}
