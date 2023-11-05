// Создать кнопку и красный квадрат с размерами 200х200px. 
// При клике на кнопку менять у квадрата цвет заднего фона 
// на зеленый и уменьшать его до размеров 100х100px.

const buttonGreen = document.querySelector(".green")
const redSquare = document.querySelector(".red-square")
buttonGreen.addEventListener("click", function() {
    redSquare.classList.add("green-square")
})

// Создать кнопку и розовый квадрат с размерами 200х200px. 
// При клике на кнопку менять цвет на синий и выводить в консоль 
// обновленный цвет квадрата.
const pinkSquare = document.querySelector(".pink-square")
const buttonBlue = document.querySelector(".blue")
buttonBlue.addEventListener("click", function(){
    const blueColor = "blue"
    pinkSquare.style.backgroundColor = blueColor
    console.log(`Теперь квадрат ${blueColor}`)
})


// Создать кнопку и квадрат с размерами 150х150px. При клике на 
// кнопку увеличивать высоту и ширину квадрата на 20px.

const square = document.querySelector(".square")
const buttonSizeUp = document.querySelector(".size-Up")
buttonSizeUp.addEventListener("click", function(){
    square.classList.toggle("new-Size")
})

// Создать кнопку и div с классом root. При клике на кнопку в div 
// создается параграф синего цвета. Текст параграфа произвольный.
// Создать кнопку и div с классом root. При клике на кнопку в div 
// создаются по очереди параграфы синего и зеленого цветов. 
// Первый цвет синий.


const blueP = document.querySelector(".blue-P")
const div = document.querySelector(".root") 

blueP.addEventListener("click", function(){
    const paragraphBlue = document.createElement("p")
    const paragraphGreen = document.createElement("p")
    paragraphBlue.innerText = "Hello User"
    paragraphGreen.innerText = "Hello World" 
    div.append(paragraphBlue)
    div.append(paragraphGreen)
    paragraphBlue.style.backgroundColor = "blue"
    paragraphBlue.classList.add("white-text")
    paragraphGreen.style.backgroundColor = "green"
    paragraphGreen.classList.add("white-text")
})
//paragraph.innerText = "Hello User" 
//div.append(paragraph)




