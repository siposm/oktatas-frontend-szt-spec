"use strict"

/**
 * Két szám összeadása, majd az eredmény visszaadása.
 * 
 * @param {number|string} param1 - Első paraméter.
 * @param {number|string} param2 - Második paraméter.
 * @returns {number|string} A visszaadott érték.
 */
function add(param1, param2) {
    return param1 + param2
}


let ptags = document.querySelectorAll(".important")
console.log(ptags)
ptags[0].textContent = "<u>alert</u>"

let info = ["valami 1", "valami 2", "almabor", "sör"]


let target = document.querySelector("#target")

info.forEach(item => {
    let p = document.createElement("p")
    p.innerHTML = item
    target.appendChild(p)
})