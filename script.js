var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
// var li = document.querySelectorAll("li");

//deal with pre-existing item add ToggleDone and delete button to them
for(let item of ul.children){
	toggleDone(item);
}

//why does not work in for loop but work outside?
//HTML Collections and childNodes?
//ul.children => HTMLCollection
//li => NodeList

// // ul.children[0].classList.add("done");
// console.log(li[0]);
// console.log(ul.children[0] === li[0]);

function addDeleteButton(element){
	var delButton = document.createElement("button");
	delButton.appendChild(document.createTextNode("Delete"));
	delButton.addEventListener("click", function(){element.remove()});
	element.appendChild(delButton);
}

function toggleDone(element){
	element.classList.add("done");
	element.classList.toggle("done");
	element.addEventListener("click",function(){element.classList.toggle("done")});
	addDeleteButton(element);
}

function inputLength() {
	return input.value.length;
}

//Creating new elements
function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	toggleDone(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);