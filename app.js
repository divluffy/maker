const containerLines = document.querySelector('.container_lines')
const addLine = document.querySelector('.card_Create')

createLIne()
createLIne()
createLIne()
// upload images and full path
const cardsDrag = document.querySelector('.cards_drag')
const input_file = document.querySelector('.input_file')
input_file.addEventListener('input', () => {
    let file = input_file.files
    if (file) {
        for (let i = 0; i < file.length; i++) {
            const reader = new FileReader()
            reader.addEventListener('load', (el) => {
                const result = el.target.result

                let div = document.createElement('div')
                let img = document.createElement('img')
                div.setAttribute('class', 'card_tomove')
                div.setAttribute('draggable', 'true')
                img.setAttribute('src', result)
                div.appendChild(img)
                cardsDrag.appendChild(div)
                moveDrags()
            })
            reader.readAsDataURL(file[i])
        }
    }

})

addLine.addEventListener('click', () => {
    createLIne()
})


function createLIne() {
    let div = document.createElement('div')
    let div2 = document.createElement('div')
    let div3 = document.createElement('div')
    let textarea = document.createElement('textarea')
    textarea.textContent = 'Enter Title'
    div.setAttribute('class', 'bowl_line')
    div2.setAttribute('class', 'title_bowl')
    div2.style.background = randomColor()
    div3.setAttribute('class', 'content_drop')
    div3.setAttribute('draggable', 'true')
    div2.appendChild(textarea)
    div.appendChild(div2)
    div.appendChild(div3)
    containerLines.appendChild(div)
    moveDrags()
}


function moveDrags() {

    const cardTomove = document.querySelectorAll('.card_tomove')
    const contentDrop = document.querySelectorAll('.content_drop')
    let dragActive = null;
    cardTomove.forEach(card => {
        card.addEventListener('dragstart', dragStart)
        card.addEventListener('dragend', dragEnd)
    })


    contentDrop.forEach(line => {
        line.addEventListener('dragover', dragOVer)
        line.addEventListener('dragenter', dragEnter)
        line.addEventListener('drop', dragDrop)
    })


    function dragStart() {
        dragActive = this
    }

    function dragEnd() {
        dragActive = null
    }

    function dragOVer(e) {
        e.preventDefault()// for enable drag
    }

    function dragEnter() {
        this.parentElement.children[0].style.height = '130px'
        this.parentElement.children[0].style.height = this.parentElement.clientHeight + 'px'
        this.appendChild(dragActive)
    }

    function dragDrop() {
        this.appendChild(dragActive)
    }
}

function randomColor() {    //return random color background by rgba()
    let val1 = Math.floor(Math.random() * 255)
    let val2 = Math.floor(Math.random() * 255)
    let val3 = Math.floor(Math.random() * 255)
    let val4 = Math.floor(Math.random() * 150)
    return `rgba(${val1},${val2},${val3},${val4})`
}