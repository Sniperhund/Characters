export const characterTemplate = (char) => `
<a href="/character.html?id=${char.id}">
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
        <img src="/assets/imgs/${char.images[0]}" alt="${char.name}" />
        <h2>${char.name}</h2>
    </article>
</a>
`;
export const characterInfoTemplate = (character) => `
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
</section>
`;
export const relationshipTemplate = (person) => `
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
</a>
`;
export const resideTemplate = (place) => `
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
export const swiperTemplate = (character) => {
    let imageString;
    if (character.images.length != 0) {
        imageString = character.images
            .map((url) => `<div class="swiper-slide"><img src="/assets/imgs/${url}" /></div>`)
            .join("");
    }
    else {
        imageString = `<div class="swiper-slide"><img src="/assets/imgs/common/No_image_available.webp" /></div>`;
    }
    return `
        <div class="swiper-wrapper">
            ${imageString}
        </div>

        <div class="swiper-pagination"></div>
    `;
};
