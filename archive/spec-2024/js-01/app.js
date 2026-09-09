"use strict"

let a = "true"
console.log(typeof a)
a = false
console.log(typeof a)
a = 987
console.log(typeof a)


let names = ["iNIT KEZDŐ ÉRTÉK"] // new Array()

names.unshift("legelso ertek")
names.push("Lajos")
names.push("Gizi")
names.push("Tamara")
names.push("Bettina")
names.push("Ferenc")

console.log(names)

console.log(names[0])
console.log(names[names.length - 1])

let mixed = ["string", false, 87, "asd", null, undefined]

console.log(mixed)

console.log(mixed[100])

let age = "50"

if (age === 50) {
    // egyenlő: == vs ===
    // nem egyenlő : !==
    console.log("az életkor megegyezik")
} else {
    console.log("nem egyezik meg")
}

for (let i = 0; i < names.length; i++) {
    console.log("-> " + names[i])
}

for (const element of names) {
    console.log(" => " + element)
}

names.forEach(element => {
    console.log("~> " + element)
})

let obj = {
    name: "lajos",
    age: 35,
    salary: 1500000
}

let people = [
    obj,
    {
        name: "gizi",
        age: 20,
        salary: 340000
    }
]

people[1].newProperty = "sziasztok"

console.log(people)


class Student {
    name
    age
    scholarship
    
    constructor(name, age) {
        this.name = name
        this.age = age
        this.scholarship = 60000
    }

    /* function */ hello() {
        return "hello my name is " + this.name
    }
}

let studentObject = new Student("Student-1", 19)
studentObject.scholarshipp = 70000

console.log(obj)
console.log("\n\n")
console.table(studentObject)

studentObject.a = false
studentObject.b = "szöveg"
studentObject.c = "valami"

for (const key in studentObject) {
    if (Object.prototype.hasOwnProperty.call(studentObject, key)) {
        const element = studentObject[key];
        console.log(key + ": " + element)
    }
}


console.log(studentObject.hello())

function alma() {
    console.log("alma")
}

