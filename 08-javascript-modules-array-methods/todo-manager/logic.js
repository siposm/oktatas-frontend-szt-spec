"use strict"

import { Todo } from "./todo.js"

export class Logic {
	#renderer
	#todos

	constructor(renderer) {
		this.#renderer = renderer
		this.#todos = this.#loadSeedData()
		this.#renderer.initEventListeners(this)
		this.displayItems()
	}

	#loadSeedData() {
		return [
			new Todo("Kutyus séta", "Elvinni a kutyát egy hosszabb sétára.", 3, false, new Date(2026, 10, 2)),
			new Todo("Be kell vásárolni ünnepekre", "Beszerezni az ünnepi ételekhez szükséges alapanyagokat.", 1, false, new Date(2026, 11, 20)),
			new Todo("Korcsolyát meg kell éleztetni", "Elvinni a korcsolyát a szervizbe éleztetésre.", 1, true, new Date(2026, 10, 15)),
			new Todo("ZH-ra tanulni!", "Átnézni az előadásanyagokat és megoldani a gyakorlófeladatokat.", 2, true, new Date(2026, 11, 5)),
		]
	}

	displayItems() {
		this.#renderer.renderTodoItems(this.#todos)
	}

	create() {
		const newTodo = this.#renderer.createTodoItem()
		this.#todos.push(newTodo)
		this.displayItems()
	}

	markAsDone(event) {
		// console.log(event.target.localName) // delegáció, megnézni!!!
		const btn = event.target.closest("button")
		if (!btn) return
		const id = btn.dataset.id

		const todo = this.#todos.find(x => x.id === id)
		todo.done = !todo.done

		this.displayItems()
	}

	filter(selectedOption) {
		let filtered = []

		switch (selectedOption) {
			case "pending":
				filtered = this.#todos.filter(x => x.done === false)
				this.#renderer.renderTodoItems(filtered)
				break;
			case "completed":
				filtered = this.#todos.filter(x => x.done === true)
				this.#renderer.renderTodoItems(filtered)
				break;
			case "priority-asc":
				filtered = this.#todos.toSorted((a,b) => a.priority - b.priority)
				this.#renderer.renderTodoItems(filtered)
				break;
			case "priority-desc":
				filtered = this.#todos.toSorted((a,b) => b.priority - a.priority)
				this.#renderer.renderTodoItems(filtered)
				break;
			default: this.displayItems()
				break;
		}
	}
}