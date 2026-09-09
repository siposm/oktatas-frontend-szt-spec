"use strict"

import { Developer } from "./developer.js"

export class Logic {

    createApiUrl = "https://api.siposm.hu/createDeveloper" // [POST]
    getApiUrl = "https://api.siposm.hu/getDevelopers"      // [GET]
    updateApiUrl = "https://api.siposm.hu/updateDeveloper" // [PUT]
    deleteApiUrl = "https://api.siposm.hu/deleteDeveloper" // [DELETE]

    developers = []
    renderer
    avgSalary = 0

    constructor(renderer) {
        this.renderer = renderer
    }

    /**
     * Fetching the data from the API endpoint and creating the local array.
     */
    async loadData() {
        let response = await fetch(this.getApiUrl)
        let data = await response.json()

        for (const iterator of data) {
            let dev = new Developer()
            dev.id = iterator.id
            dev.name = iterator.name
            dev.age = iterator.age
            dev.job = iterator.job
            dev.salary = iterator.salary
            dev.email = iterator.email
            dev.skills = iterator.skills
            this.developers.push(dev)
        }
        // console.log(this.developers)
    }

    /**
     * Displaying the developers using the Renderer.
     */
    displayData() {
        this.#calculateStatistics()
        this.renderer.render(
            this.developers,
            this.avgSalary,
            this.#deleteDeveloper.bind(this),
            this.#selectDeveloperForUpdate.bind(this)
        )
    }

    /**
     * Updates a developer (identified by id).
     */
    updateDeveloper() {
        let dev_id = document.querySelector("#dev-id").value
        let dev_name = document.querySelector("#dev-name").value
        let dev_age = document.querySelector("#dev-age").value
        let dev_job = document.querySelector("#dev-job").value
        let dev_salary = document.querySelector("#dev-salary").value
        let dev_email = document.querySelector("#dev-email").value
        let dev_skills = document.querySelector("#dev-skills").value.split(",")

        let devToUpdate = new Developer()
        devToUpdate.id = dev_id
        devToUpdate.name = dev_name
        devToUpdate.age = dev_age
        devToUpdate.job = dev_job
        devToUpdate.salary = parseInt(dev_salary)
        devToUpdate.email = dev_email
        devToUpdate.skills = dev_skills

        // update in local array
        for (let i = 0; i < this.developers.length; i++) {
            if (this.developers[i].id === devToUpdate.id) {
                this.developers[i].id = devToUpdate.id
                this.developers[i].name = devToUpdate.name
                this.developers[i].age = devToUpdate.age
                this.developers[i].job = devToUpdate.job
                this.developers[i].salary = devToUpdate.salary
                this.developers[i].email = devToUpdate.email
                this.developers[i].skills = devToUpdate.skills

                this.#calculateStatistics()
                this.displayData()

                // reset input fields
                document.querySelector("#dev-id").value = ""
                document.querySelector("#dev-name").value = ""
                document.querySelector("#dev-age").value = ""
                document.querySelector("#dev-job").value = ""
                document.querySelector("#dev-salary").value = ""
                document.querySelector("#dev-email").value = ""
                document.querySelector("#dev-skills").value = ""

                // API call
                const requestOptions = {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(devToUpdate)
                }

                fetch(this.updateApiUrl, requestOptions)
                    .then(response => {
                        if (!response.ok) {
                            throw new Error("Network response was not ok")
                        }
                        return response.json()
                    })
                    .then(data => {
                        console.log("API response:", data)
                    })
                    .catch(error => {
                        console.error("There was a problem with the fetch operation:", error)
                    })
            }
        }
    }

    /**
     * Deletes a developer (locally + API call), by checking for the same name property.
     * 
     * @param {string} developerId - The id of the developer which is the basis of the identification.
     */
    #deleteDeveloper(developerId) {
        for (let i = 0; i < this.developers.length; i++) {
            if (this.developers[i].id === developerId) {
                this.developers.splice(i, 1)
                this.#calculateStatistics(this.developers)
                this.displayData(this.developers)

                // API call
                const requestOptions = {
                    method: "DELETE",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ id: developerId })
                }

                fetch(this.deleteApiUrl, requestOptions)
                    .then(response => {
                        if (!response.ok) {
                            throw new Error("Network response was not ok")
                        }
                        return response.json()
                    })
                    .then(data => {
                        console.log("API response:", data)
                    })
                    .catch(error => {
                        console.error("There was a problem with the fetch operation:", error)
                    })
            }
        }
    }

    /**
     * Creates a developer object, sets the properties, adds to the local array and calls the corresponding API.
     */
    addDeveloper() {
        let dev_name = document.querySelector("#dev-name").value
        let dev_age = document.querySelector("#dev-age").value
        let dev_job = document.querySelector("#dev-job").value
        let dev_salary = document.querySelector("#dev-salary").value
        let dev_email = document.querySelector("#dev-email").value
        let dev_skills = document.querySelector("#dev-skills").value.split(",")

        let newDev = new Developer()
        newDev.id = this.#generateGuid()
        newDev.name = dev_name
        newDev.age = dev_age
        newDev.job = dev_job
        newDev.salary = parseInt(dev_salary)
        newDev.email = dev_email
        newDev.skills = dev_skills

        // reset input fields
        document.querySelector("#dev-name").value = ""
        document.querySelector("#dev-age").value = ""
        document.querySelector("#dev-job").value = ""
        document.querySelector("#dev-salary").value = ""
        document.querySelector("#dev-email").value = ""
        document.querySelector("#dev-skills").value = ""

        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newDev)
        }

        fetch(this.createApiUrl, requestOptions)
            .then(response => {
                if (!response.ok) {
                    throw new Error("Network response was not ok")
                }
                return response.json()
            })
            .then(data => {
                console.log("API response:", data)
                this.developers.push(newDev)
                this.#calculateStatistics()
                this.displayData()
            })
            .catch(error => {
                console.error("There was a problem with the fetch operation:", error)
            })
    }

    /**
     * Finds (by name) and selects the developer for edit.
     * 
     * @param {string} developerId - Id of the to be selected developer.
     */
    #selectDeveloperForUpdate(developerId) {
        for (let i = 0; i < this.developers.length; i++) {
            if (this.developers[i].id === developerId) {
                let dev_id = document.querySelector("#dev-id")
                dev_id.value = this.developers[i].id

                let dev_name = document.querySelector("#dev-name")
                dev_name.value = this.developers[i].name

                let dev_age = document.querySelector("#dev-age")
                dev_age.value = this.developers[i].age

                let dev_job = document.querySelector("#dev-job")
                dev_job.value = this.developers[i].job

                let dev_salary = document.querySelector("#dev-salary")
                dev_salary.value = this.developers[i].salary

                let dev_email = document.querySelector("#dev-email")
                dev_email.value = this.developers[i].email

                let dev_skills = document.querySelector("#dev-skills")
                dev_skills.value = this.developers[i].skills
            }
        }
    }

    /**
     * Calculate the statistics (main method).
     */
    #calculateStatistics() {
        let highestSkillset = document.querySelector("#highest-skillset")
        let avgSalary = document.querySelector("#avg-salary")
        let index = this.#calculateHighestSkillset(this.developers)
        let avgValue = this.#calculateAverageSalary(this.developers)
        highestSkillset.innerHTML = this.developers[index].name + " (" + this.developers[index].skills.length + ")"
        avgSalary.innerHTML = avgValue
        this.avgSalary = avgValue
    }

    /**
     * Calculates the average salary based on the local array.
     * 
     * @returns {number} - Calculated average value of the salaries.
     */
    #calculateAverageSalary() {
        let sum = 0
        for (let i = 0; i < this.developers.length; i++) {
            sum += this.developers[i].salary
        }
        return Math.round(sum / this.developers.length)
    }

    /**
     * Finds the one developer who has the most skills.
     * 
     * @returns {number} Index of the corresponding developer.
     */
    #calculateHighestSkillset() {
        let max = 0
        for (let i = 1; i < this.developers.length; i++) {
            if (this.developers[i].skills.length > this.developers[max].skills.length) {
                max = i
            }
        }
        return max
    }

    #generateGuid() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            const r = Math.random() * 16 | 0
            const v = c === 'x' ? r : (r & 0x3 | 0x8)
            return v.toString(16)
        })
    }
}