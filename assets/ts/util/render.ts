import { fetchCharacters } from "./fetch.js"
import {
    characterInfoTemplate,
    relationshipTemplate,
    resideTemplate,
    characterTemplate,
    swiperTemplate,
} from "./templates.js"
import type { Character, Relationship, Reside } from "./types.js"
// @ts-ignore
import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs"

const characterContainer: HTMLElement = document.querySelector("#characters")!

const createCharacterCard = (char: Character) => {
    if (!characterContainer || !char) {
        throw new Error("Something went wrong!")
    }

    characterContainer.insertAdjacentHTML("beforeend", characterTemplate(char))
}

export async function renderCharacterCards() {
    const response: Character[] = await fetchCharacters()

    if (response instanceof Error) {
        console.error(response.message)
        return
    }

    response.forEach((character) => createCharacterCard(character))
}

export const renderCharacterPage = async (character: Character) => {
    const imageCarousel = document.querySelector(".image")!

    imageCarousel.innerHTML = swiperTemplate(character)

    new Swiper(".image", {
        loop: true,
        autoplay: {
            delay: 5000,
        },
        pagination: {
            el: ".swiper-pagination",
        },
    })

    const characterInfo: HTMLElement = document.querySelector(".info")!

    characterInfo.innerHTML = characterInfoTemplate(character)

    const releationshipContainer: HTMLElement =
        document.querySelector("#releationships")!

    character.relationship.forEach((person: Relationship) => {
        releationshipContainer.innerHTML += relationshipTemplate(person)
    })

    const resideContainer: HTMLElement = document.querySelector("#resides")!

    character.resides.forEach((place: Reside) => {
        resideContainer.innerHTML += resideTemplate(place)
    })
}
