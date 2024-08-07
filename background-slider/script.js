const body = document.body
const slides = document.querySelectorAll(".slide")
const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')

let activeslide = 0

rightBtn.addEventListener('click', () => {
    activeslide++

    if(activeslide > slides.length -1) {
        activeslide = 0
    }
    setBgToBody()
    setActiveSlide()
})

setBgToBody()

function setActiveSlide() {
    body.style.backgroundImage = slides[activeslide].style.backgroundImage
}
function setActiveSlide() {
    slides.forEach((slides) => slides.classList.remove('active'))

    slides[activeslide].classList.add('active')
}