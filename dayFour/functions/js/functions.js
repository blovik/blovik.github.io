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

}