alert('hey');

var changeID1 = document.getElementById("myBtn").addEventListener("click", newHTML);

function newHTML(){
	var old = getElementByTagName("H2").innerHTML;
	switch(old) {
		case ('How many members in your family?'):
		getElementById("content").innerHTML = 
		"<h1>" 
	}
}

var para = document.createElement("p");
var node = document.createTextNode("This is new.");
para.appendChild(node);

var element = document.getElementById("div1");
element.appendChild(para);	