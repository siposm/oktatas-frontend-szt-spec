import { Renderer } from "./renderer.js";
import { Snake } from "./snake.js";
export class GameLogic {
    gameAreaSize = 600;
    characterSize = 20;
    stepSize = this.characterSize;
    renderer;
    snake;
    constructor() {
        this.renderer = new Renderer();
        this.renderer.setup(this.gameAreaSize);
        this.snake = new Snake(this.gameAreaSize);
    }
    display() {
        this.renderer.render(this.snake, this.characterSize);
    }
    move(e) {
        if (e.key === " ") {
            this.snake.grow(this.characterSize);
        }
        if (e.key === "ArrowUp") {
            this.snake.move("ArrowUp", this.gameAreaSize, this.characterSize, this.stepSize);
        }
        else if (e.key === "ArrowDown") {
            this.snake.move("ArrowDown", this.gameAreaSize, this.characterSize, this.stepSize);
        }
        else if (e.key === "ArrowLeft") {
            this.snake.move("ArrowLeft", this.gameAreaSize, this.characterSize, this.stepSize);
        }
        else if (e.key === "ArrowRight") {
            this.snake.move("ArrowRight", this.gameAreaSize, this.characterSize, this.stepSize);
        }
        this.display();
    }
}
