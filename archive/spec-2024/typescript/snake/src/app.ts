import { GameLogic } from "./logic";

const logic: GameLogic = new GameLogic()
logic.display()

window.addEventListener("keydown", (e) => {
    logic.move(e)
})