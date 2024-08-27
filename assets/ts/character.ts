import type { Character } from "./util/types.js"
import { fetchCharacter } from "./util/fetch.js"
import { renderCharacterPage } from "./util/render.js"

const app: any = {}

app.init = async () => {
    const id: number = parseInt(new URLSearchParams(location.search).get("id")!)

    const character: Character = await fetchCharacter(id)

    renderCharacterPage(character)
}

app.init()
