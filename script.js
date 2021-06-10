

document.addEventListener('mousemove', (event) => {
	let buttonY = document.querySelector("#no").getBoundingClientRect().top
	let buttonX = document.querySelector("#no").getBoundingClientRect().left
	let buttonZ = document.querySelector("#no").getBoundingClientRect().right
	let buttonI = document.querySelector("#no").getBoundingClientRect().bottom

	let buttonWidth = buttonX - buttonZ; 
	let buttonHeight = buttonI - buttonY;

	if (event.clientX >= buttonX && event.clientX <= buttonZ && event.clientY >= buttonY && event.clientY <= buttonI){
		changePosition(buttonWidth, buttonHeight);
	}
});

const iKnewIt = () => {
	alert("Gracias bbbb 😍")
}

const changePosition = (elementWidth, elementHeight) => {
	let width = window.innerWidth;
	let height = window.innerHeight;

	let randomX = Math.floor(Math.random() * ((width + elementWidth)-50)) + elementWidth * -1;
	let randomY = Math.floor(Math.random() * ((height - elementHeight) - 50)) + elementHeight;

	randomX = randomX.toString() + "px";
	randomY = randomY.toString() + "px";
	document.getElementById("no").style.position = "absolute";
	document.getElementById("no").style.left = randomX;
	document.getElementById("no").style.top = randomY;
}
