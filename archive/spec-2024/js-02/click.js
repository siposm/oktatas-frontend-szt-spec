"use strict"

function log() {
    console.log("hello from log function")
}

let target = document.querySelector("#target")
let p = document.createElement("p")
p.textContent = "ALMA"
p.addEventListener("click", log) // itt nincs ()
target.appendChild(p)