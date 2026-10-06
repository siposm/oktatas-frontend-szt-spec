"use strict"

const todos = [
	{ id: "1rv3gt", content: "El kell mosogatni mert vendégek jönnek" },
	{ id: "bwmvwl", content: "Kutyát meg kell etetni" },
	{ id: "vww1v4", content: "ZH-ra kell tanulni" },
]

/**
 * Renders the list of the TODO objects.
 * @param {array} todos - Array of TODO objects
 */
function render() {
	let todoListTarget = document.querySelector("#todo-list")

	// reset previous state of the parent DOM element to empty
	todoListTarget.textContent = ""

	todos.forEach(element => {
		let p = document.createElement("p")

		p.dataset.id = element.id

		p.addEventListener("click", () => {
			loadForEdit(p)
		})

		p.classList.add("todo-item")
		p.textContent = element.content
		todoListTarget.appendChild(p)
	})
}

/**
 * Loads the selected TODO for editing.
 * @param {HTMLElement | object} todoElement - The selected HTML element.
 */
function loadForEdit(todoElement) {
	let input = document.querySelector("#todo-edit-input")
	input.value = todoElement.textContent
	input.dataset.id = todoElement.dataset.id
}

/**
 * Updates the TODO objects based on ID matching.
 */
function update() {
	let input = document.querySelector("#todo-edit-input")
	todos.forEach(item => {
		if (item.id === input.dataset.id) {
			item.content = input.value
		}
	})

	input.value = ""
	input.dataset.id = ""

	render()
}

/**
 * Creates TODO object based on input value.
 */
function createTodo() {
	let input = document.querySelector("#todo-input")
	if (input.value !== "") {
		// add new item
		todos.push({ id: generateId(), content: input.value })

		// re-render everything
		render(todos)

		// input reset
		input.value = ""
	}
}

/**
 * Generates a simple ID as string.
 * @returns {string} The generated ID.
 */
function generateId() {
	return Math.random().toString(36).substring(2, 8)
}

render()