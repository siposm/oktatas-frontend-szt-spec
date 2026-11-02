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
}