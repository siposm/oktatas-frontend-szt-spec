
"use strict"

import { Developer } from "./developer.js"

export class Logic {
  createApiUrl = "https://api.siposm.hu/createDeveloper"
  getApiUrl = "https://api.siposm.hu/getDevelopers"
  updateApiUrl = "https://api.siposm.hu/updateDeveloper"
  deleteApiUrl = "https://api.siposm.hu/deleteDeveloper"

  developers = []
  avgSalary = 0

  /**
   * Initializes the business logic with the provided Renderer instance.
   *
   * @param {Renderer} renderer - Renderer responsible for DOM operations.
   */
  constructor(renderer) {
    this.renderer = renderer

		this.renderer.bindEvents(
			() => this.addDeveloper(),
			() => this.updateDeveloper()
		)
  }

  /**
   * Fetches developer data from the API and populates the local array.
   *
   * Missing profile images are replaced with the default avatar.
   * Salary values are converted to numbers and missing skills to empty arrays.
   *
   * @returns {Promise<void>}
   */
  async loadData() {
    const response = await fetch(this.getApiUrl)

    if (!response.ok) {
      throw new Error(`GET failed: HTTP ${response.status}`)
    }

    const data = await response.json()
    console.log("GET API response:", data)

    this.developers = data.map((item) =>
      Object.assign(new Developer(), {
        ...item,
        image: item.image || "https://api.siposm.hu/assets/default.webp",
        salary: Number(item.salary),
        skills: item.skills ?? []
      })
    )
  }

  /**
   * Calculates developer statistics and delegates rendering to the Renderer.
   *
   * Displays the average salary, the developer with the most skills,
   * and the developer cards with their corresponding event callbacks.
   *
   * @returns {void}
   */
  displayData() {
    this.avgSalary = this.#calculateAverageSalary()
    const highestSkillsetDeveloper = this.#findHighestSkillsetDeveloper()
    const highestEarningDeveloper = this.#findHighestEarningDeveloper()

    this.renderer.renderStatistics(this.avgSalary, highestSkillsetDeveloper, highestEarningDeveloper)

    this.renderer.render(
      this.developers,
      this.avgSalary,
      this.#deleteDeveloper.bind(this),
      this.#selectDeveloperForUpdate.bind(this)
    )
  }

  /**
   * Creates a new developer using the form data supplied by the Renderer.
   *
   * Generates a unique identifier, sends a POST request to the API,
   * and updates the local array after a successful response.
   *
   * @returns {Promise<void>}
   */
  async addDeveloper() {
    const formData = this.renderer.readForm()

    const newDev = Object.assign(new Developer(), formData, {
      id: this.#generateGuid(),
      image: formData.image || "https://api.siposm.hu/assets/default.webp"
    })

    try {
      await this.#sendRequest(this.createApiUrl, "POST", newDev)

      this.developers.push(newDev)
      this.renderer.clearForm()
      this.displayData()
    } catch (error) {
      console.error("Could not create developer:", error)
    }
  }

  /**
   * Updates an existing developer identified by its id.
   *
   * Reads the form data, finds the matching developer, sends a PUT request,
   * and updates the local array after a successful API response.
   *
   * @returns {Promise<void>}
   */
  async updateDeveloper() {
    const formData = this.renderer.readForm()

    const index = this.developers.findIndex(
      (dev) => dev.id === formData.id
    )

    if (index === -1) return

    const updatedDev = Object.assign(new Developer(), formData, {
      image: formData.image || "https://api.siposm.hu/assets/default.webp"
    })

    try {
      await this.#sendRequest(this.updateApiUrl, "PUT", updatedDev)

      this.developers[index] = updatedDev
      this.renderer.clearForm()
      this.displayData()
    } catch (error) {
      console.error("Could not update developer:", error)
    }
  }

  /**
   * Deletes an existing developer by its unique identifier.
   *
   * Sends a DELETE request and removes the developer from the local
   * array only after a successful API response.
   *
   * @param {string} developerId - Unique identifier of the developer.
   * @returns {Promise<void>}
   */
  async #deleteDeveloper(developerId) {
    const index = this.developers.findIndex(
      (dev) => dev.id === developerId
    )

    if (index === -1) return

    try {
      await this.#sendRequest(
        this.deleteApiUrl,
        "DELETE",
        { id: developerId }
      )

      this.developers.splice(index, 1)
      this.displayData()
    } catch (error) {
      console.error("Could not delete developer:", error)
    }
  }

  /**
   * Finds a developer by id and delegates form population to the Renderer.
   *
   * @param {string} developerId - Unique identifier of the developer.
   * @returns {void}
   */
  #selectDeveloperForUpdate(developerId) {
    const developer = this.developers.find(
      (dev) => dev.id === developerId
    )

    if (developer) {
      this.renderer.fillForm(developer)
    }
  }

  /**
   * Calculates the average salary of all developers.
   *
   * Returns zero if the developer array is empty.
   *
   * @returns {number} Rounded average salary.
   */
  #calculateAverageSalary() {
    if (this.developers.length === 0) return 0

    const sum = this.developers.reduce(
      (total, dev) => total + Number(dev.salary),
      0
    )

    return Math.round(sum / this.developers.length)
  }

  /**
   * Finds the developer with the highest number of skills.
   *
   * If multiple developers have the same number of skills,
   * the first matching developer is returned.
   *
   * @returns {Developer|null} Developer with the most skills, or null if empty.
   */
  #findHighestSkillsetDeveloper() {
    return this.developers.reduce((highest, dev) => {
      if (
        !highest ||
        (dev.skills?.length ?? 0) > (highest.skills?.length ?? 0)
      ) {
        return dev
      }

      return highest
    }, null)
  }

  /**
   * Finds the developer with the highest salary.
   *
   * If multiple developers have the same salary,
   * the first matching developer is returned.
   *
   * @returns {Developer|null} Developer with the highest salary, or null if empty.
   */
  #findHighestEarningDeveloper() {
    return this.developers.reduce((highest, dev) => {
      if (
        !highest ||
        (dev.salary ?? 0) > (highest.salary ?? 0)
      ) {
        return dev
      }

      return highest
    }, null)
  }

  /**
   * Sends an HTTP request to the specified API endpoint.
   *
   * Converts the request body to JSON, checks the HTTP response status,
   * parses the response body when possible, and logs the API response.
   *
   * @param {string} url - API endpoint URL.
   * @param {string} method - HTTP method (POST, PUT, DELETE).
   * @param {Object} body - Request payload.
   * @returns {Promise<any>} Parsed API response, or null for an empty response.
   * @throws {Error} If the HTTP request fails.
   */
  async #sendRequest(url, method, body) {
    const response = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body)
    })

    if (!response.ok) {
      throw new Error(`${method} failed: HTTP ${response.status}`)
    }

    const responseText = await response.text()
    let data = null

    if (responseText) {
      try {
        data = JSON.parse(responseText)
      } catch {
        data = responseText
      }
    }

    console.log(`${method} API response:`, data)

    return data
  }

  /**
   * Generates a random UUID v4 formatted identifier.
   *
   * @returns {string} Generated UUID string.
   */
  #generateGuid() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
      /[xy]/g,
      (c) => {
        const r = (Math.random() * 16) | 0
        const v = c === "x" ? r : (r & 0x3) | 0x8

        return v.toString(16)
      }
    )
  }
}
