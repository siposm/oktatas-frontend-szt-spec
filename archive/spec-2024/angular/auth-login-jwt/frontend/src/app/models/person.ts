export class Person {
    id: string = ""
    name: string = ""
    birthyear: number = 0

    constructor(id: string = "", name: string = "", birthyear: number = 0) {
        this.id = id
        this.name = name
        this.birthyear = birthyear
    }
}
