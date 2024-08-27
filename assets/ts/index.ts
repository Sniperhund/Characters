/* Since it has to be ESM compliant I have to add .js after :( and typescript wont do it for me */
import { renderCharacterCards } from "./util/render.js"

const app: any = {}

app.init = async () => {
    renderCharacterCards()
}

app.init()
