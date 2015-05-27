// check in number is fizz
function isMultipleFizz(number) {
	var fizzAt = document.getElementById("fizzNumber").value;
	if (number % fizzAt !== 0 || number < fizzAt || isNaN(number) === true) {
       return false;
	} else {
       return true;
	}
}

// check if number is buzz
function isMultipleBuzz(number) {
	var buzzAt = document.getElementById("buzzNumber").value;
    if (number % buzzAt !== 0 || number < buzzAt || isNaN(number) === true) {
       return false;
   } else {
       return true;
   }
}

// fizzbuzz loop
function fizzBuzz() {
	var startAt = document.getElementById("startNumber").value;
	var endAt = document.getElementById("endNumber").value;
	var upDown = document.getElementById("countDir").value;
	if (startAt === endAt) {
		alert("You can't count from " + startAt + " to " + endAt);
	}

	if (upDown === "countUp") {
		if (startAt > endAt) {
			startAt = endAt;
			endAt = document.getElementById("startNumber").value;
		}
	} else {
		if (startAt < endAt) {
			startAt = endAt;
			endAt = document.getElementById("startNumber").value;
		}
	}

	//alert("fizzBuzz loop");

	if(upDown === "countUp") {
		var output = "";
		for(i = startAt; i <= endAt; i++) {
			if (isMultipleFizz(i) && isMultipleBuzz(i)) {
	       console.log('fizzbuzz');
			output += "fizzbuzz";
	       } else if (isMultipleFizz(i)) {
	       console.log('fizz');
			output += "fizz";
	       } else if (isMultipleBuzz(i)) {
	       console.log('buzz');
			output += "buzz";
	       } else {
	       console.log(i);
			output += i;
	       }
			output += "<p>";
		}
	} else {
		var output = "";
		for(i = startAt; i >= endAt; i--) {
			if (isMultipleFizz(i) && isMultipleBuzz(i)) {
	       console.log('fizzbuzz');
			output += "fizzbuzz";
	       } else if (isMultipleFizz(i)) {
	       console.log('fizz');
			output += "fizz";
	       } else if (isMultipleBuzz(i)) {
	       console.log('buzz');
			output += "buzz";
	       } else {
	       console.log(i);
			output += i;
	       }
			output += "<p>";
		}
	}

	document.getElementById("result").innerHTML = output;
}



