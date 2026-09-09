export class Movie {
    title: string = ""
    year: number = 0
    intro: string = ""

    constructor(title: string = "", year: number = 0, intro: string = "") {
        this.title = title
        this.year = year
        this.intro = intro
    }
}
