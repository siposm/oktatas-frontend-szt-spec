import { Guid } from "guid-typescript"

export class Developer {
    id: string = Guid.create().toString()
    name: string = ""
    email: string = ""
    job: string = ""
    age: number | null = null
    salary: number | null = null
    image: string = "https://randomuser.me/api/portraits/men/2.jpg"
    skills: string[] = []

    formatSalary(): void {
        // todo házi
    }
}