// DOM Selection

// inputs
let inputDay = document.getElementById('data-day')
let inputMonth = document.getElementById('data-month')
let inputYear = document.getElementById('data-year')
// labels
let labelDay = document.getElementById('label-day')
let labelMonth = document.getElementById('label-month')
let labelYear = document.getElementById('label-year')
// alert span
let alertDay = document.getElementById('alert-day')
let alertMonth = document.getElementById('alert-month')
let alertYear = document.getElementById('alert-year')
// age output
let ageDay = document.getElementById('age-day')
let ageMonth = document.getElementById('age-month')
let ageYear = document.getElementById('age-year')
// button
let button = document.querySelector('.card-button')
// Date Object
const date = new Date()
let localDay = date.getDate()
let localMonth = date.getMonth() + 1
let localYear = date.getFullYear()

// DOM Selection Finished

button.addEventListener('click', () => {
    let userDay = parseInt(inputDay.value)
    let userMonth = parseInt(inputMonth.value)
    let userYear = parseInt(inputYear.value)
    numberValidation(userDay, userMonth, userYear)
    dayValidation(userDay, userMonth, userYear)
    emptyValidation()
    ageCalc(userDay, userMonth, userYear)
})

function errorState(label, input) {
    label.classList.add('card-data__label--error')
    input.classList.add('card-data__input--error')
}

function clearAll() {
    alertDay.textContent = ""
    alertMonth.textContent = ""
    alertYear.textContent = ""

    labelDay.classList.remove('card-data__label--error')
    labelMonth.classList.remove('card-data__label--error')
    labelYear.classList.remove('card-data__label--error')

    inputDay.classList.remove('card-data__input--error')
    inputMonth.classList.remove('card-data__input--error')
    inputYear.classList.remove('card-data__input--error')

    ageDay.style.letterSpacing = ".8rem"
    ageMonth.style.letterSpacing = ".8rem"
    ageYear.style.letterSpacing = ".8rem"
    ageDay.textContent = "--"
    ageMonth.textContent = "--"
    ageYear.textContent = "--"
}
  
function emptyValidation() {
    
    if (inputDay.value === "") {
        alertDay.textContent = "This field is required"
        errorState(labelDay, inputDay)
        setTimeout(clearAll, 2000)
    }

    if (inputMonth.value === "") {
        alertMonth.textContent = "This field is required"
        errorState(labelMonth, inputMonth)
        setTimeout(clearAll, 2000)
    }
    
    if (inputYear.value === "") {
        alertYear.textContent = "This field is required"
        errorState(labelYear, inputYear)
        setTimeout(clearAll, 3000)
    }
}

function numberValidation(day, month, year) {

    if (year === localYear) {
        if (month > localMonth && month <= 12) {
             alertDay.textContent = "Must be in the past"
             alertMonth.textContent = "Must be in the past"
             alertYear.textContent = "Must be in the past"
 
             errorState(labelDay, inputDay)
             errorState(labelMonth, inputMonth)
             errorState(labelYear, inputYear)
 
             setTimeout(clearAll, 2000)
        } else if (month === localMonth) {
            if (day >= localDay && day <= 31) {
                alertDay.textContent = "Must be in the past"
                alertMonth.textContent = "Must be in the past"
                alertYear.textContent = "Must be in the past"
     
                errorState(labelDay, inputDay)
                errorState(labelMonth, inputMonth)
                errorState(labelYear, inputYear)
    
                setTimeout(clearAll, 2000)
            }
        }
    }
    if (day <= 0 || day > 31) {
        alertDay.textContent = "Must be a valid day"
        errorState(labelDay, inputDay)
        setTimeout(clearAll, 2000)
    }

    if (month <= 0 || month > 12) {
        alertMonth.textContent = "Must be a valid month"
        errorState(labelMonth, inputMonth)
        setTimeout(clearAll, 2000)
    }

    if (year < localYear - 130 || year > localYear) {
        alertYear.textContent = "Invalid year"
        errorState(labelYear, inputYear)
        setTimeout(clearAll, 2000)
    }
}

function dayValidation(day, month, year) {
    let monthTest = month - 1
    let dateValidation = new Date(year, monthTest, day)
    let dayTest = dateValidation.getDate()
    if (dayTest != day) {
        alertDay.textContent = "Must be a valid date"
 
        errorState(labelDay, inputDay)
        errorState(labelMonth, inputMonth)
        errorState(labelYear, inputYear)
 
        setTimeout(clearAll, 2000)
    }
}

function ageCalc(day, month, year) {
    if (labelDay.classList.contains('card-data__label--error') == true || labelMonth.classList.contains('card-data__label--error') == true || labelYear.classList.contains('card-data__label--error') == true) {
        return
    } else {
        let calcMonth = month - 1
        let calcDate = new Date(year, calcMonth, day)

        // getting difference between two dates in days
        const _MS_PER_DAY = 1000 * 60 * 60 * 24;
        const utc1 = Date.UTC(calcDate.getFullYear(), calcDate.getMonth(), calcDate.getDate());
        const utc2 = Date.UTC(date.getFullYear(), date.getMonth(), date.getDate());
        let numberOfDays = Math.floor((utc2 - utc1) / _MS_PER_DAY);

        // converting days difference in years, months and days
        let years = Math.floor(numberOfDays / 365);
        let months = Math.floor(numberOfDays % 365 / 30);
        let days = Math.floor(numberOfDays % 365 % 30);


        ageDay.style.letterSpacing = "0"
        ageMonth.style.letterSpacing = "0"
        ageYear.style.letterSpacing = "0"
        ageDay.textContent = days + " "
        ageMonth.textContent = months + " "
        ageYear.textContent = years + " "

        setTimeout(clearAll, 5000)
    }  
}