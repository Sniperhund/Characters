/* Since it has to be ESM compliant I have to add .js after :( and typescript wont do it for me */
import { renderCharacterCards } from "./util/render.js"

const app: any = {}

app.init = async () => {
    renderCharacterCards()

    const characters: HTMLElement = document.querySelector("#characters")!

    const grid: HTMLElement = document.querySelector("#grid")!
    const list: HTMLElement = document.querySelector("#list")!

    grid.addEventListener("click", () => {
        characters.classList.remove("list")
        grid.classList.add("active")
        list.classList.remove("active")
    })

    list.addEventListener("click", () => {
        characters.classList.add("list")
        grid.classList.remove("active")
        list.classList.add("active")
    })
}

app.init()
