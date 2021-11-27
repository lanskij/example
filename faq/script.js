const toggles = document.querySelectorAll('.faq-toggle')




toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        toggle.parentNode.children[1].classList.toggle('active')
        toggle.parentNode.classList.toggle('active')
    })
})

