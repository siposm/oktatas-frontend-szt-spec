"use strict"

const todos = [
	{ content: "El kell mosogatni mert vendégek jönnek" },
	{ content: "Kutyát meg kell etetni" },
	{ content: "ZH-ra kell tanulni" },
]

function render(todos) {
	let todoListTarget = document.querySelector("#todo-list")

	todos.forEach(element => {
		let p = document.createElement("p")
		p.classList.add("todo-item")
		p.textContent = element.content
		todoListTarget.appendChild(p)
	})
}

render(todos)