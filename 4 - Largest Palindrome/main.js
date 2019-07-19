function reverse(orig){ //for a 5 character string, 0 should become 5, 1 should become 4, 2 should become 3, 3 should become 2, etc
	reversed = []
	for (x=0;x<=orig.length;x++){
		reversed[x] = orig[orig.length-x]
	}
	reversed = reversed.join('');
	return reversed;
}

palindromes = []

for (i=999;i>=100;i--){ //the way this is nested means that j counts down from 50 to 1, then i ticks to 49 and j counts down from 50 to 1 again, etc
	for (j=999;j>=100;j--){
		k = i*j
		//document.write(i + " * " + j + " = " + (i*j) + ", " + (i*j) + " reversed = " + reverse(k.toString()) + "<br>")
		if (i*j == reverse(k.toString())){
			//document.write("The above number, " + i*j + " is a palindrome! <br>")
			palindromes.push(i*j)
		}
	}
}

palindromes.sort(function(a, b){return b - a})
document.write(palindromes)

// you can't use numbers alongside "length", so you have to put it "toString()"
// always remember to return at the end of your function if you want it to do anything

/* a little optimisation, no need to calculate k multiple times
	k = i * j
	if (k == reverse(k.toString())){
	palindromes.push(k)
*/

// there's also room to not overlap/duplicate, by setting j to i and decreasing down to 100 --> for (j=i;j>=100;j--){
// be consistent with semicolons, use arrow function syntax, make k const, don't shorten variable names, use more functions