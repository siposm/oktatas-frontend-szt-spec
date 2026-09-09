"use strict"

class Student {
    name
    age
    scholarship
    subjects

    constructor(name = "", age = 18) {
        this.name = name
        this.age = age
        this.scholarship = 50000
        this.subjects = [
            { credit: 2, name: "Maths 1." },
            { credit: 5, name: "PE 1." },
            { credit: 20, name: "Programming 1." },
        ]
    }
}

let students = [
    new Student("Gizi", 20),
    new Student("Tamás"),
    new Student("John", 33),
    new Student("Betti"),
    new Student("Lajos", 19),
]

display(students)
console.log(averageAge(students))

function display(students) {
    for (const stud of students) {
        console.log(stud.name.toUpperCase())
        console.log("  " + stud.age + " yo")
        console.log("  " + stud.scholarship + " HUF")
        for (const subject of stud.subjects) {
            console.log("    " + subject.name + "(" + subject.credit + ")")
        }
    }
}

function averageAge(students) {
    let sum = 0
    students.forEach(element => {
        sum += element.age
    })
    return sum / students.length
}

