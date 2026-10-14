"use strict"

/**
 * Business logic representation
 */
class Logic {
	#developers
	#renderer
	#editAction = false
	#toEditDeveloperId = undefined
	#connectionString = "_developersDbKey"

	constructor(renderer) {
		this.#renderer = renderer
		// this.#developers = this.getSeedData()
		this.#developers = this.readFromLocalStorage()
		this.#renderer.onModalHidden(() => this.resetForm())
	}

	/**
	 * Saves the developers to localStorage via serialization.
	 */
	saveToLocalStorage() {
		localStorage.setItem(this.#connectionString, JSON.stringify(this.#developers))
	}

	/**
	 * Reads the elements from localStorage.
	 * @returns {array} Array of developer objects
	 */
	readFromLocalStorage() {
		return JSON.parse(localStorage.getItem(this.#connectionString)) ?? this.getSeedData()
	}

	/**
	 * Display data to HTML via Renderer.
	 */
	displayHtml() {
		this.#renderer.renderCards(this.#developers)
	}

	/**
	 * Gets and returns the seed data array containing plain objects (developers).
	 * @returns {array} Array of developer objects
	 */
	getSeedData() {
    return [
      {
        id: "jm7i3e",
				name: "John Doe",
        role: "Fejlesztő",
        salary: 5000,
        email: "john.doe@example.com",
        skills: ["JavaScript", "HTML", "CSS", "Angular", "Sass CSS"]
      },
      {
        id: "1ga5hb",
				name: "Jane Smith",
        role: "Projektvezető",
        salary: 6000,
        email: "jane.smith@example.com",
        skills: ["Team leadership", "SCRUM", "Soft skills"]
      },
      {
        id: "i27tyw",
				name: "David Johnson",
        role: "Tesztelő",
        salary: 4500,
        email: "david.johnson@example.com",
        skills: ["nUnit", "Moq framework", "E2E testing"]
      },
      {
        id: "ffr1ji",
				name: "Emily Williams",
        role: "Fejlesztő",
        salary: 4000,
        email: "emily.williams@example.com",
        skills: [
          "React",
          "Node.js",
          "Git",
          "Less CSS",
          "Docker",
          "C#",
          "JavaScript"
        ]
      },
      {
        id: "d5daep",
				name: "Michael Brown",
        role: "Rendszergazda",
        salary: 5500,
        email: "michael.brown@example.com",
        skills: ["Linux", "AWS", "Docker", "Serverless architecture"]
      },
      {
        id: "yi1m9t",
				name: "Sarah Taylor",
        role: "Területi Vezető",
        salary: 7000,
        email: "sarah.taylor@example.com",
        skills: ["Team management", "Client communication", "Project planning"]
      },
      {
        id: "c09ugk",
				name: "Christopher Miller",
        role: "Analitikus",
        salary: 5200,
        email: "christopher.miller@example.com",
        skills: ["Python", "SQL", "Tableau"]
      }
    ]
  }

	/**
	 * Saving in two way:
	 * 1) update an existing record
	 * 2) creating a new object
	 */
	save() {
		if (this.#editAction) this.update()
		else this.create()

		this.saveToLocalStorage()
		this.displayHtml()
	}

	/**
	 * Saves the new developer based on given form data.
	 */
	create() {
		let formData = this.#renderer.getFormData()

		let newDev = {
			id: this.generateId(),
			name: formData.name,
			role: formData.role,
			salary: formData.salary,
			email: formData.email,
			skills: formData.skills
		}

		this.#developers.unshift(newDev)

		this.displayHtml()
	}

	/**
	 * Reads the inputs and updates an existing object.
	 */
	update() {
		let formData = this.#renderer.getFormData()

		let newDev = {
			id: this.#toEditDeveloperId, // ID remains the same!
			name: formData.name,
			role: formData.role,
			salary: formData.salary,
			email: formData.email,
			skills: formData.skills
		}

		for (let i = 0; i < this.#developers.length; i++) {
			if (this.#developers[i].id === this.#toEditDeveloperId) {
				this.#developers[i] = newDev
				break
			}
		}

		this.#editAction = false
		this.#toEditDeveloperId = undefined
	}

	delete(developerId) {
		for (let i = 0; i < this.#developers.length; i++) {
			if (this.#developers[i].id === developerId) {
				this.#developers.splice(i, 1)
				break
			}
		}

		this.saveToLocalStorage()
		this.displayHtml()
	}

	/**
	 * Generates a simple string ID.
	 * @returns {string} The generated ID.
	 */
	generateId() {
		return Math.random().toString(36).substring(2, 8)
	}

	/**
	 * Loads the selected developer for edit.
	 * @param {string} developerId The developer's id
	 */
	loadForEdit(developerId) {
		let dev = this.findDeveloperById(developerId)

		this.#renderer.loadInputs(dev)

		this.#editAction = true // to decide if it's CREATE or EDIT function
		this.#toEditDeveloperId = developerId // storing the dev id in the class to retrieve later -> no data-id attributes...
	}

	/**
	 * Finds the developer object by ID.
	 * @param {string} developerId The developer's ID
	 * @returns {object | undefined} The developer object
	 */
	findDeveloperById(developerId) {
		for (let i = 0; i < this.#developers.length; i++) {
			if (this.#developers[i].id === developerId) {
				return this.#developers[i]
			}
		}
		return undefined
	}

	/**
	 * Resets the form and the current edit state.
	 */
	resetForm() {
		this.#renderer.resetInputs()
		this.#editAction = false
		this.#toEditDeveloperId = undefined
	}
}

/**
 * Renderer which is responsible for DOM handling and
 * creating HTML elements based on given data.
 */
class Renderer {
	/**
	 * Registers an event for the Bootstrap modal hidden event.
	 * @param {Function} callback Function to execute when the modal is hidden
	 */
	onModalHidden(callback) {
		let modal = document.querySelector("#editorModal")
		modal.addEventListener("hidden.bs.modal", callback)
	}

	/**
	 * Renders the Bootstrap cards for each element in the array.
	 * @param {array} array Array of developers
	 */
	renderCards(array) {
    let t = document.querySelector(".target")
		t.innerHTML = ""
		array.map(developer => t.appendChild(this.createCard(developer)))
  }

	/**
	 * Creates Bootstrap card for given input developer.
	 * @param {object} developer Developer object
	 * @returns {object} HTML card object
	 */
	createCard(developer) {
		const template = document.querySelector("#developer-card-template")
		const fragment = template.content.cloneNode(true)

		fragment.querySelector(".card-title").textContent = developer.name
		fragment.querySelector(".email").textContent = developer.email
		fragment.querySelector(".salary").textContent = developer.salary.toLocaleString("hu-HU") + ` Ft / óra (bruttó)`
		fragment.querySelector(".skills").textContent = developer.skills.join(" - ")
		fragment.querySelector(".card-subtitle").innerHTML = this.createRoleBadge(developer)

		fragment
			.querySelector(".edit-button")
			.addEventListener("click", () => logic.loadForEdit(developer.id))

		fragment
			.querySelector(".delete-button")
			.addEventListener("click", () => logic.delete(developer.id))

		return fragment
	}

	/**
	 * Creates Bootstrap badge for role.
	 * @param {object} developer Developer object
	 * @returns {string} An HTML span element as string
	 */
	createRoleBadge(developer) {
		return `
			<span class="badge ${this.roleLookup(developer.role)}">
				${developer.role}
			</span>
		`
	}

	/**
	 * Looks up the corresponding class for the given input role.
	 * @param {string} role The given string role
	 * @returns {string} A specific class name as string
	 */
	roleLookup(role) {
		const roles = [
			{ role: "Fejlesztő", className: "text-bg-primary" },
			{ role: "Projektvezető", className: "text-bg-danger" },
			{ role: "Rendszergazda", className: "text-bg-info" },
			{ role: "Területi Vezető", className: "text-bg-success" }
		]

		for (let i = 0; i < roles.length; i++) {
			if (roles[i].role === role) {
				return roles[i].className
			}
		}

		return "text-bg-secondary"
	}

	/**
	 * Reads the current values of the form inputs.
	 * @returns {object} Object containing the form values
	 */
	getFormData() {
		let name = document.querySelector("#input-name").value
		let role = document.querySelector("#input-role").value
		let salary = document.querySelector("#input-salary").value
		let email = document.querySelector("#input-email").value
		let skills = document.querySelector("#input-skills").value

		return {
			name: name,
			role: role,
			salary: Number(salary),
			email: email,
			skills: skills.split(",")
		}
	}

	/**
	 * Loads a developer object's data into the form inputs.
	 * @param {object} developer Developer object
	 */
	loadInputs(developer) {
		document.querySelector("#input-name").value = developer.name
		document.querySelector("#input-role").value = developer.role
		document.querySelector("#input-salary").value = developer.salary
		document.querySelector("#input-email").value = developer.email
		document.querySelector("#input-skills").value = developer.skills
	}

	/**
	 * Resets the form's inputs to default empty values.
	 */
	resetInputs() {
		document.querySelector("#input-name").value = ""
		document.querySelector("#input-role").value = ""
		document.querySelector("#input-salary").value = ""
		document.querySelector("#input-email").value = ""
		document.querySelector("#input-skills").value = ""
	}
}

const renderer = new Renderer()
const logic = new Logic(renderer)
logic.displayHtml()