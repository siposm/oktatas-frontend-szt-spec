"use strict"

let todos = [
    { content: "tejet kell venni" },
    { content: "le kell vinni a kutyát sétálni" },
    { content: "progzh-ra kell készülni" },
]

function render(data) {
    let target = document.querySelector("#target")
    target.innerHTML = ""
    data.forEach(element => {
        let p = document.createElement("p")
        // p.addEventListener("click", markAsDone)
        p.textContent = element.content
        target.appendChild(p)
    })
}

function markAsDone(event) {
    event.target.classList.toggle("done")
}

function addNew() {
    let inputValue = document.querySelector("#todo-input").value
    todos.push({ content: inputValue })
    render(todos)
}

let t = document.querySelector("#target")
// t.addEventListener("click", markAsDone)
t.addEventListener("click", (e) => {
    e.target.classList.toggle("done")
})

render(todos)