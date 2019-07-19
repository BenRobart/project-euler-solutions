fib = [1,2]
i = 0 //the third element in fib

while (fib[fib.length-1]<4000000){
	fib.push(fib[i]+fib[i+1]) //this pushes the sum of the previous two numbers to the end of the array
	i++
}

document.write(fib+"<br>")
document.write("Now we need to find all of the even ones<br>")

fibeven = []

for (i=0;i<fib.length;i++){
	if (fib[i]%2 == 0){
		fibeven.push(fib[i])
	}
}

document.write(fibeven+"<br>")
document.write("Now we need to sum them<br>")

sum = 0

for (i=0;i<fibeven.length;i++){
	sum += fibeven[i]
}

document.write(sum)

//use ; instead of , in for loops
//always close brackets!
// you can use i<= fibeven.length-1 or i<fibeven.length

/*the last two for loops could be put into one i.e.
	sum = 0
	for (i=0;i<fib.length-1;i++){
		if (fib[i]%2 == 0){
			sum += fib[i]
		}
	}
	document.write(sum)
I left these as two separate statements as I'm walking through it step by step
*/

/* clean version of this code:
fib = [1,2]
i = 0

while (fib[fib.length-1]<4000000){
	fib.push(fib[i]+fib[i+1])
	i++
}

fibeven = []
sum = 0

for (i=0;i<fib.length-1;i++){
	if (fib[i]%2 == 0){
		sum += fib[i]
	}
}

document.write(sum)
*/