console.log(`oh boy it works`)
//COUNTER
// below are the button elements
const minusBtn = document.querySelector('#minus-btn')
const resetBtn = document.querySelector('#reset-btn')
const plusBtn = document.querySelector('#plus-btn')
// console.log(minusBtn, resetBtn, plusBtn)
const counter = document.querySelector('#counter')

// below is my logic


let count = 0
//
const increase = () => {
    count++ 
    counter.textContent = count
    //console.log(count)
}
//
const decrease = () => {
    count--
    counter.textContent = count
    //console.log(count)
}
//
const reset = () => {
    count = 0
    counter.textContent = count
    //console.log(count)
}
//below are my callback functions

minusBtn.addEventListener('click', decrease)
resetBtn.addEventListener('click', reset)
plusBtn.addEventListener('click', increase)

//THEMES
const themeBtns = document.querySelectorAll('.theme-buttons')
console.log(themeBtns)

const selectTheme = (e) => {
    console.log(e)
    const theme = e.target.textContent
    //console.log(theme)
    document.querySelector('body').className = theme
    document.querySelector('main').className = theme
} 

for (i = 0; i < themeBtns.length; i++){
    themeBtns[i].addEventListener('click', selectTheme)
}


