export class Student {
    id: string = ""
    name: string = ""
    email: string = ""

    constructor(id: string = "", name: string = "", email: string = "") {
        id === "" ? this.id = this.generateId() : this.id = id
        this.name = name
        this.email = email
    }

    generateId(): string {
        return Math.random().toString(36).substring(2, 10);
    }
}