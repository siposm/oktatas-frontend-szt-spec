"use strict"
console.clear()

let developers = [
  {
    name: "John Doe",
    role: "Fejlesztő",
    salary: 5000,
    email: "john.doe@example.com",
    skills: ["JavaScript", "HTML", "CSS", "Angular", "Sass CSS"]
  },
  {
    name: "Jane Smith",
    role: "Projektvezető",
    salary: 6000,
    email: "jane.smith@example.com",
    skills: ["Team leadership", "SCRUM", "Soft skills"]
  },
  {
    name: "David Johnson",
    role: "Tesztelő",
    salary: 4500,
    email: "david.johnson@example.com",
    skills: ["nUnit", "Moq framework", "E2E testing"]
  },
  {
    name: "Emily Williams",
    role: "Fejlesztő",
    salary: 4000,
    email: "emily.williams@example.com",
    skills: [
      "React",
      "Node.js",
      "Git",
      "Less CSS",
      "Docker",
      "C#",
      "JavaScript"
    ]
  },
  {
    name: "Michael Brown",
    role: "Rendszergazda",
    salary: 5500,
    email: "michael.brown@example.com",
    skills: ["Linux", "AWS", "Docker", "Serverless architecture"]
  },
  {
    name: "Sarah Taylor",
    role: "Területi Vezető",
    salary: 7000,
    email: "sarah.taylor@example.com",
    skills: ["Team management", "Client communication", "Project planning"]
  },
  {
    name: "Christopher Miller",
    role: "Analitikus",
    salary: 5200,
    email: "christopher.miller@example.com",
    skills: ["Python", "SQL", "Tableau"]
  }
]

function display(array) {
  for (let i = 0; i < array.length; i++) {
    console.log("\n* * * * * * * * * * * * * *\n\n")

    console.log(array[i].name.toUpperCase())
    console.log("\t ROLE: " + array[i].role)
    console.log("\t SAL: " + array[i].salary + " HUF")
    console.log("\t MAIL: " + array[i].email)
    console.log("\t SKILLS: ")

    for (let j = 0; j < array[i].skills.length; j++) {
      console.log("\t\t > " + array[i].skills[j])
    }
  }
}

function mostSkilledDev(array) {
	let max = 0
	for (let i = 1; i < array.length; i++) {
		if (array[i].skills.length > array[max].skills.length) {
			max = i
		}
	}
	return max
}

function selectDevelopersForSpecificSkill(array, neededSkill) {
  let selected = []
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].skills.length; j++) {
      if (array[i].skills[j].toUpperCase() === neededSkill.toUpperCase()) {
        selected.push(array[i])
      }
    }
  }
  return selected
}

function deleteDeveloperByName(array) {
  let name = prompt("Name of the developer:")
  for (let i = 0; i < array.length; i++) {
    if (array[i].name.toUpperCase() === name.toUpperCase()) {
      array.splice(i, 1)
    }
  }
}

function addNewSkillToDev(array) {
  let name = prompt("Name of the developer:")
  let skill = prompt("New skill:")
  for (let i = 0; i < array.length; i++) {
    if (array[i].name.toUpperCase() === name.toUpperCase()) {
      array[i].skills.unshift(skill)
    }
  }
}

deleteDeveloperByName(developers)
display(developers)
console.log(developers[mostSkilledDev(developers)])

