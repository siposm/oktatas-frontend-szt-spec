"use strict"

import { Todo } from "./todo.js"

export class Renderer {
	renderTodoItems(todoArray) {
		const container = document.querySelector("#todo-container")
		const template = document.querySelector("#todo-template")
		const fragment = document.createDocumentFragment()

		todoArray.forEach(element => {
			const card = template.content.cloneNode(true)
			card.querySelector(".card-title").textContent = element.title

			card.querySelector(".todo-priority").textContent = element.priority
			card.querySelector(".todo-priority").classList.add(this.#priorityClassLookup(element.priority))

			card.querySelector(".todo-status").textContent = element.done
				? "kész"
				: "elvégzendő"

			element.done
				? card.querySelector(".todo-status").classList.add("bg-success")
				: card.querySelector(".todo-status").classList.add("bg-danger")

			card.querySelector(".card-text").textContent = `${element.description}`
			card.querySelector(".card-date").textContent = `${element.getFormattedDate()}`

			card.querySelector(".btn").dataset.id = element.id

			fragment.appendChild(card)
		})
		container.replaceChildren(fragment)
	}

	#priorityClassLookup(priorityNumber) {
		switch (priorityNumber) {
			case 1: return "priority-level-1"
			case 2: return "priority-level-2"
			case 3: return "priority-level-3"
		}
	}

	createTodoItem() {
		const title = document.querySelector("#input-todo-title").value
		const desc = document.querySelector("#input-todo-desc").value
		const prio = document.querySelector("#input-todo-prio").value

		const newTodo = new Todo(title, desc, prio, false)

		this.#resetInputs()

		return newTodo
	}

	#resetInputs() {
		document.querySelector("#input-todo-title").value = ""
		document.querySelector("#input-todo-desc").value = ""
		document.querySelector("#input-todo-prio").value = ""
	}

	initEventListeners(logic) {
		// az app.js type="module"-ként való használata esetén a JavaScript
		// saját modul-scope-ban fut és így a benne deklarált változók, függvények
		// nem kerülnek automatikusan a globális window objektumra
		// ezért event listenerekből tesszük hozzá

		document.querySelector("#create-button").addEventListener(
			"click",
			() => logic.create()
		)
	}
}