// number input================================

function inputTop(topNumber) { //create top number
	var oldNumber = document.getElementById("topNumber").innerHTML;
	newNumber = oldNumber + topNumber;
	document.getElementById("topNumber").innerHTML = newNumber;
}

function inputMiddle(middleNumber) { // create second number
	var oldNumber = document.getElementById("middleNumber").innerHTML;
	newNumber = oldNumber + middleNumber;
	document.getElementById("middleNumber").innerHTML = newNumber;
}

function sign(s) { // set the operator
	//document.getElementById("sign").innerHTML = s;

	var oldNumber = document.getElementById("middleNumber").innerHTML;
	newNumber =  s + " " + oldNumber;
	document.getElementById("middleNumber").innerHTML = newNumber;
}

function maths() {
	var num1 = document.getElementById("topNumber").innerHTML;
	var num2 = document.getElementById("middleNumber").innerHTML;
	var answer = num1.toString() + num2.toString();

	document.getElementById("answer").innerHTML = eval(answer);
}

function clear1() {
	document.getElementById("topNumber").innerHTML = "";
}

function clear2() {
	document.getElementById("middleNumber").innerHTML = "";
}


// calculator function=========================

// function addIt(equate) {
// 	//var answer = parseInt(num1) + parseInt(num2);
// 	//alert(num1 + " " + numb2 + " " + answer);
// 	alert("I'm adding!");
// 	var answer = eval(equate);
// 	document.getElementById("answer").innerHTML = answer;
// }

// function subtract(num1, num2) {
//    var answer = num1 - num2;
// 	document.getElementById("answer").innerHTML = answer;
// }

// function multiply(num1, num2) {
//    var answer = num1 * num2;
// 	document.getElementById("answer").innerHTML = answer;
// }

// function divide(num1, num2) {
//    if(num1 === 0 || num2 === 0) {
//       alert("Zero cannot be used in division.\nYou must start over!");
//       maths();
//    }
//    var answer = num1 / num2;
//    answer = answer.toFixed(2);
// 	document.getElementById("answer").innerHTML = answer;}

// function maths(operator) {
// 	var number1 = document.getElementById("topNumber").innerHTML;
// 	var number2 = document.getElementById("middleNumber").innerHTML;

// 	parseInt(number1);
// 	parseInt(number2);

// 	var equation = num1 + operator + num2);
// 	alert(equation);

// 	alert("maths() see the following: " + operator + " " + number1 + " " + number2);

// 	addIt();

	// if(operator === "add") {
	// 	addIt(number1, number2);
	// } else if(operator === "subtract") {
	// 	subtract(number1, number2);
	// } else if(operator === "multiply") {
	// 	multiply(number1, number2);
	// } else if(operator === "divide") {
	// 	divide(number1, number2);
	// } else 

	// switch(operator) {
	// 	case "add":
	// 		addIt(number1, number2);
	// 		break;
	// 	case "subtract":
	// 		subtract(number1, number2);
	// 		break;
	// 	case "mulitply":
	// 		multiply(number1, number2);
	// 		break;
	// 	case "divide":
	// 		divide(number1, number2);
	//}
//    
//    
// }
//        
// maths();