//smallest number evenly divisble by everything from 1 to 20

/*this code definitely doesn't work yet, we need to check if j%i===0 for all iterations of i=1,num before returning j, maybe reverse the for loops?
	for (i=1;i<=num;i++){
		for (j=1;;j++){
			if (j%i === 0){
				return j;
*/

/*
function isMult(num,divisor){ //checks if num / divisor gives a remainder of 0, if yes it is a multiple
	if (num%divisor === 0){
		//document.write(num + " is a multiple of " + divisor + "<br>")
		return true
	}
	else {
		//document.write(num + " is not a multiple of " + divisor + "<br>")
		return false
	}
}
*/

/*
put all values of i (1-20 in this instance) into an array then iterate through i for each value of j using a while loop and break the loop if the modulo isn't 0 then increment i
*/

function createArray(range1,range2){
	array = []
	for (i=range1;i<=range2;i++){ //adds everything from 1 to num to the array
		array.push(i)
	}
	document.write("Calculating the smallest common multiple of the numbers: " + array.slice(0,array.length-1) + ", and " + array[array.length-1] + "<br>") //array.slice doesn't include the end value
}

createArray(1,20)
j = 1 //this is the number that will be the smallest multiple
k = 0 //the counter used to increment from array[range1] to array[range2]

for (k=0; k<= array.length; k++) {
	if (j%array[k] !== 0){
		j++
		k = 0
	}
	else if (j%array[k] === 0){
		lcm = j
	}
}
document.write(lcm)