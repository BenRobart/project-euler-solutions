var num = 600851475143;
var i,j;
factors = []
primefactors = []

function isPrime(value) {
    for(var i = 2; i < value; i++) {
        if(value % i === 0) {
            return false;
        }
    }
    return value > 1;
}

for (i=0;i<Math.sqrt(num);i++){ //anything larger than the square root of a number can't be a factor
	if (num%i == 0){
		factors.push(i)
	}
}

factors.push(num)
document.write("Factors of " + num + ": " + factors + "<br>")

for (i=0;i<factors.length;i++){ //here we'll check if it's a prime factor
	if (isPrime(factors[i])){
		primefactors.push(factors[i])
	}
}

document.write("Prime factors of " + num + ": " + primefactors)


//define number strings as var else they'll estimate past a certain value
//always close vars with ;
// remember to use array[i] instead of just i
// use !== instead of ==!
// here I learnt that using functions is better than nesting for loops

/* I was previously using this to check if the number was a prime:
	for (i=0;i<factors.length;i++){
		for (j=2;j<factors[i];j++){
			if (factors[i]%j === 0){
				primefactors.push(factors[i])
			}
		}
	}
	
this doesn't work as, if we were checking if 9 is a prime, it would check if 9%2 == 0 (false), but it would continue to check everything afterwords (9%3 == 0 (true)), so we need to manually break the loop*/