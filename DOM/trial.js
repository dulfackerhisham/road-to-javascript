const red = document.querySelector(".red");
const cyan = document.querySelector(".cyan");
const violet = document.querySelector(".violet");
const orange = document.querySelector(".orange");
const pink = document.querySelector(".pink");

const center = document.querySelector(".center");

// console.log(window.getComputedStyle(red).background)

var getBgColor = (selectedElement) => {
    return window.getComputedStyle(selectedElement).background
}

// var color = getBgColor(pink)

// pink.addEventListener('click', () => {
//     center.style.background = color;
// })

const magicColorChanger = (element, color) => {
    return element.addEventListener('click', () => {
        center.style.background = color;
    })
}

magicColorChanger(red, getBgColor(red))