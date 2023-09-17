// DOM Elements

let inputBill = document.querySelector('#bill')
let gridTips = Array.from(document.querySelectorAll('.card-leftside-table__item')).slice(0, -1)
let gridCustom = document.querySelector("#custom")
let inputPeople = document.querySelector('#people')
let outputTip = document.querySelector('.card-rightside-top__value')
let outputTotal = document.querySelector('.card-rightside-middle__value')
let resetBtn = document.querySelector('.card-rightside-bottom__btn')

// Isolated Functions

function clickedTip() {
    let clickedTip = ''

    gridTips.forEach((tip) => {
        if(tip.classList.contains('table-item-state--active')) {
            clickedTip = tip.innerText
        } else if (!tip.classList.contains('table-item-state--active') && gridCustom.value != '') {
            clickedTip = gridCustom.value
        }
    })

    switch(clickedTip) {
        case '5%':
            clickedTip = 5 / 100 + 1
            break
        case '10%':
            clickedTip = 10 / 100 + 1
            break
        case '15%':
            clickedTip = 15 / 100 + 1
            break
        case '25%':
            clickedTip = 25 / 100 + 1
            break
        case '50%':
            clickedTip = 50 / 100 + 1
            break
        case '':
            clickedTip = 1
            break
        default:
            clickedTip = clickedTip / 100 + 1
            break
    }

    return clickedTip
}

function calcTotal() {
    let bill = inputBill.valueAsNumber
    let people = inputPeople.valueAsNumber
    let selectedTip = clickedTip()
    let billAndTip = bill * selectedTip
    let billTipPeople = (bill * selectedTip) / people

    if(inputPeople.value <= 0) {
        return billAndTip.toFixed(2)
    } else {
        return billTipPeople.toFixed(2)
    }
}

function getTipPerPeople() {
    let bill = inputBill.valueAsNumber
    let people = inputPeople.valueAsNumber
    let selectedTip = clickedTip()
    let tip = bill * (selectedTip - 1)
    let tipPerPeople = tip / people

    return tipPerPeople.toFixed(2)
}

function totalOnScreen(total, tipPerPeople) {    
    if(inputBill.value <= 0) {
        outputTotal.textContent = '$0.00'
    } else if(inputBill.value <= 0 && inputPeople.value <= 0) {
        outputTotal.textContent = '$0.00'
    } else {
        if(inputPeople.value <= 0) {
            outputTip.textContent = '$0.00'
            outputTotal.textContent = `$${total.substr(0, 6)}`
        } else {
            outputTip.textContent = `$${tipPerPeople.substr(0, 6)}`
            outputTotal.textContent = `$${total.substr(0, 6)}`
        }
    }
}

function clearGrid() {
    gridTips.forEach((tip) => {
        tip.classList.remove('table-item-state--active')
    })
}

function changeColor(tip) {
    let classCounter = tip.classList.length

    if(classCounter == 2) {
        tip.classList.remove('table-item-state--active')
    } else {
        clearGrid()
        tip.classList.add('table-item-state--active')
    }
}

// Listeners

inputBill.addEventListener('input', () => {
    let total = calcTotal()
    let tipPerPeople = getTipPerPeople()
    totalOnScreen(total, tipPerPeople)
})

gridTips.forEach((tip) => {
    tip.addEventListener('click', () => {
        changeColor(tip)
        let total = calcTotal()
        let tipPerPeople = getTipPerPeople()
        totalOnScreen(total, tipPerPeople)
    })
})

gridCustom.addEventListener('focus', () => {
    clearGrid()
    let total = calcTotal()
    let tipPerPeople = getTipPerPeople()
    totalOnScreen(total, tipPerPeople)
})

gridCustom.addEventListener('input', () => {
    let total = calcTotal()
    let tipPerPeople = getTipPerPeople()
    totalOnScreen(total, tipPerPeople)
})

inputPeople.addEventListener('input', () => {
    let total = calcTotal()
    let tipPerPeople = getTipPerPeople()
    totalOnScreen(total, tipPerPeople)
})

resetBtn.addEventListener('click', () => {
    clearGrid()
    outputTotal.textContent = '$0.00'
    outputTip.textContent = '$0.00'
    inputBill.value = ''
    gridCustom.value = ''
    inputPeople.value = ''
})
