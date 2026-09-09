"use strict"

document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("#addDeveloperBtn").addEventListener("click", logic.addDeveloper.bind(logic))
    document.querySelector("#updateDeveloperBtn").addEventListener("click", logic.updateDeveloper.bind(logic))
})

import { Logic } from "./logic.js"
import { Renderer } from "./renderer.js"

let renderer = new Renderer()
let logic = new Logic(renderer)

await logic.loadData()
logic.displayData()

function addDeveloper() { logic.addDeveloper() }
function updateDeveloper() { logic.updateDeveloper() }