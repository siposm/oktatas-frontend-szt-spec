function add(numberA, numberB) {
    return numberA + numberB
}

function sub(numberA, numberB) {
    return numberA - numberB
}

function div(numberA, numberB) {
    if (numberB === 0)
        throw new Error("Division by zero")
    else
        return numberA / numberB
}

export { add, div }

export class Calculator {
    add(a, b) { return a + b }
    sub(a, b) { return a - b }
}