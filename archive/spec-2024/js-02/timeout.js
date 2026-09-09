
console.log("start")

window.setTimeout(() => {
    console.log("sziasztok")
}, 5000) // 5 msp

window.setTimeout(log, 3000) // 3 msp

function log() { console.log("sziasztok") }