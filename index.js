//need to account for NaN

const containerEl = document.querySelector('body')
// const add = document.querySelector('#addition')
// const subtract = document.querySelector('#subtraction')
// const multiply = document.querySelector('#multiplication')
// const divide = document.querySelector('#division')
let num1El = document.getElementById('num1')
let num2El = document.getElementById('num2')
let result = document.querySelector('#result')
const resetButton = document.getElementById('reset')


// let resultEl = document.getElementById('result')
let answer = 0
result.innerText = 0
// function reset() {
//     console.log("clicked")
//     result.innerText = 0
// }

containerEl.addEventListener('click', function (e) {
    // console.log("clicked")
    // console.log(e.target.dataset.addNumbers)
    let num1 = parseInt(num1El.value)
    let num2 = parseInt(num2El.value)
    const target = e.target
    const addNums = target.dataset.addNumbers
    const subtractNums = target.dataset.subtractNumbers
    const multiplyNums = target.dataset.multiplyNumbers
    const divideNums = target.dataset.divideNumbers
    const moduloNums = target.dataset.moduloNumbers
console.log(num1)
    if (addNums) {
        answer = num1 + num2
        result.innerText = answer
    } else if (subtractNums) {
        answer = num1 - num2
        result.innerText = answer
    } else if (multiplyNums) {
        answer = num1 * num2
        result.innerText = answer
    } else if (divideNums) {
        answer = num1 / num2
        result.innerText = parseFloat(answer.toFixed(1))
    } else if (moduloNums) {
        answer = num1 % num2
        result.innerText = answer
     } 
    //  else if (resetButton) {
    //     answer = 0
    //     result.innerText = answer
    // }
    resetButton.addEventListener('click', resetBtn)
} )

function resetBtn() {

    answer = 0
    result.innerText = answer
    num1El.value = ""
    num2El.value = ""
    num1El.innerText = num1El
    num2El.innerText = num2El
}
//refactored: removed onclick from HTML
// function compute() {
//     // const num1 = parseInt(num1El.value)
//     // const num2 = parseInt(num2El.value)
//     if (add) {
//         console.log("add")
//         answer = num1 + num2
//         resultEl.innerText = answer
//     } else if (subtract) {
//         console.log("subtract")
//         answer = num1 - num2
//         resultEl.innerText = answer
//         console.log(answer)
//     }
// }

// function add() {
//     // console.log("add clicked")
//     console.log(num1El.value)
//     console.log(num2El.value)
//     const num1 = parseInt(num1El.value)
//     const num2 = parseInt(num2El.value)
//     // console.log(num1 + num2)
//     answer = num1 + num2
//     resultEl.innerText = answer
// }

// function subtract() {
//     // console.log("subtract clicked")
//     // console.log(num1El.value)
//     // console.log(num2El.value)
//     const num1 = parseInt(num1El.value)
//     const num2 = parseInt(num2El.value)
//     // console.log(num1 - num2)
//     answer = num1 - num2
//     resultEl.innerText = answer
// }

// function multiply() {
//     // console.log("multiply clicked")
//     // console.log(num1El.value)
//     // console.log(num2El.value)
//     const num1 = parseInt(num1El.value)
//     const num2 = parseInt(num2El.value)
//     // console.log(num1 * num2)
//     answer = num1 * num2
//     resultEl.innerText = answer
// }

// function divide() {
//     // console.log("divide clicked")
//     // console.log(num1El.value)
//     // console.log(num2El.value)
//     const num1 = parseInt(num1El.value)
//     const num2 = parseInt(num2El.value)
//     // console.log(num1 / num2)
//     answer = num1 / num2
//     resultEl.innerText = answer
//  }