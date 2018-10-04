module.exports = function getZerosCount(number, base) {
  // your implementation
 
  let primes = [];  
  let minimumZerosCount = [];

  for (let i = 2; i <= base; i++) {
    if (isPrime(i, base)) primes.push(i);
  }

  primes.forEach((element, i) => {

    let exponents = [];    
    let primesInExp = 0;
    let zerosCount = 0;
    let expForZeros = 1;

    exponents[i] = 0;

    while (base % element == 0) {
      base /= element;
      exponents[i]++;
    }

    while (primesInExp < number) {
      primesInExp = Math.pow(primes[i], expForZeros++);
      zerosCount += Math.floor(number / primesInExp);
    }

    minimumZerosCount.push(Math.floor(zerosCount / exponents[i]));

  });

  return Math.min.apply(null, minimumZerosCount);
}

function isPrime(num, base) {

  for (let i = 2; i < num; i++) {
    if (num % i == 0)
      return false;
  }

  return base % num == 0;
}
