function add() {
	var e = 0;
	var a = document.getElementById("addend1").value;
	a = parseInt(a);
	var b = document.getElementById("addend2").value;
	b = parseInt(b);
	var c = document.getElementById("addend3").value;
	c = parseInt(c);
	var d = document.getElementById("addend4").value;
	d = parseInt(d);
	var e = document.getElementById("addend5").value;
	e = parseInt(e);
	var answer = a + b + c + d + e;
	document.getElementById("expression").innerHTML = 
	a + " + " + b + " + " + c + " + " + c + " + " + e + " = " + answer;
	document.getElementById("tbl2").innerHTML = "Brought to you by Table Two (<em>All rights reserved</em>)"
	document.getElementById("goBack1").innerHTML = "<button class=\"back\" onclick=\"document.location='../index.html'\">Return</button>"
	document.getElementById("goBack2").innerHTML = "<button class=\"back\" onclick=\"document.location='../index.html'\">Return</button>"
}

// ============ edge casing =================


function edge() {
	while(isNaN(numOne)) {
	var numOne = prompt("Enter your FIRST addend");
	var numOne = parseInt(numOne);
	}

	while(isNaN(numTwo)) {
	var numTwo = prompt("Enter your SECOND addend");
	var numTwo = parseInt(numTwo);
	}

	var answer = numOne + numTwo;
		
	alert(numOne + " + " + numTwo + " = " + answer);
}

// ============== recap ==============

function recap(){
	var toDo = prompt("What do you want to do?");
	var notify = confirm("Do you want an alert?");
	
	if (notify == true) {
		alert(toDo);
	} else {
		alert("console.log(toDo)");
	}
}


