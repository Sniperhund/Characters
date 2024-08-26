var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// @ts-ignore
import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";
import { fetchCharacter } from "./util/fetch.js";
const app = {};
app.init = () => __awaiter(void 0, void 0, void 0, function* () {
    const character = yield fetchCharacter(0);
    const imageCarousel = document.querySelector(".image");
    const imageString = character.images
        .map((url) => `<div class="swiper-slide"><img src="/assets/imgs/${url}" /></div>`)
        .join("");
    imageCarousel.innerHTML = `
        <div class="swiper-wrapper">
            ${imageString}
        </div>

        <div class="swiper-pagination"></div>
    `;
    const swiper = new Swiper(".image", {
        loop: true,
        autoplay: {
            delay: 5000,
        },
        pagination: {
            el: ".swiper-pagination",
        },
    });
});
app.init();
