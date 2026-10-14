const media = window.matchMedia("(prefers-color-scheme: dark)")

function setTheme() {
	document.documentElement.setAttribute(
		"data-bs-theme",
		media.matches ? "dark" : "light"
	)
}

setTheme()
media.addEventListener("change", setTheme)