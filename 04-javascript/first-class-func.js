"use-strict"

function processArray(array, process) {
  for (let i = 0; i < array.length; i++) {
    array[i] = process(array[i])
  }
}
function square(param) {
  return param * param
}

let items = [2, 10, 5, 3, 9, 11]
console.log(items)
// processArray(items, square)
processArray(items, (x) => x * x)
console.log(items)

/* --------------------------------------- */

function createGreeter(greeting) {
  return function (name) {
    return greeting + " " + name
  }
}
let greeter = createGreeter("Hello")
let str = greeter("Alice")
console.log(str)

/* --------------------------------------- */

function message(msg) {
  console.log(msg)
}

function processing(notify) {
  console.log("waiting for ...")
  console.log("...")
  console.log("...")
  console.log("...ready")

  notify("we are ready") // CALLBACK!!!!
}

processing(message)

/* --------------------------------------- */

function linearSearch(array, P) {
  let i = 0
  while (i < array.length && !P(array[i])) {
    i++
  }
  if (i < array.length) {
    // van ilyen elem
    // visszadni: van ÉS melyik ez az elem
    return [true, i]
  } else {
    // nincs ilyen elem
    // visszaadni: nincs ilyen elem
    return [false]
  }
}

function propChecker1(param) { return param > 100 }
function propChecker2(param) { return param > 800 }

const numbers = [1, 3, 4, 5, 10, 900]

console.log(linearSearch(numbers, propChecker1))
console.log(linearSearch(numbers, propChecker2))
console.log(linearSearch(items, function(param) {
	return param > 50
}))
console.log(linearSearch(items, param => param > 50 ))