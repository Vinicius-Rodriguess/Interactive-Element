class MoveElement {
    constructor(elementToMove, functionToExecute) {
        this.elementToMove = elementToMove
        this.functionToExecute = functionToExecute
        this.moving = false
        this.mousePositionX = 0
        this.mousePositionY = 0
        this.newPositionX = this.elementToMove.getBoundingClientRect().x
        this.newPositionY = this.elementToMove.getBoundingClientRect().y
        this.counter = 0
        this.setCounter = null
        this.millisecondToAction = 50

        this.handleDesktopEvents()
        this.handleMobileEvents()
        this.resizeEvents()
        this.executeFunction()
    }

    handleDesktopEvents() {
        this.elementToMove.addEventListener("mousedown", e => {
            this.moving = true
            this.mousePositionX = e.offsetX
            this.mousePositionY = e.offsetY
            this.startCounter()
        })

        document.addEventListener("mousemove", e => {
            if (this.moving) {
                this.newPositionX = e.pageX - this.mousePositionX
                this.newPositionY = e.pageY - this.mousePositionY
                this.updateElementPosition()
            }
        })

        document.addEventListener("mouseup", () => {
            this.lastToutch()
        })

        document.addEventListener("mouseleave", () => {
            this.lastToutch()
        })
    }

    handleMobileEvents() {
        this.elementToMove.addEventListener("touchstart", e => {
            this.moving = true
            const eventTouch = e.touches[0]
            const rect = this.elementToMove.getBoundingClientRect()
            this.mousePositionX = eventTouch.clientX - rect.left
            this.mousePositionY = eventTouch.clientY - rect.top
            this.startCounter()
        })

        document.addEventListener("touchmove", e => {
            if (this.moving) {
                const eventTouch = e.touches[0]
                this.newPositionX = eventTouch.clientX - this.mousePositionX
                this.newPositionY = eventTouch.clientY - this.mousePositionY
                this.updateElementPosition()
            }
        })

        document.addEventListener("touchend", () => {
            this.lastToutch()
        })
    }

    lastToutch() {
        this.moving = false
        clearInterval(this.setCounter)
    }

    startCounter() {
        const oneMillisecond = 1
        this.setCounter = setInterval(() => {
            this.counter++
        }, oneMillisecond)
    }

    executeFunction() {
        this.elementToMove.addEventListener("click", () => {
            if (!this.moving && this.counter < this.millisecondToAction) {
                this.functionToExecute()
            }
            this.counter = 0
        })
    }

    resizeEvents() {
        window.addEventListener("resize", () => {
            this.updateElementPosition()
        })
    }

    updateElementPosition() {
        const windowWidth = window.innerWidth
        const windowHeight = window.innerHeight
        const elementWidth = this.elementToMove.offsetWidth
        const elementHeight = this.elementToMove.offsetHeight
        const borderLimit = 0

        if (
            this.newPositionX < borderLimit || 
            this.newPositionY < borderLimit ||
            this.newPositionX > windowWidth - elementWidth || 
            this.newPositionY > windowHeight - elementHeight
        ) {
            this.newPositionX = Math.max(borderLimit, Math.min(this.newPositionX, windowWidth - elementWidth))
            this.newPositionY = Math.max(borderLimit, Math.min(this.newPositionY, windowHeight - elementHeight))
        }

        this.elementToMove.style.top = `${this.newPositionY}px`
        this.elementToMove.style.left = `${this.newPositionX}px`
    }
}

const open = () => {
    alert("Ativado")
}

const element = document.querySelector(".element")
const moveElement = new MoveElement(element, open)