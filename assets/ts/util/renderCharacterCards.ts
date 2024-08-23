import { fetchCharacters } from "./fetch.js"
import type { Character } from "./types.js"

/*
    <a href="/character.html?i=0">
        <article
            class="box-shadow"
            style="
                background-image: linear-gradient(
                        180deg,
                        rgba(0, 0, 0, 0) 80.5%,
                        rgba(0, 0, 0, 0.75) 95%
                    ),
                    url('/assets/imgs/Ellie/Ellie-1.webp');
            "
        >
            <h2>Ellie Williams</h2>
        </article>
    </a>
*/

const characterContainer: HTMLElement = document.querySelector("#characters")!

const createCharacterCard = (char: Character, i: number) => {
    if (!characterContainer || !char) {
        throw new Error("Something went wrong!")
    }

    const characterTemplate = (char: Character, i: number) => `
        <a href="/character.html?i=${i}">
            <article
                class="box-shadow"
                style="
                    background-image: linear-gradient(
                            180deg,
                            rgba(0, 0, 0, 0) 80.5%,
                            rgba(0, 0, 0, 0.75) 95%
                        ),
                        url('/assets/imgs/${char.images[0]}');
                "
            >
                <h2>${char.name}</h2>
            </article>
        </a>
    `

    characterContainer.insertAdjacentHTML(
        "beforeend",
        characterTemplate(char, i)
    )
}

export async function renderCharacterCards() {
    const response: Character[] = await fetchCharacters()

    if (response instanceof Error) {
        console.error(response.message)
        return
    }

    response.forEach((character, i) => createCharacterCard(character, i))
}
