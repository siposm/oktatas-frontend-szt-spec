"use strict"

export class Renderer {
    /**
     * Renders the developer objects from the array to a table form.
     * 
     * @param {Developer[]} developerArray - Developer object in array form.
     * @param {number} avgSalary - Average salary.
     * @param {Function} deleteFunction - Method reference to the delete method.
     * @param {Function} selectForUpdateFunction - Method reference to the select for update method.
     */
    render(developerArray, avgSalary, deleteFunction, selectForUpdateFunction) {
        let target = document.querySelector("#target-body")
        target.innerHTML = ""
        for (const dev of developerArray) {
            let tr = document.createElement("tr")
            let tdName = document.createElement("td")
            let tdJob = document.createElement("td")
            let tdSal = document.createElement("td")
            let tdSkills = document.createElement("td")
            let tdActions = document.createElement("td")

            // create delete button for actions
            let btnDelete = document.createElement("button")
            btnDelete.appendChild(this.#createIconInnerContent(["bi","bi-trash"]))
            btnDelete.classList.add("btn", "btn-danger", "btn-sm", "me-1")
            btnDelete.addEventListener("click", deleteFunction.bind(null, dev.id))
            tdActions.appendChild(btnDelete)

            // create update button for actions
            let btnUpdate = document.createElement("button")
            btnUpdate.appendChild(this.#createIconInnerContent(["bi","bi-pencil-square" ]))
            btnUpdate.classList.add("btn", "btn-warning", "btn-sm")
            btnUpdate.addEventListener("click", selectForUpdateFunction.bind(null, dev.id))
            tdActions.appendChild(btnUpdate)


            tdName.appendChild(this.#createSalaryIndicator(dev, avgSalary))
            tdName.innerHTML += dev.name
            tdJob.innerHTML = dev.job
            tdSal.innerHTML = dev.salary + " HUF"
            tdSkills.appendChild(this.#createBadgesFromSkills(dev.skills))

            tr.appendChild(tdName)
            tr.appendChild(tdJob)
            tr.appendChild(tdSal)
            tr.appendChild(tdSkills)
            tr.appendChild(tdActions)

            target.appendChild(tr)
        }
    }
    
    /**
     * Creates HTML <i> element for Bootstrap Icons, based on the given classes as param.
     * 
     * @param {string[]} classesArray - Class names as string array.
     * @returns {HTMLElement} The created HTML <i> element with the applied classes.
     */
    #createIconInnerContent(classesArray) {
        let iTag = document.createElement("i")
        for (const iterator of classesArray) {
            iTag.classList.add(iterator)
        }
        return iTag
    }

    /**
     * Creates a HTML <span> element with the corresponding Bootstrap classes, based on the input param of average salary.
     * 
     * @param {Developer} dev - A developer object.
     * @param {number} avgSalary - A previously calculated number representing the average salary.
     * @returns {HTMLSpanElement} A HTML <span> element.
     */
    #createSalaryIndicator(dev, avgSalary) {
        let span = document.createElement("span")
        let i = document.createElement("i")
        if (dev.salary > avgSalary) {
            i.classList.add("bi", "bi-arrow-up-circle")
            span.classList.add("badge", "rounded-pill", "bg-success", "me-3")
        } else {
            i.classList.add("bi", "bi-arrow-down-circle")
            span.classList.add("badge", "rounded-pill", "bg-danger", "me-3")
        }
        span.appendChild(i)
        return span
    }

    /**
     * Creates Bootstrap badges (<span> element with classes) for each item of the input array.
     * 
     * @param {string[]} skillsArray - Array of strings representing the skills.
     * @returns {HTMLDivElement} - A wrapper <div> element containing all the created <span> elements.
     */
    #createBadgesFromSkills(skillsArray) {
        let div = document.createElement("div")
        for (const skill of skillsArray) {
            let span = document.createElement("span")
            span.classList.add("badge-skill", "badge", "rounded-pill", "bg-light", "text-dark", "mx-1")
            span.innerHTML = skill
            div.appendChild(span)
        }
        return div
    }
}