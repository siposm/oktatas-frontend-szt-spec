"use strict"

main()

let developers = []

// =========================================================================================================
// MAIN

async function main() {
  developers = await downloadData()
  console.log(developers)
  displayHtmlAsTable(developers)
  calculateStatistics(developers)
}

// adat letöltése backend végpontról
async function downloadData() {
  let response = await fetch("https://api.siposm.hu/getDevelopers")
  return await response.json()
}

// =========================================================================================================
// RENDER

// html létrehozása tömb elemek alapján
function displayHtmlAsTable(array) {
  let target = document.querySelector("#target-table-body")
  target.innerHTML = ""
	array.forEach(element => {
		let tr = document.createElement("tr")
    let tdName = document.createElement("td")
    let tdJob = document.createElement("td")
    let tdSalary = document.createElement("td")
    let tdSkills = document.createElement("td")
    let tdActions = document.createElement("td")

    tdName.classList.add("align-middle")
    tdJob.classList.add("align-middle")
    tdSalary.classList.add("align-middle")
    tdSkills.classList.add("align-middle")
    tdActions.classList.add("align-middle")

    tdName.innerText = element.name
    tdJob.innerText = element.job
    tdSalary.appendChild(createSalaryElement(element.salary, 500000))
    tdSkills.appendChild(createListForSkills(element.skills))
    tdActions.appendChild(createDeleteButton(element.id))
    tdActions.appendChild(createEditButton(element.id))

    tr.appendChild(tdName)
    tr.appendChild(tdJob)
    tr.appendChild(tdSalary)
    tr.appendChild(tdSkills)
    tr.appendChild(tdActions)

    target.appendChild(tr)
	})
}

// skill lista létrehozása
function createListForSkills(skills) {
  let ul = document.createElement("ul")
  for (const element of skills) {
    let li = document.createElement("li")
    li.innerText = element
    ul.appendChild(li)
  }
  return ul
}

// fizetés span elem létrehozása
function createSalaryElement(salaryValue, limit) {
  let spanSalary = document.createElement("span")
  spanSalary.classList.add("badge")
  spanSalary.innerHTML = salaryValue + " HUF"
  spanSalary.classList.add("ms-2")
  if (salaryValue > limit) {
    spanSalary.classList.add("text-bg-success")
  } else {
    spanSalary.classList.add("text-bg-secondary")
  }
  return spanSalary
}

// törlés gomb létrehozása eseménnyel
function createDeleteButton(developerID) {
  let delBtn = document.createElement("button")
  delBtn.developerID = developerID
  delBtn.addEventListener("click", deleteDeveloper)
  delBtn.innerText = "X"
  delBtn.classList.add("btn")
  delBtn.classList.add("btn-sm")
  delBtn.classList.add("btn-danger")
  return delBtn
}

// szerkesztés gomb létrehozása eseménnyel
function createEditButton(developerID) {
  let editBtn = document.createElement("button")
  editBtn.developerID = developerID
  editBtn.addEventListener("click", selectDeveloperForEdit)
  editBtn.innerText = "E"
  editBtn.classList.add("btn")
  editBtn.classList.add("btn-sm")
  editBtn.classList.add("btn-warning")
  editBtn.classList.add("ms-2")
  return editBtn
}

// szerkesztésre kijelölése adott developer entitásnak
function selectDeveloperForEdit(event) {
  let i = 0
  let developerToEdit = developers.find(x => x.id === event.target.developerID)

  document.querySelector("#idInput").value = developerToEdit.id
  document.querySelector("#nameInput").value = developerToEdit.name
  document.querySelector("#imageInput").value = developerToEdit.image
  document.querySelector("#ageInput").value = developerToEdit.age
  document.querySelector("#jobInput").value = developerToEdit.job
  document.querySelector("#salaryInput").value = developerToEdit.salary
  document.querySelector("#emailInput").value = developerToEdit.email
  document.querySelector("#skillsInput").value = developerToEdit.skills
}

// meglévő developer entitás szerkesztése
function editDeveloper() {
  let id = document.querySelector("#idInput").value
  let name = document.querySelector("#nameInput").value
  let image = document.querySelector("#imageInput").value
  let age = document.querySelector("#ageInput").value
  let job = document.querySelector("#jobInput").value
  let salary = document.querySelector("#salaryInput").value
  let email = document.querySelector("#emailInput").value
  let skills = document.querySelector("#skillsInput").value

  let developerToSave = {
    id: id,
    image: image,
    name: name,
    age: age,
    job: job,
    salary: Number(salary),
    email: email,
    skills: skills.split(",")
  }

  fetch("https://api.siposm.hu/updateDeveloper", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(developerToSave)
  })
    .then((response) => {
      if (!response.ok) {
        console.log("Error")
      } else {
        return response.json()
      }
    })
    .then((data) => {
      console.log("API response: ", data)
      resetInputs()
      main() // teljes újratöltés
    })
}

// meglévő developer entitás törlése
function deleteDeveloper(event) {
  let developerToDelete = developers.find(x => x.id === event.target.developerID)

  // api call
  fetch("https://api.siposm.hu/deleteDeveloper", {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(developerToDelete)
  })
    .then((response) => {
      if (!response.ok) {
        console.log("Error")
      } else {
        return response.json()
      }
    })
    .then((data) => {
      console.log("API response: ", data)
      resetInputs()
      main() // teljes újratöltés
    })
}

// új developer entitás létrehozása
function addDeveloper() {
  let name = document.querySelector("#nameInput").value
  let image = document.querySelector("#imageInput").value
  let age = document.querySelector("#ageInput").value
  let role = document.querySelector("#jobInput").value
  let salary = document.querySelector("#salaryInput").value
  let email = document.querySelector("#emailInput").value
  let skills = document.querySelector("#skillsInput").value

  let newDev = {
    id: generateGuid(),
		image: image,
		name: name,
    age: age,
    role: role,
    salary: Number(salary),
    email: email,
    skills: skills.split(",")
  }

  fetch("https://api.siposm.hu/createDeveloper", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newDev)
  })
    .then((response) => {
      if (!response.ok) {
        console.log("Error")
      } else {
        return response.json()
      }
    })
    .then((data) => {
      console.log("API response: ", data)
      resetInputs()
      main() // teljes újratöltés
    })
}

function resetInputs() {
  document.querySelector("#idInput").value = ""
  document.querySelector("#imageInput").value = ""
  document.querySelector("#nameInput").value = ""
  document.querySelector("#ageInput").value = ""
  document.querySelector("#jobInput").value = ""
  document.querySelector("#salaryInput").value = ""
  document.querySelector("#emailInput").value = ""
  document.querySelector("#skillsInput").value = ""
}

function generateGuid() {
	return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
		/[xy]/g,
		(c) => {
			const r = (Math.random() * 16) | 0
			const v = c === "x" ? r : (r & 0x3) | 0x8

			return v.toString(16)
		}
	)
}

// =========================================================================================================
// STATISTICS

// statisztikai rész vezérlése
function calculateStatistics(array) {
  let avg = averageSalary(array)
  let mostEarningDev = findMostEarningDeveloper(array)
  let mostSkilledDev = mostSkilledDeveloper(array)

  document.querySelector("#stats-avg-salary").innerHTML = avg + " HUF"
  document.querySelector("#stats-most-earning").innerHTML = mostEarningDev.name
  document.querySelector("#stats-most-skilled").innerHTML = mostSkilledDev.name
}

// átlagos kereset a fejlesztők között
function averageSalary(array) {
  let avg = array.reduce((acc,dev) => acc + dev.salary, 0) / array.length
  return Math.round(avg)
}

// legjobban kereső fejlesztő
function findMostEarningDeveloper(array) {
  return array.toSorted((a, b) => b.salary - a.salary)[0]
}

// legtöbb skillel rendelkező fejlesztő
function mostSkilledDeveloper(array) {
	return array.reduce((max,dev) => dev.skills.length > max.skills.length ? dev : max)
}
