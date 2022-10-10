var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.querySelectorAll("li");

for(let item of li){
	item.classList.add("done");
	item.classList.toggle("done");
	item.addEventListener("click", function(){item.classList.toggle("done")});
	addDeleteButton(item);
}

//why does not work in for loop but work outside?
//HTML Collections and childNodes?

// // ul.children[0].classList.add("done");
// console.log(li[0]);
// console.log(ul.children[0] === li[0]);

function addDeleteButton(element){
	var delButton = document.createElement("button");
	delButton.appendChild(document.createTextNode("Delete"));
	delButton.addEventListener("click", function(){element.remove()});
	element.appendChild(delButton);
}

function inputLength() {
	return input.value.length;
}


function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	li.classList.add("done");
	li.classList.toggle("done");
	li.addEventListener("click",function(){li.classList.toggle("done")});
	addDeleteButton(li);
	ul.appendChild(li);
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