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
import { characterInfoTemplate, relationshipTemplate, resideTemplate, characterTemplate, swiperTemplate, } from "./templates.js";
// @ts-ignore
import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";
const characterContainer = document.querySelector("#characters");
const createCharacterCard = (char) => {
    if (!characterContainer || !char) {
        throw new Error("Something went wrong!");
    }
    characterContainer.insertAdjacentHTML("beforeend", characterTemplate(char));
};
export function renderCharacterCards() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetchCharacters();
        if (response instanceof Error) {
            console.error(response.message);
            return;
        }
        response.forEach((character) => createCharacterCard(character));
    });
}
export const renderCharacterPage = (character) => __awaiter(void 0, void 0, void 0, function* () {
    const imageCarousel = document.querySelector(".image");
    imageCarousel.innerHTML = swiperTemplate(character);
    new Swiper(".image", {
        loop: true,
        autoplay: {
            delay: 5000,
        },
        pagination: {
            el: ".swiper-pagination",
        },
    });
    const characterInfo = document.querySelector(".info");
    characterInfo.innerHTML = characterInfoTemplate(character);
    const releationshipContainer = document.querySelector("#releationships");
    character.relationship.forEach((person) => {
        releationshipContainer.innerHTML += relationshipTemplate(person);
    });
    const resideContainer = document.querySelector("#resides");
    character.resides.forEach((place) => {
        resideContainer.innerHTML += resideTemplate(place);
    });
});
