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

			card.querySelector(".card-text").textContent = `${element.description}`

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