export class Renderer {
    setup(gameAreaSize) {
        let root = document.querySelector("body");
        root.style.height = gameAreaSize + "px";
        root.style.width = gameAreaSize + "px";
    }
    render(snake, characterSize) {
        let root = document.querySelector("body");
        root.innerHTML = "";
        for (let i = 0; i < snake.blocks.length; i++) {
            let div = document.createElement("div");
            div.style.height = characterSize + "px";
            div.style.width = characterSize + "px";
            div.style.border = "1px solid black";
            div.style.borderRadius = characterSize / 10 + "px";
            div.style.backgroundColor = this.getColor(i);
            div.style.position = "absolute";
            div.style.top = snake.blocks[i].positionX.toString() + "px";
            div.style.left = snake.blocks[i].positionY.toString() + "px";
            if (i === 0) {
                div.style.backgroundColor = "yellow";
            }
            root.appendChild(div);
        }
    }
    getColor(index) {
        let colors = [
            "#1a0000",
            "#210000",
            "#290000",
            "#310000",
            "#390000",
            "#410000",
            "#490000",
            "#510000",
            "#590000",
            "#610000",
            "#690000",
            "#710000",
            "#780000",
            "#800000",
            "#880000",
            "#900000",
            "#980000",
            "#a00000",
            "#a80000",
            "#b00000",
            "#b80000",
            "#c00000",
            "#c80000",
            "#d00000",
            "#d70000",
            "#df0000",
            "#e70000",
            "#ef0000",
            "#f70000",
            "#ff0000"
        ];
        if (index >= colors.length)
            return colors.reverse()[colors.length - 1];
        return colors.reverse()[index];
    }
}
