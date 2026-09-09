"use strict"

import { Logic } from "./logic.js"
import { Renderer } from "./renderer.js"

let renderer = new Renderer()
let logic = new Logic(renderer)

await logic.loadData()
logic.displayData()