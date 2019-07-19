//this problem is not yet solved - code is solely for posterity's sake

function createArray(range1,range2){
	array = []
	for (i=range1;i<=range2;i++){ //adds everything from 1 to num to the array
		array.push(i)
	}
	document.write("Calculating the smallest common multiple of the numbers: " + array.slice(0,array.length-1) + ", and " + array[array.length-1] + "<br>") //array.slice doesn't include the end value
}

createArray(1,20)
multsof = []

//creates an empty array for each value from range1 to range2, we'll use this to hold the multiples, i.e. array[1][5] will point to the 6th multiple (6th position of array) of 2 (2nd position of inner array)
for (num=0; num<array.length; num++){
	array[num] = []
}

currentNum = 1
multiplier = 1
multFound = false

while (multFound = false){ //while we haven't found the multiple
	for (num=0; num<array.length; num++){ //add a new multiple to each number's array, i.e. 1*2, 2*2..20*2, then 1*3, 2*3..20*3, etc
		multiple = num * multiplier
		array[num].push(multiple)
	}
	
	for (num=0; num<array.length; num++){ ////this is a separate for loop as we want to add all of the new multiples to the array before we search for them
		if (!array[num].includes(currentNum)){ //if the multiples of num don't include currentNum, we haven't found the multiple
			multFound = false
			multiplier++
			currentNum++
		} else {
			multFound = true
		}
	}
}

document.write(currentNum)
		
/* this code isn't actually going to work
I was gonna add n*1 to an array, then search for the result in all arrays, then if it didn't find it in them all add n*2 etc
but where n = 2, n*3 = 6, and where n = 20, n = 60
so despite it being a multiple of both it might not appear in the former array until much later on in the loop
unless... I keep them in the array and search the whole array for each iteration?
*/
	/*for (num=0; num<array.length; num++){ //this is a separate for loop as we want to add all of the new multiples to the array before we search for them
		if (!array[num].includes(multiple)){
			multFound = false
			multiplier++
		} else {
			multFound = true
		}
	}
	*/