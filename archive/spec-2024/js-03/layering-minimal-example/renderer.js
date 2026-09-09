"use strict"

export class Renderer {
    /**
     * Renders the given array of objects in paragraphs.
     * 
     * @param {Student[]} array of Student objects
     */
    render(array) {
        let target = document.querySelector("#target")
        target.innerHTML = ""
        for (const dev of array) {
            let p = document.createElement("p")
            p.textContent = `${dev.name} - ${dev.email}`
            target.appendChild(p)
        }
    }
}