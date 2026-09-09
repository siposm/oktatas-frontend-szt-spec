"use strict"

import { Developer } from "./developer.js"

export class Logic {
    
    developers = []
    renderer

    constructor(renderer) {
        this.renderer = renderer
    }

    async loadData() {
        let response = await fetch('https://api.siposm.hu/getDevelopers')
        let data = await response.json()

        for (const iterator of data) {
            let dev = new Developer()
            dev.name = iterator.name
            dev.email = iterator.email
            this.developers.push(dev)
        }
        console.log(this.developers)
    }

    displayData() {
        this.renderer.render(this.developers)
    }
}