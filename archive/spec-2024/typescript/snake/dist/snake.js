import { Block } from "./block.js";
export class Snake {
    blocks = [];
    constructor(gameAreaSize) {
        this.blocks.push(new Block(gameAreaSize / 2, gameAreaSize / 2));
    }
    grow(characterSize) {
        let lastBlock = this.blocks[this.blocks.length - 1];
        this.blocks.push(new Block(lastBlock.positionX - characterSize, lastBlock.positionY));
    }
    move(direction, gameAreaSize, characterSize, stepSize) {
        let previousX = this.blocks[0].positionX;
        let previousY = this.blocks[0].positionY;
        if (direction === "ArrowUp") {
            if (this.blocks[0].positionX - stepSize >= 0) {
                this.blocks[0].positionX -= stepSize;
            }
            else
                return; // do not move other blocks
        }
        else if (direction === "ArrowDown") {
            if (this.blocks[0].positionX + stepSize <= gameAreaSize - characterSize) {
                this.blocks[0].positionX += stepSize;
            }
            else
                return; // do not move other blocks
        }
        else if (direction === "ArrowLeft") {
            if (this.blocks[0].positionY - stepSize >= 0) {
                this.blocks[0].positionY -= stepSize;
            }
            else
                return; // do not move other blocks
        }
        else if (direction === "ArrowRight") {
            if (this.blocks[0].positionY + stepSize <= gameAreaSize - characterSize) {
                this.blocks[0].positionY += stepSize;
            }
            else
                return; // do not move other blocks
        }
        for (let i = 1; i < this.blocks.length; i++) {
            let currentX = this.blocks[i].positionX;
            let currentY = this.blocks[i].positionY;
            this.blocks[i].positionX = previousX;
            this.blocks[i].positionY = previousY;
            previousX = currentX;
            previousY = currentY;
        }
    }
}
