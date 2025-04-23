function switchToDarkTheme () {
	document.getElementById("dark-theme").addEventListener("click", () => {
		document.body.style.backgroundColor = "#ffffff"
		document.body.style.color = "#000000"
	})
}

function switchToLightTheme () {
	document.getElementById("light-theme").addEventListener("click", () => {
		document.body.style.backgroundColor = "#000000"
		document.body.style.color = "#ffffff"
	})
}