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

	getFormattedDate() {
		// return this.date.toLocaleDateString("hu-HU")
		return this.date.getFullYear()
		+ "-" +
		(this.date.getMonth()).toString().padStart(2,"0")
		+ "-" +
		(this.date.getDate()).toString().padStart(2,"0")
	}

	generateId() {
		return Math.random().toString(36).substring(2, 8)
	}
}