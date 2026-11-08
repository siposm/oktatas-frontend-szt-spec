"use strict"

import { Logic } from "./logic.js"
import { Renderer } from "./renderer.js"

const renderer = new Renderer()
const logic = new Logic(renderer)

try {
  await logic.loadData()
  logic.displayData()
} catch (error) {
  console.error("Could not load developers:", error)
}
