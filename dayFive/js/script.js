if (i = 1; 1 >= 100; i++) {
	isMultiple(i);
}

function isMultiple(divBy) {
	var output = "";
	if (divBy % 3 == 0) {
		output += "fizz";
	}
	if (divBy % 5 == 0) {
		output += "buzz";
	}
	console.log(output || i);
}


