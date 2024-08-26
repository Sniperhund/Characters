var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { fetchCharacters } from "./fetch.js";
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
const characterContainer = document.querySelector("#characters");
const createCharacterCard = (char, i) => {
    if (!characterContainer || !char) {
        throw new Error("Something went wrong!");
    }
    const characterTemplate = (char, i) => `
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
    `;
    characterContainer.insertAdjacentHTML("beforeend", characterTemplate(char, i));
};
export function renderCharacterCards() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetchCharacters();
        if (response instanceof Error) {
            console.error(response.message);
            return;
        }
        response.forEach((character, i) => createCharacterCard(character, i));
    });
}
