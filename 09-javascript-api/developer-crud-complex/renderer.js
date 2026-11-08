"use strict"

export class Renderer {
  /**
   * Registers click event listeners for the Create and Update buttons.
   *
   * Delegates the corresponding actions to the business logic
   * through the provided callback functions.
   *
   * @param {Function} createFunction - Callback for creating a developer.
   * @param {Function} updateFunction - Callback for updating a developer.
   * @returns {void}
   */
  bindEvents(createFunction, updateFunction) {
    document
      .querySelector("#addDeveloperBtn")
      .addEventListener("click", createFunction)
    document
      .querySelector("#updateDeveloperBtn")
      .addEventListener("click", updateFunction)
  }

  /**
   * Reads the current values of the developer form fields.
   *
   * Trims text inputs, converts numeric fields to numbers,
   * and splits the comma-separated skills into an array.
   *
   * @returns {Object} Developer data collected from the form.
   */
  readForm() {
    const value = (id) => document.querySelector(id).value

    return {
      id: value("#dev-id"),
      name: value("#dev-name").trim(),
      image: value("#dev-image").trim(),
      age: Number(value("#dev-age")),
      job: value("#dev-job").trim(),
      salary: Number(value("#dev-salary")),
      email: value("#dev-email").trim(),
      skills: value("#dev-skills")
        .split(",")
        .map((skill) => skill.trim())
        .filter(Boolean)
    }
  }

  /**
   * Populates the developer form with the selected developer's data.
   *
   * Maps the developer properties to the corresponding form fields
   * and updates their values.
   *
   * @param {Developer} developer - Developer whose data will be displayed.
   * @returns {void}
   */
  fillForm(developer) {
    const fields = {
      "#dev-id": developer.id,
      "#dev-name": developer.name,
      "#dev-image": developer.image,
      "#dev-age": developer.age,
      "#dev-job": developer.job,
      "#dev-salary": developer.salary,
      "#dev-email": developer.email,
      "#dev-skills": developer.skills.join(", ")
    }

    for (const [selector, value] of Object.entries(fields)) {
      document.querySelector(selector).value = value ?? ""
    }

    const accordion = document.querySelector("#developerForm")
    bootstrap.Collapse.getOrCreateInstance(accordion, { toggle: false }).show()
  }

  /**
   * Clears all developer form fields.
   *
   * Resets the identifier, profile image URL, personal information,
   * salary, email, and skills fields to empty strings.
   *
   * @returns {void}
   */
  clearForm() {
    for (const id of [
      "dev-id",
      "dev-name",
      "dev-image",
      "dev-age",
      "dev-job",
      "dev-salary",
      "dev-email",
      "dev-skills"
    ]) {
      document.getElementById(id).value = ""
    }

    const accordion = document.querySelector("#developerForm")
    bootstrap.Collapse.getOrCreateInstance(accordion, { toggle: false }).hide()
  }

  /**
   * Displays the developer statistics calculated by the Logic class.
   *
   * Updates the average salary and the developer with the highest
   * number of skills. If no developer is available, a placeholder
   * is displayed instead.
   *
   * @param {number} avgSalary - Calculated average salary.
   * @param {Developer|null} highestSkillsetDeveloper - Developer with the most skills.
   * @returns {void}
   */
  renderStatistics(
    avgSalary,
    highestSkillsetDeveloper,
    highestEarningDeveloper
  ) {
    document.querySelector("#avg-salary").textContent =
      avgSalary.toLocaleString("hu-HU", {
        style: "currency",
        currency: "HUF"
      })
    document.querySelector("#highest-skillset").textContent =
      highestSkillsetDeveloper
        ? `${highestSkillsetDeveloper.name} (${highestSkillsetDeveloper.skills.length})`
        : "-"
    document.querySelector("#highest-salary").textContent =
      highestEarningDeveloper
			? highestEarningDeveloper.name
			: "-"
  }

  /**
   * Renders developers as Bootstrap cards using an HTML template.
   *
   * Clears the existing content, clones the card template for each
   * developer, and populates it with developer information.
   *
   * Displays a salary indicator based on the average salary,
   * creates Bootstrap badges for skills, and registers Edit
   * and Delete button event listeners.
   *
   * @param {Developer[]} developerArray - Developers to display.
   * @param {number} avgSalary - Average salary used for salary indicators.
   * @param {Function} deleteFunction - Callback for deleting a developer by id.
   * @param {Function} selectForUpdateFunction - Callback for selecting a developer for editing.
   * @returns {void}
   */
  render(developerArray, avgSalary, deleteFunction, selectForUpdateFunction) {
    const target = document.querySelector("#target")
    const template = document.querySelector("#developer-card-template")
    const fragment = document.createDocumentFragment()

    for (const dev of developerArray) {
      const card = template.content.cloneNode(true)

      card.querySelector(".developer-name").textContent = dev.name
      card.querySelector(".developer-job").textContent = dev.job
      card.querySelector(".developer-salary").textContent = Number(
        dev.salary
      ).toLocaleString("hu-HU", {
        style: "currency",
        currency: "HUF"
      })

      const indicator = card.querySelector(".salary-indicator")
      const arrow = document.createElement("i")
      const aboveAverage = Number(dev.salary) > avgSalary

      arrow.className = aboveAverage
        ? "bi bi-arrow-up-circle"
        : "bi bi-arrow-down-circle"
      indicator.classList.add(aboveAverage ? "text-success" : "text-danger")
      indicator.appendChild(arrow)

      const img = card.querySelector(".developer-avatar")
      img.src = dev.image || "https://api.siposm.hu/assets/default.webp"
      img.alt = `${dev.name} profile picture`

      const skills = card.querySelector(".developer-skills")

      for (const skill of dev.skills ?? []) {
        const badge = document.createElement("span")
        badge.className = "badge rounded-pill bg-dark border border-1"
        badge.textContent = skill
        skills.appendChild(badge)
      }

      card
        .querySelector(".edit-button")
        .addEventListener("click", () => selectForUpdateFunction(dev.id))

      card
        .querySelector(".delete-button")
        .addEventListener("click", () => deleteFunction(dev.id))

      fragment.appendChild(card)
    }

    target.replaceChildren(fragment)
  }
}
