import { fetchCharacters } from "./fetch.js"
import { characterTemplate } from "./templates.js"
import type { Character } from "./types.js"

const characterContainer: HTMLElement = document.querySelector("#characters")!

const createCharacterCard = (char: Character, id: number) => {
    if (!characterContainer || !char) {
        throw new Error("Something went wrong!")
    }

    characterContainer.insertAdjacentHTML(
        "beforeend",
        characterTemplate(char, id)
    )
}

export async function renderCharacterCards() {
    const response: Character[] = await fetchCharacters()

    if (response instanceof Error) {
        console.error(response.message)
        return
    }

    response.forEach((character) =>
        createCharacterCard(character, character.id)
    )
}
