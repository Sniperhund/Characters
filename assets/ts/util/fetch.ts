import { type Character } from "./types.js"

export const fetchCharacters = async (): Promise<Character[]> => {
    const characters: Character[] = await fetch(
        "/assets/data/characters.json"
    ).then((response) => response.json())

    if (characters) return characters

    throw new Error("Failed to fetch characters")
}

export const fetchCharacter = async (i: number): Promise<Character> => {
    const characters = await fetchCharacters()

    if (characters[i]) return characters[i]

    throw new Error("Failed to fetch character")
}
