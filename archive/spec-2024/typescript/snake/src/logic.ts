import { Renderer } from "./renderer";
import { Snake } from "./snake";

export class GameLogic {
    private gameAreaSize: number = 600
    private characterSize: number = 20
    private stepSize: number = this.characterSize
    private renderer: Renderer
    private snake: Snake

    constructor() {
        this.renderer = new Renderer()
        this.renderer.setup(this.gameAreaSize)
        this.snake = new Snake(this.gameAreaSize)
    }

    display(): void {
        this.renderer.render(this.snake, this.characterSize)
    }

    move(e: KeyboardEvent): void {
        if (e.key === " ") {
            this.snake.grow(this.characterSize)
        }
        if (e.key === "ArrowUp") {
            this.snake.move("ArrowUp", this.gameAreaSize, this.characterSize, this.stepSize)
        } else if (e.key === "ArrowDown") {
            this.snake.move("ArrowDown", this.gameAreaSize, this.characterSize, this.stepSize)
        } else if (e.key === "ArrowLeft") {
            this.snake.move("ArrowLeft", this.gameAreaSize, this.characterSize, this.stepSize)
        } else if (e.key === "ArrowRight") {
            this.snake.move("ArrowRight", this.gameAreaSize, this.characterSize, this.stepSize)
        }

        this.display()
    }
}