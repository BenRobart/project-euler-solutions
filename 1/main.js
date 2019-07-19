var array = []
for (i=1;i<1000;i++){
	if (i%3 == 0 || i%5 == 0){
		array.push(i)
	}
}
var total = 0
for (i=0;i<array.length;i++){
	total += array[i]
}
document.write(array+"<br>")
document.write(total)

/* mistakes made here originally:
	using if (i%3 = 0) instead of ==
	not putting i++ in my second for loop
	using document.write(array\n) instead of document.write(array+"\n")
	
	multiplying the multiples instead of summing which led to total = 1 initially rather than total = 0 (because multiplying by 0 would have resulted in a total of 0
	accidentally summed the multiples INCLUDING 1000 instead of BELOW 1000
*/

/* lessons learnt:
	READ the instructions carefully!
	for checks, it's == and not =
	proof read your code (i.e. don't miss out simple stuff like closing brackets or adding i++ to your for loop)
	to print multiple strings, you can use + and ""
*/