<?
ini_set('memory_limit', '-1'); //warning this is a bad idea and only used for this test also this language sucks don't even bother
function checkPrime($p){//Checks if the number is prime by dividing down
    for ($i = 2; $i*$i<=$p;++$i)    
        if(($p%$i==0))
            return 0;
    return $p>1;
}

$primes=0;

foreach (range(0,$argv[1]-1) as $i)//Create an array from a range of 0 to x and then iterate over it to check for prime numbers
    $primes+=checkPrime($i);

echo ($primes)

?>