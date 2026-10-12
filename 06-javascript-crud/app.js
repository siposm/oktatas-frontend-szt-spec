"use strict"

/**
 * Business logic representation
 */
class Logic {
	#renderer

	constructor(renderer) {
		this.#renderer = renderer
	}

	/**
	 * Display data to HTML via Renderer.
	 */
	displayHtml() {
		this.#renderer.renderCards(this.getSeedData())
	}

	/**
	 * Gets and returns the seed data array containing plain objects (developers).
	 * @returns {array} Array of developer objects
	 */
	getSeedData() {
    return [
      {
        name: "John Doe",
        role: "Fejlesztő",
        salary: 5000,
        email: "john.doe@example.com",
        skills: ["JavaScript", "HTML", "CSS", "Angular", "Sass CSS"]
      },
      {
        name: "Jane Smith",
        role: "Projektvezető",
        salary: 6000,
        email: "jane.smith@example.com",
        skills: ["Team leadership", "SCRUM", "Soft skills"]
      },
      {
        name: "David Johnson",
        role: "Tesztelő",
        salary: 4500,
        email: "david.johnson@example.com",
        skills: ["nUnit", "Moq framework", "E2E testing"]
      },
      {
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
        name: "Michael Brown",
        role: "Rendszergazda",
        salary: 5500,
        email: "michael.brown@example.com",
        skills: ["Linux", "AWS", "Docker", "Serverless architecture"]
      },
      {
        name: "Sarah Taylor",
        role: "Területi Vezető",
        salary: 7000,
        email: "sarah.taylor@example.com",
        skills: ["Team management", "Client communication", "Project planning"]
      },
      {
        name: "Christopher Miller",
        role: "Analitikus",
        salary: 5200,
        email: "christopher.miller@example.com",
        skills: ["Python", "SQL", "Tableau"]
      }
    ]
  }
}

/**
 * Renderer which is responsible for DOM handling and
 * creating HTML elements based on given data.
 */
class Renderer {
	/**
	 * Renders the Bootstrap cards for each element in the array.
	 * @param {array} array Array of developers
	 */
	renderCards(array) {
    let t = document.querySelector(".target")
		array.map(developer => t.appendChild(this.createCard(developer)))
  }

	/**
	 * Creates Bootstrap card for given input developer.
	 * @param {object} developer Developer object
	 * @returns {object} HTML card object
	 */
	createCard(developer) {
		let card = document.createElement("div")
		card.classList.add("card")
		card.classList.add("mb-3")

		card.innerHTML = `
			<div class="card-body">
				<h5 class="card-title">${developer.name}</h5>
				<h6 class="card-subtitle mb-2 text-body-secondary">${developer.role}</h6>
			</div>
			<ul class="list-group list-group-flush">
				<li class="list-group-item"><b>Elérhetőség:</b> ${developer.email}</li>
				<li class="list-group-item"><b>Bérezés:</b> ${developer.salary} Ft / óra (bruttó)</li>
				<li class="list-group-item"><b>Tapasztalatok:</b> ${developer.skills.join(" - ")}</li>
			</ul>
			<div class="card-body d-flex justify-content-end">
				<a href="#" class="btn btn-sm btn-warning">
					<i class="bi bi-pencil-square me-1"></i>
					Szerkesztés
				</a>
			</div>
		`
		return card
	}
}

const renderer = new Renderer()
const logic = new Logic(renderer)
logic.displayHtml()