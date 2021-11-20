const body = document.body

const slides = document.querySelectorAll('.slide')

const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')

let activeSliade = 0

rightBtn.addEventListener('click', () => {
    activeSliade++
    if (activeSliade > slides.length - 1) {
        activeSliade = 0
    }
    setActiveSlide()
    setBgToBody()
    console.log(activeSliade)
})

leftBtn.addEventListener('click', () => {
    activeSliade--
    if (activeSliade < 0) {
        activeSliade = slides.length - 1
    }
    setActiveSlide()
    setBgToBody()
    console.log(activeSliade)
})

function setActiveSlide() {
    slides.forEach(slide => slide.classList.remove('active'));

    slides[activeSliade].classList.add('active');
}

setBgToBody()

function setBgToBody() {
    body.style.backgroundImage = slides[activeSliade].style.backgroundImage
}