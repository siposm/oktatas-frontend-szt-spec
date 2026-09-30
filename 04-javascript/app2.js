"use strict"
console.clear()

let workers = [
  "John Doe#Fejlesztő#5000#john.doe@google.com",
  "Jane Smith#Projektvezető#6000#jane.smith@ex.m",
  "",
  "David Johnson#Tesztelő#4500#david.johnson@gmail.com",
  "Emily Williams#Fejlesztő#4000#emily.williamsexample.com",
  "Michael Brown#Rendszergazda#5500#michael.brown@facebookcom",
  "",
  "Sarah Taylor#Területi Vezető#7000#sarah.taylor@facebook.com",
  "Christopher Miller#Analitikus#5200#christopher.miller@apple.com"
]

// NÉV:         John Doe
// FOGLALKOZÁS: Fejlesztő
// KERESET:     5000
// EMAIL:       john.doe@example.com

function display(array) {
	for (let i = 0; i < array.length; i++) {
		if (array[i] !== "") {
			let splitted = array[i].split("#")
			console.log("NÉV:\t" + splitted[0])
			console.log("FOGL:\t" + splitted[1])
			console.log("KER:\t" + splitted[2] + " HUF")
			console.log("EMAIL:\t" + emailValidation(splitted[3]))
			console.log("\n")
		}
	}
}

function emailValidation(email) {
	if (email.includes("@")) {
		if (email.split("@")[1].includes(".")) {
			if (email.split("@")[0].length > 4 && email.split("@")[1].length > 4) {
				return email
			}
		}
	}
	return "::NOT VALID EMAIL::"
}

function calcAvgSalaryFor(array) {
	let sum = 0
	let count = 0
	for (let i = 0; i < array.length; i++) {
		if (array[i] !== "") {
			sum += parseInt(array[i].split("#")[2])
			count++
		}
	}
	return Math.round(sum / count)
}

function calcAvgSalaryForeach(array) {
	let sum = 0
	let count = 0
	for (const element of array) {
		if (element !== "") {
			sum += parseInt(element.split("#")[2])
			count++
		}
	}
	return Math.round(sum / count)
}

display(workers)
console.log(calcAvgSalaryFor(workers))
console.log(calcAvgSalaryForeach(workers))
