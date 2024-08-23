// @ts-ignore
import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs"
import type { Character } from "./util/types.js"
import { fetchCharacter } from "./util/fetch.js"

const app: any = {}

app.init = async () => {
    const character: Character = await fetchCharacter(0)

    const imageCarousel = document.querySelector(".image")!

    const imageString = character.images
        .map(
            (url) =>
                `<div class="swiper-slide"><img src="/assets/imgs/${url}" /></div>`
        )
        .join("")

    imageCarousel.innerHTML = `
        <div class="swiper-wrapper">
            ${imageString}
        </div>

        <div class="swiper-pagination"></div>
    `

    const swiper = new Swiper(".image", {
        loop: true,
        autoplay: {
            delay: 5000,
        },
        pagination: {
            el: ".swiper-pagination",
        },
    })
}

app.init()
