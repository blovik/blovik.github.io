function makeItHappen() {
	var startAt = document.getElementById("startNumber").value;
	var endAt = document.getElementById("endNumber").value;
	var fizzAt = document.getElementById("fizzNumber").value;
	var buzzAt = document.getElementById("buzzNumber").value;
	var upDown = document.getElementById("countDir").value;
	//alert("makeItHappen function is working");

	// Check for count range
	if (startAt === endAt) {
		alert("You can't count from " + startAt + " to " + endAt);
	}

	// Check ascending or decending count
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
	alert("starting at " + startAt);
	alert("ending at " + endAt);
	fizzBuzz();
}

// check in number is fizz
function isMultipleFizz(number) {
	//alert("fizz loop");
	var fizzAt = document.getElementById("fizzNumber").value;
	if (number % fizzAt !== 0 || number < fizzAt || isNaN(number) === true) {
       return false;
	} else {
       return true;
	}
}

// check if number is buzz
function isMultipleBuzz(number) {
	//alert("buzz loop");
	var buzzAt = document.getElementById("buzzNumber").value;
    if (number % buzzAt !== 0 || number < buzzAt || isNaN(number) === true) {
       return false;
   } else {
       return true;
   }
}

function fizzBuzz() {
	var startAt = document.getElementById("startNumber").value;
	var endAt = document.getElementById("endNumber").value;
	var upDown = document.getElementById("countDir").value;

	//alert("fizzBuzz loop");

	if(upDown === "countUp") {
		//alert("if count-up loop");
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
			//alert("if upDown loop up");
			output += "<p>";
		}
	} else {
		//alert("else count-down loop");
		var output = "";
		for(i = endAt; i >= startAt; i--) {
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
			//alert("if upDown loop up running");
			output += "<p>";
		}
	}

	document.getElementById("result").innerHTML = output;
}



