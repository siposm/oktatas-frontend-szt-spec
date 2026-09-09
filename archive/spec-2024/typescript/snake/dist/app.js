import { GameLogic } from "./logic.js";
const logic = new GameLogic();
logic.display();
window.addEventListener("keydown", (e) => {
    logic.move(e);
});
