const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBoxes)

// remove this line here if don't want top content to show before scroll happens
checkBoxes()

function checkBoxes() {
    const triggerBottom = window.innerHeight / 5 * 4

    boxes.forEach(box => {
        // getBoundingClientRect() - a method that returns a DOMRect on=bject providing info about the size 
        // of an element & it position relative to the viewport

        // DOMRect - describes the size and position of a rectangle
        const boxTop = box.getBoundingClientRect().top
        if (boxTop < triggerBottom) {
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    })
}