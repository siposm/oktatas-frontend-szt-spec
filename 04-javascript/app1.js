"use strict"

let ages = [20, 55, 65, 33, 30, 22, 25, 30, 18, 18]
let jobs = [true, false, false, false, true, true, false, true, true, false]
let names = [
  "Lisa Williams",
  "Liam Patel",
  "Olivia Khan",
  "Noah Smith",
  "Ava Brown",
  "Elijah Johnson",
  "Isabella Lee",
  "James Martinez",
  "Mia Anderson",
  "William Thompson"
]

function display(namesArray, agesArray, jobsArray) {
  if (namesArray.length !== agesArray.length &&
		namesArray.length !== jobsArray.length) {
    console.log("ERROR - array sizes must match!")
  } else {
    for (let i = 0; i < namesArray.length; i++) {
      let status = ""
      if (jobsArray[i]) {
        status = "Teljes állás"
      } else {
        status = "Fél állás"
      }
      console.log(namesArray[i] + " - (" + agesArray[i] + ") - " + status)
    }
  }
}

function decideIf(array, limit) {
	for (let i = 0; i < array.length; i++) {
		if (array[i] < limit) {
			return true
		}
	}
	return false
}

function countIf(array, limit) {
	let count = 0
	for (let i = 0; i < array.length; i++) {
		if (array[i] > limit) {
			count++
		}
	}
	return count
}

function sumUp(array) {
	let sum = 0
	for (let i = 0; i < array.length; i++) {
		sum += array[i]
	}
	return sum
}

function selectByLimit(array, limit) {
	// array[i] < limit -> A array
	// array[i] = limit -> A array
	// array[i] > limit -> B array

	let arrayA = []
	let arrayB = []

	for (let i = 0; i < array.length; i++) {
		if (array[i] <= limit) {
			arrayA.push(array[i])
		} else {
			arrayB.push(array[i])
		}
	}

	return [arrayA, arrayB]
	// return {arrayA, arrayB}
}

display(names, ages, jobs)
console.log(selectByLimit(ages, 20))
