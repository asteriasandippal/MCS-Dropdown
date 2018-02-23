const area = document.getElementById('dropdown-area');
const button = document.createElement("button");

// CREATE DROPDOWN LISTING
const dropDownList = document.createElement("div");
dropDownList.style.backgroundColor = "#333";
dropDownList.style.padding = "20px";
dropDownList.style.display = "none";

// CREATE ITEMS UNDER THE DROPDOWNLIST
const dropdownUl = document.createElement("ul");
var menuText = ['Nav Point', 'Loiter Time', 'Loiter Turns', 'Loiter Infinite'];

for (var i = 0; i < menuText.length; i++) {
	var dropdownLi = document.createElement("li");
    var dropdownLiNode = document.createTextNode(menuText[i]);
    dropdownLi.appendChild(dropdownLiNode);
    dropdownUl.appendChild(dropdownLi);
    dropdownLi.onclick = menuClick;
}

function menuClick() {
	var menuTextItem = this.innerHTML;
	var matches = document.querySelector("ul li");
	console.log(matches);
	matches.classList.remove('active');
	this.classList.add('active');
	button.innerHTML = menuTextItem;
	dropDownList.style.display = "none";


	switch (menuTextItem) {
	    case 'Nav Point':
	    	console.log(menuTextItem);
	        break;
	    case 'Loiter Time':
	    	console.log(menuTextItem);
	        break;
	    case 'Loiter Turns':
	    	console.log(menuTextItem);
	        break;
	    case 'Loiter Infinite':
	    	console.log(menuTextItem);
	        break;
	    default: 
	        console.log('None');
	}
}

dropDownList.appendChild(dropdownUl);

// CREATE BUTTON

const buttonNode = document.createTextNode('Nav Point');
button.appendChild(buttonNode);

// BUTTON CLICK FUNCTION
button.onclick = buttonClick;

function buttonClick() {
	console.log('Hi, I am Button!!');
	if (dropDownList.style.display === "none") {
		dropDownList.style.display = "block";
	} else {
		dropDownList.style.display = "none";
	}
}

// APPEND IN BODY
area.appendChild(button);
area.appendChild(dropDownList);

console.log(area);
