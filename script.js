const button = document.querySelector("button")
const music = document.querySelector("audio")
const love = document.querySelector("#love")
const photograph = document.querySelector("#photograph")
const memory = document.querySelector("#memory")
const eyes = document.querySelector("#eyes")
const Close = document.querySelector("#close")
const heart = document.querySelector("#heart")
const never = document.querySelector("#never")
const times = document.querySelector("#times")
const keep = document.querySelector("#keep")
const pocket = document.querySelector("#pocket")
const jeans = document.querySelector("#jeans")
const hold = document.querySelector("#hold")
const meet = document.querySelector("#meet")
const wont = document.querySelector("#wont")
const alone = document.querySelector("#alone")

button.addEventListener("click", () => {
    button.classList.add("hidden")
    love.classList.remove("hidden")
    music.play()

    setTimeout(() => {
        love.classList.add("hidden")
        photograph.classList.remove("hidden")
    }, 3250)
    setTimeout(() => {
        photograph.classList.add("hidden")
        memory.classList.remove("hidden")
    }, 6000)
    setTimeout(() => {
        memory.classList.add("hidden")
        eyes.classList.remove("hidden")
    }, 10000)
    setTimeout(() => {
        eyes.classList.add("hidden")
        Close.classList.remove("hidden")
    }, 11000)
    setTimeout(() => {
        Close.classList.add("hidden")
        heart.classList.remove("hidden")
    }, 12500)
    setTimeout(() => {
        heart.classList.add("hidden")
        never.classList.remove("hidden")
    }, 13500)
    setTimeout(() => {
        never.classList.add("hidden")
        times.classList.remove("hidden")
    }, 14500)
    setTimeout(() => {
        times.classList.add("hidden")
        keep.classList.remove("hidden")
    }, 19000)
    setTimeout(() => {
        keep.classList.add("hidden")
        pocket.classList.remove("hidden")
    }, 21000)
    setTimeout(() => {
        pocket.classList.add("hidden")
        jeans.classList.remove("hidden")
    }, 23000)
    setTimeout(() => {
        jeans.classList.add("hidden")
        hold.classList.remove("hidden")
    }, 25500)
    setTimeout(() => {
        hold.classList.add("hidden")
        meet.classList.remove("hidden")
    }, 27250)
    setTimeout(() => {
        meet.classList.add("hidden")
        wont.classList.remove("hidden")
    }, 30000)
    setTimeout(() => {
        wont.classList.add("hidden")
        alone.classList.remove("hidden")
    }, 32000)
    setTimeout(() => {
        location.reload()
    }, 34000)
})