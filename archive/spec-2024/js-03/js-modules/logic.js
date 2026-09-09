"use strict"

import { add, Calculator, div } from "./functions.js"

console.log(add(10, 20))

try {
    console.log(div(10, 0))
} catch (error) {
    console.error(error)
}

console.log(sub(10,20))

const calc = new Calculator()
console.log(calc.add(10, 20))