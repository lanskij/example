const counters = document.querySelectorAll(".counter")

counters.forEach(elem => {
    elem.innerText = "0"

    const updateCounter = () => {
        let target = +elem.getAttribute('data-target')
        let count = +elem.innerText
        let increment = target / 200

        if(count < target) {
            elem.innerText = `${Math.ceil(count + increment)}`
            setTimeout(updateCounter, 10)
        } else {
            elem.innerText = target
        }
    }
    updateCounter()
})