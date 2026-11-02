"use strict"

import { Todo } from "./todo.js"

export class Logic {
	#renderer
	#todos

	constructor(renderer) {
		this.#renderer = renderer
		this.#todos = this.#loadSeedData()
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
}