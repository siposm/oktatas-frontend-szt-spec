"use strict"

const todos = [
	{ id: "1rv3gt", content: "El kell mosogatni mert vendégek jönnek", finished: false },
	{ id: "bwmvwl", content: "Kutyát meg kell etetni", finished: true },
	{ id: "vww1v4", content: "ZH-ra kell tanulni", finished: true },
]

/**
 * Renders the list of the TODO objects.
 */
function render() {
	let todoListTarget = document.querySelector("#todo-list")

	// reset previous state of the parent DOM element to empty
	todoListTarget.textContent = ""

	todos.forEach(element => {
		let tr = document.createElement("tr")
		let idTd = document.createElement("td")
		let contentTd = document.createElement("td")
		let actionsTd = document.createElement("td")

		idTd.classList.add("p-2")
		contentTd.classList.add("p-2")
		actionsTd.classList.add("p-2")

		// generate edit button for actions
		let loadForEditButton = document.createElement("button")
		loadForEditButton.classList.add("btn", "btn-sm", "btn-warning", "me-2")
		loadForEditButton.textContent = "Edit"
		loadForEditButton.dataset.action = "edit"

		// generate finish button for actions
		let finishButton = document.createElement("button")
		finishButton.classList.add("btn", "btn-sm", "btn-success")
		finishButton.textContent = "Done"
		finishButton.dataset.action = "finish"

		// add event listeners
		// loadForEditButton.addEventListener("click", () => loadForEdit(contentTd))
		// finishButton.addEventListener("click", () => markAsFinished(contentTd))

		// set values
		idTd.textContent = element.id
		contentTd.textContent = element.content
		contentTd.dataset.id = element.id
		if(element.finished) {
			contentTd.classList.add("finished")
		}

		// append everything in order
		actionsTd.appendChild(loadForEditButton)
		actionsTd.appendChild(finishButton)
		tr.appendChild(idTd)
		tr.appendChild(contentTd)
		tr.appendChild(actionsTd)
		todoListTarget.appendChild(tr)
	})
}

/**
 * Mark a specific TODO object as finished.
 * @param {HTMLElement | object} todoElement - The selected HTML element.
 */
function markAsFinished(todoElement) {
	todos.forEach(item => {
		if (item.id === todoElement.dataset.id) {
			item.finished = !item.finished
		}
	})

	render()
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

/**
 * Initializing event listeners.
 */
function initEventListeners() {
	let todoList = document.querySelector("#todo-list")
	todoList.addEventListener("click", event => {
		if (event.target.tagName !== "BUTTON") {
			return
		}

		let row = event.target.closest("tr")
		let contentTd = row.children[1]

		if (event.target.dataset.action === "edit") {
			loadForEdit(contentTd)
		}

		if (event.target.dataset.action === "finish") {
			markAsFinished(contentTd)
		}
	})
}

// init 1st call
initEventListeners()
render()