"use strict"

const todos = [
	{ content: "El kell mosogatni mert vendégek jönnek" },
	{ content: "Kutyát meg kell etetni" },
	{ content: "ZH-ra kell tanulni" },
]

/**
 * Renders the list of the TODO objects.
 * @param {array} todos - Array of TODO objects
 */
function render() {
	let todoListTarget = document.querySelector("#todo-list")

	todos.forEach(element => {
		let p = document.createElement("p")
		p.classList.add("todo-item")
		p.textContent = element.content
		todoListTarget.appendChild(p)
	})
}

/**
 * Creates TODO object based on input value.
 */
function createTodo() {
	let input = document.querySelector("#todo-input")
	if (input.value !== "") {
		// add new item
		todos.push({ content: input.value })

		// reset previous state of the parent DOM element to empty
		let todoListTarget = document.querySelector("#todo-list")
		todoListTarget.textContent = ""

		// re-render everything
		render(todos)

		// input reset
		input.value = ""
	}
}

render()