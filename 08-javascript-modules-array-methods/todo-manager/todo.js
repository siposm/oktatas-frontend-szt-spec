export class Todo {
	id
	title
	description
	priority
	done
	date

	constructor(title, description, priority, done, date = new Date()) {
		this.id = this.generateId()
		this.title = title
		this.description = description
		this.priority = Number(priority)
		this.done = done
		this.date = date
	}

	generateId() {
		return Math.random().toString(36).substring(2, 8)
	}
}