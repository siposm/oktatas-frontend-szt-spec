let a = "110"

console.log(a)

let names = ["alma","szilvia","ferec"]

names.forEach(x => console.log(x))

class Student {
    name
    credit
    constructor(name) {
        this.name = name
        this.credit = 0
    }
}

let s1 = new Student("Ferenc A Hallgató")

console.log(s1)

class FrontendStudent extends Student {
    subject
}

let s2 = new FrontendStudent("Új hallgató")
console.log(s2)