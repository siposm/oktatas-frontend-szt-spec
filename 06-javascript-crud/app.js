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
        role: "TerĂźleti Vezető",
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
  renderCards(array) {
    let t = document.querySelector(".target")
		array.forEach(dev => {
			let p = document.createElement("p")
			p.textContent += dev.name
			t.appendChild(p)
		})
  }
}

const renderer = new Renderer()
const logic = new Logic(renderer)
logic.displayHtml()