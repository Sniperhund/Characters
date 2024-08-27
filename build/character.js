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
    const id = parseInt(new URLSearchParams(location.search).get("id"));
    const character = yield fetchCharacter(id);
    const imageCarousel = document.querySelector(".image");
    let imageString;
    if (character.images.length != 0) {
        imageString = character.images
            .map((url) => `<div class="swiper-slide"><img src="/assets/imgs/${url}" /></div>`)
            .join("");
    }
    else {
        imageString = `<div class="swiper-slide"><img src="/assets/imgs/common/No_image_available.webp" /></div>`;
    }
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
    const characterInfo = document.querySelector(".info");
    characterInfo.innerHTML = `
        <div class="name">
            <h1>${character.name}</h1>
            <p>(${character.age ? `${character.age}` : ""}${character.age ? ", " : ""}${character.status.toLowerCase()})</p>
        </div>

        <p class="description">
            ${character.short_description}
        </p>

        <section>
            <h2>Relationships</h2>
            <article id="releationships"></article>
        </section>

        <section>
            <h2>Resides</h2>
            <article id="resides"></article>
        </section>`;
    console.log(characterInfo);
    const releationshipContainer = document.querySelector("#releationships");
    character.relationship.forEach((person) => {
        console.log(person.link);
        releationshipContainer.innerHTML += `
            <a href="${person.link != null ? `/character.html?id=${person.link}` : "#"}">
                <div
                    style="
                        background-image: linear-gradient(
                                180deg,
                                rgba(0, 0, 0, 0) 80.5%,
                                rgba(0, 0, 0, 0.75) 95%
                            ),
                            url('${person.image
            ? `/assets/imgs/${person.image}`
            : "/assets/imgs/common/No_image_available.webp"}');
                    "
                >
                    <h3>${person.name}</h3>
                    <p>(${person.relationship})</p>
                </div>
            </a>`;
    });
    const resideContainer = document.querySelector("#resides");
    character.resides.forEach((place) => {
        resideContainer.innerHTML += `
            <div
                style="
                    background-image: linear-gradient(
                            180deg,
                            rgba(0, 0, 0, 0) 80.5%,
                            rgba(0, 0, 0, 0.75) 95%
                        ),
                        url('${place.image
            ? `/assets/imgs/${place.image}`
            : "/assets/imgs/common/No_image_available.webp"}');
                "
            >
                <h3>${place.name}</h3>
                <p>(${place.status})</p>
            </div>
        `;
    });
});
app.init();
